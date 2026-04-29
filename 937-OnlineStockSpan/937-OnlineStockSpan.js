// Last updated: 4/29/2026, 10:26:53 AM

var StockSpanner = function() {
    // this.arr = [];
    this.stack = [];
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    // let count = 1;
    // for(let i = this.arr.length - 1; i >= 0; i--) {
    //     if(this.arr[i] > price) {
    //         this.arr.push(price);
    //         return count;
    //     } else {
    //         count++;
    //     }
    // }
    // this.arr.push(price);
    // return count;
    let span = 1;
    while (this.stack.length > 0 && this.stack[this.stack.length - 1][0] <= price) {
        span += this.stack.pop()[1];
    }
    this.stack.push([price, span]);
    return span;
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */

