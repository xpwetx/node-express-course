// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./04-names.js')
const sayHi = require('./05-utils.js')
const alt = require('./06-alternative-flavor.js')
require('./07-mind-grenade.js')
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)

// Log alternative exports
console.log(alt.items);
console.log(alt.singlePerson);

