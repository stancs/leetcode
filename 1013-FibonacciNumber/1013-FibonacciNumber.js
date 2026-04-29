// Last updated: 4/29/2026, 10:26:30 AM
/**
 * @param {number} n
 * @return {number}
 */
// T: 2:12s
// TC: O(n)
// SC: O(n)
var fib = function(n) {
    const map = {};
    map[0] = 0;
    map[1] = 1;
    return fibRecursive(n, map);
};

function fibRecursive(n, map) {
    if(map[n] !== undefined) {
        return map[n];
    }
    
    return fibRecursive(n-1, map) + fibRecursive(n-2, map);
}

var fib = function(n) {
    if(n <= 1) {
        return n;
    }
    const arr = new Array(n+1).fill(0);
    arr[1] = 1;
    for(let i = 2; i <= n; i++) {
        arr[i] = arr[i-1] + arr[i-2];
    }
    return arr[n];
};

var fib = function(n) {
    if(n <= 1) {
        return n;
    }
    const map = {};
    map[0] = 0;
    map[1] = 1;
    return fibHelper(n, map);
};

function fibHelper(n, map) {
    if(map[n] !== undefined) {
        return map[n];
    } else {
        return fibHelper(n - 1, map) + fibHelper(n - 2, map);
    }
}




