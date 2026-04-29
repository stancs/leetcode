// Last updated: 4/29/2026, 10:29:11 AM
/**
 * @param {string} compressedString
 */
var StringIterator = function(compressedString) {
    const numbers = '0123456789';
    let i = 0; 
    const str = compressedString;
    const arr = [];
    while(i < compressedString.length) {
        const ch = str[i];
        arr.push(ch);
        i++;
        let numStr = '';
        while(numbers.includes(str[i])) {
            numStr += str[i];
            i++;
        }
        arr.push(parseInt(numStr));
    }
    this.arr = arr;
    console.log(this.arr);
    this.idx = 0;
};

/**
 * @return {character}
 */
StringIterator.prototype.next = function() {
    if(this.idx < this.arr.length) {
        const ch = this.arr[this.idx];
        let count = this.arr[this.idx+1];
        
        count--;
        this.arr[this.idx+1] = count;
        if(count === 0) {
            this.idx += 2;
        }
        return ch;
    }
    return ' ';
};

/**
 * @return {boolean}
 */
StringIterator.prototype.hasNext = function() {
    if(this.idx < this.arr.length) {
        return true;
    }
    return false;
};

/** 
 * Your StringIterator object will be instantiated and called as such:
 * var obj = new StringIterator(compressedString)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */