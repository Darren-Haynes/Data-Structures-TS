import { ListNode } from "../src/linked-list.js";

test("ListNode object", () => {
  const node = new ListNode(1);
  expect(node).toEqual({ data: 1, next: null, prev: null });
});

test("ListNode initiates with data", () => {
  const node = new ListNode(1);
  expect(node.data).toBe(1);
});
