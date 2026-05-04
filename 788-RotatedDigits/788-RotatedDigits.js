// Last updated: 5/4/2026, 10:32:48 AM
1/**
2 * @param {number} n
3 * @return {number}
4 */
5var rotatedDigits = function(n) {
6    let count = 0;
7    const rotate = str => {
8        const arr = [];
9        for(let i = 0; i < str.length; i++) {
10            const ch = str[i];
11            if('347'.includes(ch)) {
12                return [false, null];
13            } else if('018'.includes(ch)) {
14                arr.push(ch);
15            } else if(ch === '2') {
16                arr.push('5');
17            } else if(ch === '5') {
18                arr.push('2');
19            } else if(ch === '6') {
20                arr.push('9');
21            } else if(ch === '9') {
22                arr.push('6');
23            }
24        }
25        const rotated = arr.join('');
26        return [true, rotated];
27    }
28    for(let i = 1; i <= n; i++) {
29        const str = i.toString();
30        const [isValid, rotated] = rotate(str);
31        if(isValid && rotated !== str) {
32            count++;
33        }
34    }
35    return count;
36};