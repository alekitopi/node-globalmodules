# node-globalmodules
> A package for be able to use a global node_modules folder so you can save disk space on your server.

This package allows you to have all packages on a global folder so every time you need to use some package, you don't need to have duplicated modules.
Also, when you require a package that is not installed on the server, it will be installed on the global folder automatically so you don't have to.

## Usage
It's very simple to use this package, you only need to install this package on the project folder and require it on your code. For example:
```bash
npm install globalmodules
```
And then on your code you can use this module on two ways.
1. Simplified:
```js
const gen = require("globalmodules")("randomcode");

gen(6);
```
2. Extended:
```js
const gm = require("globalmodules");
const gen = gm("randomcode");

gen(6);
```