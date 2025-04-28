require('./xyz.js');
const {calculateSum,multiply} = require('./calculate/index.js');
const data = require('./data.json')
var a = 10;
var b = 20;

console.log(data);
calculateSum(a, b);
multiply(a, b);


