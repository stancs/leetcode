// Last updated: 4/29/2026, 10:27:31 AM

var MyHashMap = function() {
    this.keySpace = 1001;
    this.hashTable = new Array(this.keySpace).fill(null).map(() => new Array());
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    const hashKey = key % this.keySpace;
    const arr = this.hashTable[hashKey];
    for(const pair of arr) {
        const [key2, value2] = pair;
        if(key2 === key) {
            pair[1] = value;
        }
    }
    arr.push([key, value]);
};

/** 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    const hashKey = key % this.keySpace;
    const arr = this.hashTable[hashKey];
    for(const pair of arr) {
        const [key2, value2] = pair;
        if(key2 === key) {
            return value2;
        }
    }
    return -1;
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
    const hashKey = key % this.keySpace;
    const arr = this.hashTable[hashKey];
    this.hashTable[hashKey] = arr.filter(pair => key !== pair[0]);
};

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */