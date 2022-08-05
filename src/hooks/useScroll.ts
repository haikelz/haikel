import { useEffect } from "react";
import { useAtom } from "jotai";
import { scrollAtom } from "../store";

type HandleScroll = () => void;

export const useScroll = () => {
    const [scroll, setScroll] = useAtom(scrollAtom);

    const handleScroll: HandleScroll = () => {
        const position = window.pageYOffset;
        setScroll(position);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scroll]);

    return [scroll, setScroll] as const;
}