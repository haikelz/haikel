// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
var highlighterOptions = {
  /**
   * Set theme from shiki
   * @see https://github.com/shikijs/shiki/tree/main/packages/shiki/themes
   */
  theme: "github-dark",
  onVisitLine(node) {
    if (node.children.length === 0)
      node.children = [{ type: "text", value: " " }];
  },
  onVisitHighlightedLine(node) {
    node.properties.className.push("highlighted");
  },
  onVisitHighlightedWord(node, id) {
    if (id) {
      const backgroundColor = {
        v: "rgb(0 103 163 / 56%)"
      }[id];
      const color = {
        v: "rgb(175 255 255 / 100%)"
      }[id];
      if (node.properties["data-rehype-pretty-code-wrapper"]) {
        node.children.forEach((childNode) => {
          childNode.properties.style = "";
        });
      }
      node.properties.style = `background-color: ${backgroundColor}; color: ${color};`;
    }
    node.properties.className = ["word"];
  }
};
var notesFields = {
  author: {
    type: "string",
    description: "Author's name of the note",
    required: true
  },
  title: {
    type: "string",
    description: "Title of the note",
    required: true
  },
  tags: {
    type: "list",
    of: { type: "string" },
    description: "Tags of the note",
    required: true
  },
  date: {
    type: "date",
    description: "Date of the note",
    required: true
  },
  description: {
    type: "string",
    description: "Description of the note",
    required: true
  }
};
var worksFields = {
  id: {
    type: "number",
    description: "Id of the work",
    required: true
  },
  author: {
    type: "string",
    description: "Author of the work",
    required: true
  },
  title: {
    type: "string",
    description: "Title of the work",
    required: true
  },
  stack: {
    type: "list",
    of: {
      type: "string"
    },
    description: "Stack of the work",
    required: true
  },
  description: {
    type: "string",
    description: "Description of the work",
    required: true
  },
  preview: {
    type: "string",
    description: "Preview of the work"
  },
  repo: {
    type: "string",
    description: "Repo of the work"
  }
};
var Notes = defineDocumentType(() => ({
  name: "Notes",
  filePathPattern: `notes/**/*.mdx`,
  contentType: "mdx",
  fields: notesFields,
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath
    }
  }
}));
var Works = defineDocumentType(() => ({
  name: "Works",
  filePathPattern: `works/**/*.mdx`,
  contentType: "mdx",
  fields: worksFields,
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath
    }
  }
}));
var contentlayer_config_default = makeSource({
  mdx: {
    rehypePlugins: [rehypeSlug, [rehypePrettyCode, highlighterOptions]],
    remarkPlugins: [remarkGfm]
  },
  contentDirPath: "./src/contents",
  documentTypes: [Notes, Works]
});
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-22FXHA3E.mjs.map
