// Last updated: 4/29/2026, 10:25:17 AM
/**
 * @param {number} n
 * @param {number[][]} redEdges
 * @param {number[][]} blueEdges
 * @return {number[]}
 */
// O(n)
// O(n)
// 1:28:09s
var shortestAlternatingPaths = function(n, redEdges, blueEdges) {
    const answer = [];
    const convert2Map = edges => {
        const map = {};
        for(const [i, j] of edges) {
            if(map[i] === undefined) {
                map[i] = new Set();
            }
            map[i].add(j);
        }
        return map;
    }
    const redMap = convert2Map(redEdges);
    const blueMap = convert2Map(blueEdges);
    // console.log(redMap);
    // console.log(blueMap);
    const map = [redMap, blueMap];
    
    const bfs = (start, end) => {
        let queue = [ [start, 0], [start, 1] ];
        let steps = 0;
        const visited = new Array(n).fill(null).map(() => new Array(2).fill(false));
        visited[start][0] = true;
        visited[start][1] = true;
        while(queue.length !== 0) {
            const nextQueue = [];
                
            for(const [node, color] of queue) {
                // console.log(`node=${node}, color=${color}`)
                if(node === end) {
                    return steps;
                }
                const neighbors = map[color][node];
                const nextColor = (color + 1) % 2;
                if(neighbors) {
                    for(const neighbor of neighbors) {
                        // console.log(`neighbor=${neighbor}, nextColor=${nextColor}`)
                        if(!visited[neighbor][nextColor]) {
                            visited[neighbor][nextColor] = true;
                            nextQueue.push([neighbor, nextColor]);    
                        }
                    }
                }    
            }   
            steps++;
            queue = nextQueue;
        }
        return -1;
    }
    for(let i = 0; i < n; i++) {
        const steps = bfs(0, i);
        answer.push(steps);
    }
    return answer;
};