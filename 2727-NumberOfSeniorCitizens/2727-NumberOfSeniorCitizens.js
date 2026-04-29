// Last updated: 4/29/2026, 10:19:48 AM
/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
    let count = 0;
    for(const str of details) {
        const ageStr = str.slice(11, 13);
        console.log(ageStr);
        const age = parseInt(ageStr);
        if(age > 60) {
            count++;
        }
    }
    return count;
};