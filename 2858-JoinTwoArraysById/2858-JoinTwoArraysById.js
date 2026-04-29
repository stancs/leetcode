// Last updated: 4/29/2026, 10:19:15 AM
/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    const map = {};
    for(const item1 of arr1) {
        map[item1.id] = item1;
    }
    console.log(map);
    for(const item2 of arr2) {
        if(map[item2.id]) {
            map[item2.id] = { ...map[item2.id], ...item2 };
        } else {
            map[item2.id] = item2;
        }
    }
    console.log(map);

    return Object.values(map);
};