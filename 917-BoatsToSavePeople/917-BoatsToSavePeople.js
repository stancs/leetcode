// Last updated: 4/29/2026, 10:27:00 AM
/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    people.sort((a, b) => a - b);
    let count = 0;
    let i = 0;
    let j = people.length - 1;
    while(i <= j) {
        if(people[i] + people[j] <= limit) {
            i++;
            j--;
            count++;
        } else {
            j--;
            count++;
        }
    }
    return count;
};