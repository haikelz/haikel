"use client";

import { useViews } from "~hooks";

export default function NoteViews({ slug }: { slug: string }) {
  useViews(slug);
  return null;
}
