// Last updated: 1/20/2026, 11:03:33 PM
1/**
2 * @param {number} n
3 * @return {string}
4 */
5var findContestMatch = function (n) {
6    const makePair = arr => {
7        if (arr.length === 1) {
8            return arr[0];
9        }
10        const len2 = arr.length / 2;
11        const arr2 = [];
12        for(let i = 0; i < len2; i++) {
13            const p1 = arr[i];
14            const p2 = arr[arr.length - 1 - i];
15            const newItem = `(${p1},${p2})`
16            arr2.push(newItem);
17        }
18        // console.log(`arr2: ${arr2}`)
19        return makePair(arr2);
20    }
21    const arr = [];
22    for(let i = 1; i <= n; i++) {
23        arr.push(i);
24    }
25    // console.log(arr);
26    const res = makePair(arr);
27    console.log(res);
28    return res;
29};
30
31// 1 2 3 4 5 6 7 8