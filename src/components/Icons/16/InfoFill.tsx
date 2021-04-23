import * as React from "react";

const SvgInfoFill = (props: React.SVGProps<SVGSVGElement>) => (
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
            d="M2 8a6 6 0 1112 0A6 6 0 012 8zm7-3a1 1 0 11-2 0 1 1 0 012 0zM8 7a1 1 0 00-1 1v3a1 1 0 102 0V8a1 1 0 00-1-1z"
            clipRule="evenodd"
        />
    </svg>
);

SvgInfoFill.displayName = SvgInfoFill.name;
export default SvgInfoFill;
