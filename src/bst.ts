export class BstNode<T> {
  public data: T;
  public left: BstNode<T> | null = null;
  public right: BstNode<T> | null = null;

  constructor(data: T) {
    this.data = data;
  }
}

export class BST<T> {
  public head: BstNode<T> | null = null;

  constructor() {
    this.head = null;
  }

  private _insert(curr: BstNode, new_node: BstNode, data: any): T {
    if (data === curr.data) {
      return null;
    }

    if (data < curr.data) {
      if (curr.left === null) {
        curr.left = new_node;
        return data;
      } else {
        return this._insert(curr.left, new_node, data);
      }
    }

    if (data > curr.data) {
      if (curr.right === null) {
        curr.right = new_node;
        return data;
      } else {
        return this._insert(curr.right, new_node, data);
      }
    }
  }

  public insert(data: T): T {
    const new_node = new BstNode(data);
    if (this.head === null) {
      this.head = new_node;
      return new_node.data;
    }
    return this._insert(this.head, new_node, data);
  }
}
