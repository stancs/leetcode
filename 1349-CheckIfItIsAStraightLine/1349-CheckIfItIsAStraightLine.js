// Last updated: 4/29/2026, 10:24:54 AM
/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
// 9:16s
// O(n) time | O(1) space
var checkStraightLine = function(coordinates) {
    let a, b;
    let isVertical = false;
    for(let i = 0; i < coordinates.length - 1; i++) {
        const p1 = coordinates[i];
        const p2 = coordinates[i+1];
        const [x1, y1] = p1;
        const [x2, y2] = p2;
        if(i === 0) {
            if(x1 === x2) {
                isVertical = true;
            } else {
                a = (y2 - y1) / (x2 - x1);
                b = -a * x1 + y1;    
            }
        } else {
            if(isVertical) {
                if(x1 !== x2) {
                    return false;
                }    
            } else {
                if(y2 !== a * x2 + b) {
                    return false;
                }    
            }
        }
    }
    return true;
};