// Last updated: 4/29/2026, 10:30:00 AM
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const visited = new Array(m).fill(null).map(() => new Array(n).fill(0));
    
    function dfs(i, j, obj) {
        console.log(`grid[${i}][${j}], curr perimeter=${obj.perimeter}`);
        if(i >= 0 && i < m && j >= 0 && j < n && grid[i][j] === 1) {
            if(visited[i][j] === 0) {
                visited[i][j] = 1;
                dfs(i+1, j, obj);
                dfs(i-1, j, obj);
                dfs(i, j+1, obj);
                dfs(i, j-1, obj);
            }    
        } else {
            console.log(`add perimeter`);
            obj.perimeter++;
        }
    }
    
    const obj = {
        perimeter: 0,          
    };
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(grid[i][j] === 1) {
                dfs(i, j, obj);    
            }
        }
    }
    return obj.perimeter;
};


// 2022-11-04 
// 31:41s
// O(m*n)
// O(m*n)
var islandPerimeter = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const visited = new Array(m).fill(null).map(() => new Array(n).fill(0));
    
    function bfs(row, col, obj) {
        console.log(`grid[${row}][${col}], curr perimeter=${obj.perimeter}`);
        const queue = [[row, col]];
        while(queue.length !== 0) {
            const [i, j] = queue.shift();
            if(i >= 0 && i < m && j >= 0 && j < n && grid[i][j] === 1) {
                if(visited[i][j] === 0) {
                    visited[i][j] = 1;
                    queue.push([i+1, j]);
                    queue.push([i-1, j]);
                    queue.push([i, j+1]);
                    queue.push([i, j-1]);
                }    
            } else {
                // console.log(`add perimeter`);
                obj.perimeter++;    
            }
        }
    }
    
    const obj = {
        perimeter: 0,          
    };
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(grid[i][j] === 1) {
                bfs(i, j, obj);    
            }
        }
    }
    return obj.perimeter;
};

// 2022-11-04
// 05:00s
// O(m * n)
// O(1)
var islandPerimeter = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    
    function checkSurround(i, j) {
        if(i >= 0 && i < m && j >= 0 && j < n && grid[i][j] === 1) {
            return 1;
        } else {
            return 0;
        }
    }

    function getPerimeter(i, j) {
        const down = checkSurround(i+1, j);
        const up = checkSurround(i-1, j);
        const right = checkSurround(i, j+1);
        const left = checkSurround(i, j-1);
        return 4 - (up + down + left + right);
    }

    let totalPerimeter = 0;
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(grid[i][j] === 1) {
                totalPerimeter += getPerimeter(i, j);
            }
        }
    }
    return totalPerimeter;
};


