import type { IconButtonProps } from "@chakra-ui/react";
import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { RiMoonFill, RiSunFill } from "react-icons/ri";

export type ChangeThemeProps = Omit<IconButtonProps, "aria-label">;

export function ChangeTheme(props: ChangeThemeProps) {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(RiMoonFill, RiSunFill);
  const nextMode = useColorModeValue("dark", "light");

  return (
    <IconButton
      size="md"
      fontSize="lg"
      aria-label={`Switch to ${nextMode} mode`}
      color="current"
      colorScheme="gray"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      {...props}
    />
  );
}

export default ChangeTheme;
