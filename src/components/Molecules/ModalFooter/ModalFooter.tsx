import React, { ReactNode } from "react";
import cx from "classnames";

export type ModalFooterProps = {
    startButton?: ReactNode;
    endButton?: ReactNode;
    children?: ReactNode;
    className?: string;
};

export const ModalFooter = ({
    startButton,
    endButton,
    children,
    className,
}: ModalFooterProps) => (
    <div
        className={cx("row align-items-center justify-content-between no-gutters w-100", className)}
    >
        {children && (
            <div className="col-12 col-sm-auto mb-2 mb-sm-0">{children}</div>
        )}
        <div className="col-12 col-sm-auto ml-auto">
            <div className="d-flex flex-nowrap justify-content-end">
                {startButton && (
                    <div className="mr-2">{startButton}</div>
                )}
                {endButton && <div>{endButton}</div>}
            </div>
        </div>
    </div>
);
