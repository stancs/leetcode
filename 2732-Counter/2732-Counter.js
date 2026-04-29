// Last updated: 4/29/2026, 10:19:45 AM
/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let curr = n;
    return function() {
        curr++;
        return curr - 1;
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */