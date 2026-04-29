// Last updated: 4/29/2026, 10:33:08 AM
/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeBitwiseAnd = function(left, right) {
    // const leftBinary = left.toString(2);
    // const rightBinary = right.toString(2);
    // console.log(left, leftBinary);
    // console.log(right, rightBinary);
    // let curr;
    // for(let i = left; i <= right; i++) {
    //     if(curr === undefined) {
    //         curr = i;
    //     } else {
    //         curr = curr & i;
    //     }
    //     if(curr === 0) {
    //         return 0;
    //     }
    // }
    // return curr;
    let currLeft = left;
    let currRight = right;
    console.log(currLeft.toString(2));
    console.log(currRight.toString(2));
        
    let shift = 0;
    while(currLeft !== currRight) {
        currLeft = currLeft >> 1;
        currRight = currRight >> 1;
        console.log(currLeft.toString(2));
        console.log(currRight.toString(2));
        shift++;
    }
    return currLeft << shift;
};