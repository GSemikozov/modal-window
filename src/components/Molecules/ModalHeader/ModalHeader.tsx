import React from "react";
import cx from "classnames";
import { Button } from "@components/Atoms/Button/Button";

// import { Label } from "@components/Label/Label";
import { Label } from "reactstrap";
import { Close } from "@components/Icons/16";

type ModalHeaderProps = {
    title: string;
    headerClassnames?: string;
    onClose?: () => void;
};

export const ModalHeader = ({ title, headerClassnames, onClose }: ModalHeaderProps) => (
    <div
        className={cx(
            "d-flex justify-content-between w-100 align-items-center rounded",
            headerClassnames,
        )}
    >
        <h5 className="mb-0">{title}</h5>
        {onClose && (
            <Button size="md" isSquare={true} onClick={onClose} color="unstyled">
                <Close className="d-block text-gray-500" />
            </Button>
        )}
    </div>
);
