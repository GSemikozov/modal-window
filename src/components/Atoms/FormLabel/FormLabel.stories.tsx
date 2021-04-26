import React from "react";

import { Meta } from "@storybook/react/types-6-0";

import { FormLabel } from "./FormLabel";

const meta: Meta = {
    title: "Atoms/FormLabel",
    component: FormLabel,
    argTypes: {
        item: {
            description: "FormLabel",
            table: {
                type: {
                    summary: "FormLabelProps",
                },
            },
        },
    },
    parameters: {
        docs: {
            description: {
                component: "## Description ✍️\n\nFormLabel component.",
            },
        },
    },
};

export const FormLabelStory = (args: any) => (
    <div className="p-5">
        <FormLabel {...args} />
    </div>
);

FormLabelStory.story = {
    name: "FormLabel",
};

FormLabelStory.args = {
    title: "Form label",
    forId: "",
    className: "",
}

export default meta;
