// Last updated: 4/29/2026, 10:21:44 AM
/**
 * @param {number} n
 * @param {number[]} quantities
 * @return {number}
 */
var minimizedMaximum = function(n, quantities) {
    const sum = quantities.reduce((acc, val) => {
        return acc + val;
    }, 0);
    console.log(`n: ${n}`)
    console.log(`sum: ${sum}`)
    let val =  Math.ceil(sum / n);
    let inc = 1;
    for(let i = val; i <= sum; i = i + inc) {
        const stores = quantities.map(q => Math.ceil(q / i));
        const nStores = stores.reduce((acc, val) => acc + val, 0);
        console.log(`nStores: ${nStores}`)
        if(n >= nStores) {
            return i;
        }
        const diff = nStores - n;
        console.log(`diff: ${diff}`);
        inc = Math.ceil(diff / n);
    }

};

var minimizedMaximum = function(n, quantities) {
    let left = 1;
    let right = Math.max(...quantities);

    const canDistribute = maxLoad => {
        const nStores = quantities.map(val => Math.ceil(val / maxLoad));
        const totalStores = nStores.reduce((acc, val) => acc + val, 0);
        return totalStores <= n;
    }

    while(left < right) {
        const mid = Math.floor((left + right) / 2);
        if(canDistribute(mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return right;
}