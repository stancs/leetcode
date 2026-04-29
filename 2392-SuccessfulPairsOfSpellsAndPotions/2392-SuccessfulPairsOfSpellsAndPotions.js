// Last updated: 4/29/2026, 10:20:47 AM
/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
    const n = potions.length;
    const binarySearch = (spell, sortedPotions) => {
        // console.log(`sorted potions: ${sortedPotions}`)
        let left = 0;
        let right = n - 1;
        while(left <= right) {
            const mid = Math.floor((left + right) / 2);
            // console.log(`left: ${left}, mid: ${mid}, right: ${right}`)
            if(spell * sortedPotions[mid] >= success) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return left;
    }
    const res = [];
    potions.sort((a, b) => a - b);
    for(const spell of spells) {
        // console.log(`spell: ${spell}`)
        const idx = binarySearch(spell, potions);
        // console.log(idx);
        res.push(n - idx);
    }
    return res;
};