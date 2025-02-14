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

  private searchRecursive(value: number,searchNode?: TreeNode): TreeNode | null {
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
tree.insert(1);
tree.insert(0);
tree.insert(2);
tree.insert(5);
tree.insert(3);

console.log(tree.search(2))
console.log(tree.search(7))