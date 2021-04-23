const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = ({ config }) => {
    config.module.rules.push({
        test: /\.stories\.tsx?$/,
        loaders: [
            {
                loader: require.resolve("@storybook/source-loader"),
                options: { parser: "typescript" },
            },
        ],
        enforce: "pre",
    });

    config.module.rules.push({
        test: /\.scss$/,
        exclude: /\.module\.scss$/,
        loaders: [
            require.resolve("style-loader"),
            {
                loader: require.resolve("css-loader"),
            },
            require.resolve("sass-loader"),
        ],
    });

    config.module.rules.push({
        test: /\.module\.scss$/,
        loaders: [
            require.resolve("style-loader"),
            {
                loader: require.resolve("css-loader"),
                options: {
                    importLoaders: 1,
                    modules: true,
                },
            },
            require.resolve("sass-loader"),
        ],
    });
    config.resolve.plugins = [
        new TsconfigPathsPlugin({
            configFile: path.resolve(__dirname, "../tsconfig.json"),
        }),
    ];

    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        loader: require.resolve("babel-loader"),
    });

    config.resolve.extensions.push(".ts", ".tsx");
    return config;
};
