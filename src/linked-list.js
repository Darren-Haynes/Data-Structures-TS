var ListNode = /** @class */ (function () {
    function ListNode(data) {
        this.next = null;
        this.prev = null;
        this.data = data;
        this.next = null;
    }
    return ListNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
        this.tail = null;
        this.head = null;
        this.tail = null;
    }
    LinkedList.prototype.pushHead = function (data) {
        var newNode = new ListNode(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
    };
    LinkedList.prototype.print = function () {
        var current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    };
    return LinkedList;
}());
var ll = new LinkedList();
for (var i = 0; i < 5; i++) {
    ll.pushHead(i);
}
ll.print();
