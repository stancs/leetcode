// Last updated: 5/7/2026, 4:36:56 PM
1/**
2 * @param {number} numBottles
3 * @param {number} numExchange
4 * @return {number}
5 */
6var numWaterBottles = function(numBottles, numExchange) {
7    let numDrink = 0;
8    let curr = numBottles;
9    let r = 0;
10    while(curr !== 0) {
11        numDrink += curr;
12        curr += r;
13        r = curr % numExchange;
14        curr = (curr - r) / numExchange;
15    }
16    return numDrink;
17};