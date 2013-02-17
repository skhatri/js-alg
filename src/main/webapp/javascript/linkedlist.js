var LinkedList = (function () {
    "use strict";
    function Node (key, val) {
        this.key = key;
        this.val = val;
        this.next = null;
    }

    function LinkedList () {
        this.head = null;
    }

    function ensureNode (val) {
        var node;
        if (typeof val === 'string') {
            node = new Node(val, val);
        } else {
            node = val;
        }
        return node;
    }

    LinkedList.prototype.add = function (val) {
        var node = ensureNode(val);
        var cursor = this.head;
        while (cursor != null && cursor.next != null) {
            cursor = cursor.next;
        }
        if (cursor === null) {
            this.head = node;
        } else {
            cursor.next = node;
        }
        return this;
    }

    LinkedList.prototype.list = function () {
        var curr = this.head;
        while (curr != null) {
            console.log(curr.key);
            curr = curr.next;
        }
    };

    LinkedList.prototype.size = function () {
        var curr = this.head, count = 0;
        while (curr != null) {
            curr = curr.next;
            count += 1;
        }
        return count;
    };

    LinkedList.prototype.contains = function (val) {
        var curr = this.head;
        var node = ensureNode(val);
        while (curr != null) {
            if (curr.key === node.key) { return true; }
            curr = curr.next;
        }
        return false;
    };

    LinkedList.prototype.remove = function (val) {
        var curr = this.head;
        var node = ensureNode(val);
        var prev = null;
        while (curr != null) {
            if (curr.key === node.key) {
                var tmp = curr.next;
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
