import React from "react";
import { ModalHeader } from "@/components";

import { Meta } from "@storybook/react/types-6-0";

const meta: Meta = {
    title: "Molecules/ModalHeader",
    component: ModalHeader,
    parameters: {
        docs: {
            description: {
                component: "## Description ✍️\n\nModalHeader component.",
            },
        },
    },
};

export const ModalHeaderStory = (args: any) => (
    <div className="shadow-sm col-xs-12 col-md-6 col-6 px-3 py-3">
        <ModalHeader {...args} />
    </div>
);

ModalHeaderStory.story = {
    name: "ModalHeader",
};

ModalHeaderStory.args = {
    title: "Title",
    onClose: () => {
        // do nothing.
    },
};

export default meta;
