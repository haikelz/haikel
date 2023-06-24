"use client";

import Claps from "@upstash/claps";
import "@upstash/claps/style.css";

export default function ClapsClient() {
  return <Claps fixed="center" apiPath="/api/claps" />;
}
