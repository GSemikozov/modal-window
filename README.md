# Modal UI Package
- [storybook on gh-pages](https://GSemikozov.github.io/modal-window/)
- [npm package link](https://www.npmjs.com/package/@react-frontend-solutions/modal-window-package)

## Get started
- Install package `yarn add -E @react-frontend-solutions/modal-window-package`
- Add styles from package `~@react-frontend-solutions/modal-window-package/src/assets/styles/index` or you can import by module
- Add react component styles `@import "~@react-frontend-solutions/modal-window-package/dist/main.css"` in your scss

## Main commands
- For develop `yarn start`
- For build production version `yarn build`
- For build analytics `yarn build:analyze`
- For lint `yarn lint`
- For storybook `yarn storybook`
- For storybook build `yarn build-storybook`

## How to develop local
- Run `yarn link`
- For local build run `yarn start` or `yarn build` in core package directory
- Go to your project when package installed
- Run `yarn link @react-frontend-solutions/modal-window-package`
- For unlink you can run `yarn unlink @react-frontend-solutions/modal-window-package`
- `yarn --force` for install package version from npm
- Add alias to packages in your webpack/rollup or other build tools
- Link react and react-dom in your package

Storybook: `here will be a link let's say to a netlify demo`
Confluence: `link to confluence or some other place for public documentation`

## How to use es modules
- For icons `import Icon from "@react-frontend-solutions/modal-window-package/es/Icons/{size}/{iconName}"`. Example:
````
import CloseIcon from "@react-frontend-solutions/modal-window-package/es/Icons/16/Close"

<CloseIcon className="text-gray" />
````

## Available commands

- `yarn storybook` - run storybook in watch mode
- `yarn lint` - run linter for ts and styles
- `yarn lint:ts` - run linter for the typescript and eslint
- `yarn lint:scss` - run styles linter
- `yarn build-storybook` - build static storybook
- `yarn start` - run build package in the watch mode
- `yarn build` - build package
- `build:es` - build es modules
- `build:icons` - build and optimize all icons
- `build:analyze` - analyze bundle

## TODO
- generate README.md automatically and automatically push it to specific place like confluence
- add CI/CD e.g. travis or inner github tools
- while releasing publish storybook to the demo

## License

```(c)
Copyright (C) (2021) Herman Semykozov.

All rights reserved - Do Not Redistribute
```
