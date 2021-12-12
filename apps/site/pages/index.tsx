import { Container, getLayout } from "@amosbastian.com/site/ui";
import { Heading } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

export function Index() {
  return (
    <Container py={{ base: 8, md: 16 }}>
      <NextSeo title="Amos Bastian - Fullstack Developer" />
      <Heading as="h1" size="2xl" mb={8}>
        Hi, I&#39;m Amos
      </Heading>
      <Heading variant="secondary" as="h2" fontSize={{ base: "md", md: "2xl" }}>
        This website is WIP, please come back later!
      </Heading>
    </Container>
  );
}

Index.getLayout = getLayout;

export default Index;
