// Last updated: 4/29/2026, 10:35:55 AM
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
// O(log(n)) time | O(1) space
var myPow = function(x, n) {
    if(n > 0) {
        return myPowHelper(x, n);
    } else if (n < 0) {
        return myPowHelper(1/x, -n);
    } else {
        return 1;
    }
};

function myPowHelper(x, n) {
    let output = 1;
    let component = x;
    // O(log(n))
    for(let i = n; i >= 1; i = Math.floor(i / 2)) {
        if(i % 2 === 1) {
            output *= component;
        } 
        component = component * component;
    }
    // O(n)
    // for(let i = 0; i < n; i++) {
    //     output *= x;
    // }
    return output;
}