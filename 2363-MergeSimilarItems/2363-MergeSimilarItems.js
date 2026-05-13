// Last updated: 5/13/2026, 12:30:00 AM
1/**
2 * @param {number[][]} items1
3 * @param {number[][]} items2
4 * @return {number[][]}
5 */
6var mergeSimilarItems = function(items1, items2) {
7    const map = new Map();
8    for(const [v, w] of items1) {
9        const currW = map.get(v);
10        if(currW === undefined) {
11            map.set(v, w);
12        } else {
13            map.set(v, currW + w)
14        }
15    }
16    for(const [v, w] of items2) {
17        const currW = map.get(v);
18        if(currW === undefined) {
19            map.set(v, w);
20        } else {
21            map.set(v, currW + w)
22        }
23    }
24    const keys = Array.from(map.keys());
25    keys.sort((a, b) => a - b);
26    console.log(`keys: ${keys}`)
27    const res = [];
28    for(const key of keys) {
29        res.push([key, map.get(key)])
30    }
31    return res;
32};