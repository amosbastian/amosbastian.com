import { getPublishedArticles } from "@amosbastian.com/markdown";
import { ArticleCard, Container, getLayout } from "@amosbastian.com/site/ui";
import { Grid, Heading } from "@chakra-ui/react";
import { InferGetStaticPropsType } from "next";
import { NextSeo } from "next-seo";

export const getStaticProps = async () => {
  const publishedArticles = getPublishedArticles();

  return {
    props: {
      articles: publishedArticles,
    },
  };
};

export function Blog({ articles }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <NextSeo title="Blog" />
      <Container py={16}>
        <Heading as="h1" size="2xl" mb={16}>
          Blog
        </Heading>
        <Grid rowGap={{ base: 4, lg: 12 }}>
          {articles.map((article) => (
            <ArticleCard key={article.slug} frontMatter={article.frontMatter} slug={article.slug} />
          ))}
        </Grid>
      </Container>
    </>
  );
}

Blog.getLayout = getLayout;

export default Blog;
