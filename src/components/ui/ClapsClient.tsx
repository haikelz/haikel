"use client";

import Claps from "@upstash/claps";
import "@upstash/claps/style.css";
import { block } from "million/react";

const ClapsClient = block(function ClapsClient() {
  return <Claps fixed="center" apiPath="/api/claps" />;
});

export default ClapsClient;
