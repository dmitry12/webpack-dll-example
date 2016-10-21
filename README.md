# Webpack dll example

Minimal working solution by extracting vendor files and using DLL plugin for increasing webpack build time.

## Install:
```
npm install
npm start
```

## Webpack output
```
Hash: e40d51ae6c6610d1c16e
Version: webpack 1.13.2
Time: 2965ms
        Asset     Size  Chunks             Chunk Names
dll.vendor.js  1.75 MB       0  [emitted]  vendor
   [0] dll vendor 12 bytes {0} [built]
   [1] ./app/vendors.js 74 bytes {0} [built]
    + 174 hidden modules
Hash: 6245c884d5af750f72f6
Version: webpack 1.13.2
Time: 1494ms
     Asset       Size  Chunks             Chunk Names
  build.js    2.67 kB       0  [emitted]  main
index.html  279 bytes          [emitted]
```
