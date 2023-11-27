import { cx } from "classix";
import { twMerge } from "tailwind-merge";

/**
 * A function that combine classix with tailwind merge
 *
 * @param {string[] | any} classes className
 * @returns {string} class
 */
export const tw = (...classes: string[] | any) => twMerge(cx(...classes));
