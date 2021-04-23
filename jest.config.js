const { pathsToModuleNameMapper } = require("ts-jest/utils");
// In the following statement, replace `./tsconfig` with the path to your `tsconfig` file
// which contains the path mapping (ie the `compilerOptions.paths` option):
const { compilerOptions } = require("./tsconfig");

module.exports = {
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },
    testRegex: "\\.test\\.(ts|tsx|js|jsx)$",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    moduleDirectories: ["node_modules"],
    moduleNameMapper: {
        "\\.(|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
            "./mocks/fileMock.js",
        "\\.(css|scss)$": "./mocks/cssMock.js",
        ...pathsToModuleNameMapper(compilerOptions.paths, {
            prefix: `<rootDir>/${compilerOptions.baseUrl}/`,
        }),
    },
};
