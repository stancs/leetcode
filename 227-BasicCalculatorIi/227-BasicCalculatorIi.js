// Last updated: 4/29/2026, 10:32:35 AM
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    const stack = [];
    let num = 0;
    const isNum = ch => {
        return '0123456789'.includes(ch);
    }
    const isOp = ch => {
        return '+-*/'.includes(ch);
    }
    let op = '+';

    for(let i = 0; i < s.length; i++) {
        const ch = s[i];
        // console.log('ch: ', ch);
        // console.log(ch);

        if(isNum(ch)) {
            num = num * 10 + parseInt(ch);
        }

        if(isOp(ch) || i === s.length - 1) {
            if(op === '+') {
                stack.push(num)
            } else if(op === '-') {
                stack.push(-num);
            } else if(op === '*') {
                stack.push(stack.pop() * num);
            } else if(op === '/') {
                stack.push(Math.trunc(stack.pop() / num));
            }
            op = ch;
            num = 0;
        }
        // console.log('num: ', num);
        // console.log('op: ', op);
    }

    // console.log('stack: ', stack);
    return stack.reduce((a, b) => a + b, 0);
};