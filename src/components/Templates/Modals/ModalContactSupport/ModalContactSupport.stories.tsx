import React from "react";

import { Meta } from "@storybook/react";

import { Modal as ModalWindow } from "@components/Organisms/Modal/Modal";
import { ModalContactSupport } from "@components/Templates";

const meta: Meta = {
    title: "Templates/Modals/ModalContactSupport",
    component: ModalWindow,
};

export const ModalContactSupportStory = ({ title, ...args }: { title: string }) => (
    <ModalContactSupport title={title} {...args} />
);

ModalContactSupportStory.story = {
    name: "ModalContactSupport",
};

ModalContactSupportStory.args = {
    title: "Contact support",
};

export default meta;
