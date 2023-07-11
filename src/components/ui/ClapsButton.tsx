"use client";

import Claps from "@upstash/claps";
import "@upstash/claps/style.css";
import { block } from "million/react";

const ClapsButton = block(function ClapsButton() {
  return <Claps fixed="center" apiPath="/api/claps" />;
});

export default ClapsButton;
