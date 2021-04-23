import React, { useCallback, useState } from "react";

import { Modal, ModalComponentsType } from "@components/Organisms/Modal/Modal";
import {GoogleAdsLogo, ModalFooter, ModalHeader} from "@/components";
import { Button } from "@components/Atoms/Button/Button";
import { CopyButton } from "@components/Atoms/CopyButton/CopyButton";
import { Icon } from "@components/Atoms/Icon/Icon";
import { ModalProps } from "reactstrap/lib/Modal";
import {Form, FormGroup, Input, Label} from "reactstrap";

export const ModalEditDatastream = ({ title, ...args }: { title: string } & ModalProps) => {
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
            >
                <CopyButton
                    color="link"
                    size="sm"
                    text="https://website.com"
                    tooltipMessage="Copied!"
                    tooltipTargetId="lala"
                    className="mr-2"
                >
                    <Icon iconName="Link" className="mr-1" />
                    Copy link
                </CopyButton>
                <Button color="link" href="#" size="sm">
                    <Icon iconName="Developer" className="mr-1" />
                    Get embed code
                </Button>
            </ModalFooter>
        ),
        Header: () => <ModalHeader onClose={onToggle} title={title || ""} />,
    };

    return (
        <>
            <Button onClick={onToggle}>Open modal</Button>
            <Modal isOpen={isOpen} toggle={onToggle} components={modalComponents} {...args}>
                <div className="d-flex flex-column">
                    <GoogleAdsLogo className="w-25 align-self-center mb-2" />
                    <Form>
                        <FormGroup>
                            <Label for="datastreamTitle">Datastream title</Label>
                            <Input type="text" name="datastreamTitle" id="datastreamTitle" placeholder="Google Ads report" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleText">Description</Label>
                            <Input type="textarea" name="text" id="exampleText" placeholder="Enter your message here" />
                        </FormGroup>
                    </Form>
                </div>
            </Modal>
        </>
    );
};
