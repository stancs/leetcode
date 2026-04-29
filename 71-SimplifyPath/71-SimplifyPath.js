// Last updated: 4/29/2026, 10:35:16 AM
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const out1 = path.split('/');
    console.log(out1);
    const out2 = out1.filter(str => str.length !== 0);
    console.log(out2);
    const out3 = out2.filter(str => str !== '.');
    console.log(out3);
    const stacking = list => {
        const stack = [];
        for(const item of list) {
            if(item === '..') {
                stack.pop();
            } else {
                stack.push(item);
            }
        }
        return stack;
    }
    const out4 = stacking(out3);
    console.log(out4);
    const str = '/' + out4.join('/');
    console.log(str);
    return str;
};

var simplifyPath = function(path) {
    const filtered = path.split('/').filter(str => str.length !== 0);
    const stack = [];
    for(const item of filtered) {
        if(item === '.') {
            continue;
        } else if(item === '..') {
            stack.pop();
        } else {
            stack.push(item);
        }
    }
    const str = '/' + stack.join('/');
    console.log(str);
    return str;
}