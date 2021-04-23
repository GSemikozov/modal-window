import React, { useCallback, useState } from "react";

import {
    ArgsTable,
    ComponentsTable,
    Primary,
    PRIMARY_STORY,
    Title,
} from "@storybook/addon-docs/blocks";

import { Button } from "@components/Atoms/Button/Button";

import { ModalFooter } from "@components/Molecules/ModalFooter/ModalFooter";
import { ModalHeader } from "@components/Molecules/ModalHeader/ModalHeader";

import { Meta } from "@storybook/react";

import { Modal, ModalComponentsType, ModalProps } from "./Modal";

const meta: Meta = {
    title: "Organisms/Modal",
    component: Modal,
    parameters: {
        docs: {
            page: () => (
                <>
                    <Title />
                    <h2>Description ✍</h2>
                    <p>Modal dialogs.</p>
                    <Primary />
                    <ArgsTable story={PRIMARY_STORY} />
                    <h3>API ⚙</h3>
                    <ComponentsTable
                        components={{
                            Modal: Modal,
                            ModalHeader: ModalHeader,
                            ModalFooter: ModalFooter,
                        }}
                    />
                    <p>
                        Other props can be found{" "}
                        <a
                            href="https://reactstrap.github.io/components/modals/#app"
                            target="_blank"
                            rel="noreferrer"
                        >
                            here
                        </a>
                        .
                    </p>
                </>
            ),
        },
    },
};

export const ModalStory = ({ withFooter, withHeading, title, ...args }: ModalProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const onToggle = useCallback(() => setIsOpen(!isOpen), [isOpen]);

    const modalComponents: ModalComponentsType = {
        Footer: withFooter
            ? () => (
                <ModalFooter
                    startButton={
                        <Button size="lg" color="default" block={true} onClick={onToggle}>
                            Cancel
                        </Button>
                    }
                    endButton={

                        <Button size="lg" color="primary" block={true}>
                            Apply
                        </Button>
                    }
                />
            )
            : undefined,
        Header: withHeading
            ? () => <ModalHeader onClose={onToggle} title={title || ""} />
            : undefined,
    };

    return (
        <>
            <Button onClick={onToggle}>Open modal</Button>
            <Modal isOpen={isOpen} toggle={onToggle} components={modalComponents} {...args}>
                <div>
                    <p className="mb-0">
                        Vestibulum id ligula porta felis euismod semper. Maecenas faucibus mollis
                        interdum. Maecenas faucibus mollis interdum. Morbi leo risus, porta ac
                        consectetur ac, vestibulum at eros.
                    </p>
                </div>
            </Modal>
        </>
    );
}

ModalStory.story = {
    name: "Modal",
};

ModalStory.args = {
    withFooter: true,
    withHeading: true,
    title: "Title",
};

export default meta;
