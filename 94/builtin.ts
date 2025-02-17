// Binary tree inorder traversal
// https://leetcode.com/problems/binary-tree-inorder-traversal/description/

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

function inorderTraversal(root: TreeNode | null): number[] {
  const recursion = (result: number[], node: TreeNode | null) => {
    if(!node) return;
    recursion(result, node.left);
    result.push(node.val);
    recursion(result, node.right);
  }
  const result: number[] = [];
  recursion(result, root);
  return result;
}