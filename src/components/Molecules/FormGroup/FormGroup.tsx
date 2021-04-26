import React, { HtmlHTMLAttributes, ReactNode, ReactType } from "react";
import { FormGroup as ReactstrapFormGroup, CSSModule } from "reactstrap";

export type FormGroupProps = {
    children: ReactNode;
} & HtmlHTMLAttributes<HTMLDivElement>;

export const FormGroup = ({ children, ...rest }: FormGroupProps) => (
    <ReactstrapFormGroup {...rest}>{children}</ReactstrapFormGroup>
);
