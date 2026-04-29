// Last updated: 4/29/2026, 10:26:43 AM

var RecentCounter = function() {
    this.arr = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.arr.push(t);
    const left = t - 3000;
    const arr2 = this.arr.filter(val => val >= left);
    console.log(`t=${t}`)
    console.log(arr2);
    this.arr = arr2;
    return arr2.length;
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */