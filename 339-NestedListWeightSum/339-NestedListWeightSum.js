// Last updated: 4/29/2026, 10:31:05 AM
/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {NestedInteger[]} nestedList
 * @return {number}
 */
var depthSum = function(nestedList) {
    return depthSumHelper(nestedList, 1);
};

function depthSumHelper(nestedList, depth) {
    console.log(`depth: ${depth}`);
    let sum = 0;
    for(let i = 0; i < nestedList.length; i++) {
        const elmt = nestedList[i];
        console.log(elmt);
        if(elmt.isInteger() === true) {
            // console.log(`elmt is a single value`);
            sum += elmt.getInteger() * depth;
        } else {
            // console.log(`elmt is an array`)
            sum += depthSumHelper(elmt.getList(), depth + 1);
        }
        console.log(`sum = ${sum}`);
    }
    return sum;
}
