// Last updated: 4/29/2026, 10:36:35 AM
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    for(const ch of s) {
        switch(ch) {
            case '(':
            case '{':
            case '[':
                stack.push(ch);
                break;
            case ')':
                if(stack[stack.length - 1] === '(') {
                    stack.pop();
                } else {
                    return false;
                }
                break;
            case '}':
                if(stack[stack.length - 1] === '{') {
                    stack.pop();
                } else {
                    return false;
                }
                break;
            case ']':
                if(stack[stack.length - 1] === '[') {
                    stack.pop();
                } else {
                    return false;
                }
                break;
        }
    }
    return stack.length === 0;
};