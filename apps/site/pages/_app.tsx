import { theme } from "@amosbastian.com/site/theme";
import type { Page } from "@amosbastian.com/site/types";
import { Chakra, Head } from "@amosbastian.com/site/ui";
import { ChakraProvider } from "@chakra-ui/react";
import "focus-visible/dist/focus-visible";
import { AppProps } from "next/app";
import NextNprogress from "nextjs-progressbar";

type CustomAppProps = AppProps & {
  Component: Page<unknown>;
};

function CustomApp({ Component, pageProps }: CustomAppProps) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <Chakra cookies={pageProps.cookies}>
      <ChakraProvider theme={theme} resetCSS>
        <Head />
        <NextNprogress
          color={theme.colors.primary[500]}
          startPosition={0.3}
          stopDelayMs={200}
          height={2}
          showOnShallow={true}
          options={{ showSpinner: false }}
        />
        {getLayout(<Component {...pageProps} />)}
      </ChakraProvider>
    </Chakra>
  );
}

export default CustomApp;
