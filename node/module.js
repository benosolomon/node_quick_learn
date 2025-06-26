const pathMod = require('path');
console.log(__filename);
console.log(pathMod.basename(__filename));
const utilMod = require('util');
console.log(utilMod);
const first = require('./first.js');
first();
const ranNum = require('./randomNum.js');
console.log(ranNum.random(50));