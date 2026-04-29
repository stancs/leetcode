// Last updated: 4/29/2026, 10:33:27 AM

var TwoSum = function() {
    this.arr = [];
    this.obj = {};
};

/** 
 * @param {number} number
 * @return {void}
 */
TwoSum.prototype.add = function(number) {
    const len = this.arr.push(number);
    if(this.obj[number] === undefined) {
        this.obj[number] = [len - 1];
    } else {
        this.obj[number].push(len - 1);
    }
};

/** 
 * @param {number} value
 * @return {boolean}
 */
TwoSum.prototype.find = function(value) {
    for(let i = 0; i < this.arr.length; i++) {
        const num = this.arr[i];
        const complement = value - num;
        if(this.obj[complement] !== undefined) {
            if(num !== complement || this.obj[complement].length > 1) {
                return true;
            } 
        }
    }
    return false;
};

/** 
 * Your TwoSum object will be instantiated and called as such:
 * var obj = new TwoSum()
 * obj.add(number)
 * var param_2 = obj.find(value)
 */