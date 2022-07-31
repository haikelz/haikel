import { loadingAtom } from "../store";

export const setIsLoading = () => {
    return !loadingAtom;
};