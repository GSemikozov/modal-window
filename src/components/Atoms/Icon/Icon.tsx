import React from "react";

import * as Icons16 from "@/components/Icons/16";

export type IconType = keyof typeof Icons16;
export const IconNames = Object.keys(Icons16) as IconType[];

type IconProps = {
    iconName: IconType;
} & React.SVGProps<SVGSVGElement>;

export const Icon = ({ iconName, ...props }: IconProps) => {
    const Icon = Object.values(Icons16).find((Icon) => Icon.displayName === `Svg${iconName}`);
    {
        Object.values(Icons16).find((Icon) => <Icon />);
    }
    return Icon ? <Icon {...props} /> : <></>;
};
