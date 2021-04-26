import React, { useCallback, useState } from "react";

import { Modal, ModalComponentsType } from "@components/Organisms/Modal/Modal";
import { ModalFooter, ModalHeader } from "@/components";
import { Button } from "@components/Atoms/Button/Button";
import { CopyButton } from "@components/Atoms/CopyButton/CopyButton";
import { Icon } from "@components/Atoms/Icon/Icon";
import { ModalProps } from "reactstrap/lib/Modal";

export const ModalAlert = ({ title, ...args }: { title: string } & ModalProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const onToggle = useCallback(() => setIsOpen(!isOpen), [isOpen]);

    const modalComponents: ModalComponentsType = {
        Footer: () => (
            <ModalFooter
                endButton={
                    <Button size="lg" color="primary" block={true}>
                        Got it
                    </Button>
                }
            />
        ),
        Header: () => <ModalHeader onClose={onToggle} title={title || ""} />,
    };

    return (
        <>
            <Button onClick={onToggle}>Open modal</Button>
            <Modal isOpen={isOpen} toggle={onToggle} components={modalComponents} {...args}>
                <div className="d-flex flex-row">
                    <Icon className="text-primary mr-2 mt-1" style={{width: "24px"}} iconName="InfoFill" />
                    <p>This is an example of an alert message that is so important that deserved as a modal dialog.</p>
                </div>
            </Modal>
        </>
    );
};
