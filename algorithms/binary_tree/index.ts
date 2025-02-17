class TreeNode {
  value: number;
  leftNode: TreeNode | null = null;
  rightNode: TreeNode | null = null;
  constructor(value: number) {
    this.value = value;
  }
}

class BinaryTree {
  root: TreeNode | null = null;

  insert(value: number) {
    const node = new TreeNode(value);
    if (!this.root) { this.root = node; return; }
    this.searchAndInsert(this.root, node);
  }

  search(value: number) { // Only if the tree is balanced (in order)
    return this.searchRecursive(value, this.root);
  }

  dfs(value: number) { // Depth-first search
    return this.dfsRecursive(value, this.root);
  }

  bfs(value: number) { // Breadth-first search
    const queue: TreeNode[] = [];
    if (!this.root) return null;
    queue.push(this.root);
    while (queue.length > 0) {
      const elem = queue.shift();
      if (elem?.value == value) return elem;
      if(elem?.leftNode) queue.push(elem.leftNode);
      if(elem?.rightNode) queue.push(elem.rightNode);
    }
    return null;
  }

  preorderTraversal() { //Root at the beginning of result
    const result: number[] = []
    this.xorderRecursive('preorder', result, this.root);
    return result;
  }

  postorderTraversal() { //Root at the beginning of result
    const result: number[] = []
    this.xorderRecursive('postorder', result, this.root);
    return result;
  }

  inorderTraversal() {
    const result: number[] = []
    this.xorderRecursive('inorder', result, this.root);
    return result;
  }

  private xorderRecursive(method: 'preorder' | 'inorder' | 'postorder', result: number[], node: TreeNode | null = null) {
    if (!node) return;
    switch (method) {
      case 'preorder':
        result.push(node?.value);
        this.xorderRecursive(method, result, node.leftNode)
        this.xorderRecursive(method, result, node.rightNode)
        break;
      case 'inorder':
        this.xorderRecursive(method, result, node.leftNode)
        result.push(node?.value);
        this.xorderRecursive(method, result, node.rightNode)
        break;
      case 'postorder':
        this.xorderRecursive(method, result, node.leftNode)
        this.xorderRecursive(method, result, node.rightNode)
        result.push(node?.value);
        break;
    }
  }

  private searchRecursive(value: number, searchNode: TreeNode | null): TreeNode | null {
    if (!searchNode) return null;
    if (searchNode.value == value) return searchNode;
    if (value > searchNode.value) return this.searchRecursive(value, searchNode.rightNode);
    return this.searchRecursive(value, searchNode.leftNode);
  }

  private dfsRecursive(value: number, searchNode: TreeNode | null = null): TreeNode | null {
    if (!searchNode) return null;
    if (searchNode.value == value) return searchNode;
    if (searchNode.leftNode) {
      const res = this.searchRecursive(value, searchNode.leftNode);
      if (res) return res;
    }
    return this.searchRecursive(value, searchNode.rightNode);
  }

  private searchAndInsert(searchNode: TreeNode, insertingNode: TreeNode) {
    if (!this.root) return;
    if (insertingNode.value > searchNode.value) {
      if (searchNode.rightNode) {
        this.searchAndInsert(searchNode.rightNode, insertingNode);
      } else {
        searchNode.rightNode = insertingNode;
      }
      return;
    }
    if (searchNode.leftNode) {
      this.searchAndInsert(searchNode.leftNode, insertingNode);
      return;
    }
    searchNode.leftNode = insertingNode;
  }
}

const tree = new BinaryTree();
tree.insert(5);
tree.insert(3);
tree.insert(1);
tree.insert(10);
tree.insert(15);
tree.insert(7);
// console.log(tree.preorderTraversal());
// console.log(tree.inorderTraversal());
// console.log(tree.postorderTraversal());
// console.log(tree.search(2))
// console.log(tree.search(7))
// console.log(tree.dfs(78))
console.log(tree.bfs(15))