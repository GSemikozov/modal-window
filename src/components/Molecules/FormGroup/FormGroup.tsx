import React, { HtmlHTMLAttributes, ReactNode } from "react";
import { FormGroup as ReactstrapFormGroup } from "reactstrap";

export type FormGroupProps = {
    children: ReactNode;
} & HtmlHTMLAttributes<HTMLDivElement>;

export const FormGroup = ({ children, ...rest }: FormGroupProps) => (
    <ReactstrapFormGroup {...rest}>{children}</ReactstrapFormGroup>
);
