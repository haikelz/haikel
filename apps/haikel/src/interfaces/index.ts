import { ReactNode } from "react";

export interface GuestbookProps {
  id: string;
  created_at: string;
  email: string;
  username: string;
  message: string;
}

export interface IconClassNameProps {
  className?: string;
}

export interface ThemeProps {
  theme: string;
  changeTheme: () => void;
}

export interface ChildrenProps {
  children: ReactNode;
}
