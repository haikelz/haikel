import { FieldDefs, defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeShikiji, { RehypeShikijiOptions } from "rehype-shikiji";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

const highlighterOptions: RehypeShikijiOptions = {
  /**
   * Set theme from shiki
   * @see https://github.com/shikijs/shiki/tree/main/packages/shiki/themes
   */
  theme: "poimandres",
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
    rehypePlugins: [rehypeSlug, [rehypeShikiji as any, highlighterOptions]],
    remarkPlugins: [remarkGfm],
  },
  contentDirPath: "./src/contents",
  documentTypes: [Notes, Works],
});
