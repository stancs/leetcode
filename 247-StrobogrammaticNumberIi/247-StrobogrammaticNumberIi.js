// Last updated: 4/29/2026, 10:32:18 AM
/**
 * @param {number} n
 * @return {string[]}
 */
// O(5^n) time | O(5^n) space
var findStrobogrammatic = function(n) {
    return helper(n, n);
}

var helper = function(n, m) {
    if(n === 0) {
        return [''];
    }
    if(n === 1) {
        return ['0', '1', '8'];
    }
    
    const list = helper(n - 2, m);
    
    const res = [];
    
    for(let i = 0; i < list.length; i++) {
        const s = list[i];
        if(n !== m) {
            res.push('0' + s + '0');
        }
        
        res.push('1' + s + '1');
        res.push('6' + s + '9');
        res.push('8' + s + '8');
        res.push('9' + s + '6');
    }
    return res;
}

/*
var findStrobogrammatic = function(n) {
    const hash = {
        0: '0',
        1: '1',
        6: '9',
        8: '8',
        9: '6',
    };
    
    const setMiddle = ['0', '1', '8'];
    const setFirst = ['1', '6', '8', '9'];
    const setNotFirst = ['0', '1', '6', '8', '9'];
    const output = [];
        
    const quotient = Math.floor(n / 2);
    const remainder = n % 2;
    const targetLen = quotient + remainder;
    
    permute('', n, targetLen, setMiddle, setFirst, setNotFirst, hash, output);
    
    return output;
};

function permute(currStr, n, targetLen, setMiddle, setFirst, setNotFirst, hash, output) {
    console.log(`currStr=${currStr}, targetLen=${targetLen}`)
    if(currStr.length === targetLen) {
        const stroboNum = getMirror(currStr, n, hash);
        console.log(`stroboNum=${stroboNum}`);
        output.push(stroboNum);
        return;
    }
    if(currStr.length === 0) {
        for(let i = 0; i < setFirst.length; i++) {
            const char = setFirst[i];
            const newCurrStr = currStr.concat(char);
            permute(newCurrStr, n, targetLen, setMiddle, setFirst, setNotFirst, hash, output);
        }
    } else if(currStr.length === targetLen - 1 && targetLen % 2 === 1) {
        for(let i = 0; i < setMiddle.length; i++) {
            const char = setMiddle[i];
            const newCurrStr = currStr.concat(char);
            permute(newCurrStr, n, targetLen, setMiddle, setFirst, setNotFirst, hash, output);
        }
    } else {
        for(let i = 0; i < setNotFirst.length; i++) {
            const char = setNotFirst[i];
            const newCurrStr = currStr.concat(char);
            permute(newCurrStr, n, targetLen, setMiddle, setFirst, setNotFirst, hash, output);
        }
    }
}

function getMirror(currStr, n, hash) {
    const arr = currStr.split('');
    if(n % 2 === 0) {
        for(let i = arr.length - 1; i >= 0; i--) {
            const char = arr[i];
            arr.push(hash[char]);
        }
    } else {
        for(let i = arr.length - 2; i >= 0; i--) {
            const char = arr[i];
            arr.push(hash[char]);
        }
    }
    return arr.join('');
}
*/