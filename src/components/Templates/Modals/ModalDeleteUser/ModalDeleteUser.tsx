import React, { useCallback, useState } from "react";

import { Modal, ModalComponentsType } from "@components/Organisms/Modal/Modal";
import { ModalFooter, ModalHeader } from "@/components";
import { Button } from "@components/Atoms/Button/Button";
import { Icon } from "@components/Atoms/Icon/Icon";
import { ModalProps } from "reactstrap/lib/Modal";

export const ModalDeleteUser = ({ title, ...args }: { title: string } & ModalProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const onToggle = useCallback(() => setIsOpen(!isOpen), [isOpen]);

    const modalComponents: ModalComponentsType = {
        Footer: () => (
            <ModalFooter
                startButton={
                    <Button size="lg" color="default" block={true} onClick={onToggle}>
                        Cancel
                    </Button>
                }
                endButton={
                    <Button size="lg" color="danger" block={true}>
                        Delete user
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
                    <Icon className="text-danger mr-2 mt-1" iconName="Warning" />
                    <p>This will permanently delete Joe. This action can not be undone.</p>
                </div>
            </Modal>
        </>
    );
};
