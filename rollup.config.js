import typescript from "rollup-plugin-typescript2";
import babel from "rollup-plugin-babel";
import postcss from "rollup-plugin-postcss";
import resolve from "@rollup/plugin-node-resolve";
import commonJS from "rollup-plugin-commonjs";
import tsConfigPaths from "rollup-plugin-ts-paths";
import bundleSize from "rollup-plugin-bundle-size";
import external from "rollup-plugin-peer-deps-external";
import analyze from "rollup-plugin-analyzer";
import { terser } from "rollup-plugin-terser";

import autoprefixer from "autoprefixer";
import objectFit from "postcss-object-fit-images";

import pkg from "./package.json";

const isAnalyze = process.env.NODE_ENV === "analyze";
const isProduction = process.env.NODE_ENV === "production";

const globals = {
    react: "React",
    "react-dom": "ReactDOM",
    "prop-types": "PropTypes",
};

export default {
    input: "src/main.ts",
    output: [
        {
            file: pkg.module,
            format: "es",
            globals,
            sourcemap: true,
        },
        { file: pkg.moduleMin, format: "cjs", plugins: [terser()] },
        {
            file: pkg.main,
            format: "cjs",
            globals,
            sourcemap: true,
        },
    ],
    external: Object.keys(globals),
    cache: !isProduction,
    plugins: [
        external(),
        resolve({ browser: true }),
        commonJS({
            include: ["node_modules/**"],
            namedExports: {
                "node_modules/react-responsive/dist/react-responsive.js": ["useMediaQuery"],
            },
        }),
        babel({ exclude: "node_modules/**" }),
        typescript({
            typescript: require("ttypescript"),
        }),
        postcss({
            extract: true,
            modules: true,
            sourceMap: true,
            use: ["sass"],
            plugins: [autoprefixer(), objectFit()],
        }),
        tsConfigPaths(),
        bundleSize(),
        isAnalyze && analyze({ summaryOnly: true }),
    ],
};
