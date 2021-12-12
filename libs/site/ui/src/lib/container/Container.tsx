import type { BoxProps } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

export type ContainerProps = BoxProps;

export const Container = (props: ContainerProps) => (
  <Box maxW="container.md" px={{ base: 4, md: 8 }} mx="auto" {...props} />
);
