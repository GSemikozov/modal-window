import React from "react";

import { Meta } from "@storybook/react";

import { Modal as ModalWindow } from "@components/Organisms/Modal/Modal";
import { ModalEditDatastream } from "@components/Templates";

const meta: Meta = {
    title: "Templates/Modals/ModalEditDatastream",
    component: ModalWindow,
};

export const ModalEditDatastreamStory = ({ title, ...args }: { title: string }) => (
    <ModalEditDatastream title={title} {...args} />
);

ModalEditDatastreamStory.story = {
    name: "ModalEditDatastream",
};

ModalEditDatastreamStory.args = {
    title: "Edit datastream",
};

export default meta;
