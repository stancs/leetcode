// Last updated: 4/29/2026, 10:25:24 AM
/**
 * @param {string} characters
 * @param {number} combinationLength
 */
var CombinationIterator = function(characters, combinationLength) {
    const output = [];
    combinationHelper('', characters, combinationLength, output);
    this.combinations = output;
    console.log(this.combinations);
    this.curr = 0;
};

function combinationHelper(str, remains, len, output) {
    if(str.length === len) {
        output.push(str);
    } else {
        for(let i = 0; i < remains.length; i++) {
            const newStr = str + remains[i];
            const newRemains = remains.slice(i+1);
            combinationHelper(newStr, newRemains, len, output);
        }
    }
}

/**
 * @return {string}
 */
CombinationIterator.prototype.next = function() {
    const next = this.combinations[this.curr];
    this.curr++;
    return next;
};

/**
 * @return {boolean}
 */
CombinationIterator.prototype.hasNext = function() {
    return this.curr < this.combinations.length;
};

/** 
 * Your CombinationIterator object will be instantiated and called as such:
 * var obj = new CombinationIterator(characters, combinationLength)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */