import type { SystemStyleObject } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

type Dict = Record<string, any>;

const baseStyle = (props: Dict): SystemStyleObject => ({
  bg: mode("white", "whiteAlpha.100")(props),
  borderWidth: mode("1px", "0px")(props),
  borderColor: mode("gray.50", "whiteAlpha.200")(props),
  borderStyle: mode("solid", "solid")(props),
  boxShadow: mode("sm", "md")(props),
  overflow: "hidden",
  borderRadius: "md",
});

export const Card = {
  baseStyle,
};
