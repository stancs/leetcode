// Last updated: 4/29/2026, 10:25:22 AM
/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function(low, high) {
    let num = low;
    const output = [];
    
    num = getNextNum(num, true);
    while(num <= high) {
        output.push(num);
        num = getNextNum(num, false);
    }
    return output;
};

function getNextNum(num, isFirst) {
    let digits = num.toString().split('');
    
    let newDigits = [];
    let firstDigit = Number(digits[0]);
    if(!isFirst) {
       firstDigit++;
    }
    for(let i = 0; i < digits.length; i++) {
        if(firstDigit + i > 9) {
            newDigits = [];
            for(let i = 1; i <= digits.length + 1; i++) {
                newDigits.push(i);
            }
            break;
        } 
        newDigits.push(firstDigit + i);
    }
    
    const newNum = Number(newDigits.join(''));
    if(newNum < num) {
        return getNextNum(newNum);
    } else {
        return newNum;
    }
}