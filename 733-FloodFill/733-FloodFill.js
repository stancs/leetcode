// Last updated: 4/29/2026, 10:28:21 AM
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
// 2022-11-17
// 42:07s
// O(n)
// O(n)
var floodFill = function(image, sr, sc, color) {
    const m = image.length;
    const n = image[0].length;
    const prevColor = image[sr][sc];
    
    const valid = (x, y) => {
        return x >= 0 && x < m && y >= 0 && y < n && image[x][y] === prevColor;
    }
    
    const seen = new Array(m).fill(null).map(() => new Array(n));
    let queue = [ [sr, sc] ];
    while(queue.length !== 0) {
        const nextQueue = [];
        for(const [i, j] of queue) {
            image[i][j] = color;
            for(const [x, y] of [[i+1, j], [i-1, j], [i, j+1], [i, j-1]]) {
                if(valid(x, y) && !seen[x][y]) {
                    seen[x][y] = true;
                    nextQueue.push([x, y]);
                }
            }
        }
        queue = nextQueue;
    }
    return image;
};