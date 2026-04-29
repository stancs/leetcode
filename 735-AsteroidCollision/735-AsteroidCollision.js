// Last updated: 4/29/2026, 10:28:19 AM
/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    const stack = [];
    for(const asteroid of asteroids) {
        console.log(`asteroid: ${asteroid}`)
        let flag = true;
        while(stack.length > 0 && stack[stack.length - 1] > 0 && asteroid < 0) {
            const abs1 = Math.abs(stack[stack.length - 1]);
            const abs2 = Math.abs(asteroid);
            if(abs1 === abs2) {
                stack.pop();
                flag = false;
                break;
            } else {
                if(Math.abs(stack[stack.length -1]) < Math.abs(asteroid)) {
                    stack.pop();
                } else {
                    flag = false;
                    break;
                }
            }
        }
        if(flag) {
            stack.push(asteroid);
        }
    }
    return stack;
};