import { Flex, HStack, Icon, IconButton, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import { useRouter } from "next/router";
import * as React from "react";
import { RiMenuFill } from "react-icons/ri";
import { ChangeTheme } from "../change-theme/ChangeTheme";
import { Container } from "../container/Container";
import { Link } from "../link/Link";

interface HeaderLinkProps {
  children: React.ReactNode;
  href: string;
  onClick?: () => void;
}

const HeaderLink = ({ children, href, onClick }: HeaderLinkProps) => {
  const { asPath } = useRouter();

  const isActive = asPath === href;

  const colour = useColorModeValue("gray.600", "whiteAlpha.700");
  const activeColour = useColorModeValue("gray.900", "whiteAlpha.900");

  return (
    <Link
      fontSize="md"
      color={isActive ? activeColour : colour}
      _hover={{ color: activeColour }}
      href={href}
      onClick={onClick}
      fontWeight="semibold"
    >
      {children}
    </Link>
  );
};

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface HeaderProps {}

export function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const bg = useColorModeValue("white", "gray.900");

  return (
    <Flex
      as="nav"
      h={16}
      zIndex={1}
      position="sticky"
      top={0}
      w="100%"
      bg={bg}
      backdropFilter="saturate(180%) blur(20px)"
    >
      <Container display="flex" justifyContent="space-between" alignItems="center" h={16} w="100%">
        <IconButton
          data-testid="menu-button"
          display={{ base: "flex", md: "none" }}
          aria-label="Open menu"
          variant="ghost"
          onClick={onOpen}
        >
          <Icon as={RiMenuFill} />
        </IconButton>
        <HStack spacing={8} display={{ base: "none", md: "flex" }} alignItems="baseline">
          <HeaderLink href="/">Home</HeaderLink>
          <HeaderLink href="/blog">Blog</HeaderLink>
        </HStack>
        <ChangeTheme />
      </Container>
    </Flex>
  );
}

export default Header;
