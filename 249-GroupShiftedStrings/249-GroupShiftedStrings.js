// Last updated: 4/29/2026, 10:32:17 AM
/**
 * @param {string[]} strings
 * @return {string[][]}
 */
var groupStrings = function(strings) {
    const output = [];
    for(const str of strings) {
        if(output.length === 0) {
            output.push([ str ]);
        } else {
            let isAdded = false;
            for(const strArr of output) {
                const groupHead = strArr[0];
                if(sameGroup(groupHead, str)) {
                    strArr.push(str);
                    isAdded = true;
                }
            }
            if(!isAdded) {
                output.push([ str ]);
            }
        }
    }
    return output;
};

function sameGroup(str1, str2) {
    if(str1.length !== str2.length) {
        return false;
    }
    let firstDiff;
    for(let i = 0; i < str1.length; i++) {
        let diff = str2[i].charCodeAt(0) - str1[i].charCodeAt(0);
        if(diff < 0) {
            diff += 26;
        }
        if(firstDiff === undefined) {
            firstDiff = diff;
        } else {
            if(firstDiff !== diff) {
                return false;
            }
        }
    }
    return true;
}