// Last updated: 4/29/2026, 10:28:08 AM
/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
    const visited = new Set(deadends);
    
    if(visited.has('0000')) {
        return -1;
    }
    
    const neighbors = str => {
        const res = [];
        for(let i = 0; i < 4; i++) {
            const num = parseInt(str[i]);
            for(const diff of [-1, 1]) {
                const nextNum = (num + diff + 10) % 10;
                const nextStr = str.slice(0, i) + nextNum + str.slice(i+1);
                res.push(nextStr);
            }
        }
        return res;
    }
    
    let queue = [ '0000' ];
    visited.add('0000')
    let steps = 0;
    while(queue.length !== 0) {
        const nextQueue = [];
        for(const node of queue) {
            if(node === target) {
                return steps;
            }
            // console.log(`node: ${node}`);
            // console.log(`neighbors: ${neighbors(node)}`);
            for(const neighbor of neighbors(node)) {
                if(!visited.has(neighbor)) {
                    visited.add(neighbor);
                    nextQueue.push(neighbor);
                }
            }
        }
        queue = nextQueue;
        steps++;
    }
    return -1;
};