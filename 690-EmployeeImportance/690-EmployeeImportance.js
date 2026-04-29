// Last updated: 4/29/2026, 10:28:42 AM
/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function(employees, id) {
    const map = new Map();
    for(const employee of employees) {
        map.set(employee.id, employee);
    }
    const addImportance = (id, map) => {
        const e = map.get(id);
        let sum = 0;
        if(e) {
            sum += e.importance;
            const subIds = e.subordinates;
            if(subIds) {
                for(const subId of subIds) {
                    sum += addImportance(subId, map)
                }
            }
        } else {
            return 0;
        }
        return sum;
    }
    
    return addImportance(id, map);
};