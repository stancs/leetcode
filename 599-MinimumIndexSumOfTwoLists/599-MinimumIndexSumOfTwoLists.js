// Last updated: 4/29/2026, 10:29:12 AM
/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
// 9:25s
// O(n1 + n2) time | O(1) space
var findRestaurant = function(list1, list2) {
    const hash1 = {};
    for(let i = 0; i < list1.length; i++) {
        const name1 = list1[i];
        hash1[name1] = i;
    }
    
    let minIdxSum = Infinity;
    let output = [];
    for(let j = 0; j < list2.length; j++) {
        const name2 = list2[j];
        if(hash1[name2] !== undefined) {
            if(hash1[name2] + j < minIdxSum) {
                minIdxSum = hash1[name2] + j;
                output = [ name2 ];
            } else if (hash1[name2] + j === minIdxSum) {
                output.push(name2);
            }
        } 
    }
    return output;
};