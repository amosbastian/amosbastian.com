import { Link } from "@amosbastian.com/site/ui";
import { Heading, HeadingProps, Text, TextProps, useColorModeValue } from "@chakra-ui/react";

interface CustomLinkProps {
  children: any;
  href?: string;
}

const CustomLink = ({ children, href }: CustomLinkProps) => {
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));
  const color = useColorModeValue("primary.500", "primary.200");
  const hoverColor = useColorModeValue("primary.600", "primary.100");

  if (!href) {
    return children;
  }

  return (
    <Link color={color} _hover={{ color: hoverColor }} href={href} isExternal={!isInternalLink}>
      {children}
    </Link>
  );
};

const CustomP = ({ children, ...rest }: TextProps) => {
  const colour = useColorModeValue("gray.700", "gray.400");

  return (
    <Text as="p" color={colour} fontSize="lg" my="2.25em" lineHeight="calc(1em + 0.625rem)" {...rest}>
      {children}
    </Text>
  );
};

const CustomStrong = ({ children }: TextProps) => {
  const colour = useColorModeValue("gray.900", "gray.200");

  return (
    <CustomP as="strong" fontWeight="semibold" color={colour}>
      {children}
    </CustomP>
  );
};

export const mdxComponents = {
  a: CustomLink,
  h1: ({ children }: HeadingProps) => (
    <Heading as="h1" size="2xl" mb="1em">
      {children}
    </Heading>
  ),
  h2: ({ children }: HeadingProps) => (
    <Heading as="h2" size="md" mb="1em" mt="2em">
      {children}
    </Heading>
  ),
  h3: ({ children }: HeadingProps) => (
    <Heading as="h3" size="sm" mb="1em" mt="2em">
      {children}
    </Heading>
  ),
  p: CustomP,
  strong: CustomStrong,
};
