import { getLayout } from "@amosbastian.com/site/ui";
import { NextSeo } from "next-seo";

export function Index() {
  return (
    <>
      <NextSeo title="Amos Bastian - Fullstack Developer" />
    </>
  );
}

Index.getLayout = getLayout;

export default Index;
