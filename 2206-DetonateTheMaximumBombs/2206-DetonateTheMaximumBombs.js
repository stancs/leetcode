// Last updated: 4/29/2026, 10:21:38 AM
/**
 * @param {number[][]} bombs
 * @return {number}
 */
// 2022-12-13
// 25:00s
// O(n+e)
// O(n+e)
var maximumDetonation = function(bombs) {
    const adj = {};
    const len = bombs.length;
    for(let i = 0; i < len; i++) {
        for(let j = 0; j < len; j++) {
            if(i !== j) {
                const [x1, y1, r1] = bombs[i];
                const [x2, y2, r2] = bombs[j];
                const dx = x1 - x2;
                const dy = y1 - y2;
                const lenSquare = dx*dx + dy*dy;
                if(lenSquare <= r1 * r1) {
                    if(adj[i] === undefined) {
                        adj[i] = new Set();
                    }
                    adj[i].add(j);
                }
                if(lenSquare <= r2 * r2) {
                    if(adj[j] === undefined) {
                        adj[j] = new Set();
                    }
                    adj[j].add(i);
                }
            }
        }
    }
    console.log(adj);
    const dfs = (i, visited, obj) => {
        const neighbors = adj[i];
        if(neighbors) {
            for(const neighbor of neighbors) {
                if(!visited[neighbor]) {
                    visited[neighbor] = true;
                    obj.num++;
                    dfs(neighbor, visited, obj);
                }
            }
        }
    }
    let max = 0;
    for(let i = 0; i < len; i++) {
        const obj = { num:  1 };
        const visited = new Array(len).fill(false);
        visited[i] = true;
        dfs(i, visited, obj);
        if(obj.num > max) {
            max = obj.num;
        }
    }
    return max;
};