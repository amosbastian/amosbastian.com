import { bundleMDX } from "mdx-bundler";

export const getBundledMDX = async (content: string) => {
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
