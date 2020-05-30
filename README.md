# React Thrift Client Demo

### This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)  
```
npx create-react-app react-thrift-client
```

### Install packages
```
npm install --save @creditkarma/thrift-client @creditkarma/thrift-server-core typescript @types/node @types/react @types/react-dom @types/jest
npm install --save-dev @creditkarma/thrift-typescript
```

### Modify package.json
Add a script in `package.json`:  
```
"codegen": "thrift-typescript --target thrift-server --sourceDir thrift --outDir src/codegen"
```

### Thrift IDL
The Thrift IDL file locates in the `thrift` folder.
* The demo IDL has a `getUserInfo` method which returns users name and email.

### Codegen
```sh
$ npm run codegen
```
It will read the IDL in `./thrift` and create Thrift related files in `./src/codegen`  

### Start

```sh
$ npm start
```
Visit `localhost:3000`
