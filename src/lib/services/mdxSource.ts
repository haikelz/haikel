import { serialize } from "next-mdx-remote/serialize";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

const highlighterOptions = {
  /**
   * Set theme from shiki
   * @see: https://github.com/shikijs/shiki/tree/main/packages/shiki/themes
   */
  theme: "github-dark",

  onVisitLine(node: { children: { length: number } }) {
    if (node.children.length === 0) node.children = [{ type: "text", value: " " }];
  },

  onVisitHighlightedLine(node: any) {
    node.properties.className.push("highlighted");
  },

  onVisitHighlightedWord(node: any, id: string) {
    if (id) {
      const backgroundColor = {
        v: "rgb(0 103 163 / 56%)",
      }[id];

      const color = {
        v: "rgb(175 255 255 / 100%)",
      }[id];

      if (node.properties["data-rehype-pretty-code-wrapper"]) {
        node.children.forEach((childNode: { properties: { style: string } }) => {
          childNode.properties.style = "";
        });
      }
      node.properties.style = `background-color: ${backgroundColor}; color: ${color};`;
    }
    node.properties.className = ["word"];
  },
};

export function mdxSource(content: string) {
  return serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: "wrap" }],
        [rehypePrettyCode, highlighterOptions],
      ],
      remarkPlugins: [remarkGfm],
    },
  });
}
