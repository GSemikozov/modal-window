import React from "react";

import { Meta } from "@storybook/react";

import { Modal as ModalWindow } from "@components/Organisms/Modal/Modal";
import { ModalAlert } from "@components/Templates";

const meta: Meta = {
    title: "Templates/Modals/ModalAlert",
    component: ModalWindow,
};

export const ModalAlertStory = ({ title, ...args }: { title: string }) => (
    <ModalAlert title={title} {...args} />
);

ModalAlertStory.story = {
    name: "ModalAlert",
};

ModalAlertStory.args = {
    title: "Alert",
};

export default meta;
