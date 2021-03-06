import React from "react";

import { Label as LabelReactstrap } from "reactstrap";
import { InputBaseProps } from "@type/InputBaseType";

export type FormInputProps = {
    title: string;
    forId?: string;
    className?: string;
} & Omit<InputBaseProps>;

export const FormLabel = ({ title, forId, className }: FormInputProps) => (
    <LabelReactstrap for={forId} className={className}>
        {title}
    </LabelReactstrap>
);
