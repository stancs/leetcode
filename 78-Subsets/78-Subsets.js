// Last updated: 4/29/2026, 10:35:07 AM
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// bfs
var subsets = function(nums) {
    const ans = [];
    const bfs = curr => {
        ans.push(curr);
        
        for(let i = 0; i < nums.length; i++) {
            const num = nums[i];
            if(!curr.includes(num)) {
                if(curr.length === 0) {
                    const newCurr = [ num ];
                    bfs(newCurr);
                } else {
                    const lastDigit = parseInt(curr[curr.length - 1]);
                    if(num > lastDigit) {
                        const newCurr = curr.concat([ num ]);
                        bfs(newCurr);
                    }
                }
            }
        }
    }
    
    bfs([]);
    return ans;
};

// backtrack 1
var subsets = function(nums) {
    const ans = [];
    const backtrack = curr => {
        ans.push([...curr]);
        
        for(const num of nums) {
            if(!curr.includes(num)) {
                if(curr.length === 0 || num > parseInt(curr[curr.length - 1])) {
                    curr.push(num);
                    backtrack(curr);
                    curr.pop();    
                } 
            }
        }
    }
    
    backtrack([]);
    return ans;
};

// backtrack 2
var subsets = function(nums) {
    const ans = [];
    const backtrack = (curr, i) => {
        ans.push([...curr]);
        
        for(let j = i; j < nums.length; j++) {
            curr.push(nums[j]);
            backtrack(curr, j+1);
            curr.pop();
        }
    }
    
    backtrack([], 0);
    return ans;
};