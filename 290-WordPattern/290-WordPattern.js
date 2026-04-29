// Last updated: 4/29/2026, 10:31:36 AM
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const keys = pattern.split('');
    const values = s.split(' ');
    const map1 = new Map();
    const map2 = new Map();
    console.log(keys);
    console.log(values);
    if(keys.length !== values.length) {
        return false;
    }
    for(let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const value = values[i];
        console.log(`key: ${key}, value: ${value}`)
        if(map1.get(key) === undefined) {
            map1.set(key, value);
            console.log(`set the key ${key} for the value: ${value}`)
        } else {
            console.log(`map1.get(key): ${map1.get(key)}`)
            console.log(`value: ${value}`)
            if(map1.get(key) !== value) {
                return false;
            }
        }
        if(map2.get(value) === undefined) {
            map2.set(value, key);
        } else {
            if(map2.get(value) !== key) {
                return false;
            }
        }
    }
    return true;
};