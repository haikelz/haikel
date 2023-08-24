import { FieldDefs, defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypePrettyCode, { Options } from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

const highlighterOptions: Options = {
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

const notesFields: FieldDefs = {
  author: {
    type: "string",
    description: "Author's name of the note",
    required: true,
  },
  title: {
    type: "string",
    description: "Title of the note",
    required: true,
  },
  tags: {
    type: "list",
    of: { type: "string" },
    description: "Tags of the note",
    required: true,
  },
  date: {
    type: "date",
    description: "Date of the note",
    required: true,
  },
  description: {
    type: "string",
    description: "Description of the note",
    required: true,
  },
};

const worksFields: FieldDefs = {
  id: {
    type: "number",
    description: "Id of the work",
    required: true,
  },
  author: {
    type: "string",
    description: "Author of the work",
    required: true,
  },
  title: {
    type: "string",
    description: "Title of the work",
    required: true,
  },
  stack: {
    type: "list",
    of: {
      type: "string",
    },
    description: "Stack of the work",
    required: true,
  },
  description: {
    type: "string",
    description: "Description of the work",
    required: true,
  },
  preview: {
    type: "string",
    description: "Preview of the work",
  },
  repo: {
    type: "string",
    description: "Repo of the work",
  },
};

const Notes = defineDocumentType(() => ({
  name: "Notes",
  filePathPattern: `notes/**/*.mdx`,
  contentType: "mdx",
  fields: notesFields,
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath,
    },
  },
}));

const Works = defineDocumentType(() => ({
  name: "Works",
  filePathPattern: `works/**/*.mdx`,
  contentType: "mdx",
  fields: worksFields,
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath,
    },
  },
}));

export default makeSource({
  mdx: {
    rehypePlugins: [rehypeSlug, [rehypePrettyCode, highlighterOptions]],
    remarkPlugins: [remarkGfm],
  },
  contentDirPath: "./src/contents",
  documentTypes: [Notes, Works],
});
