// Last updated: 4/29/2026, 10:19:37 AM
/**
 * @param {null|boolean|number|string|Array|Object} object
 * @return {string}
 */
var jsonStringify = function(object) {
    if(object === null) {
        return 'null';
    } else if(Array.isArray(object)) {
        const valList = object.map(item => jsonStringify(item));
        return `[${valList.join(',')}]`;
    } else if(typeof object === 'object') {
        const keys = Object.keys(object);
        const keyValueList = keys.map(key => `"${key}":${jsonStringify(object[key])}`);
        return `{${keyValueList.join(',')}}`;
    } else if(typeof object === 'number') {
        return object.toString();
    } else if(typeof object === 'string') {
        return `"${object}"`;
    } else if(typeof object === 'boolean') {
        if(object === true) {
            return 'true';
        }
        return 'false';
    }
};