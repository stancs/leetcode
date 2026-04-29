// Last updated: 4/29/2026, 10:27:40 AM
/**
 * @param {number[][]} graph
 * @return {boolean}
 */
// 2:00:00s
// O(V+E) time | O(V) space
var isBipartite = function(graph) {
    console.log(graph);
    let startIdx = 0;
    const colorHash = {};
    let currColor = 1;
    
    const visited = {};

    for(let i = 0; i < graph.length; i++) {
        console.log(`idx: ${i}`);
        let currColor;
        if(visited[i]) {
            currColor = visited[i];
        } else {
            currColor = 1;
        }
        
        const queue = [ {
            val: i,
            neighbors: graph[i],
            color: currColor,
        }];
        
        while(queue.length !== 0) {
            const { val, neighbors, color } = queue.shift();
            // console.log(`val=${val}, neighbors=${neighbors}, color=${color}`);
            visited[val] = color;

            const anotherColor = color * -1;
            for(const neighborIdx of neighbors) {
                // console.log(`neighbor idx=${neighborIdx}`);
                if(visited[neighborIdx]) {
                    if(visited[neighborIdx] !== anotherColor) {
                        return false;
                    }
                } else {
                    // visited[neighbor.val] = anotherColor;
                    queue.push({
                        val: neighborIdx,
                        neighbors: graph[neighborIdx],
                        color: anotherColor,
                    })
                }
            }
        }    
    }
    return true;
};