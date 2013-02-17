var LinkedList = (function () {
    "use strict";
    function Node(key, val) {
        this.key = key;
        this.val = val;
        this.next = null;
    }

    function LinkedList() {
        this.head = null;
    }

    function ensureNode(val) {
        var node;
        if (val !== undefined && val.constructor.name !== 'Node') {
            node = new Node(val, val);
        } else {
            node = val;
        }
        return node;
    }

    LinkedList.prototype.add = function (val) {
        var node = ensureNode(val), cursor = this.head;
        while (cursor !== null && cursor.next !== null) {
            cursor = cursor.next;
        }
        if (cursor === null) {
            this.head = node;
        } else {
            cursor.next = node;
        }
        return this;
    };

    LinkedList.prototype.each = function (fn) {
        var curr = this.head;
        while (curr !== null) {
            if (typeof fn === 'function') {
                fn(curr.key);
            }
            curr = curr.next;
        }
    };

    LinkedList.prototype.list = function () {
        var curr = this.head, arr = [];
        while (curr !== null) {
            arr.push(curr.key);
            curr = curr.next;
        }
        return arr;
    };

    LinkedList.prototype.size = function () {
        var curr = this.head, count = 0;
        while (curr !== null) {
            curr = curr.next;
            count += 1;
        }
        return count;
    };

    LinkedList.prototype.contains = function (val) {
        return this.find(val) !== null;
    };

    LinkedList.prototype.find = function (val) {
        var curr = this.head, node = ensureNode(val);
        while (curr !== null) {
            if (curr.key === node.key) { return curr; }
            curr = curr.next;
        }
        return null;
    };

    LinkedList.prototype.remove = function (val) {
        var curr = this.head, node = ensureNode(val), prev = null, tmp;
        while (curr !== null) {
            if (curr.key === node.key) {
                tmp = curr.next;
                if (prev !== null) {
                    prev.next = tmp;
                } else {
                    this.head = tmp;
                }
                curr.next = null;
                return true;
            }
            prev = curr;
            curr = curr.next;
        }
        return false;
    };

    return LinkedList;
}());
