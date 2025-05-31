// Modules
// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternative-flavor");

// import "./filePath" --> like ES6
require("./7-mind-grenade"); // runs file directly

sayHi("Emre");
sayHi(names.john);
sayHi(names.peter);
