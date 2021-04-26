import { InputHTMLAttributes, default as React } from "react";
import { InputProps } from "reactstrap";

export type InputBaseProps = {
    className?: string;
    disabled?: boolean;
    required?: boolean;
    bsSize?: "sm" | "lg";
    invalid?: boolean;
    rows?: number;
    innerRef?: React.Ref<HTMLInputElement>;
    value?: string | number;
} & Pick<InputProps, "type"> &
    InputHTMLAttributes<HTMLInputElement>;
