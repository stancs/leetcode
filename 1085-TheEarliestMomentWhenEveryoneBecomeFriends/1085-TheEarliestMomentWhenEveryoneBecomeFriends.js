// Last updated: 4/29/2026, 10:26:01 AM
/**
 * @param {number[][]} logs
 * @param {number} n
 * @return {number}
 */
var earliestAcq = function(logs, n) {
    logs.sort((a, b) => a[0] - b[0]);
    const parents = [...Array(n).keys()];
    console.log(parents);
    
    const updateParents = (arr, f1, f2) => {
        const parent = Math.min(arr[f1], arr[f2]);
        const other = Math.max(arr[f1], arr[f2]);
        for(let i = 0; i < n; i++) {
            if(arr[i] === other) {
                arr[i] = parent;
            }
        }
    }
    
    const checkParents = arr => {
        for(let i = 0; i < n; i++) {
            if(i !== 0 && arr[i-1] !== arr[i]) {
                return false
            }
        }
        return true;
    }
    
    for(const [ts, f1, f2] of logs) {
        console.log(ts, f1, f2);
        updateParents(parents, f1, f2);
        if(checkParents(parents)) {
            return ts;
        }
    }
    return -1;
};