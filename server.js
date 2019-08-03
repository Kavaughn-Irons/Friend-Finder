const express = require("express");
const path = require("path");
const router = require("./routing/htmlRoutes")

const app = express();

app.use(router);

app.listen(3000,function(){
    console.log("Working...");
});

