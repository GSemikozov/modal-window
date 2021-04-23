import React from "react";

import { Meta } from "@storybook/react/types-6-0";

import { Button } from "@components/Atoms/Button/Button";

const meta: Meta = {
    title: "Atoms/Button",
    component: Button,
    argTypes: {
        item: {
            description: "Button",
            table: {
                type: {
                    summary: "ButtonProps",
                },
            },
        },
    },
    parameters: {
        docs: {
            description: {
                component: "## Description ✍️\n\nButton component.",
            },
        },
    },
};

export const ButtonStory = (args: any) => (
    <div className="p-5">
        <Button {...args}>button</Button>
    </div>
);

ButtonStory.story = {
    name: "Button",
};

export default meta;
