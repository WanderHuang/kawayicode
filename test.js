var kawayicode = require("./index");

var num1 = 123;
var num2 = 0731;
var num3 = 710380;

var code1 = kawayicode.encode(num1);
var code2 = kawayicode.encode(num2);
var code3 = kawayicode.encode(num3);

console.log(code1, num1);
console.log(code2, num2);
console.log(code3, num3);

console.assert(kawayicode.decode(code1) === num1, { code1, num1 });
console.assert(kawayicode.decode(code2) === num2, { code2, num2 });
console.assert(kawayicode.decode(code3) === num3, { code3, num3 });
