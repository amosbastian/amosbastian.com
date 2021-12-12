import { configuration } from "@amosbastian.com/site/configuration";
import { Box, Grid, List, ListItem, useColorModeValue } from "@chakra-ui/react";
import { Link } from "../link/Link";

type NavItem = { href: string; label: string; isExternal?: boolean }[];

const FooterList = ({ navItem }: { navItem: NavItem }) => {
  const colour = useColorModeValue("gray.600", "whiteAlpha.700");
  const hoverColour = useColorModeValue("primary.600", "primary.200");

  return (
    <List spacing={5}>
      {navItem.map(({ label, href, isExternal }, index) => (
        <ListItem key={label}>
          <Link
            href={href}
            fontSize="md"
            fontWeight="normal"
            color={colour}
            _hover={{ color: hoverColour }}
            isExternal={isExternal}
          >
            {label}
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

const NAV_ITEMS: NavItem[] = [
  [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
  ],
  [
    { href: configuration.GITHUB_URL, label: "GitHub", isExternal: true },
    { href: configuration.TWITTER_URL, label: "Twitter", isExternal: true },
    { href: configuration.LINKED_IN_URL, label: "LinkedIn", isExternal: true },
    { href: configuration.INSTAGRAM_URL, label: "Instagram", isExternal: true },
  ],
];

/* eslint-disable-next-line */
export interface FooterProps {}

export function Footer(props: FooterProps) {
  const backgroundColor = useColorModeValue("white", "gray.900");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  return (
    <Box as="footer" backgroundColor={backgroundColor} borderTop="1px solid" borderTopColor={borderColor} {...props}>
      <Grid
        templateColumns={{ base: "1fr", lg: "2fr 1fr" }}
        px={{ base: 6, lg: 8 }}
        py={8}
        maxW="container.md"
        m="0 auto"
        gap={{ base: 6, lg: 12 }}
      >
        <Grid
          templateColumns={{
            base: "repeat(2, max-content)",
            md: "repeat(3, max-content)",
          }}
          rowGap={{ base: 6, lg: 12 }}
          columnGap={{ base: 6, lg: 32 }}
        >
          {NAV_ITEMS.map((navItem, index) => {
            return <FooterList key={index} navItem={navItem} />;
          })}
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
