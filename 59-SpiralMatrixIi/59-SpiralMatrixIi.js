// Last updated: 4/29/2026, 10:35:36 AM
/**
 * @param {number} n
 * @return {number[][]}
 */
// 2022-11-24
// 30:00s
// O(n^2)
// O(1)
var generateMatrix = function(n) {
    const arr = new Array(n).fill(null).map(() => new Array(n).fill(0));
    console.log(arr);
    const valid = (i, j) => {
        return i >= 0 && i < n && j >= 0 && j < n;
    }
    const nextPoint = (i, j, direction) => {
        const list = [[i, j+1], [i+1, j], [i, j-1], [i-1, j]];
        return list[direction % 4];
    }
    
    let curr = [0, 0];
    arr[0][0] = 1;
    let count = 2;
    const total = n * n;
    let direction = 0;
    while(count <= total) {
        const [i, j] = curr;
        const [x, y] = nextPoint(i, j, direction);
        if(valid(x, y) && arr[x][y] === 0) {
            arr[x][y] = count;
            count++;
            curr = [x, y];
        } else {
            direction++;
        }
        // console.log(arr);
    }
    return arr;
};