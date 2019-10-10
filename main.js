let first = require("./ex01.js");
let initial = require("./ex02.js");
let last = require("./ex03.js");
let rest = require('./ex04.js');

console.log('first:')
console.log(first([10,5,'hello',2]));
console.log(first([10,5,'hello',2],2));
console.log(first([10,5,'hello',2],3));

console.log('____')

console.log('inital:')
console.log(initial([5,4,3,2,1]));

console.log('____')

console.log('last:')
console.log(last([10,5,'hello',2]));
console.log(last([10,5,'hello',2],2));
console.log(last([10,5,'hello',2],3));

console.log('____')

console.log('rest:')
console.log(rest([5,4,3,2,1]));

console.log('____')