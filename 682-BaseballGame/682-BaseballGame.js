// Last updated: 4/29/2026, 10:28:44 AM
/**
 * @param {string[]} operations
 * @return {number}
 */
// 7:44s
var calPoints = function(operations) {
    const records = [];
    for(const op of operations) {
        const top = records.length - 1;
        if(op === '+') {
            const newRecord = records[top] + records[top - 1];
            records.push(newRecord);
        } else if(op === 'D') {
            const newRecord = records[top] * 2;
            records.push(newRecord);
        } else if(op === 'C') {
            records.pop();
        } else {
            const num = parseInt(op);
            records.push(num);
        }
    }
    let sum = 0;
    for(const record of records) {
        sum += record;
    }
    return sum;
};