export class BstNode<T> {
  public data: T;
  public left: BstNode<T> | null = null;
  public right: BstNode<T> | null = null;

  constructor(data: T) {
    this.data = data;
  }
}
