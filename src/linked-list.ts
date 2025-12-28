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

  public popHead(): T | undefined {
    if (!this.head) return undefined;
    const data = this.head.data;
    this.head = this.head.next;
    if (this.head) this.head.prev = null;
    return data;
  }

  public popTail(): T | undefined {
    if (!this.tail) return undefined;
    const data = this.tail.data;
    this.tail = this.tail.prev;
    if (this.tail) this.tail.next = null;
    return data;
  }

  public print(): void {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}
