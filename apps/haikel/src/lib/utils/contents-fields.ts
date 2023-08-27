import { FieldDefs } from "contentlayer/source-files";

export const notesFields: FieldDefs = {
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

export const worksFields: FieldDefs = {
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
