import React, { memo, useMemo } from "react";
import cx from "classnames";

import { Input as InputReactstrap } from "reactstrap";
import { InputBaseProps } from "@type/InputBaseType";

export enum FormInputSizeEnum {
    SMALL = "sm",
    MEDIUM = "md",
    LARGE = "lg",
}

export enum FormInputTypeEnum {
    TEXT = "text",
    TEXTAREA = "textarea",
}

export type FormInputProps = {
    size?: FormInputSizeEnum;
    type?: FormInputTypeEnum;
    inputClassName?: string;
    disabled?: boolean;
} & Omit<InputBaseProps, "size">;

export const FormInput = memo(
    ({
        size = FormInputSizeEnum.MEDIUM,
        type,
        inputClassName,
        disabled = false,
        ...rest
    }: FormInputProps) => {
        const sizeProp = useMemo(() => (size === FormInputSizeEnum.MEDIUM ? undefined : size), [
            size,
        ]);

        return (
            <InputReactstrap
                bsSize={size ? sizeProp : rest.bsSize}
                className={cx(
                    "form-control",
                    {
                        "h2 m-0": size === FormInputSizeEnum.LARGE,
                        "p-0": size === FormInputSizeEnum.SMALL,
                    },
                    inputClassName,
                )}
                type={type || FormInputTypeEnum.TEXT}
                disabled={disabled}
                {...rest}
            />
        );
    },
);
