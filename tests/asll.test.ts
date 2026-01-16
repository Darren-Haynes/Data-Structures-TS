import { ASLLNode } from "../src/asll.ts";

test("Node initiates with num & data", () => {
  const node = new ASLLNode(1, "a");
  expect(node.num).toBe(1);
  expect(node.data).toBe("a");
  expect(node.next).toBe(null);
  expect(node.prev).toBe(null);
});
