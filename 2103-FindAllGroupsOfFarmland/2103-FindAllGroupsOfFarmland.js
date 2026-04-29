// Last updated: 4/29/2026, 10:22:02 AM
/**
 * @param {number[][]} land
 * @return {number[][]}
 */
var findFarmland = function(land) {
    // iterate all the cells in the matrix
    // set up visited cells
    // if cell is 1, then get the regions (topleft corner, bottom right corner)
    const m = land.length;
    const n = land[0].length;
    // console.log(`${m}x${n} matrix`)
    const visited = new Array(m).fill(null).map(() => new Array(n).fill(false));
    const res = [];
    let i = 0, j = 0;
    while(i < m) {
        j = 0;
        while(j < n) {
            // console.log(visited);
            // console.log(`land[${i}][${j}] = ${land[i][j]}`)
            if(!visited[i][j] && land[i][j] === 1) {
                // console.log(`NOT VISITED`)
                const x1 = i, y1 = j;
                visited[i][j] = true;
                let x2 = i, y2 = j;
                
                let x = i, y = j;
                while(x+1 < m && land[x+1][y] === 1) {
                    x++;
                    visited[x][y] = true;
                }
                x2 = x;
                while(y+1 < n && land[x][y+1] === 1) {
                    y++;
                    visited[x][y] = true;
                }
                y2 = y;
                for(let p = x1; p < x2; p++) {
                    for(let q = y1+1; q <= y2; q++) {
                        visited[p][q] = true;
                    }
                }
                // console.log(`ADD [${x1}, ${y1}, ${x2}, ${y2}]`);
                res.push([x1, y1, x2, y2]);
            }
            j++;
        }
        i++;
    }
    return res;
};

var findFarmland = function(land) {
    const m = land.length;
    const n = land[0].length;
    // console.log(`${m}x${n} matrix`)
    const getNeighbors = (x, y) => [[x+1, y], [x-1, y], [x, y+1], [x, y-1]];
    const dfs = (i, j, obj) => {
        visited[i][j] = true;
        for(const [i2, j2] of getNeighbors(i, j)) {
            if(i2 >= 0 && i2 < m && j2 >= 0 && j2 < n && land[i2][j2] === 1 && !visited[i2][j2]) {
                if(i2 > obj.x.max) {
                    obj.x.max = i2;
                }
                if(j2 > obj.y.max) {
                    obj.y.max = j2;
                }
                dfs(i2, j2, obj);
            }
        }
    }
    
    const res = [];
    const visited = new Array(m).fill(null).map(() => new Array(n).fill(false));
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(!visited[i][j] && land[i][j] === 1) {
                const obj = {
                    x: {
                        min: i,
                        max: i,
                    },
                    y: {
                        min: j,
                        max: j,
                    }
                };
                dfs(i, j, obj);
                res.push([obj.x.min, obj.y.min, obj.x.max, obj.y.max]);
            }
        }
    }
    return res;
}