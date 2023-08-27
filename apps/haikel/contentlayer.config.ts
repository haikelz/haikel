import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeShikiji, { RehypeShikijiOptions } from "rehype-shikiji";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { notesFields, worksFields } from "~lib/utils/contents-fields";

const highlighterOptions: RehypeShikijiOptions = {
  theme: "poimandres",
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
