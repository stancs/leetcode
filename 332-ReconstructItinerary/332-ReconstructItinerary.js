// Last updated: 4/29/2026, 10:31:10 AM
/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
    const adj = {};
    const list = new Set();
    for(const [u, v] of tickets) {
        if(adj[u] === undefined) {
            adj[u] = [];
        }
        adj[u].push([v, false]);
    }
    // console.log(adj);
    
    const tripLen = tickets.length + 1;
    const resObj = { path: null, pathStr: ''};
    
    const backtrack = (start, path, obj) => {
        if(path.length === tripLen) {
            if(!obj.path) {
                obj.path = [...path];
                obj.pathStr = path.join('-');
            } else {
                const newPathStr = path.join('-');
                if(newPathStr < obj.pathStr) {
                    obj.path = [...path];
                    obj.pathStr = newPathStr;
                }
            }
            return;
        }
        const items = adj[start];
        if(items) {
            for(const endItem of items) {
                const [end, visited] = endItem
                // console.log(adj);
                if(!visited) {
                    endItem[1] = true;
                    // console.log(adj);
                    path.push(end);
                    backtrack(end, path, obj);
                    endItem[1] = false;
                    path.pop();
                    // console.log(adj);
                
                }
            }
        }
    }
    
    const visited = new Set();
    backtrack('JFK', ['JFK'], resObj);
    return resObj.path;
};

var findItinerary = function(tickets) {
    const adj = {};
    const list = new Set();
    for(const [u, v] of tickets) {
        if(adj[u] === undefined) {
            adj[u] = [];
        }
        adj[u].push(v);
    }
    
    console.log(adj);
    for(const key in adj) {
        adj[key].sort();
    }
    
    console.log(adj);
    
    const path = ['JFK'];
    const dfs = (start, adj, path) => {
        console.log(start);
        console.log(path)
        const ends = adj[start];
        while(ends && ends.length > 0) {
            const next = ends.shift();
            path.push(next);
            dfs(next, adj, path)
        }
    }
    
    dfs('JFK', adj, path);
    return path;
};

var findItinerary = function(tickets) {
    const hash = {};
    for(const trip of tickets) {
        const [from, to] = trip;
        if(hash[from]) {
            hash[from].push(to);
        } else {
            hash[from] = [to];
        }
    }
    console.log(hash);
    for(const key in hash) {
        if(hash[key].length > 1) {
            hash[key].sort();
        }
    }
    console.log(hash);
    
    const rev = [];
    dfs('JFK', hash, rev);
    console.log(rev);
    
    return rev.reverse();
};

function dfs(startCity, hash, revItinenary) {
    const endCities = hash[startCity];
    while(endCities && endCities.length > 0) {
        dfs(endCities.shift(), hash, revItinenary);
    }
    revItinenary.push(startCity);
}