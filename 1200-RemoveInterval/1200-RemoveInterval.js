// Last updated: 4/29/2026, 10:25:28 AM
/**
 * @param {number[][]} intervals
 * @param {number[]} toBeRemoved
 * @return {number[][]}
 */
var removeInterval = function(intervals, toBeRemoved) {
    const [ra, rb] = toBeRemoved;
    console.log(`To be removed: [${ra}, ${rb}]`);
    const doesMeet = (a, b) => {
        if(rb <= a || ra >= b) {
            return false;
        }
        return true;
    }
    const result = [];
    for(const interval of intervals) {
        const [a, b] = interval;
        if(doesMeet(a, b)) {
            if(ra <= a && b <= rb) {
                continue;
            } 
            if(a < ra) {
                result.push([a, ra]);
            }
            if(rb < b) {
                result.push([rb, b]);
            }
        } else {
            result.push(interval);
        }
    }
    return result;
};