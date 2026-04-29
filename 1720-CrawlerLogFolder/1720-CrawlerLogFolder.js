// Last updated: 4/29/2026, 10:23:03 AM
/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
    const stack = [];
    for(const log of logs) {
        console.log(log);
        if(log === '../') {
            if(stack.length > 0) {
                stack.pop();
            }
        } else if(log === './') {
            // do nothing
        } else {
            const folder = log.split('/')[0];
            stack.push(folder);
        }
    }
    return stack.length;
};