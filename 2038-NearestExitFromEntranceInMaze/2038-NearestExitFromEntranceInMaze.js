// Last updated: 4/29/2026, 10:22:13 AM
/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function(maze, entrance) {
    const m = maze.length;
    const n = maze[0].length;
    const neighbors = (x, y) => {
        return [[x-1, y], [x+1, y], [x, y-1], [x, y+1]];
    }
    const [entX, entY] = entrance;
    let queue = [entrance];
    let count = 0;
    const visited = {};
    const isValid = (x, y) => {
        return (x >= 0 && x < m && y >= 0 && y < n) && (maze[x][y] === '.');
    }
    const isExit = (x, y) => {
        if(entX === x && entY === y) {
            return false;
        }
        return (maze[x][y] === '.') && (x === 0 || x === m-1 || y === 0 || y === n-1);
    }
    while(queue.length !== 0) {
        count++;
        const nextQueue = [];
        // console.log(`queue:`)
        console.log(queue)
        for(const [x, y] of queue) {
            visited[`${x}#${y}`] = true;
            for(const [p, q] of neighbors(x, y)) {
                // console.log(`neighbor: [${p}, ${q}]`)
                if(isValid(p, q) && !visited[`${p}#${q}`]) {
                    // console.log(`IS VALID`)
                    if(isExit(p, q)) {
                        return count;
                    }
                    visited[`${p}#${q}`] = true;
                    nextQueue.push([p, q]);
                }
            }
        }
        queue = nextQueue;
    }
    return -1;
};

// var nearestExit = function(maze, entrance) {
//     const m = maze.length;
//     const n = maze[0].length;
//     const [entX, entY] = entrance;
    
//     const valid = (x, y) => {
//         return x >= 0 && x < m && y >= 0 && y < n;
//     }
//     let queue = [ entrance ];
//     let dist = 0;
//     const seen = new Array(m).fill(null).map(() => new Array(n).fill(false))
//     seen[entX][entY] = true;
//     while(queue.length !== 0) {
//         const nextQueue = [];
//         dist++;
//         console.log(queue);
//         for(const node of queue) {
//             const [x, y] = node;
//             for(const [x2, y2] of [[x-1, y], [x+1, y], [x, y-1], [x, y+1]]) {
//                 console.log(`check [${x2}, ${y2}]`);
//                 if(!valid(x2, y2) && !(x === entX && y === entY)) {
//                     console.log(`return dist: ${dist}`);
//                     return dist - 1;    
//                 }
//                 if(valid(x2, y2) && maze[x2][y2] === '.' && !seen[x2][y2]) {
//                     console.log(`add to next queue`);
//                     seen[x2][y2] = true;
//                     nextQueue.push([x2, y2]);
//                 }
//             }
//         }
//         queue = nextQueue;
//     }
//     return -1;
// };