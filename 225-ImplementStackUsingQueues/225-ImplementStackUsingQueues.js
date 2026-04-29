// Last updated: 4/29/2026, 10:32:37 AM
/**
 * Initialize your data structure here.
 */
var MyStack = function() {
    this.queues = [[],[]];
    this.active = 0;
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.queues[this.active].push(x);     // enque
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
    const curr = this.active;
    const len = this.queues[curr].length;
    const alt = (curr + 1) % 2;
    for(let i = 0; i < len - 1; i++) {
        const val = this.queues[curr].shift()
        this.queues[alt].push(val);
    }
    this.active = alt;
    return this.queues[curr].shift();
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
    const curr = this.active;
    const len = this.queues[curr].length;
    const alt = (curr + 1) % 2;
    let val;
    for(let i = 0; i < len; i++) {
        val = this.queues[curr].shift()
        this.queues[alt].push(val);
    }
    this.active = alt;
    return val;
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.queues[this.active].length === 0;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */