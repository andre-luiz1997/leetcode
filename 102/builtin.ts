// Binary Tree Level Order Traversal
// https://leetcode.com/problems/binary-tree-level-order-traversal/

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
// Recursive, better runtime
function levelOrder(root: TreeNode | null): number[][] {
  const res: number[][] = [];
  if (!root) return res;
  const util = (node: TreeNode | null, levelIndex: number) => {
    if (!node) return;
    if (!res[levelIndex]) res[levelIndex] = [node.value]
    else res[levelIndex].push(node.value)
    util(node.leftNode, levelIndex + 1)
    util(node.rightNode, levelIndex + 1)
  }
  util(root, 0)
  return res;
};

// Iterative, better readability
// function levelOrder(root: TreeNode | null): number[][] {
//   const res: number[][] = [];
//   if (!root) return res;
//   let queue: TreeNode[] = [root];
//   let levelIndex = 0;
//   while (queue.length) {
//     res[levelIndex] = []
//     const newQueue: TreeNode[] = []
//     queue.forEach(item => {
//       res[levelIndex].push(item.value);
//       if(item.leftNode) newQueue.push(item.leftNode);
//       if(item.rightNode) newQueue.push(item.rightNode);
//     })
//     queue = newQueue;
//     levelIndex++;
//   }
//   return res;
// };