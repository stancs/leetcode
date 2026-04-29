// Last updated: 4/29/2026, 10:26:25 AM

var TimeMap = function() {
    this.hash = {};
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if(!this.hash[key]) {
        this.hash[key] = [];
    }
    this.hash[key].push({ts: timestamp, value});
    // console.log(this.hash)
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    // console.log(`GET key: ${key}, timestamp: ${timestamp}`)
    const list = this.hash[key];
    if(!list) {
        return "";
    }
    let left = 0;
    let right = list.length - 1;
    while(left <= right) {
        const mid = Math.floor((left + right) / 2);
        // console.log(`left: ${left}, mid: ${mid}, right: ${right}`)
        if(list[mid].ts === timestamp) {
            // console.log('found value. returning...')
            return list[mid].value;
        } else if(list[mid].ts < timestamp) {
            left = mid + 1;
        } else { // timestamp < list[mid].ts
            right = mid - 1;
        }
    }
    if(right >= 0) {
        return list[right].value;
    }
    return "";
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */