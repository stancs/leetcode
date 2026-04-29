// Last updated: 4/29/2026, 10:32:14 AM
/**
 * @param {number[][]} vec
 */
// 2022-12-08
// 1:00:00s
// O(n)
// O(1)
var Vector2D = function(vec) {
    this.vec = vec;
    this.maxRow = this.vec.length;
    this.row = 0;
    this.col = -1;
    this.vec = vec;
};

/**
 * @return {number}
 */
Vector2D.prototype.next = function() {
    let nextRow = this.row;
    let nextCol = this.col;
    
    while(nextRow < this.maxRow) {
        nextCol++;
        if(nextCol < this.vec[nextRow].length) {
            this.row = nextRow;
            this.col = nextCol;
            return this.vec[nextRow][nextCol];
        } 
        nextRow++;
        nextCol = -1;   // Don't know whether it will have any item
    }
    return null;
};

/**
 * @return {boolean}
 */
Vector2D.prototype.hasNext = function() {
    let nextRow = this.row;
    let nextCol = this.col;
    
    while(nextRow < this.maxRow) {
        nextCol++;
        if(nextCol < this.vec[nextRow].length) {
            return true;
        } 
        nextRow++;
        nextCol = -1;   // Don't know whether it will have any item
    }
    return false;
};

/** 
 * Your Vector2D object will be instantiated and called as such:
 * var obj = new Vector2D(vec)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */