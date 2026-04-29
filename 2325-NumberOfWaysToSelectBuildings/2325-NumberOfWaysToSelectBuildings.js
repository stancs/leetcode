// Last updated: 4/29/2026, 10:21:04 AM
/**
 * @param {string} s
 * @return {number}
 */
var numberOfWays = function(s) {
    const n = s.length;
    // const list = [];
    let count = 0;
    const dfs = (path, idx) => {
        if(path.length === 3) {
            // list.push(path);
            count++;
            return;
        }
        const last = path.length > 0? path[path.length - 1]: null;
        for(let i = idx; i < n; i++) {
            const digit = s[i];
            if(last !== digit) {
                const newPath = path.concat(digit);
                dfs(newPath, i+1);
            }
        }
    }
    dfs([], 0);
    // console.log(list);
    return count;
};

var numberOfWays = function(s) {
    const n = s.length;
    let count = 0;

    // Arrays to store the number of '0's and '1's up to each position
    const zeros = Array(n).fill(0);
    const ones = Array(n).fill(0);

    // Fill the zeros and ones arrays
    for (let i = 0; i < n; i++) {
        if (i > 0) {
            zeros[i] = zeros[i - 1];
            ones[i] = ones[i - 1];
        }
        if (s[i] === '0') {
            zeros[i]++;
        } else {
            ones[i]++;
        }
    }

    // Traverse the string and count valid combinations
    for (let i = 1; i < n - 1; i++) {
        if (s[i] === '0') {
            // If the current building is '0', we need a '1' before and after it
            count += ones[i - 1] * (ones[n - 1] - ones[i]);
        } else {
            // If the current building is '1', we need a '0' before and after it
            count += zeros[i - 1] * (zeros[n - 1] - zeros[i]);
        }
    }

    return count;
};