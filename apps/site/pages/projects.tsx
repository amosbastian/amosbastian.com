import { getLayout } from "@amosbastian.com/site/ui";
import { NextSeo } from "next-seo";

export function Projects() {
  return (
    <>
      <NextSeo title="Projects" description="Some projects I have worked on or am still working on." />
    </>
  );
}

Projects.getLayout = getLayout;

export default Projects;
