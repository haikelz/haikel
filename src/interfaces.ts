import { ReactNode } from "react";

export interface Components {
    theme?: string;
    changeTheme?: () => void;
    link?: string;
    linkPreview?: string;
    linkGithub?: string;
    stack1?: string;
    stack2?: string;
    children?: ReactNode[] | JSX.Element;
    isLoading?: boolean;
    loadingProcess?: () => void;
}

export interface List {
    setLoading: (loading: boolean) => void;
    isLoading: boolean;
}