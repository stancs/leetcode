// Last updated: 4/29/2026, 10:22:19 AM
/**
 * @param {number[]} dist
 * @param {number} hour
 * @return {number}
 */
var minSpeedOnTime = function(dist, hour) {
    const check = speed => {
        let takenTime = 0;
        // for(const eachDist of dist) {
        for(let i = 0; i < dist.length; i++) {
            const eachDist = dist[i];
            if(i !== dist.length - 1) {
                takenTime += Math.ceil(eachDist / speed);       
            } else {
                takenTime += eachDist / speed;
            }
        }
        console.log(`takenTime=${takenTime}`)
        return takenTime <= hour;
    }
    
    let left = 1;
    // let right = Math.ceil(Math.max(...dist) / hour) * dist.length;
    let right = Math.pow(10, 7);
    const initRight = right;
    
    while(left <= right) {
        console.log(`left=${left}, right=${right}`);
        const mid = Math.floor((left + right) / 2);
        console.log(`mid=${mid}`);
        if(check(mid)) {
            console.log(`true`)
            right = mid - 1;
        } else {
            console.log('false')
            left = mid + 1;
        }
    }
    if(left > initRight) {
        return -1;
    }
    return left;
};