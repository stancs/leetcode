// Last updated: 4/29/2026, 10:30:41 AM

var RandomizedSet = function() {
    this.set = {};
    this.count = 0;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(this.set[val]) {
        return false;
    } else {
        this.set[val] = true;
        this.count++;
        return true;
    }
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if(this.set[val]) {
        delete this.set[val];
        this.count--;
        return true;
    } else {
        return false;
    }
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    // console.log(`this.set:`);
    // console.log(this.set);
    const keys = Object.keys(this.set);
    // console.log(`keys`, keys);
    const randomIdx = Math.floor(Math.random() * this.count);
    // console.log(`randomIdx: `, randomIdx)
    const key = keys[randomIdx];
    // console.log(`key: ${key}`)
    return parseInt(key);
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */