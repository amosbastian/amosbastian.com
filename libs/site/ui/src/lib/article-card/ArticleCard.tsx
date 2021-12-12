import type { FrontMatter } from "@amosbastian.com/markdown";
import type { LinkBoxProps } from "@chakra-ui/react";
import { Badge, Box, Flex, Heading, HStack, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import NextLink from "next/link";
import Image from "../image/Image";

dayjs.extend(relativeTime);

export interface ArticleCardProps extends LinkBoxProps {
  frontMatter: FrontMatter;
  slug: string;
}

export function ArticleCard({ frontMatter, slug, ...rest }: ArticleCardProps) {
  return (
    <LinkBox as="article" {...rest}>
      <Badge mb={4}>{frontMatter.category}</Badge>
      <NextLink href={`/blog/${slug}`} passHref>
        <LinkOverlay>
          <Heading as="h2" size="md" mb={4}>
            {frontMatter.title}
          </Heading>
        </LinkOverlay>
      </NextLink>
      <Text variant="secondary" noOfLines={3} fontSize="md" mb={6} maxW="sm">
        {frontMatter.description}
      </Text>
      <Flex alignItems="center">
        <Image h={10} w={10} borderRadius="50%" src={frontMatter.author.image} alt="" />
        <Box ml={4}>
          {frontMatter.author.name}
          <HStack spacing={1}>
            <Text variant="secondary" as="time" dateTime={frontMatter.datePublished}>
              <time dateTime={frontMatter.datePublished}>{dayjs(frontMatter.datePublished).fromNow()}</time>
            </Text>
            <Text variant="secondary" as="span">
              &middot;
            </Text>
            <Text variant="secondary">{`${Math.ceil(frontMatter.readingTime.minutes)} min read`}</Text>
          </HStack>
        </Box>
      </Flex>
    </LinkBox>
  );
}

export default ArticleCard;
