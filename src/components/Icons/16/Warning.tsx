import * as React from "react";

const SvgWarning = (props: React.SVGProps<SVGSVGElement>) => (
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
            d="M8 14A6 6 0 108 2a6 6 0 000 12zm8-6A8 8 0 110 8a8 8 0 0116 0zm-9 3a1 1 0 112 0 1 1 0 01-2 0zm1-2a1 1 0 001-1V5a1 1 0 00-2 0v3a1 1 0 001 1z"
            clipRule="evenodd"
        />
    </svg>
);

SvgWarning.displayName = SvgWarning.name;
export default SvgWarning;
