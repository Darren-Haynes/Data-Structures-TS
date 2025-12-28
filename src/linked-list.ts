class ListNode<T> {
  public data: T;
  public next: ListNode<T> | null = null;
  public prev: ListNode<T> | null = null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList<T> {
  private head: ListNode<T> | null = null;
  private tail: ListNode<T> | null = null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  public pushHead(data: T) {
    const newNode = new ListNode(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
  }

  public pushTail(data: T) {
    const newNode = new ListNode(data);
    if (!this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  public print(): void {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const ll = new LinkedList<number>();
for (let i = 0; i < 5; i++) {
  ll.pushTail(i);
}
ll.print();
