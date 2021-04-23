module.exports = {
    addons: [
        "@storybook/addon-storysource",
        "@storybook/addon-actions",
        "@storybook/addon-docs",
        "@storybook/addon-viewport/register",
        "@storybook/addon-controls",
    ],
    stories: ["../src/**/*.stories.@(tsx|mdx)"],
};
