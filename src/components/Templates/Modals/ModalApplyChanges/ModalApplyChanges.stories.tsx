import React from "react";

import { Meta } from "@storybook/react";

import { Modal as ModalWindow } from "@components/Organisms/Modal/Modal";
import { ModalApplyChanges } from "@components/Templates";

const meta: Meta = {
    title: "Templates/Modals/ModalApplyChanges",
    component: ModalWindow,
};

export const ModalApplyChangesStory = ({ title, ...args }: { title: string }) => (
    <ModalApplyChanges title={title} {...args} />
);

ModalApplyChangesStory.story = {
    name: "ModalApplyChanges",
};

ModalApplyChangesStory.args = {
    title: "Apple changes?",
};

export default meta;
