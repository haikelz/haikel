"use client";

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import dynamic from "next/dynamic";

const LightboxImage = dynamic(() => import("~ui/images/LightboxImage"));
const Video = dynamic(() => import("~ui/Video"));

type SourceProps = {
  source: MDXRemoteSerializeResult<Record<string, unknown>, Record<string, unknown>>;
};

export default function MDXComponents({ source }: SourceProps) {
  return <MDXRemote {...source} components={{ Video, LightboxImage }} />;
}
