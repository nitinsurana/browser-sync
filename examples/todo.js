"use strict";

var browserSync = require("../index").create();
var myPlugin = require("../../my-bs-plugin");
var config = {
    proxy: "http://todomvc.com/examples/backbone/",
    // proxy: 'https://www.w3schools.com/angular/tryit.asp?filename=try_ng_todo_app',
    //files: ["app/css/*.css"]
    minify: false,
    "plugins": [myPlugin]
};

browserSync.init(config, function (err, bs) {
    // Full access to Browsersync object here
    console.log(bs.getOption("urls"));
});


