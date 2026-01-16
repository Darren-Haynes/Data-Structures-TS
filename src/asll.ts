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
