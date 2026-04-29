// Last updated: 4/29/2026, 10:25:29 AM
/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
    const arr = new Array(num_people).fill(0);
    let remains = candies;
    let count = 1;
    while(remains > 0) {
        for(let i = 0; i < num_people; i++) {
            const numCandies = count + i;
            if((remains - numCandies) >= 0) {
                arr[i] += numCandies;    
                remains -= numCandies;
            } else {
                arr[i] += remains;
                remains = 0;
                break;
            }
            // console.log(arr);
            // console.log(`remains: ${remains}`);
        }
        count += num_people;
    }
    return arr;
};