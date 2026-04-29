// Last updated: 4/29/2026, 10:36:06 AM
/**
 * @param {number[]} height
 * @return {number}
 */
// 60:00s
// O(n) time | O(n) space
var trap = function(height) {
    let extra = 0;
    let roof = 0;
    for(let i = 0; i < height.length; i++) {
        const h = height[i];
        if(roof <= h) {
            roof = getValidRoof(height, h, i);
            continue;
        }
        extra += roof - h;
    }
    return extra;
};

function getValidRoof(height, h, idx) {
    if(idx === height.length - 1) {
        return 0;
    }
    let max = 0;
    for(let i = idx + 1; i < height.length; i++) {
        if(height[i] >= h) {
            return h;
        }
        if(max < height[i]) {
            max = height[i];
        }
    }
    return max;
}

/*
var trap = function(height) {
    let extra = 0;
    let roof = 0;
    for(let i = 0; i < height.length; i++) {
        const h = height[i];
        if(roof <= h) {
            if(validRoof(height, h, i)) {
                roof = h;    
            } else {
                roof = 0;
            }
            continue;
        }
        extra += roof - h;
    }
    return extra;
};

function validRoof(height, h, idx) {
    if(idx === height.length - 1) {
        return false;
    }
    for(let i = idx + 1; i < height.length; i++) {
        if(height[i] >= h) {
            return true;
        }
    }
    return false;
}
*/
