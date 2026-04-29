// Last updated: 4/29/2026, 10:30:51 AM

var Logger = function() {
    this.map = {};
};

/** 
 * @param {number} timestamp 
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function(timestamp, message) {
    const prevTs = this.map[message];
    if(prevTs === undefined) {
        this.map[message] = timestamp;
        return true;
    } else {
        if(prevTs + 10 <= timestamp) {
            this.map[message] = timestamp;
            return true;
        }
    }
    return false;
};

/** 
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */