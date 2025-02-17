class TreeNode {
  value: number;
  leftNode?: TreeNode;
  rightNode?: TreeNode;
  constructor(value: number) {
    this.value = value;
  }
}

class BinaryTree {
  root?: TreeNode;

  insert(value: number) {
    const node = new TreeNode(value);
    if (!this.root) { this.root = node; return; }
    this.searchAndInsert(this.root, node);
  }

  search(value: number) {
    return this.searchRecursive(value, this.root);
  }

  preorderTraversal() { //Root at the beginning of result
    const result: number[] = []
    this.xorderRecursive('preorder',result, this.root);
    return result;
  }

  postorderTraversal() { //Root at the beginning of result
    const result: number[] = []
    this.xorderRecursive('postorder',result, this.root);
    return result;
  }

  inorderTraversal() {
    const result: number[] = []
    this.xorderRecursive('inorder',result, this.root);
    return result;
  }

  private xorderRecursive(method: 'preorder' | 'inorder' | 'postorder',result: number[], node?: TreeNode) {
    if (!node) return;
    switch (method) {
      case 'preorder':
        result.push(node?.value);
        this.xorderRecursive(method,result, node.leftNode)
        this.xorderRecursive(method,result, node.rightNode)
        break;
      case 'inorder':
        this.xorderRecursive(method,result, node.leftNode)
        result.push(node?.value);
        this.xorderRecursive(method,result, node.rightNode)
        break;
      case 'postorder':
        this.xorderRecursive(method,result, node.leftNode)
        this.xorderRecursive(method,result, node.rightNode)
        result.push(node?.value);
        break;
    }
  }

  private searchRecursive(value: number, searchNode?: TreeNode): TreeNode | null {
    if (!searchNode) return null;
    if (searchNode.value == value) return searchNode;
    if (value > searchNode.value) return this.searchRecursive(value, searchNode.rightNode);
    return this.searchRecursive(value, searchNode.leftNode);
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
console.log(tree.postorderTraversal());
// console.log(tree.search(2))
// console.log(tree.search(7))