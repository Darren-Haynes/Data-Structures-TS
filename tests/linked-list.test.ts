import { LinkedList, ListNode } from "../src/linked-list.ts";

test("ListNode object", () => {
  const node = new ListNode(1);
  expect(node).toEqual({ data: 1, next: null, prev: null });
});

test("ListNode initiates with data", () => {
  const node = new ListNode(1);
  expect(node.data).toBe(1);
});

test("LinkedList Object", () => {
  const ll = new LinkedList();
  expect(ll).toEqual({ head: null, tail: null, length: 0 });
});

test("pushHead first time creates head and tail", () => {
  const ll = new LinkedList();
  ll.pushHead(1);
  expect(ll.head.data).toBe(1);
  expect(ll.tail.data).toBe(1);
  expect(ll.tail.data.next).toBe(undefined);
});

test("pushHead second time creates correct nodes", () => {
  const ll = new LinkedList();
  ll.pushHead(1);
  ll.pushHead(2);
  expect(ll.head.data).toBe(2);
  expect(ll.tail.data).toBe(1);
  expect(ll.tail.data.next).toBe(undefined);
});

test("pushTail first time creates head and tail", () => {
  const ll = new LinkedList();
  ll.pushHead(1);
  expect(ll.head.data).toBe(1);
  expect(ll.tail.data).toBe(1);
  expect(ll.tail.data.next).toBe(undefined);
});

test("pushTail second time creates correct nodes", () => {
  const ll = new LinkedList();
  ll.pushTail(1);
  ll.pushTail(2);
  expect(ll.head.data).toBe(1);
  expect(ll.tail.data).toBe(2);
  expect(ll.tail.data.next).toBe(undefined);
});

test("popHead method with empty LinkedList", () => {
  const ll = new LinkedList();
  expect(ll.popHead()).toBe(undefined);
});

test("popHead method with single entry LinkedList", () => {
  const ll = new LinkedList();
  ll.pushHead(1);
  expect(ll.popHead()).toBe(1);
});

test("popTail method with empty LinkedList", () => {
  const ll = new LinkedList();
  expect(ll.popTail()).toBe(undefined);
});

test("popTail method with single entry LinkedList", () => {
  const ll = new LinkedList();
  ll.pushTail(1);
  expect(ll.popTail()).toBe(1);
});

test("print empty LinkedList", () => {
  const consoleLogSpy = jest.spyOn(console, "log");
  const ll = new LinkedList();
  ll.print();
  expect(consoleLogSpy).toHaveBeenCalledWith("");
});

test("print LinkedList with single value", () => {
  const consoleLogSpy = jest.spyOn(console, "log");
  const ll = new LinkedList();
  ll.pushHead(1);
  ll.print();
  expect(consoleLogSpy).toHaveBeenCalledWith("1");
});
