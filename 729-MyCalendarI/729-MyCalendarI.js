// Last updated: 4/29/2026, 10:28:22 AM

var MyCalendar = function() {
    this.arr = [];
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
    const tmp = this.arr.slice();
    tmp.push([start, end]);
    // console.log(tmp);
    const sorted = tmp.sort((a, b) => a[0] === b[0]? a[1] - b[1]: a[0] - b[0]);
    
    for(let i = 1; i < sorted.length; i++) {
        const prev = sorted[i - 1];
        const curr = sorted[i];
        if(prev[1] > curr[0]) {
            return false;
        }
    }
    this.arr = sorted;
    return true;
};

/** 
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */