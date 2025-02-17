// Same Tree
// https://leetcode.com/problems/same-tree/description

// Recursive
function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if(!p && !q) return true;
  return p?.value == q?.value
    && isSameTree(p?.leftNode, q?.leftNode)
    && isSameTree(p?.rightNode, q?.rightNode)
}

// Iterative - Less eficient
// function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
//   const preorderTraversalP: Array<number | null> = []
//   const preorderTraversalQ: Array<number | null> = []
//   if (p && !q || !p && q) return false;
//   const preorderTraversal = (resultArray: Array<number | null>, node: TreeNode | null) => {
//     if (!node) {
//       resultArray.push(null);
//       return;
//     }
//     resultArray.push(node.value);
//     if (node?.leftNode) {
//       preorderTraversal(resultArray, node?.leftNode)
//     } else {
//       resultArray.push(null);
//     }
//     if (node?.rightNode) {
//       preorderTraversal(resultArray, node?.rightNode)
//     } else {
//       resultArray.push(null);
//     }
//     return
//   }
//   preorderTraversal(preorderTraversalP, p)
//   preorderTraversal(preorderTraversalQ, q)
//   if (preorderTraversalP?.length != preorderTraversalQ?.length) return false;
//   for (let index = 0; index < preorderTraversalP.length; index++) {
//     const item = preorderTraversalP[index];
//     if (item != preorderTraversalQ[index]) return false;
//   }
//   return true;
// };
