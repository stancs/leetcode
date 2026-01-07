// Last updated: 1/6/2026, 10:04:51 PM
1/**
2 * Definition for a binary tree node.
3 * function TreeNode(val, left, right) {
4 *     this.val = (val===undefined ? 0 : val)
5 *     this.left = (left===undefined ? null : left)
6 *     this.right = (right===undefined ? null : right)
7 * }
8 */
9/**
10 * @param {TreeNode} root
11 * @return {number}
12 */
13var maxProduct = function(root) {
14    const map = new Map();
15
16    const dfs = node => {
17        let sum = node.val;
18        if(node.left) {
19            sum += dfs(node.left);
20        }
21        if(node.right) {
22            sum += dfs(node.right);
23        }
24        console.log(`val: ${node.val}, sum: ${sum}`);
25        map.set(node, sum);
26        return sum;
27    }
28    dfs(root);
29    console.log(map);
30    const total = map.get(root);
31    console.log(total);
32
33    let max = -Infinity;
34    const MOD = 1_000_000_007;
35    const dfs2 = node => {
36        if(node.left) {
37            const sum = map.get(node.left);
38            const prod = sum * (total - sum);
39            console.log(`val: ${node.left.val}, sum: ${sum}, prod: ${prod}`);
40            max = Math.max(max, prod);
41            dfs2(node.left);
42        }
43        if(node.right) {
44            const sum = map.get(node.right);
45            const prod = sum * (total - sum);
46            console.log(`val: ${node.right.val}, sum: ${sum}, prod: ${prod}`);
47            max = Math.max(max, prod);
48            dfs2(node.right);
49        }
50    }
51    dfs2(root);
52    console.log('max:', max);
53    return max % MOD;
54};