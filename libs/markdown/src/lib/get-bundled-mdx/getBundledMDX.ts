import { bundleMDX } from "mdx-bundler";
import { FrontMatter } from "../types";

export const getBundledMDX = async (content: string): Promise<{ frontmatter: FrontMatter; code: string }> => {
  const remarkPlugins: any[] = [];
  const rehypePlugins: any[] = [];

  return await bundleMDX({
    source: content,
    xdmOptions(options) {
      options.remarkPlugins = [...(options.remarkPlugins ?? []), ...remarkPlugins];
      options.rehypePlugins = [...(options.rehypePlugins ?? []), ...rehypePlugins];

      return options;
    },
  });
};
