import { IconClassNameProps } from "~models";

export const HomeIcon = ({ className }: IconClassNameProps) => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      className={className}
      height="28"
      width="28"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path d="M12 3L4 9v12h5v-7h6v7h5V9z"></path>
    </svg>
  );
};
