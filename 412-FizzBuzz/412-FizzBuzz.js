// Last updated: 4/29/2026, 10:30:30 AM
/**
 * @param {number} n
 * @return {string[]}
 */
// Time: 6:43s
// O(n)
var fizzBuzz = function(n) {
    const arr = Array(n).fill(0);
    for(let i = 0; i < n; i++) {
        arr[i] = determineFizzBuzz(i+1);
    }
    return arr;
};

function determineFizzBuzz(n) {
    if(n % 3 === 0 && n % 5 === 0) {
        return "FizzBuzz";
    } else if(n % 3 === 0) {
        return "Fizz";
    } else if(n % 5 === 0) {
        return "Buzz";
    } else {
        return n.toString();
    }
}