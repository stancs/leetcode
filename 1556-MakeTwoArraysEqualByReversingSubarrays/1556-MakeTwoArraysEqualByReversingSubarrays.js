// Last updated: 4/29/2026, 10:23:47 AM
/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    if(target.length !== arr.length) {
        return false;
    }
    const targetHash = {};
    const arrHash = {};
    setHash(target, targetHash);
    setHash(arr, arrHash);
    
    console.log(targetHash);
    console.log(arrHash);
    
    const keys1 = Object.keys(targetHash);
    const keys2 = Object.keys(arrHash);
    if(keys1.length !== keys2.length) {
        return false;
    }
    for(const key of keys1) {
        if(targetHash[key] !== arrHash[key]) {
            return false;
        }
    }
    return true;
};

function setHash(arr, hash) {
    for(const ch of arr) {
        if(hash[ch] !== undefined) {
            hash[ch]++;
        } else {
            hash[ch] = 1;
        }
    }
}