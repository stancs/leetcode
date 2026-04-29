// Last updated: 4/29/2026, 10:36:52 AM
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let num = x;
    let res = 0;
    let sign = 1;
    if(x < 0) {
        sign = -1;
        num = -num;
    }
    while(num !== 0) {
        res *= 10;
        res += num % 10;
        num = Math.floor(num / 10);
        console.log(`num=${num}, res=${res}`);
    }
    console.log(res);
    const left = -Math.pow(2, 31);
    const right = Math.pow(2, 31) - 1;
    console.log(left);
    console.log(right);
    if(left <= res && res <= right) {
        return sign * res;
    } else {
        return 0;
    }
};

/*
// 5:00s
// O(n) time | O(n) space
var reverse = function(x) {
    let str = x.toString();
    let sign = 1;
    if(str.startsWith('-')) {
        sign = -1;
        str = str.slice(1);
    }
    const rev = str.split('').reverse().join('');
    const num = sign * Number(rev);
    const left = -Math.pow(2, 31);
    const right = Math.pow(2, 31) - 1;
    if(left <= num && num <= right) {
        return num;
    } else {
        return 0;
    }
};
*/