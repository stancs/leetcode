// Last updated: 4/29/2026, 10:27:12 AM
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let n5 = 0;
    let n10 = 0;
    let n20 = 0;
    for(const bill of bills) {
        if(bill === 5) {
            n5++;
        } else if(bill === 10) {
            n10++;
            if(n5 > 0) {
                n5--;
            } else {
                return false;
            }
        } else if(bill === 20) {
            n20++;
            if(n10 > 0 && n5 > 0) {
                n10--;
                n5--;
            } else if(n10 === 0 && n5 > 2) {
                n5 -= 3;
            } else {
                return false;
            }
        }
    }
    return true;
};