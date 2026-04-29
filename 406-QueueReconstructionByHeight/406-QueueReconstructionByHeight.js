// Last updated: 4/29/2026, 10:30:29 AM
/**
 * @param {number[][]} people
 * @return {number[][]}
 */
// 45:00s
// O(n*log(n)) time | O(n) space
var reconstructQueue = function(people) {
    people.sort((a,b) => {
        const [heightA, kA] = a;
        const [heightB, kB] = b;
        if(heightA !== heightB) {
            return heightB - heightA;
        } else {
            return kA - kB;
        }
    });
    console.log(people);
    
    const output = [];
    for(let i = 0; i < people.length; i++) {
        const person = people[i];
        const [h, k] = person;
        output.splice(k, 0, person);
    }
    return output;
};