// Last updated: 4/29/2026, 10:32:39 AM
/**
 * @param {string} s
 * @return {number}
 */
// 3:00:00s
// O(n) time | O(n) space
const signChar = {
    '+': true,
    '-': true,
}
const parenthesisChar = {
    '(': true,
    ')': true,
}
const digitChar = {};
for(let i = 0; i <= 9; i++) {
    digitChar[i] = true;
}

var calculate = function(s) {
    const validChar = {
        ...signChar,
        ...parenthesisChar,
        ...digitChar,
    }
    console.log(validChar);
    
    let val = 0;
    let curr;
    const str = s.split('').filter(char => validChar[char]).join('');
    console.log(str);
    
    const stack = [ [] ];
    let level = 0;
    let currDigits = '';
    for(let i = 0; i < str.length; i++) {
        const curr = str[i];
        const next = str[i+1];
        
        if(curr === '(') {
            stack.push([]);
            level++;
        } else if(curr === ')') {
            const value = calculateSimple(stack[level]);
            stack.pop();
            level--;
            stack[level].push(value);
        } else {
            if(digitChar[curr]) {
                currDigits += curr;
                if(!digitChar[next]) {
                    stack[level].push(parseInt(currDigits));
                    currDigits = '';
                }
            } else if(signChar[curr]) {
                stack[level].push(curr);
            }
        }
    }
    const output = calculateSimple(stack[0]);
    return output;
};

function calculateSimple(arr) {
    let currVal;
    let i = 0;
    while(i < arr.length) {
        const currItem = arr[i];
        if(i === 0) {
            currVal = currItem;
            i++;
            continue;
        }
        i++;
        const nextItem = arr[i];
        if(currItem === '+') {
            currVal += nextItem;
        } else if(currItem === '-') {
            currVal -= nextItem;
        }
        i++;
    }
    console.log(currVal);
    return currVal;
}

    