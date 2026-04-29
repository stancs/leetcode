// Last updated: 4/29/2026, 10:25:36 AM
/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */

/*
var countSteppingNumbers = function(low, high) {
    
    let res = [];
    
    const find = (current) => {
        if (current > high) return;
        if (current >= low) res.push(current);
        
        const lastDigit = current % 10;
        if (lastDigit > 0) find(current * 10 + lastDigit - 1);
        if (lastDigit < 9) find(current*10+lastDigit+1);
    }
    
    if (low == 0) res.push(0);
    for (let i = 1; i<= 9; i++) {
        find(i);
    }
    
    res.sort((a,b) => a-b);
    
    return res;
};
*/

// 31:25s
// 
var countSteppingNumbers = function(low, high) {
    let arr = [0,1,2,3,4,5,6,7,8,9];
    
    const output = [];
    
    while(arr.length !== 0) {
        const newArr = [];
        // console.log('========================================');
        for(let i = 0; i < arr.length; i++) {
            const num = arr[i];
            if(num >= low && num <= high) {
                output.push(num);
            }
            if(num === 0 || num > high) {
                continue;
            }
            
            const nextNums = getNextSN(num, high);
            console.log(`num=${num}, next=${nextNums}`);
            newArr.push(...nextNums);
        }
        arr = newArr;
    }
    console.log(output);
    return output.sort((a,b) => a-b);
};

function getNextSN(num) {
    const lastDigit = num % 10;
    const candidate1 = num * 10 + lastDigit + 1;
    const candidate2 = num * 10 + lastDigit - 1;
    if(lastDigit === 0) {
        return [candidate1];    
    } else if(lastDigit === 9) {
        return [candidate2];
    } else {
        return [candidate1, candidate2];    
    }
}
