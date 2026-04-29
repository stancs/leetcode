// Last updated: 4/29/2026, 10:28:53 AM
/**
 * @param {number[]} nums
 * @return {number}
 */
// 2022-12-06
// 50:00s
// O(n)
// O(n)
var pathSum = function(nums) {
    if(nums.length === 0) {
        return 0;
    }
    const map = {};
    const getInfo = num => {
        const numStr = num.toString();
        const depth = numStr[0];
        const pos = numStr[1];
        const val = numStr[2];
        return [depth, pos, val];
    }
    
    for(const num of nums) {
        const [depth, pos, val] = getInfo(num.toString());
        const key = `${depth}${pos}`;
        map[key] = parseInt(val);
    }
    console.log(map);
    
    const left = n => 2 * n - 1;
    const right = n => 2 * n;
    
    let pathSum = 0;
    const dfs = (key, sum) => {
        console.log(`key: ${key}, sum: ${sum}`);
        const depth = key[0];
        const pos = key[1];
        
        const nextDepth = parseInt(depth) + 1;
        const nextLeftPos = left(pos);
        const nextRightPos = right(pos);
        const nextLeftKey = `${nextDepth}${nextLeftPos}`;
        const nextRightKey = `${nextDepth}${nextRightPos}`;
        console.log(`nextLeft: ${nextLeftKey}`);
        console.log(`nextRight: ${nextRightKey}`);
        if(map[nextLeftKey] === undefined && map[nextRightKey] === undefined) {
            console.log(`return and pathSum: ${pathSum}`)
            pathSum += sum;
            return;
        }
        if(map[nextLeftKey] !== undefined) {
            dfs(nextLeftKey, sum + map[nextLeftKey]);
        }
        if(map[nextRightKey] !== undefined) {
            dfs(nextRightKey, sum + map[nextRightKey]);
        }
    }
    const [depth, pos] = getInfo(nums[0]);
    const rootKey = depth + pos;
    const val = map[rootKey];
    dfs(rootKey, val);
    return pathSum;
};