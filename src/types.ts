import { ReactNode } from "react";

export interface components {
    theme?: any,
    changeTheme?: any,
    link?: any,
    linkPreview?: string,
    linkGithub?: string,
    stack1?: string,
    stack2?: string,
    children?: ReactNode[] | JSX.Element,
    isLoading?: any,
    loadingProsess?: any,
}

export interface list {
    setLoading: (loading: boolean) => void,
    isLoading: boolean,
}