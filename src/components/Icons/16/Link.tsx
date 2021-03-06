import * as React from "react";

const SvgLink = (props: React.SVGProps<SVGSVGElement>) => (
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
            d="M8.285 1.594a4.333 4.333 0 016.128 6.127l-.013.013-2 2a4.334 4.334 0 01-6.534-.468 1 1 0 011.601-1.198 2.333 2.333 0 003.52.252l1.992-1.994a2.333 2.333 0 00-3.3-3.298L8.54 4.162a1 1 0 11-1.41-1.418l1.146-1.14.01-.01z"
            clipRule="evenodd"
        />
        <path
            fillRule="evenodd"
            d="M5.15 5.27a4.333 4.333 0 014.984 1.464 1 1 0 11-1.601 1.198 2.333 2.333 0 00-3.52-.252L3.02 9.674a2.333 2.333 0 003.3 3.299l1.133-1.133a1 1 0 111.414 1.414l-1.14 1.14-.012.012a4.333 4.333 0 01-6.128-6.127l.013-.013 2-2a4.326 4.326 0 011.55-.996z"
            clipRule="evenodd"
        />
    </svg>
);

SvgLink.displayName = SvgLink.name;
export default SvgLink;
