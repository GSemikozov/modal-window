import React from "react";
import { ModalFooter } from "@/components";
import { ModalFooter as ReactstrapModalFooter } from "reactstrap";

import { Meta } from "@storybook/react/types-6-0";
import { Button } from "@components/Atoms/Button/Button";
import {Icon} from "@components/Atoms/Icon/Icon";
import {CopyButton} from "@components/Atoms/CopyButton/CopyButton";

const meta: Meta = {
    title: "Molecules/ModalFooter",
    component: ModalFooter,
    parameters: {
        docs: {
            description: {
                component: "## Description ✍️\n\nModalFooter component.",
            },
        },
    },
};

export const ModalFooterDefaultStory = (args: any) => {
    return (
        <div className="shadow-sm col-xs-12 col-md-8">
            <ReactstrapModalFooter>
                <ModalFooter
                    {...args}
                    startButton={
                        <Button size="lg" color="default" block={true}>
                            Cancel
                        </Button>
                    }
                    endButton={
                        <Button size="lg" color="primary" block={true}>
                            Apply
                        </Button>
                    }
                />
            </ReactstrapModalFooter>
        </div>
    );
}

ModalFooterDefaultStory.story = {
    name: "ModalFooterDefault",
};

export const ModalFooterWithChildrenStory = (args: any) => {
    return (
        <div className="shadow-sm col-xs-12 col-md-8">
            <ReactstrapModalFooter>
                <ModalFooter
                    {...args}
                    startButton={
                        <Button size="lg" color="default" block={true}>
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
                        className="mr-4"
                    >
                        <Icon iconName="Link" className="mr-1" />
                        Copy link
                    </CopyButton>
                    <Button color="link" href="#" size="sm">
                        <Icon iconName="Developer" className="mr-1" />
                        Get embed code
                    </Button>
                </ModalFooter>
            </ReactstrapModalFooter>
        </div>
    );
}

ModalFooterWithChildrenStory.story = {
    name: "ModalFooterWithChildren",
};

export default meta;
