// Last updated: 4/29/2026, 10:28:15 AM
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const res = [];
    const n = temperatures.length;
    for(let i = 0; i < n; i++) {
        let answer = 0;
        for(let j = i+1; j < n; j++) {
            if(temperatures[i] < temperatures[j]) {
                answer = j - i;
                break;
            }
        }
        res.push(answer);
    }
    // console.log(res);
    return res;
};

var dailyTemperatures = function(temperatures) {
    const n = temperatures.length;
    const stack = [];
    const answer = new Array(n).fill(0);
    
    for(let i = 0; i < n; i++) {
        while(stack.length !== 0 && temperatures[stack[stack.length - 1]] < temperatures[i]) {
            const j = stack.pop();
            answer[j] = i - j;
        }
        stack.push(i);
    }
    return answer;
};