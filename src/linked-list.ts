export class ListNode<T> {
  public data: T;
  public next: ListNode<T> | null = null;
  public prev: ListNode<T> | null = null;

  constructor(data: T) {
    this.data = data;
  }
}

export class LinkedList<T> {
  public head: ListNode<T> | null = null;
  public tail: ListNode<T> | null = null;
  public length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  public pushHead(data: T) {
    const newNode = new ListNode(data);
    this.length++;
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      return this.length;
    }

    if (this.head.next === null) {
      this.tail = this.head;
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    return this.length;
  }

  public pushTail(data: T) {
    const newNode = new ListNode(data);
    this.length++;
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
    this.length--;
    const data = this.head.data;
    this.head = this.head.next;
    if (this.head) this.head.prev = null;
    return data;
  }

  public popTail(): T | undefined {
    if (!this.tail) return undefined;
    this.length--;
    const data = this.tail.data;
    this.tail = this.tail.prev;
    if (this.tail) this.tail.next = null;
    return data;
  }

  public reverse(): boolean {
    if (this.head === null) {
      return false;
    }

    if (this.head.next === null) {
      return false;
    }

    if (this.head.next === this.tail) {
      let tmpTail = this.head;
      this.head = this.tail;
      this.head.next = tmpTail;
      this.head.prev = null;
      this.tail = tmpTail;
      this.tail.next = null;
      this.tail.prev = this.head;
      return true;
    }

    let tmpHead = this.head;
    let tmpTail = this.tail;
    let curr = this.tail;
    let prev = null;

    while (curr) {
      let tmp = curr.prev;
      curr.next = curr.prev;
      curr.prev = prev;
      prev = curr;
      curr = curr.next;
    }
    this.head = tmpTail;
    this.tail = tmpHead;
    return true;
  }

  public print(): void {
    let string = "";
    let current = this.head;
    while (current) {
      string += current.data + " ";
      current = current.next;
    }
    console.log(string.slice(0, -1));
  }

  public stringify(): string {
    let string = "";
    let current = this.head;
    while (current) {
      string += current.data + " ";
      current = current.next;
    }
    return string.length <= 1 ? string : string.slice(0, -1);
  }
}
