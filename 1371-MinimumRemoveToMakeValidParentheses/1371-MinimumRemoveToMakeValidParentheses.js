// Last updated: 4/29/2026, 10:24:47 AM
/**
 * @param {string} s
 * @return {string}
 */

var minRemoveToMakeValid = function(s) {
    const arr = s.split('');
    const stack = [];
    let output = [];
    for(let i = 0; i < arr.length; i++) {
        const ch = arr[i];
        if(ch === '(') {
            stack.push(i);
            output.push(ch);
        } else if(ch === ')') {
            if(stack.length > 0) {
                stack.pop();
                output.push(ch);
            } else {
                output.push(null);
            }
        } else {
            output.push(ch);
        }
    }
    console.log(stack);
    if(stack.length > 0) {
        for(const idx of stack) {
            output[idx] = null;
        }
    }
    console.log(output);
    
    const newOutput = output.filter(ch => ch !== null);
    console.log(newOutput);
    return newOutput.join('');
    
};
/*
// 40:00s
// O(n) time | O(n) space
var minRemoveToMakeValid = function(s) {
    const hash = {
        '(': 1,
        ')': -1,
    };
    let sum = 0, count = 0;
    const remove = {};
    const open = [], close = [];
    for(let i = 0; i < s.length; i++) {
        const char = s[i];
        if(hash[char]) {
            sum += hash[char];
            if(sum < 0) {
                count++;
                sum = 0;
                remove[i] = true;
                console.log(`remove ${char} in index: ${i}`);
            } else {
                if(char === '(') {
                    open.push(i);
                } else {
                    close.push(i);
                }
            }
        } 
    }
    console.log(`sum = ${sum}`);
    if(sum > 0) {
        for(let i = 0; i < sum; i++) {
            remove[open.pop()] = true;    
        }
    } else if(sum < 0) {
        for(let i = 0; i < -sum; i++) {
            remove[close.pop()] = true;
        }
    }
    let output = '';
    for(let i = 0; i < s.length; i++) {
        if(!remove[i]) {
            output += s[i];    
        }
    }
    return output;
};
*/