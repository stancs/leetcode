// Last updated: 5/21/2026, 10:02:16 PM
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var longestCommonPrefix = function(arr1, arr2) {
    let maxLenPrefix = 0;
    for(let i = 0; i < arr1.length; i++) {
        for(let j = 0; j < arr2.length; j++) {
            const n1 = arr1[i].toString();
            const n2 = arr2[j].toString();
            if(n1.length < maxLenPrefix || n2.length < maxLenPrefix) {
                continue;
            }
            let idx = 0;
            while(idx < n1.length && idx < n2.length) {
                if(n1[idx] === n2[idx]) {
                    idx++;
                } else {
                    break;
                }
            }
            if(idx > maxLenPrefix) {
                maxLenPrefix = idx;
            }
        }
    }
    return maxLenPrefix;
};

var longestCommonPrefix = function(arr1, arr2) {
    let maxLen = 0;
    const prefixSet = new Set();

    for(const num of arr1) {
        const str = num.toString();

        for(let i = 1; i <= str.length; i++) {
            const prefix = str.slice(0, i);
            prefixSet.add(prefix);
        }
    }

    console.log(prefixSet);

    for(const num of arr2) {
        const str = num.toString();
        for(let i = 1; i <= str.length; i++) {
            const prefix = str.slice(0, i);
            if(prefixSet.has(prefix)) {
                if(prefix.length > maxLen) {
                    maxLen = prefix.length;
                }
            }
        }
    }

    return maxLen;
}