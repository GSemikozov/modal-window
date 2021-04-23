import React, { ReactElement, ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { clearAllBodyScrollLocks, disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import {
    Modal as ReactstrapModal,
    ModalBody,
    ModalFooter as ReactstrapModalFooter,
    ModalProps as ReactstrapModalProps,
} from "reactstrap";

import cx from "classnames";

import styles from "./Modal.module.scss";

export type ModalComponentsType = {
    Header?: () => ReactElement<Record<string, unknown>>;
    Footer?: () => ReactElement<Record<string, unknown>>;
};

export type ModalProps = {
    children: ReactNode;
    components?: ModalComponentsType;
    modalBodyClassName?: string;
} & ReactstrapModalProps;

export const Modal = ({
    children,
    isOpen = false,
    components,
    toggle,
    modalClassName = "",
    wrapClassName = "",
    modalBodyClassName = "",
    ...rest
}: ModalProps) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const [isOpened, setIsOpened] = useState(false);

    useEffect(() => {
        modalRef.current && isOpen && disableBodyScroll(modalRef.current);
        modalRef.current && !isOpen && enableBodyScroll(modalRef.current);

        return () => {
            clearAllBodyScrollLocks();
        };
    }, [isOpen]);

    const onOpened = useCallback(() => {
        setIsOpened(true);
    }, []);

    const onClosed = useCallback(() => {
        setIsOpened(false);
    }, []);

    return (
        <ReactstrapModal
            isOpen={isOpen}
            innerRef={modalRef}
            toggle={toggle}
            wrapClassName={wrapClassName}
            modalClassName={cx(modalClassName, { [styles.open]: isOpen, opened: isOpened })}
            onOpened={onOpened}
            onClosed={onClosed}
            {...rest}
        >
            {components?.Header && (
                <div className="modal-header">
                    <components.Header />
                </div>
            )}

            <ModalBody className={modalBodyClassName}>{children}</ModalBody>

            {components?.Footer && (
                <ReactstrapModalFooter>
                    <components.Footer />
                </ReactstrapModalFooter>
            )}
        </ReactstrapModal>
    );
};
