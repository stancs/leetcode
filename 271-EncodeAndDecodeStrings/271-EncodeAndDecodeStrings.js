// Last updated: 4/29/2026, 10:31:55 AM
/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function(strs) {
    const list = [];
    for(const str of strs) {
        list.push(str);
    }
    const encoded = list.join('한');
    console.log(encoded);
    return encoded;
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function(s) {
    console.log(s);
    const strs = s.split('한');
    return strs;
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */