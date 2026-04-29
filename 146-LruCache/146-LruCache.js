// Last updated: 4/29/2026, 10:33:54 AM
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.size = 0;
    this.map = new Map();
    this.dummyHead = {
        key: null,
        value: null,
        prev: null,
        next: null,
    };
    this.dummyTail = {
        key: null,
        value: null,
        prev: null,
        next: null,
    };
    this.dummyHead.next = this.dummyTail;
    this.dummyTail.prev = this.dummyHead;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    let node = this.map.get(key);
    if(node) {
        // disconnect the node from the doubly linked list
        const prevNode = node.prev;
        const nextNode = node.next;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
    } else {
        return -1;
    }
    const currHead = this.dummyHead.next;
    this.dummyHead.next = node;
    node.prev = this.dummyHead;
    node.next = currHead;
    currHead.prev = node;

    return node.value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    let node = this.map.get(key);
    if(node) {
        // disconnect the node from the doubly linked list
        const prevNode = node.prev;
        const nextNode = node.next;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
        node.value = value;
    } else {
        node = {
            key,
            value,
            prev: null,
            next: null,
        }
        this.size++;
        // put the node into the head
        this.map.set(key, node);
    }
    if(!this.dummyHead.next && !this.dummyTail.prev) {
        this.dummyHead.next = node;
        node.prev = this.dummyHead;
        node.next = this.dummyTail;
        this.dummyTail.prev = node;
    } else {
        const currHead = this.dummyHead.next;
        this.dummyHead.next = node;
        node.prev = this.dummyHead;
        node.next = currHead;
        currHead.prev = node;    
    }
    if(this.size > this.capacity) {
        // remove tail node
        const currTail = this.dummyTail.prev;
        this.map.delete(currTail.key);
        const beforeTail = currTail.prev;
        beforeTail.next = this.dummyTail;
        this.dummyTail.prev = beforeTail;
        this.size--;
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */