// Last updated: 4/29/2026, 10:20:55 AM
/**
 * @param {number} total
 * @param {number} cost1
 * @param {number} cost2
 * @return {number}
 */
var waysToBuyPensPencils = function(total, cost1, cost2) {
    let sum = 0;
    let count = 0;
    for(let i = 0; i <= total; i += cost1) {
        const remain = total - i;
        if(remain >= 0) {
            const n2 = Math.floor(remain / cost2);
            count += n2 + 1;
            // console.log(`n2: ${n2}, count: ${count}`)
        }
    }
    return count;
};