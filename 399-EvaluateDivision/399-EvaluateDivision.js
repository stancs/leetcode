// Last updated: 4/29/2026, 10:30:32 AM
/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    const map = {};
    const n = equations.length;
    for(let i = 0; i < n; i++) {
        const [u, v] = equations[i];
        const w = values[i];
        if(map[u] === undefined) {
            map[u] = {};
        }
        map[u][v] = w;
        if(map[v] === undefined) {
            map[v] = {};
        }
        map[v][u] = 1 / w;
    }
    console.log(map);

    const dfs = (start, end, val, visitedMap) => {
        console.log(`start: ${start}, end: ${end}, val: ${val}`)
        if(map[start] !== undefined && start === end) {
            console.log(`return ${val}`)
            return val;
        }
        visitedMap[start] = true;
        const mapValue = map[start];
        console.log(`mapValue:`)
        console.log(mapValue)
        if(mapValue !== undefined) {
            const keys = Object.keys(mapValue);
            for(const key of keys) {
                const w = mapValue[key];
                console.log(`key: ${key}, w: ${w}`)
                if(!visitedMap[key]) {
                    const res = dfs(key, end, val * w, visitedMap);
                    if(res !== undefined) {
                        return res;
                    }
                }
            }
        }
    }

    const output = [];
    for(const query of queries) {
        const [u, v] = query;
        const visitedMap = {};
        const res = dfs(u, v, 1, visitedMap);
        if(res !== undefined) {
            output.push(res);
        } else {
            output.push(-1);
        }
    }
    return output;
};