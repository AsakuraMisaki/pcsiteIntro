var express = require("express");
let server = express();
let absolutePath = `D:\\GitHub\\Projects\\Android\\GaokaoAPP\\app\\release\\app-release.apk`;

server.get('/', (req, res)=>{
    res.sendFile(absolutePath);
})

server.listen(80);
