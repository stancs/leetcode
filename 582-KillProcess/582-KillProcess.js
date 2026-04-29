// Last updated: 4/29/2026, 10:29:16 AM
/**
 * @param {number[]} pid
 * @param {number[]} ppid
 * @param {number} kill
 * @return {number[]}
 */
// 2022-10-29
// 28:12s
// O(n)
// O(1)
var killProcess = function(pid, ppid, kill) {
    const ppidMap = {};
    for(let i = 0; i < ppid.length; i++) {
        const id = ppid[i];
        if(ppidMap[id] === undefined) {
            ppidMap[id] = [i];
        } else {
            ppidMap[id].push(i);
        }
    }
    
    let queue = [ kill ];
    const res = [ kill ];
    while(queue.length !== 0) {
        let children = [];
        for(const id of queue) {
            const indexList = ppidMap[id];
            if(indexList) {
                const idList = indexList.map(index => pid[index]);
                children.push(...idList);    
            }
        }
        queue = children;
        res.push(...children);
    }
    return res;
};
