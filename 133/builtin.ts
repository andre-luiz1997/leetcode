/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     neighbors: _Node[]
 * 
 *     constructor(val?: number, neighbors?: _Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 * 
 */


function cloneGraph(node: _Node | null): _Node | null {
  if (!node) return null;
  const clones = new Map();
  const queue: _Node[] = [node]
  clones.set(node.val, new _Node(node.val, []))
  while (queue.length) {
    const currNode = queue.shift();
    const currClone = clones.get(currNode.val);
    if (currNode && currClone) {
      currNode.neighbors?.forEach((n: _Node) => {
        if (!clones.get(n.val)) {
          clones.set(n.val,new _Node(n.val, []))
          queue.push(n)
        }
        currClone.neighbors.push(clones.get(n.val));
      })
    }
  }
  return clones.get(node.val);
};