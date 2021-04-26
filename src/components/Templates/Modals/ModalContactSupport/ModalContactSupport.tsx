import React, { useCallback, useState } from "react";

import { Modal, ModalComponentsType } from "@components/Organisms/Modal/Modal";
import { ModalFooter, ModalHeader } from "@/components";
import { Button } from "@components/Atoms/Button/Button";
import {
    FormInput,
    FormInputTypeEnum,
    FormInputSizeEnum,
} from "@components/Atoms/FormInput/FormInput";
import { FormLabel } from "@components/Atoms/FormLabel/FormLabel";
import { FormGroup } from "@components/Molecules/FormGroup/FormGroup";
import { ModalProps } from "reactstrap/lib/Modal";
import { Form } from "reactstrap";

export const ModalContactSupport = ({ title, ...args }: { title: string } & ModalProps) => {
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
                    <Button size="lg" color="primary" block={true}>
                        Apply
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
                <div className="d-flex flex-column">
                    <Form>
                        <FormGroup className="mb-3">
                            <FormLabel forId="email" title="Email" />
                            <FormInput
                                type={FormInputTypeEnum.TEXT}
                                size={FormInputSizeEnum.MEDIUM}
                                id="email"
                            />
                        </FormGroup>
                        <FormGroup className="mb-3">
                            <FormLabel forId="subject" title="Subject" />
                            <FormInput
                                type={FormInputTypeEnum.TEXT}
                                size={FormInputSizeEnum.MEDIUM}
                                id="subject"
                            />
                        </FormGroup>
                        <FormGroup>
                            <FormLabel forId="message" title="Message" />
                            <FormInput
                                type={FormInputTypeEnum.TEXTAREA}
                                size={FormInputSizeEnum.MEDIUM}
                                id="message"
                                placeholder="Enter your message here"
                            />
                        </FormGroup>
                    </Form>
                </div>
            </Modal>
        </>
    );
};
