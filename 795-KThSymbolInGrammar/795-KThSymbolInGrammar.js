// Last updated: 4/29/2026, 10:27:44 AM
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

const map = {};

var kthGrammar = function(n, k) {
    return getKthGrammar(n, k);
    // const row = getRow1(n);
    // const row = getRow2(n);
    // console.log(row);
    // return row[k-1];
};

function getKthGrammar(n, k) {
    if(n === 1) {
        return 0;
    }
    // if k is odd, then keep previous one
    // if k is even, then change
    if(k % 2 === 1) {
        return getKthGrammar(n-1, Math.floor((k+1)/2));
    } else {
        return 1 - getKthGrammar(n-1, Math.floor((k+1)/2));
    }
}

function getRow2(n) {
    if(n === 1) {
        return '0';
    }
    let str = '';
    for(let i = 1; i < n + 1; i++) {
        if(i === 1) {
            str = '0';
            continue;
        }
        str = str.split('').map(ch => ch === '0'? '01': '10').join('');
    }
    return str;
}

function getRow1(n) {
    if(map[n] !== undefined) {
        return map[n];
    }
    
    if(n === 1) {
        return '0'
    }
    const str = getRow(n-1);
    let newStr = '';
    for(const ch of str) {
        if(ch === '0') {
            newStr += '01';
        } else if(ch === '1') {
            newStr += '10';
        }
    }
    map[n] = newStr;
    return newStr;
}