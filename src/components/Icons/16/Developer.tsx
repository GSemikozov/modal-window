import * as React from "react";

const SvgDeveloper = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        viewBox="0 0 16 16"
        fill="currentColor"
        {...props}
    >
        <g fillRule="evenodd" clipPath="url(#developer_svg__clip0)" clipRule="evenodd">
            <path d="M4.09 14.508a1 1 0 01-.366-1.366l6.778-11.74a1 1 0 011.732 1l-6.778 11.74a1 1 0 01-1.366.366zM.244 5.566a.778.778 0 010-1.132l3.333-3.2a.858.858 0 011.179 0 .778.778 0 010 1.132L2.012 5l2.744 2.634a.778.778 0 010 1.132.858.858 0 01-1.179 0l-3.333-3.2zm15.512 6a.777.777 0 000-1.132l-3.333-3.2a.858.858 0 00-1.179 0 .777.777 0 000 1.132L13.988 11l-2.744 2.634a.777.777 0 000 1.132.858.858 0 001.179 0l3.333-3.2z" />
        </g>
        <defs>
            <clipPath id="developer_svg__clip0">
                <path d="M0 0h16v16H0V0z" />
            </clipPath>
        </defs>
    </svg>
);

SvgDeveloper.displayName = SvgDeveloper.name;
export default SvgDeveloper;
