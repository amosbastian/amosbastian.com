import { Feed } from "feed";
import fs from "fs";
import { FrontMatter } from "../types";

export const generateRSSFeed = (
  articles: {
    frontMatter: FrontMatter;
    content: string;
    slug: string;
  }[],
) => {
  const baseUrl = "https://amosbastian.com";

  const author = {
    name: "Amos Bastian",
    email: "amosbastian@gmail.com",
    link: "https://twitter.com/amosbastian",
  };

  const feed = new Feed({
    title: "Articles by Amos Bastian",
    description: "I don't know what kind of articles you will find here as I haven't written anything yet! :)",
    id: baseUrl,
    link: baseUrl,
    language: "en",
    feedLinks: {
      rss2: `${baseUrl}/rss.xml`,
    },
    author,
    copyright: "All rights reserved 2021, Amos Bastian",
  });

  articles.forEach((post) => {
    const {
      content,
      slug,
      frontMatter: { title, description, datePublished },
    } = post;

    const url = `${baseUrl}/blog/${slug}`;

    feed.addItem({
      title,
      id: url,
      link: url,
      description,
      content,
      author: [author],
      date: datePublished ? new Date(datePublished) : new Date(),
      published: datePublished ? new Date(datePublished) : new Date(),
    });
  });

  // Write the RSS output to a public file, making it
  // accessible at ashleemboyer.com/rss.xml
  fs.writeFileSync("public/rss.xml", feed.rss2());
};
