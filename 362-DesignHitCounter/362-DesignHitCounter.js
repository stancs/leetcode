// Last updated: 4/29/2026, 10:30:45 AM

var HitCounter = function() {
    this.arr = [];
};

/** 
 * @param {number} timestamp
 * @return {void}
 */
HitCounter.prototype.hit = function(timestamp) {
    this.arr.push(timestamp);
};

/** 
 * @param {number} timestamp
 * @return {number}
 */
HitCounter.prototype.getHits = function(timestamp) {
    const start = timestamp - 300;
    let count = 0;
    for(const hit of this.arr) {
        if(hit > start && hit <= timestamp) {
            count++;
        }
    }
    return count;
};

/** 
 * Your HitCounter object will be instantiated and called as such:
 * var obj = new HitCounter()
 * obj.hit(timestamp)
 * var param_2 = obj.getHits(timestamp)
 */