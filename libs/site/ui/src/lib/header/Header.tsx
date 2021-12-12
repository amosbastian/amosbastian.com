import {
  Flex,
  HStack,
  Icon,
  IconButton,
  ListItem,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  StackDivider,
  useColorModeValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import * as React from "react";
import { RiCloseFill, RiMenuFill } from "react-icons/ri";
import { ChangeTheme } from "../change-theme/ChangeTheme";
import { Container } from "../container/Container";
import { Link } from "../link/Link";

const DESKTOP_NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/projects", label: "Projects" },
];

const MOBILE_NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/projects", label: "Projects" },
];

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
    <Flex as="nav" h={16} zIndex={1} position="sticky" top={0} w="100%" bg={bg}>
      <Container display="flex" justifyContent="space-between" alignItems="center" h={16} w="100%">
        <IconButton
          data-testid="menu-button"
          display={{ base: "flex", md: "none" }}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          variant="ghost"
          onClick={onOpen}
        >
          <Icon as={isOpen ? RiCloseFill : RiMenuFill} />
        </IconButton>
        <HStack spacing={8} display={{ base: "none", md: "flex" }} alignItems="baseline">
          {DESKTOP_NAV_LINKS.map(({ href, label }) => (
            <HeaderLink key={label} href={href}>
              {label}
            </HeaderLink>
          ))}
        </HStack>
        <ChangeTheme />
      </Container>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay background="transparent" />
        <ModalContent overflow="hidden" boxShadow="none" bg={bg} height="calc(100vh - 64px)" mt={16} mb={0}>
          <ModalBody px={4} py={6}>
            <VStack as="ul" spacing={4} divider={<StackDivider />} align="flex-start">
              {MOBILE_NAV_LINKS.map(({ href, label }) => (
                <ListItem key={label} listStyleType="none">
                  <HeaderLink href={href} onClick={onClose}>
                    {label}
                  </HeaderLink>
                </ListItem>
              ))}
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  );
}

export default Header;
