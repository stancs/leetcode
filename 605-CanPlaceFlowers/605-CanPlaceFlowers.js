// Last updated: 4/29/2026, 10:29:09 AM
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    for(let i = 0; i < n; i++) {
        console.log(flowerbed);
    
        let planted = false;
        for(let j = 0; j < flowerbed.length; j++) {
            if(flowerbed[j] === 1) {
                continue;
            }
            let left = true, right = true;
            if(j - 1 >= 0) {
                left = flowerbed[j-1] === 0;
            }
            if(j + 1 < flowerbed.length) {
                right = flowerbed[j+1] === 0;
            }
            if(left && right) {
                flowerbed[j] = 1;
                planted = true;
                break;
            }
        }
        if(!planted) {
            return false;
        }
    }
    return true;
};