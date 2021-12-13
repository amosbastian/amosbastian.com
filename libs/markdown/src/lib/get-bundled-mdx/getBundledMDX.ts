import { bundleMDX } from "mdx-bundler";
import { join } from "path";

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
    cwd: join(process.cwd(), "libs/site/mdx/src/lib"),
  });
};
