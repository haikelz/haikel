export const UnderlineSpan = ({ children, ...props }: { children: string }) => {
  return (
    <span
      className="cursor-pointer font-bold decoration-2 underline underline-offset-[3px] hover:text-texthover"
      {...props}
    >
      {children}
    </span>
  );
};
