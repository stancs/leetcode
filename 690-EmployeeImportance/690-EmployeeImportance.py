# Last updated: 4/29/2026, 10:28:47 AM
"""
# Definition for Employee.
class Employee:
    def __init__(self, id: int, importance: int, subordinates: List[int]):
        self.id = id
        self.importance = importance
        self.subordinates = subordinates
"""
"""
20:00s
O(E) (E: # of employees)
O(E)
"""
class Solution:
    def getImportance(self, employees: List['Employee'], id: int) -> int:    
        def addImportance(employee, hash):
            # print(employee.id)
            # print(employee.importance)
            if not employee:
                return 0
            sum = employee.importance
            if employee.subordinates:   
                for sub_id in employee.subordinates:
                    sub_employee = hash[sub_id]
                    if sub_employee:
                        sum += addImportance(sub_employee, hash)
            return sum
        from collections import defaultdict
        hash = defaultdict(lambda: None)
        for employee in employees:
            hash[employee.id] = employee
            
        e = hash[id]
        return addImportance(e, hash)