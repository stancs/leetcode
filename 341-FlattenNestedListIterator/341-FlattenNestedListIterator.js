// Last updated: 5/21/2026, 10:01:46 PM
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
19 *     Return the nested list that this NestedInteger holds, if it holds a nested list
20 *     Return null if this NestedInteger holds a single integer
21 *     @return {NestedInteger[]}
22 *     this.getList = function() {
23 *         ...
24 *     };
25 * };
26 */
27/**
28 * @constructor
29 * @param {NestedInteger[]} nestedList
30 */
31var NestedIterator = function(nestedList) {
32    // this.nestedList = nestedList;
33    // this.currIdx = 0;
34    this.stack = [];
35    for(let i = nestedList.length - 1; i >= 0; i--) {
36        this.stack.push(nestedList[i]);
37    }
38};
39
40
41/**
42 * @this NestedIterator
43 * @returns {boolean}
44 */
45NestedIterator.prototype.hasNext = function() {
46    // if(this.currIdx < this.nestedList.length) {
47    //     return true;
48    // }
49    // return false;
50    
51    while(this.stack.length > 0) {
52        let top = this.stack[this.stack.length - 1];
53
54        if(top.isInteger()) {
55            return true;
56        }
57
58        this.stack.pop();
59
60        let list = top.getList();
61        for(let i = list.length - 1; i >= 0; i--) {
62            this.stack.push(list[i]);
63        }
64    }
65
66    return false;
67};
68
69/**
70 * @this NestedIterator
71 * @returns {integer}
72 */
73NestedIterator.prototype.next = function() {
74    // const res = this.nestedList[this.currIdx];
75    // this.currIdx++;
76    // return res;
77    return this.stack.pop().getInteger();
78};
79
80/**
81 * Your NestedIterator will be called like this:
82 * var i = new NestedIterator(nestedList), a = [];
83 * while (i.hasNext()) a.push(i.next());
84*/