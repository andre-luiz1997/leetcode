// Construct Binary Tree from Inorder and Postorder Traversal
// https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/description/

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

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
    if(!inorder?.length || !postorder?.length) return null;
    const rootValue = postorder.pop();
    if(rootValue === undefined) return null;
    const root = new TreeNode(rootValue)
    const inorderIdx = inorder.indexOf(root.val);
    if(inorderIdx > -1) {
      root.right = buildTree(inorder.slice(inorderIdx + 1), postorder);
      root.left = buildTree(inorder.slice(0, inorderIdx), postorder);
    }
    return root;
};