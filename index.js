/**
 * kawayicode is a password management using javascript basic syntax rules.
 * var kawayicode = require('kawayicode');
 *
 * var password = kawayicode.encode(8137890);
 * var origin = kawayicode.decode(password);
 *
 * Tip:
 *    Don't use in real project for password storage,
 *    otherwise, I will not bear any legal responsibility if something goes wrong.
 *    This project is only use for syntax learning.
 *
 * license MIT
 * @author wander
 */


/** add '0' to left */
function padLeft(str, len = 20) {
  if (str.length >= len) return str;
  var pad = len - str.length;
  return '0'.repeat(pad) + str;
}

/** get faces that computed by num range(0, 9) */
function face(num, base = 1) {
  var zero = '0.0';
  var one = '(0.**.0)';
  var two = `${one}-~[${zero}]`;
  var three = `(${two})+(${one})`;
  var four = `(${two})**(${two})`;
  var five = `(${two})*(${three})-(${one})`;
  var six = `(${two})**(${three})-(${two})`;
  var seven = `(${two})**(${three})-(${one})`;
  var eight = `(${two})**(${three})`;
  var nine = `(${three})**(${two})`;
  var ten = `(${one}+${nine})`;

  var faceNum = [zero, one, two, three, four, five, six, seven, eight, nine][num];
  return `((${faceNum})*(${ten}**${base}))`;
}

/** get faces that computed by integer */
function getIntegerFace(num) {
  let arr = num.toString().split('');
  var len = arr.length;
  return arr.map((val, index) => `${face(Number(val), len - 1 - index)}`).join('+');
}

/** go encode */
function encode(num) {
  if (typeof num !== 'number') {
    console.log('should input num as a number');
    return;
  }
  if (num < 0 || num > 9999999999) {
    console.log('num should among 0 ~ 9999999999');
    return;
  }

  var binaryNum = num.toString(2);

  var str = padLeft(binaryNum, 2**(binaryNum.length));

  var sum = 0;
  var code = [];

  for(var i = 0; i < str.length; i++) {
    if (str[i] === '1') {
      var val = 2**(str.length - 1 - i);
      sum += val;

      var face = `(${getIntegerFace(val)})`;
      code.push(face);
    }
  }

  return code.join('+')
}

/** go decode */
function decode(code) {
  return eval(code);
}

module.exports = {
  encode,
  decode
}
