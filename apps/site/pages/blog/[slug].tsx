import { getBundledMDX, getParsedFileContentBySlug, getPublishedArticles } from "@amosbastian.com/markdown";
import { configuration } from "@amosbastian.com/site/configuration";
import { mdxComponents } from "@amosbastian.com/site/mdx";
import { BlogHeading, Container, getLayout } from "@amosbastian.com/site/ui";
import { getMDXComponent } from "mdx-bundler/client";
import type { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { ArticleJsonLd, NextSeo } from "next-seo";
import { join } from "path";
import * as React from "react";

const ARTICLES_PATH = join(process.cwd(), process.env.ARTICLES_MARKDOWN_PATH ?? "articles");

export const getStaticPaths: GetStaticPaths = async () => {
  const publishedArticles = getPublishedArticles();

  const paths = publishedArticles.map((article) => ({ params: { slug: article.slug } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const { content, frontMatter } = getParsedFileContentBySlug(params.slug as string, ARTICLES_PATH);
  const { code } = await getBundledMDX(content);

  return {
    props: {
      frontMatter: { ...frontMatter, slug: params.slug },
      code,
    },
  };
};

export function Page({ code, frontMatter }: InferGetStaticPropsType<typeof getStaticProps>) {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);

  return (
    <Container maxW="container.md" py={{ base: 8, md: 16 }}>
      <ArticleJsonLd
        url={`${configuration.BASE_URL_SITE}/blog/${frontMatter.slug}`}
        title={frontMatter.title}
        images={[`${configuration.BASE_URL_SITE}/blog/${frontMatter.slug}.png`]}
        datePublished={frontMatter.datePublished}
        dateModified={frontMatter.dateModified}
        authorName={[frontMatter.author.name]}
        publisherName={configuration.BRAND_NAME}
        publisherLogo={`${configuration.BASE_URL_SITE}/logo.png`}
        description={frontMatter.description}
      />
      <NextSeo title={frontMatter.title} description={frontMatter.description} />
      <article>
        <BlogHeading frontMatter={frontMatter} />
        <Component components={mdxComponents} />
      </article>
    </Container>
  );
}

Page.getLayout = getLayout;

export default Page;
