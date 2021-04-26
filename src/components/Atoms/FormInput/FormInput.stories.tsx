import React from "react";

import { Meta } from "@storybook/react/types-6-0";

import { FormInput, FormInputTypeEnum, FormInputSizeEnum } from "./FormInput";

const meta: Meta = {
    title: "Atoms/FormInput",
    component: FormInput,
    argTypes: {
        type: {
            control: {
                type: "select",
                options: FormInputTypeEnum,
            },
            type: { summary: "text | textarea | number" },
        },
        size: {
            control: {
                type: "select",
                options: FormInputSizeEnum,
            },
            type: { summary: "FormInputSizeEnum" },
        },
    },
    parameters: {
        docs: {
            description: {
                component: "## Description ✍️\n\nFormInput component.",
            },
        },
    },
};

export const FormInputStory = (args: any) => (
    <div className="p-5">
        <FormInput {...args} />
    </div>
);

FormInputStory.story = {
    name: "FormInput",
};

FormInputStory.args = {
    type: FormInputTypeEnum.TEXT,
    size: FormInputSizeEnum.MEDIUM,
    id: "inputText",
    name: "inputText",
    placeholder: "Placeholder",
    readOnly: false,
}

export default meta;
