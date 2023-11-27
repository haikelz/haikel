import { ReactNode } from "react";

export type GuestbookProps = {
  id: string;
  created_at: string;
  email: string;
  username: string;
  message: string;
};

export type ThemeProps = {
  theme: string;
  changeTheme: () => void;
};

export type ChildrenProps = {
  children: ReactNode;
};
