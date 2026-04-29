// Last updated: 4/29/2026, 10:26:11 AM
/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
    let left = Math.min(...weights);
    let right = weights.reduce((acc, val) => acc + val, 0);
    // console.log('right: ',right);
    const canShip = i => {
        // console.log(`canShip: ${i}`)
        let sum = 0;
        let count = 0;
        for(const weight of weights) {
            // console.log(`sum: ${sum}, weight: ${weight}, count: ${count}`)
            if(sum + weight > i) {
                if(weight > i) {
                    return false;
                } else {
                    sum = weight;
                    count++;
                }
            } else {
                sum += weight;
            }
            if(count > days) {
                return false;
            }
        }
        if(sum > 0) {
            count++;
        }
        if(count > days) {
            return false;
        }
        return true;
    }
    while(left < right) {
        const mid = Math.floor((left + right) / 2);
        // console.log(`left: ${left}, right: ${right}, mid: ${mid}`)
        if(canShip(mid)) {
            // console.log('Can ship')
            right = mid;
        } else {
            // console.log('Cannot ship')
            left = mid + 1;
        }
    }
    return right;
};