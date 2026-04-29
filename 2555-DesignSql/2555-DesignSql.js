// Last updated: 4/29/2026, 10:20:17 AM
/**
 * @param {string[]} names
 * @param {number[]} columns
 */
var SQL = function(names, columns) {
    const n = names.length;
    const db = new Array(n).fill(null).map(() => new Array());
    this.tableMap = {};
    this.countMap = {};
    for(let i = 0; i < n; i++) {
        const name = names[i];
        this.tableMap[name] = db[i];
        this.countMap[name] = 0;
    }
};

/** 
 * @param {string} name 
 * @param {string[]} row
 * @return {void}
 */
SQL.prototype.insertRow = function(name, row) {
    // console.log('=== INSERT ROW ===')
    // console.log(`name: ${name}, row: ${row}`)
    const table = this.tableMap[name];
    const count = this.countMap[name];
    const newRow = [count + 1];
    newRow.push(...row);
    table.push(newRow);
    this.countMap[name]++;
    // console.log(table);
};

/** 
 * @param {string} name 
 * @param {number} rowId
 * @return {void}
 */
SQL.prototype.deleteRow = function(name, rowId) {
    // const table = this.tableMap[name];
    // this.countMap[name] = table.slice(0, rowId).concat(table.slice(rowId+1));
    this.tableMap[name][rowId-1] = null;
};

/** 
 * @param {string} name 
 * @param {number} rowId 
 * @param {number} columnId
 * @return {string}
 */
SQL.prototype.selectCell = function(name, rowId, columnId) {
    const table = this.tableMap[name];
    const val = table[rowId-1][columnId];
    return val;
};

/** 
 * Your SQL object will be instantiated and called as such:
 * var obj = new SQL(names, columns)
 * obj.insertRow(name,row)
 * obj.deleteRow(name,rowId)
 * var param_3 = obj.selectCell(name,rowId,columnId)
 */