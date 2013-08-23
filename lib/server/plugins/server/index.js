// Generated by CoffeeScript 1.6.3
var express, pc;

express = require("express");

pc = require("paperclip");

exports.require = ["config"];

exports.plugin = function(config) {
  var app;
  app = express();
  app.engine("pc", pc.adapters.express);
  console.log("listening on port %d", config.port);
  app.listen(config.port);
  return app;
};