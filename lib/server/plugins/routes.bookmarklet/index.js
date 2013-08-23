// Generated by CoffeeScript 1.6.3
var BookmarkletView;

BookmarkletView = require("./bookmarklet");

exports.require = ["server"];

exports.plugin = function(server) {
  var e, view;
  console.log("go to /bookmarklet and run it in any browser to start recap");
  try {
    view = new BookmarkletView();
    view.render(function() {
      return console.log("DD");
    });
    return console.log(view.section.toString(), "G");
  } catch (_error) {
    e = _error;
    return console.error(e.stack);
  }
};