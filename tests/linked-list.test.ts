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

test("popHead method with double entry LinkedList", () => {
  const ll = new LinkedList();
  ll.pushHead(1);
  ll.pushHead(2);
  expect(ll.popHead()).toBe(2);
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

test("popTail method with double entry LinkedList", () => {
  const ll = new LinkedList();
  ll.pushTail(1);
  ll.pushTail(2);
  expect(ll.popTail()).toBe(2);
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

test("Reverse LinkedList with no entries doesn't change list", () => {
  const ll = new LinkedList();
  ll.reverse();
  expect(ll.head).toBe(null);
});

test("Reverse LinkedList with no entries returns false", () => {
  const ll = new LinkedList();
  expect(ll.reverse()).toBe(false);
});

test("LinkedList with single entry doesn't change list", () => {
  const ll = new LinkedList();
  ll.pushHead(1);
  ll.reverse();
  expect(ll.head.data).toBe(1);
});

test("LinkedList with single entry returns false", () => {
  const ll = new LinkedList();
  ll.pushHead(1);
  expect(ll.reverse()).toBe(false);
});

test("LinkedList with double entry list is reversed", () => {
  const ll = new LinkedList();
  ll.pushHead(1);
  ll.pushHead(2);
  const before = ll.stringify();
  ll.reverse();
  expect(ll.stringify()).toBe("1 2");
});

test("LinkedList with triple entry list is reversed", () => {
  const ll = new LinkedList();
  ll.pushHead(1);
  ll.pushHead(2);
  ll.pushHead(3);
  const before = ll.stringify();
  ll.reverse();
  expect(ll.stringify()).toBe("1 2 3");
});

test("LinkedList stringify with no entries", () => {
  const ll = new LinkedList();
  expect(ll.stringify()).toBe("");
});

test("LinkedList stringify with single entry", () => {
  const ll = new LinkedList();
  ll.pushTail(1);
  expect(ll.stringify()).toBe("1");
});

test("LinkedList stringify with double entry", () => {
  const ll = new LinkedList();
  ll.pushTail(1);
  ll.pushHead(2);
  expect(ll.stringify()).toBe("2 1");
});

test("LinkedList stringify with triple entry", () => {
  const ll = new LinkedList();
  ll.pushTail(1);
  ll.pushHead(2);
  ll.pushHead(3);
  expect(ll.stringify()).toBe("3 2 1");
});
