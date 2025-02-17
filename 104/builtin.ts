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

function maxDepth(root: TreeNode | null): number {
  const recursiveDepth = (node: TreeNode | null, depth: number): number => {
    if(!node) return depth;
    return Math.max(recursiveDepth(node?.leftNode, depth + 1), recursiveDepth(node?.rightNode, depth + 1));
  }
  return recursiveDepth(root, 0);
};