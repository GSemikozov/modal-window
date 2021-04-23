import React, { memo, ReactNode, useCallback } from "react";
import { useClipboard } from "@hooks/useClipboard";

import { Button, ButtonProps } from "@components/Atoms/Button/Button";
import { Tooltip } from "reactstrap";

export type CopyButtonProps = {
    text: string;
    tooltipTargetId: string;
    tooltipMessage: string;
    tooltipSize?: "sm" | "md" | "lg";
    size?: ButtonProps["size"];
    className?: string;
    tooltipContainer?: string;
    tooltipClassName?: string;
    children: ReactNode;
    color?: ButtonProps["color"];
    disabled?: boolean;
    duration?: number;
    onCopy?: () => void;
};

export const CopyButton = memo(
    ({
        color = "unstyled",
        text,
        tooltipMessage,
        tooltipTargetId,
        disabled = false,
        tooltipSize = "sm",
        tooltipContainer = "body",
        duration,
        size = "md",
        children,
        onCopy,
        className,
        tooltipClassName,
    }: CopyButtonProps) => {
        const [isCopied, setCopied] = useClipboard(text, duration);

        const onClick = useCallback(() => {
            setCopied();
            onCopy && onCopy();
        }, [onCopy, setCopied]);

        return (
            <>
                <Tooltip
                    isOpen={isCopied}
                    size={tooltipSize}
                    target={tooltipTargetId}
                    trigger="click"
                    container={tooltipContainer}
                    className={tooltipClassName}
                >
                    {tooltipMessage}
                </Tooltip>
                <Button
                    onClick={onClick}
                    size={size}
                    disabled={disabled}
                    color={color}
                    id={tooltipTargetId}
                    className={className}
                >
                    {children}
                </Button>
            </>
        );
    },
);
