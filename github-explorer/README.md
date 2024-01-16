
# Requirements 

- Init package.json: `yarn init -y`
- Install react: `yarn add react`
- Install react-dom: `yarn add react-dom` 
- Install babel: `yarn add @babel/core @babel/cli @babel/preset-env @babel/preset-react babel-loader -D`
- Using babel: `yarn babel .\src\index.js --out-file .\dist\bundle.js`
- Install webpack: `yarn add webpack webpack-cli html-webpack-plugin webpack-dev-server style-loader css-loader -D`
- Using webpack: `yarn webpack`
- Using webpack server: `yarn webpack serve`
- Node env: 
    - Linux: `NODE_ENV=production yarn webpack`
    - Windows: `yarn add cross-env -D`
- Install SASS: `yarn add sass sass-loader -D`
- Refresh da página mantendo os estados: `yarn add -D @pmmmwh/react-refresh-webpack-plugin react-refresh`
- Install Typescript: `yarn add -D typescript`
- Init typescript: `yarn tsc --init`
- Babel Typescript: `yarn add -D @babel/preset-typescript`
- React Dom: `yarn add -D @types/react-dom`

- Rodar: `yarn dev`