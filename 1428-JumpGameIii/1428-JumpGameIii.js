// Last updated: 4/29/2026, 10:24:22 AM
/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
// dfs
// works but allocation failure
var canReach = function(arr, start) {
    const n = arr.length;
    
    const valid = i => {
        return i >= 0 && i < n;
    }
    
    const neighbors = i => {
        return [i + arr[i], i - arr[i]];
    }
    
    const dfs = (i, visited) => {
        if(arr[i] === 0) {
            return true;
        }
        let result = false;
        for(const neighbor of neighbors(i)) {
            
            if(valid(neighbor) && !visited.has(neighbor)) {
                // const newVisited = new Set([...visited, neighbor]);
                // result = result || dfs(neighbor, newVisited);
                // If we step on the same path, we will have the same result. 
                // So, we can exclude those path by adding previous path to the visited list
                visited.add(neighbor);
                result = result || dfs(neighbor, visited);
            }
        }
        return result;
    }
    
    const visited = new Set([start]);
    return dfs(start, visited);
};

var canReach = function(arr, start) {
    const n = arr.length;
    
    const valid = i => {
        return i >= 0 && i < n;
    }
    
    const neighbors = i => {
        return [i + arr[i], i - arr[i]];
    }
    
    const bfs = (start, visited) => {
        let result = false;
        let queue = [ start ];
        while(queue.length !== 0) {
            const nextQueue = [];
            for(const idx of queue) {
                if(arr[idx] === 0) {
                    return true;
                }
                for(const neighbor of neighbors(idx)) {
                    if(valid(neighbor) && !visited.has(neighbor)) {
                        // const newVisited = new Set([...visited, neighbor]);
                        visited.add(neighbor);
                        nextQueue.push(neighbor);
                    }    
                }    
            }
            queue = nextQueue;
        }
        return false;
    }
    
    const visited = new Set([start]);
    return bfs(start, visited);
};
