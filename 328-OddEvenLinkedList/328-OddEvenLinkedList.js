// Last updated: 4/29/2026, 10:31:14 AM
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
var oddEvenList = function(head) {
    if(!head) {
        return null;
    }
    const oddHead = head;
    const evenHead = head.next;

    let oddNode = oddHead;
    let evenNode = evenHead;
    let oddPrev;

    while(oddNode || evenNode) {
        oddPrev = oddNode;
        
        if(oddNode) {
            oddNode.next = oddNode.next? oddNode.next.next: null;
            oddNode = oddNode.next;
        }
        if(evenNode) {
            evenNode.next = evenNode.next? evenNode.next.next: null;
            evenNode = evenNode.next;
        }
    }

    oddPrev.next = evenHead;
    return oddHead;

    // const connect = (initialNode) => {
    //     let node = initialNode
    //     while(node) {
    //         node.next = node.next? node.next.next: null;
    //         node = node.next;
    //     } 
    // }
    
    // connect(oddHead);
    // connect(evenHead);
    
    // let node = oddHead;
    // let prev;
    // while(node) {
    //     prev = node;
    //     node = node.next;
    // }
    // prev.next = evenHead;
    // node = oddHead;
    // while(node) {
    //     console.log(node.val);
    //     node = node.next
    // }
    // return oddHead;
};