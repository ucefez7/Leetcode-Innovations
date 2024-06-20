/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
    dfs=(node, sum)=>{
        if(node==null){
            return null
        }
        sum= sum + node.val
        if(node.left==null && node.right==null){
            return +sum
        }
        return dfs(node.left, sum) + dfs(node.right, sum)
    }
    return dfs(root, '')
};