"use strict";

var _utils = require("./utils");

(function () {
  var json = "";

  if (process.stdin.isTTY) {
    var args = process.argv.slice(2);

    if (!args.length) {
      (0, _utils.noArgsError)();
      return;
    }

    (0, _utils.prettyPrint)(args[0]);
    return;
  }

  var stdin = process.openStdin();
  stdin.on('data', function (chunk) {
    return json += chunk;
  });
  stdin.on('end', function () {
    return (0, _utils.prettyPrint)(json);
  });
})();