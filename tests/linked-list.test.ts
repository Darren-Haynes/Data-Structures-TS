import { ListNode } from "../src/linked-list.ts";

test("empty string should result in zero", () => {
  const node = new ListNode(1);
  expect(node.data).toBe(1);
});
