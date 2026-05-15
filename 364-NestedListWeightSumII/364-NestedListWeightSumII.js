// Last updated: 5/14/2026, 5:26:11 PM
1/**
2 * // This is the interface that allows for creating nested lists.
3 * // You should not implement it, or speculate about its implementation
4 * function NestedInteger() {
5 *
6 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
7 *     @return {boolean}
8 *     this.isInteger = function() {
9 *         ...
10 *     };
11 *
12 *     Return the single integer that this NestedInteger holds, if it holds a single integer
13 *     Return null if this NestedInteger holds a nested list
14 *     @return {integer}
15 *     this.getInteger = function() {
16 *         ...
17 *     };
18 *
19 *     Set this NestedInteger to hold a single integer equal to value.
20 *     @return {void}
21 *     this.setInteger = function(value) {
22 *         ...
23 *     };
24 *
25 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
26 *     @return {void}
27 *     this.add = function(elem) {
28 *         ...
29 *     };
30 *
31 *     Return the nested list that this NestedInteger holds, if it holds a nested list
32 *     Return null if this NestedInteger holds a single integer
33 *     @return {NestedInteger[]}
34 *     this.getList = function() {
35 *         ...
36 *     };
37 * };
38 */
39/**
40 * @param {NestedInteger[]} nestedList
41 * @return {number}
42 */
43var depthSumInverse = function(nestedList) {
44    const valArr = [];
45    const depthArr = [];
46    const dft = (node, depth) => {
47        const isArray = Array.isArray(node);
48        console.log(`isArray: ${isArray}`)
49        if(Array.isArray(node)) {
50            for(const child of node) {
51                dft(child, depth + 1)
52            }
53        } else if(node.isInteger()) {
54            // integer
55            const val = node.getInteger();
56            valArr.push(val);
57            depthArr.push(depth);
58        } else {
59            // list
60            const list = node.getList();
61            for(const node of list) {
62                dft(node, depth + 1);
63            }
64        }
65    }
66    dft(nestedList, 0)
67    console.log(valArr);
68    console.log(depthArr);
69    const maxDepth = Math.max(...depthArr);
70    let sum = 0;
71    for(let i = 0; i < valArr.length; i++) {
72        const val = valArr[i];
73        const depth = depthArr[i];
74        const weight = maxDepth - depth + 1;
75        sum += val * weight;
76    }
77    return sum;
78};