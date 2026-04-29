// Last updated: 4/29/2026, 10:31:47 AM
/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
var addOperators = function(num, target) {
    const output = [];
    function helper(curr, remain, diff, curSum, target, output) {
        if(remain.length === 0 && curSum === target) {
            output.push(curr);
            return;
        }

        for(let i = 1; i <= remain.length; i++) {
            const str = remain.slice(0, i);
            if(str.length > 1 && str[0] === '0') {
                return;
            }
            const newRemain = remain.slice(i);
            const n = Number(str);
            if(curr.length > 0) {
                helper(curr + '+' + str, newRemain, n, curSum + n, target, output);
                helper(curr + '-' + str, newRemain, -n, curSum - n, target, output);
                helper(curr + '*' + str, newRemain, diff * n, (curSum - diff) + diff * n, target, output);
            } else {
                helper(str, newRemain, n, n, target, output);
            }
        }
    }
    
    helper('', num, 0, 0, target, output);
    return output;
};