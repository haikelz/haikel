import { cx } from "classix";
import { twMerge } from "tailwind-merge";

// A function that combine classix with tailwind merge
export const tw = (...classes: string[] | any) => twMerge(cx(...classes));
