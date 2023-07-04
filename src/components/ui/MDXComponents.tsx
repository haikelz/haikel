import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeAutolinkHeadings from "rehype-autolink-headings/lib";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import LightboxImage from "~ui/images/LightboxImage";
import Video from "./Video";

const highlighterOptions = {
  /**
   * Set theme from shiki
   * @see https://github.com/shikijs/shiki/tree/main/packages/shiki/themes
   */
  theme: "github-dark",

  onVisitLine(node: { children: { length: number } }) {
    if (node.children.length === 0) node.children = [{ type: "text", value: " " }];
  },

  onVisitHighlightedLine(node: { properties: { className: Array<string> } }) {
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

/**
 * MDX Remote server component
 * @see https://github.com/hashicorp/next-mdx-remote#react-server-components-rsc--nextjs-app-directory-support
 */
export default function MDXComponents(content: string) {
  return MDXRemote({
    source: content,
    options: {
      mdxOptions: {
        rehypePlugins: [
          rehypeSlug,
          [rehypeAutolinkHeadings, { behavior: "wrap" }],
          [rehypePrettyCode, highlighterOptions],
        ],
        remarkPlugins: [remarkGfm],
      },
    },
    components: { Video, LightboxImage },
  });
}
