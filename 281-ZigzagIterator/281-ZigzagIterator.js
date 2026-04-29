// Last updated: 4/29/2026, 10:31:48 AM
/**
 * @constructor
 * @param {Integer[]} v1
 * @param {Integer[]} v1
 */
// 2022-12-08
// 40:00s
// O(n1+n2)
// o(1)
var ZigzagIterator = function ZigzagIterator(v1, v2) {
    this.arr = [v1, v2];
    this.idx = [-1, -1];
    this.count = -1;
};


/**
 * @this ZigzagIterator
 * @returns {boolean}
 */
ZigzagIterator.prototype.hasNext = function hasNext() {
    const first = (this.count + 1) % 2;
    const second = (first + 1) % 2;
    if(this.idx[first] + 1 < this.arr[first].length) {
        return true;
    } else {
        return this.idx[second] + 1 < this.arr[second].length;
    }
};

/**
 * @this ZigzagIterator
 * @returns {integer}
 */
ZigzagIterator.prototype.next = function next() {
    this.count++;
    console.log(`count=${this.count}`);
    const first = this.count % 2;
    const second = (first + 1) % 2;
    if(this.idx[first] + 1 < this.arr[first].length) {
        this.idx[first]++;
        console.log(`first: ${this.idx[first]}`);
        return this.arr[first][this.idx[first]];
    } else {
        this.idx[second]++;
        console.log(`second: ${this.idx[second]}`);
        return this.arr[second][this.idx[second]];
    }
};

/**
 * Your ZigzagIterator will be called like this:
 * var i = new ZigzagIterator(v1, v2), a = [];
 * while (i.hasNext()) a.push(i.next());
*/