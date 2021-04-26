import React from "react";

import { Meta } from "@storybook/react";

import { Modal as ModalWindow } from "@components/Organisms/Modal/Modal";
import { ModalDeleteUser } from "@components/Templates";

const meta: Meta = {
    title: "Templates/Modals/ModalDeleteUser",
    component: ModalWindow,
};

export const ModalDeleteUserStory = ({ title, ...args }: { title: string }) => (
    <ModalDeleteUser title={title} {...args} />
);

ModalDeleteUserStory.story = {
    name: "ModalDeleteUser",
};

ModalDeleteUserStory.args = {
    title: "Delete user?",
};

export default meta;
