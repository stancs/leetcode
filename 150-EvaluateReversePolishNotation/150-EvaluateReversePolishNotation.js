// Last updated: 4/29/2026, 10:33:49 AM
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = [];
    const isOp = str => {
        return ['+', '-', '/', '*'].includes(str);
    }
    const calculate = (n1, n2, opStr) => {
        switch(opStr) {
            case '+':
                return n1 + n2;
            case '-':
                return n1 - n2;
            case '*':
                return n1 * n2;
            case '/':
                const sign = n1 * n2 > 0? 1: -1;
                return sign * Math.floor(Math.abs(n1) / Math.abs(n2));
            default:
                console.log(`Op: ${opStr} is wrong`)
        }
    }
    for(const token of tokens) {
        if(isOp(token)) {
            if(stack.length < 2) {
                console.err('Stack size should be more than or equal to 2');
            }
            const num2 = stack.pop();
            const num1 = stack.pop();
            const num3 = calculate(num1, num2, token);
            console.log(`${num1} ${token} ${num2} = ${num3}`)
            stack.push(num3);
        } else {
            const num = parseInt(token);
            stack.push(num);
        }
    }
    console.log(stack);
    return stack[0];
};