// Last updated: 4/29/2026, 10:24:02 AM
/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
// 2022-11-10
// 44:48s
// O(n)
// O(n)
var numOfMinutes = function(n, headID, manager, informTime) {
    const managerMap = new Array(n).fill(null).map(() => new Set());
    for(let i = 0; i < n; i++) {
        const each = manager[i];
        if(each !== -1) {
            managerMap[each].add(i);    
        }
    }
    console.log(managerMap);
    
    const children = id => {
        return managerMap[id];
    }
    
    let queue = [ [headID, 0] ];
    let max = 0
    while(queue.length !== 0) {
        const newQueue = [];
        for(const [parent, time] of queue) {
            if(time > max) {
                max = time;
            }
            for(const child of children(parent)) {
                console.log(`child: ${child}`);
                newQueue.push([child, time + informTime[parent]]);
            }
        }
        queue = newQueue;
    }
    return max;
};