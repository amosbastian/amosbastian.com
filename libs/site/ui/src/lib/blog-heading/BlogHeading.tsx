import type { FrontMatter } from "@amosbastian.com/markdown";
import { Box, Badge, Flex, Heading, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { RiArrowLeftLine } from "react-icons/ri";
import { Image } from "../image/Image";
import { Link } from "../link/Link";

dayjs.extend(relativeTime);

export interface BlogHeadingProps {
  frontMatter: FrontMatter;
}

export function BlogHeading({ frontMatter }: BlogHeadingProps) {
  const colour = useColorModeValue("gray.600", "whiteAlpha.700");
  const hoverColour = useColorModeValue("primary.600", "primary.200");

  console.log(frontMatter.author);

  return (
    <Box mb={8}>
      <Link href="/blog" display="flex" alignItems="center" mb={4} color={colour} _hover={{ color: hoverColour }}>
        <Icon as={RiArrowLeftLine} mr={2} />
        Back
      </Link>
      <Heading as="h1" size="2xl" mb={8}>
        {frontMatter.title}
      </Heading>
      <Flex flexDirection="row" justifyContent="space-between" alignItems="center">
        <Flex alignItems="center">
          <Image h={6} w={6} src={`/blog${frontMatter.author.image}`} alt="" borderRadius="50%" mr={2} />
          <Text lineHeight={1} isTruncated>
            {frontMatter.author.name} /{" "}
            <time dateTime={frontMatter.datePublished}>{dayjs(frontMatter.datePublished).fromNow()}</time>
          </Text>
        </Flex>
        <Text variant="secondary" lineHeight={1}>
          {frontMatter.readingTime.text}
        </Text>
      </Flex>
      {frontMatter.dateModified ? (
        <Badge mt={4}>{`Last updated ${dayjs(frontMatter.dateModified).fromNow()}`}</Badge>
      ) : null}
    </Box>
  );
}

export default Heading;
