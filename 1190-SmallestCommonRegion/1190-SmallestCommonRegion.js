// Last updated: 4/29/2026, 10:25:31 AM
/**
 * @param {string[][]} regions
 * @param {string} region1
 * @param {string} region2
 * @return {string}
 */
var findSmallestRegion = function(regions, region1, region2) {
    const hash = {};
    for(const list of regions) {
        const parent = list[0];
        for(let i = 1; i < list.length; i++) {
            const child = list[i];
            hash[child] = parent;
        }
    }
    console.log(hash);
    const parentMap = {};
    const root = regions[0][0];
    let curr = region1;
    parentMap[region1] = true;
    while(curr !== root) {
        const parent = hash[curr];
        parentMap[parent] = true;
        curr = parent;
    }
    curr = region2;
    while(curr !== root) {
        if(parentMap[curr]) {
            return curr;
        }
        const parent = hash[curr];
        curr = parent;
    }
    return root;
};