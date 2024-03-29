const first = require("./ex01");
const initial = require("./ex02");
const last = require("./ex03");
const rest = require('./ex04');
const without = require("./ex06");
const union = require("./ex07");
const intersection = require("./ex08");
const keys = require("./ex12");
const invert = require("./ex15")
const pick = require("./ex16");
const map = require("./ex21");

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

console.log('without:')
console.log(without([1,2,1,0,3,1,4],0,1));

console.log('____')

console.log('union:')
console.log(union([1,2,3], [101,2,1,10], [2,1]));
console.log('____')

console.log('intersection:')
console.log(intersection([1,2,3], [101,2,1,10], [2,1]));

console.log('____')

console.log('keys:')
console.log(keys({one : 1, two : 2, three : 3}));

console.log('____')

console.log('invert:')
console.log(invert({Moe : "Moses", Larry : "Louis", Curly : "Jerome" }));

console.log('____')

console.log('pick:')
const user = {
    firstname: 'Majdi',
    lastname: 'Toumi',
    age: 18
}
console.log(pick(user, 'firstname', 'age'))
console.log(
    pick(user, function(value, key) {
        return Number.isInteger(value)
    })
)

console.log('____')

console.log('map:')
console.log(map([1,2,3], function (num){return num * 3;}));
console.log(map({one : 1, two : 2, three : 3}, function (num, key) {return num * 3;}))


