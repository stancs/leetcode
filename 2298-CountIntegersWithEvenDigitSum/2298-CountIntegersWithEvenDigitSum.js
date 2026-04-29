// Last updated: 4/29/2026, 10:21:16 AM
/**
 * @param {number} num
 * @return {number}
 */
var countEven = function(num) {
    const check = i => {
        const arr = i.toString().split('').map(ch => parseInt(ch));
        console.log(`arr=${arr}`)
        const sum = arr.reduce((acc, val) => acc + val, 0);
        console.log(`sum=${sum}`);
        return sum % 2 === 0;
    }
    let count = 0;
    for(let i = 1; i <= num; i++) {
        console.log(i)
        if(check(i)) {
            count++;
        }
    }
    return count;
};