// Last updated: 4/29/2026, 10:37:03 AM
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode node1 = l1, node2 = l2;
        ListNode res = null, node3 = null;
        int carry = 0;
        while(node1 != null || node2 != null) {
            int val1 = 0, val2 = 0;
            if (node1 != null) {
                val1 = node1.val;    
                node1 = node1.next;
            }
            if (node2 != null) {
                val2 = node2.val;
                node2 = node2.next;
            }
            int val3 = val1 + val2 + carry;
            carry = val3 / 10;
            val3 = val3 % 10;
            
            if(node3 == null) {
                node3 = new ListNode(val3);
                res = node3;
            } else {
                node3.next = new ListNode(val3);
                node3 = node3.next;
            }
        }
        
        if (carry != 0) {
            node3.next = new ListNode(carry);
        }
        
        return res;
    }
}