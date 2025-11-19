// 03-modules.js

// Load modules using require
const names = require("./04-names.js");
const sayHi = require("./05-utils.js");
const flavor = require("./06-alternative-flavor.js");

require("./07-mind-grenade.js")

sayHi(names.firstName)
sayHi(names.lastName)

// Use the imported modules
console.log("Names:", names)
console.log("Flavors:", flavor)
console.log("Flavor1:", flavor.flavor1)
console.log("Person:", flavor.person)
