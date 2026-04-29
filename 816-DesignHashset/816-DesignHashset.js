// Last updated: 4/29/2026, 10:27:33 AM
/**
 * Initialize your data structure here.
 */
var MyHashSet = function() {
    this.arr = new Array(100).fill(null);
};

const Node = function(val, next) {
    this.val = val;
    this.next = next || null;
}

MyHashSet.prototype.hash = function(key) {
    return key % 100;
}

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    const idx = this.hash(key);
    if(this.arr[idx]) {
        let node = this.arr[idx];
        let prev;
        while(node !== null) {
            if(node.val === key) {
                return;
            }
            prev = node;
            node = node.next;
        }
        prev.next = new Node(key);
    } else {
        this.arr[idx] = new Node(key);
    }
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    const idx = this.hash(key);
    if(this.arr[idx]) {
        let node = this.arr[idx];
        let prev;
        while(node !== null) {
            if(node.val === key) {
                if(prev) {
                    prev.next = node.next;
                } else {
                    this.arr[idx] = node.next;
                }
            }
            prev = node;
            node = node.next;
        }
    }
};

/**
 * Returns true if this set contains the specified element 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    const idx = this.hash(key);
    if(this.arr[idx]) {
        let node = this.arr[idx];
        while(node !== null) {
            if(node.val === key) {
                return true;
            }
            node = node.next;
        }
    } 
    return false;
};

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */