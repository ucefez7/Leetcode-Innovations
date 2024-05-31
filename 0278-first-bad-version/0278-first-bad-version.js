/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let first=1
        let last=n
        while(first<=last){
            let mid=Math.floor((first+last)/2)
            if(!isBadVersion(mid)){
                first= mid+1
            }else{
                last=mid-1
            }
        }
        return first
    };
};