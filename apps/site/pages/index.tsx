import { getLayout } from "@amosbastian.com/site/ui";
import { NextSeo } from "next-seo";
import React from "react";

export function Index() {
  return (
    <>
      <NextSeo title="Amos Bastian - Fullstack Developer" />
    </>
  );
}

Index.getLayout = getLayout;

export default Index;
