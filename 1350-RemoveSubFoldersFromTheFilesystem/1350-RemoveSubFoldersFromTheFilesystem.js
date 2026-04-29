// Last updated: 4/29/2026, 10:24:53 AM
/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function(folder) {
    const map = {};
    for(const str of folder) {
        const arr = str.split('/');
        arr.shift();

        console.log(arr);
        const key = arr.join('-');
        console.log(key);
        map[key] = true;
    }
    console.log(map);
    const keys = Object.keys(map);
    for(const key of keys) {
        const arr = key.split('-');
        let checkKey = '';
        for(let i = 0; i < arr.length - 1; i++) {
            if(i !== 0) {
                checkKey += '-';
            }
            checkKey += arr[i];
            if(map[checkKey]) {
                delete map[key];
                break;
            }
        }
    }
    console.log(map);
    return Object.keys(map).map(str => str.replaceAll('-', '/')).map(str => '/' + str);
};