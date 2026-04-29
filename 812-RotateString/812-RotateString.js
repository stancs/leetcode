// Last updated: 4/29/2026, 10:27:35 AM
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
// 3:37s
// T O(n)
// S O(n)
var rotateString = function(s, goal) {
    for(let i = 1; i <= s.length; i++) {
        const tmpStr = s.substring(i) + s.substring(0, i)
        console.log(tmpStr);
        if(tmpStr === goal) {
            return true;
        }
    }
    return false;
};