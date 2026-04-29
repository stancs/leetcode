// Last updated: 4/29/2026, 10:31:43 AM
/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation.
 * function Iterator() {
 *    @ return {number}
 *    this.next = function() { // return the next number of the iterator
 *       ...
 *    }; 
 *
 *    @return {boolean}
 *    this.hasNext = function() { // return true if it still has numbers
 *       ...
 *    };
 * };
 */
// 2022-12-08
// 15:00s
// O(n)
// O(1)
/**
 * @param {Iterator} iterator
 */
var PeekingIterator = function(iterator) {
    this.iterator = iterator;
    this.hasNextValue = this.iterator.hasNext();
    this.nextValue = this.iterator.next();
};

/**
 * @return {number}
 */
PeekingIterator.prototype.peek = function() {
    return this.nextValue;
};

/**
 * @return {number}
 */
PeekingIterator.prototype.next = function() {
    const tmp = this.nextValue;
    this.hasNextValue = this.iterator.hasNext();
    if(this.hasNextValue) {
        this.nextValue = this.iterator.next();    
    }
    return tmp;
};

/**
 * @return {boolean}
 */
PeekingIterator.prototype.hasNext = function() {
    return this.hasNextValue;
};

/** 
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(arr)
 * var param_1 = obj.peek()
 * var param_2 = obj.next()
 * var param_3 = obj.hasNext()
 */