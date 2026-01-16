export class ASLLNode {
  public num: number;
  public data: number | string;
  public next: ASLLNode | null = null;
  public prev: ASLLNode | null = null;

  constructor(num: number, data: number | string) {
    this.num = num;
    this.data = data;
  }
}

export class ASLL {
  public head: ASLLNode | null = null;
  public tail: ASLLNode | null = null;
  public length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}
