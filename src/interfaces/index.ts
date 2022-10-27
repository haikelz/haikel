import { ReactNode } from "react";

export interface Theme {
  theme?: string;
  changeTheme?: () => void;
}

export interface LinkIcon {
  link?: string;
  linkPreview?: string;
  linkGithub?: string;
}

export interface Stack {
  stack1?: string;
  stack2?: string;
}

export interface Children {
  children?: ReactNode[] | JSX.Element;
}

export interface Loading {
  isLoading?: boolean;
  loadingProcess?: () => void;
}

export interface List {
  setLoading: (loading: boolean) => void;
  isLoading: boolean;
}

export interface Keydown {
  isCtrlKey: boolean;
  previousUrl: string;
  nextUrl: string;
}

export interface KeydownEvent {
  ctrlKey: boolean;
  key: string;
}

export interface ShowedModal {
  isShowed: boolean;
  setIsShowed: (showed: boolean) => void;
}
