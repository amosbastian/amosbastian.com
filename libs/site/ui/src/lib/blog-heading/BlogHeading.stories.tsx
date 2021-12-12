import { Meta, Story } from "@storybook/react";
import { BlogHeading, BlogHeadingProps } from "./BlogHeading";

export default {
  component: BlogHeading,
  title: "BlogHeading",
} as Meta;

const Template: Story<BlogHeadingProps> = (args) => <BlogHeading {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  frontMatter: {
    title: "Post with text",
    seoTitle: "Post with text",
    category: "Category 1",
    description: "This is a great post with some great text.",
    datePublished: "2021-08-29T21:08:46.973Z",
    dateModified: "2021-08-29T21:08:46.973Z",
    author: { name: "Amos Bastian", image: "/author.jpeg" },
    readingTime: { text: "2 min read", minutes: 1.63, time: 97800, words: 326 },
  },
};
