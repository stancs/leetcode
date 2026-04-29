// Last updated: 4/29/2026, 10:19:08 AM
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertGreatestCommonDivisors = function(head) {
    const gcd = (a, b) => {
        while(b !== 0) {
            let tmp = b;
            b = a % b;
            a = tmp;
        }
        return a;
    }
    let currNode = head;
    while(currNode) {
        const nextNode = currNode.next;
        if(nextNode) {
            const gcdVal = gcd(currNode.val, nextNode.val);
            console.log(`(${currNode.val}, ${nextNode.val}) -> GCD: ${gcdVal}`)
            const gcdNode = new ListNode(gcdVal, nextNode);
            currNode.next = gcdNode;
            // gcdNode.next = nextNode;
        }
        currNode = nextNode;
    }
    return head;
};