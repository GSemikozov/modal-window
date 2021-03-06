import * as React from "react";

const SvgClose = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        viewBox="0 0 16 16"
        fill="currentColor"
        {...props}
    >
        <path
            fillRule="evenodd"
            d="M12.293 2.293a1 1 0 111.414 1.414L9.414 8l4.293 4.293a1 1 0 01-1.414 1.414L8 9.414l-4.293 4.293a1 1 0 01-1.414-1.414L6.586 8 2.293 3.707a1 1 0 011.414-1.414L8 6.586l4.293-4.293z"
            clipRule="evenodd"
        />
    </svg>
);

SvgClose.displayName = SvgClose.name;
export default SvgClose;
