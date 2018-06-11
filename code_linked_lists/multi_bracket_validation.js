'use strict';

class BalancedBraces {

  balancedBracesFun(str) {

    var stack = [];
    var opening = { '{': '}', '[': ']', '(': ')' };
    var closed = { '}': true, ']': true, ')': true };

    if (str === null){return false;}
    for (var i = 0; i < str.length; i ++) {
      var item = str[i];
      if (opening[item]) {
        stack.push(item);
      } else if (closed[item]) {
        if (opening[stack.pop()] !== item){ return false;
        }
      }

      return stack.length === 0;
    }
  }
}

module.exports = BalancedBraces;
