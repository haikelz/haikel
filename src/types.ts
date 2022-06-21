import { ReactNode } from "react";

export interface components {
    theme?: string,
    changeTheme?: () => void,
    link?: any,
    linkPreview?: string,
    linkGithub?: string,
    stack1?: string,
    stack2?: string,
    children?: ReactNode[] | JSX.Element,
    isLoading?: boolean,
    loadingProsess?: () => void,
}

export interface list {
    setLoading: (loading: boolean) => void,
    isLoading: boolean,
}