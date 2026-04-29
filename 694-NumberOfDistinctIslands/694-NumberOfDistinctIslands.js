// Last updated: 4/29/2026, 10:28:38 AM
/**
 * @param {number[][]} grid
 * @return {number}
 */
var numDistinctIslands = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    
    // find all the islands 
    // store x min and in that row, find y min and size into array
    // 
    
    const getNeighbors = (x, y) => [[x+1, y], [x-1, y], [x, y+1], [x, y-1]];
    const isValid = (x, y) => x >= 0 && x < m && y >= 0 && y < n;
    const list = [];
    
    const visited = new Array(m).fill(null).map(() => new Array(n).fill(false));
    
    const dfs = (i, j, obj) => {
        visited[i][j] = true;
        obj.size++;
        for(const [i2, j2] of getNeighbors(i, j)) {
            if(isValid(i2, j2) && !visited[i2][j2] && grid[i2][j2] === 1) {
                dfs(i2, j2, obj);
            }
        }
    }
    
    let count = 0;
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(!visited[i][j] && grid[i][j] === 1) {
                const obj = { size: 0 }
                dfs(i, j, obj);
                console.log(`(${i}, ${j}), size: ${obj.size}`)
                list.push([i, j, obj.size, count]);
                count++;
            }
        }
    }
    
    const dList = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    
    
    const compare = (l1, l2) => {
        const [x1, y1, size1] = l1;
        const [x2, y2, size2] = l2;
        if(size1 !== size2) {
            return false;
        }
        const visited2 = new Array(m).fill(null).map(() => new Array(n).fill(false));
        return dfs2(x1, y1, x2, y2, visited2);
    }
    
    const dfs2 = (x1, y1, p1, q1, visited2) => {
        visited2[x1][y1] = true;
        let res = true;
        for(const [dx, dy] of dList) {
            const x2 = x1 + dx, y2 = y1 + dy;
            if(isValid(x2, y2) && !visited2[x2][y2] && grid[x2][y2] === 1) {
                const p2 = p1 + dx, q2 = q1 + dy;
                if(!isValid(p2, q2) || grid[p2][q2] !== 1) {
                    return false;
                }
                res = res && dfs2(x2, y2, p2, q2, visited2)
            }
        }
        return res;
    }
        
    
    for(let i = 0; i < list.length - 1; i++) {
        for(let j = i+1; j < list.length; j++) {
            const l1 = list[i];
            const l2 = list[j];
            const res = compare(l1, l2);
            if(res) {
                console.log(`l1: ${l1}, l2: ${l2}: same`)
                const g1 = l1[3], g2 = l2[3];
                const newG = Math.min(g1, g2);
                l1[3] = newG;
                l2[3] = newG;
            }
        }
    }
    const set = new Set();
    for(const group of list) {
        set.add(group[3]);
    }
    return set.size;
};