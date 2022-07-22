export const headerAnimation = {
    transition: { delay: 0.8 },
    initial: { opacity: 0, y: -100 },
    animate: { opacity: 1, y: 0 },
}

export const appAnimation = {
    transition: { duration: 0.5 },
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
}