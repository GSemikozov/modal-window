import React from "react";
import cx from "classnames";
import { Button as ReactstrapButton, ButtonProps as ReactstrapButtonProps } from "reactstrap";

export type ButtonProps = {
    size?: "sm" | "md" | "lg";
    color?:
        | "default"
        | "primary"
        | "secondary"
        | "success"
        | "danger"
        | "link"
        | "unstyled"
        | "close";
    isSquare?: boolean;
    href?: string; // When you add this property component will be changed to link with btn styles
    target?: string;
    rel?: string;
} & Omit<ReactstrapButtonProps, "size">;

export const Button = ({
    size = "md",
    color = "primary",
    disabled = false,
    className = "",
    isSquare = true,
    children,
    ...rest
}: ButtonProps) => (
    <ReactstrapButton
        size={size}
        color={color}
        disabled={disabled}
        className={cx(className, {
            "btn-close": color === "close",
            "btn-square": isSquare,
        })}
        {...rest}
    >
        {children}
    </ReactstrapButton>
);
