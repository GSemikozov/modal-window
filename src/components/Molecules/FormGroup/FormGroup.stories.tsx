import React from "react";

import { Meta } from "@storybook/react/types-6-0";

import { FormInput, FormInputSizeEnum, FormInputTypeEnum } from "@components/Atoms/FormInput/FormInput";
import { FormLabel } from "@components/Atoms/FormLabel/FormLabel";
import { FormGroup } from "./FormGroup";

const meta: Meta = {
    title: "Molecules/FormGroup",
    component: FormGroup,
    argTypes: {
        item: {
            description: "FormGroup",
            table: {
                type: {
                    summary: "FormGroupProps",
                },
            },
        },
    },
    parameters: {
        docs: {
            description: {
                component: "## Description ✍️\n\nFormGroup component.",
            },
        },
    },
};

export const FormGroupStory = (args: any) => (
    <div className="p-5">
        <div className="p-3 mb-5 shadow-sm">
            <FormGroup {...args} className="mb-3">
                <FormLabel forId={"123"} title={"Input label"} />
                <FormInput
                    type={FormInputTypeEnum.TEXT}
                    size={FormInputSizeEnum.MEDIUM}
                    id={"123"}
                    placeholder={"Placeholder"}
                />
            </FormGroup>
        </div>
        <div className="p-3 shadow-sm">
            <FormGroup {...args}>
                <FormLabel forId={"1234"} title={"Textarea label"} />
                <FormInput
                    type={FormInputTypeEnum.TEXTAREA}
                    size={FormInputSizeEnum.MEDIUM}
                    id={"1234"}
                    placeholder={"Placeholder"}
                />
            </FormGroup>
        </div>
    </div>
);

FormGroupStory.story = {
    name: "FormGroup",
};

export default meta;
