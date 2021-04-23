import React from "react";

import "../src/index.scss";

import { addDecorator, addParameters } from "@storybook/react";
import { withNotes } from "@storybook/addon-notes";
import { DocsPage, DocsContainer } from "@storybook/addon-docs/blocks";
import { INITIAL_VIEWPORTS, DEFAULT_VIEWPORT } from "@storybook/addon-viewport";

addDecorator(withNotes);
addDecorator((storyFn) => <div className="p-3 h-100">{storyFn()}</div>);

addParameters({
    docs: {
        container: DocsContainer,
        page: DocsPage,
    },
    viewport: {
        viewports: INITIAL_VIEWPORTS,
        defaultViewport: DEFAULT_VIEWPORT,
    },
});

export const parameters = {
    controls: { expanded: true },
};
