// Last updated: 4/29/2026, 10:27:04 AM
/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    const canFinish = k => {
        let sum = 0;
        for(const pile of piles) {
            const t = Math.ceil(pile / k);
            sum += t;
        }
        return sum <= h;
    }

    let left = 1;
    let right = Math.max(...piles);

    while(left <= right) {
        const mid = Math.floor((left + right) / 2);

        if(canFinish(mid)) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return left;
};