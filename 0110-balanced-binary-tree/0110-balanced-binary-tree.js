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
 * @return {boolean}
 */
var isBalanced = function(root) {
    let res= true
    Dfs=(root)=>{
        if(root==null){
            return 0
        }
        let left= Dfs(root.left)
        let right= Dfs(root.right)
        if(Math.abs(left-right)>1){
            res=false
        }
        return Math.max(left+1, right+1)
    }
    Dfs(root)
    return res
};