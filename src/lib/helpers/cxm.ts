import { cx } from "classix";
import { twMerge } from "tailwind-merge";

export const cxm = (...classes: string[] | any) => twMerge(cx(...classes));
