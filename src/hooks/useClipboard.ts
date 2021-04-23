import { useEffect, useState, useCallback } from "react";
import copy from "copy-to-clipboard";

export const useClipboard = (text: string, duration = 2000): [boolean, () => void] => {
    const [isCopied, setIsCopied] = useState(false);

    const resetCopied = useCallback(() => {
        setIsCopied(false);
    }, []);

    const copyText = useCallback(() => {
        setIsCopied(copy(text));
    }, [text]);

    useEffect(() => {
        const timer = setTimeout(() => {
            isCopied && resetCopied();
        }, duration);
        return () => {
            clearTimeout(timer);
        };
    }, [isCopied, duration, resetCopied]);

    return [isCopied, copyText];
};
