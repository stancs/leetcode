// Last updated: 4/29/2026, 10:27:58 AM
/**
 * // Definition for a QuadTree node.
 * function _Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */

/**
 * @param {number[][]} grid
 * @return {_Node}
 */
var construct = function(grid) {
    const createNode = (x, y, len) => {
        console.log(`x: ${x}, y: ${y}, len: ${len}`)
        const initValue = grid[x][y];
        let areSameValues = true;
        for(let i = x; i < x + len; i++) {
            for(let j = y; j < y + len; j++) {
                if(grid[i][j] !== initValue) {
                    areSameValues = false;
                    break;
                }
            }
            if(!areSameValues) {
                break;
            }
        }
        console.log(`areSameValues: ${areSameValues}`)
        let isLeaf = true;
        let val = initValue;
        let topLeft = null;
        let topRight = null;
        let bottomLeft = null;
        let bottomRight = null;
        if(!areSameValues) {
            isLeaf = false;
            val = 1;
            const half = len / 2;
            topLeft = createNode(x, y, half);
            bottomLeft = createNode(x + half, y, half);
            topRight = createNode(x, y + half, half);
            bottomRight = createNode(x + half, y + half, half);
        }
        console.log(`isLeaf: ${isLeaf}`)
        const node = new _Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight);
        return node;
    }
    const root = createNode(0, 0, grid.length);
    return root;
};