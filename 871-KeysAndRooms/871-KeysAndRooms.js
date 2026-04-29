// Last updated: 4/29/2026, 10:27:17 AM
/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    const n = rooms.length;
    const visited = new Array(n).fill(false);
    let countVisited = 0;
    const dfs = idx => {
        visited[idx] = true;
        countVisited++;
        const keys = rooms[idx];
        for(const key of keys) {
            if(!visited[key]) {
                dfs(key);
            }
        }
    }
    dfs(0);
    return countVisited === n;
};