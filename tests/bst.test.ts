import { BST, BstNode } from "../src/bst.ts";

test("BstNode object", () => {
  const node = new BstNode(1);
  expect(node).toEqual({ data: 1, left: null, right: null });
});

test("BstNode initiates with data", () => {
  const node = new BstNode(1);
  expect(node.data).toBe(1);
});

test("BST Object", () => {
  const bst = new BST();
  expect(bst).toEqual({ head: null });
});

test("insert first time returns correct head data", () => {
  const bst = new BST();
  expect(bst.insert(1)).toBe(1);
});

test("insert first time head not null", () => {
  const bst = new BST();
  bst.insert(1);
  expect(bst.head).not.toBe(null);
});

test("insert second time data < head.data returns correct head data", () => {
  const bst = new BST();
  bst.insert(10);
  expect(bst.insert(5)).toBe(5);
});

test("insert second time head.left has correct data", () => {
  const bst = new BST();
  bst.insert(10);
  bst.insert(5);
  expect(bst.head.left.data).toBe(5);
});

test("insert second time head.right has correct data", () => {
  const bst = new BST();
  bst.insert(10);
  bst.insert(15);
  expect(bst.head.right.data).toBe(15);
});

test("insert 3 nodes has correct head, right and left", () => {
  const bst = new BST();
  bst.insert(10);
  bst.insert(5);
  bst.insert(15);
  expect(bst.head.data).toBe(10);
  expect(bst.head.left.data).toBe(5);
  expect(bst.head.right.data).toBe(15);
});

test("insert 7 nodes has correct head, right and left nodes", () => {
  const bst = new BST();
  bst.insert(10);
  bst.insert(5);
  bst.insert(3);
  bst.insert(7);
  bst.insert(15);
  bst.insert(20);
  bst.insert(12);
  expect(bst.head.data).toBe(10);
  expect(bst.head.left.data).toBe(5);
  expect(bst.head.right.data).toBe(15);
  expect(bst.head.left.left.data).toBe(3);
  expect(bst.head.left.right.data).toBe(7);
  expect(bst.head.right.left.data).toBe(12);
  expect(bst.head.right.right.data).toBe(20);
});

test("insert 2 nodes with same data returns null", () => {
  const bst = new BST();
  bst.insert(10);
  expect(bst.insert(10)).toBe(null);
});
