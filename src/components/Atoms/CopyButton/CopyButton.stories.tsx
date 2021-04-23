import React from "react";

import { Meta } from "@storybook/react/types-6-0";

import { CopyButton, CopyButtonProps } from "./CopyButton";

enum SizeEnum {
    SM = "sm",
    MD = "md",
    LG = "lg",
}

enum CopyButtonColorEnum {
    PRIMARY = "primary",
    LINK = "link",
    UNSTYLED = "unstyled",
    DANGER = "danger",
    SECONDARY = "secondary",
    SUCCESS = "success",
}

const meta: Meta = {
    title: "Atoms/Button",
    component: CopyButton,
    argTypes: {
        item: {
            description: "CopyButton",
            table: {
                type: {
                    summary: "CopyButtonProps",
                },
            },
        },
    },
    parameters: {
        docs: {
            description: {
                component: "## Description ✍️\n\nCopyButton component.",
            },
        },
    },
};

export const CopyButtonStory = (args: CopyButtonProps) => (
    <div className="p-5">
        <CopyButton {...args}>Copy link</CopyButton>
    </div>
);

CopyButtonStory.story = {
    name: "CopyButton",
};

CopyButtonStory.args = {
    text: "http://website.com/",
    tooltipMessage: "Copied!",
    tooltipTargetId: "lala1",
    size: SizeEnum.SM,
    tooltipSize: SizeEnum.SM,
    color: CopyButtonColorEnum.UNSTYLED,
};

export default meta;
