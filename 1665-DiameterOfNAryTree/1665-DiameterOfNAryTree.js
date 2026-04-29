// Last updated: 4/29/2026, 10:23:14 AM
/**
 * // Definition for a _Node.
 * function _Node(val, children) {
 *    this.val = val === undefined ? 0 : val;
 *    this.children = children === undefined ? [] : children;
 * };
 */

/**
 * @param {_Node} root
 * @return {number}
 */
var diameter = function(root) {
    let diameter = 0;
    const depth = node => {
        console.log('node.val:', node.val);
        if(!node || node.children.length === 0) {
            console.log(`node: ${node.val} -> return 0`)
            return 0;
        }
        const depthList = node.children.map(child => depth(child));
        console.log('depthList: ', depthList);
        const sortedDepthList = depthList.sort((a, b) => b - a);
        if(sortedDepthList.length >= 2) {
            diameter = Math.max(diameter, sortedDepthList[0] + sortedDepthList[1] + 2);
        } else {
            diameter = Math.max(diameter, sortedDepthList[0] + 1);
        }
        console.log(`node: ${node.val} -> return ${sortedDepthList[0] + 1}`)
        return sortedDepthList[0] + 1;
    }
    depth(root);
    return diameter;
};