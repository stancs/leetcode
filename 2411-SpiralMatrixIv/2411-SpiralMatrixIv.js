// Last updated: 4/29/2026, 10:20:43 AM
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number} m
 * @param {number} n
 * @param {ListNode} head
 * @return {number[][]}
 */
var spiralMatrix = function(m, n, head) {
    const mat = new Array(m);
    const visited = new Array(m);
    for(let i = 0; i < m; i++) {
        mat[i] = new Array(n).fill(-1);
        visited[i] = new Array(n).fill(false);
    }
    let dir = 0;
    const next = (x, y) => {
        return [[x, y+1], [x+1, y], [x, y-1], [x-1, y]];
    }
    const valid = (x, y) => {
        return x >=0 && x < m && y >= 0 && y < n;
    }

    const total = m * n;
    let x = 0, y = 0;
    let count = 0;
    let curr = head;
    mat[x][y] = curr.val;
    visited[x][y] = true;
    count++;
    curr = curr.next;
    while(curr && count < total) {
        const [x2, y2] = next(x, y)[dir];
        // console.log(`(x,y)=(${x},${y}), dir=${dir}, count=${count}, (x2, y2)=(${x2},${y2})`)
        if(valid(x2, y2) && !visited[x2][y2]) {
            // console.log(`valid & non-visited`)
            mat[x2][y2] = curr.val;
            visited[x2][y2] = true;
            curr = curr.next;
            count++;
            x = x2;
            y = y2;
        } else {
            // console.log(`change direction`)
            dir = (dir + 1) % 4;
        }
        // console.log(mat);
    }
    // console.log(mat);
    // console.log(visited);
    return mat;
};