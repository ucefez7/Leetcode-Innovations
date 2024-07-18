/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowel= s.match(/[aeiou]/gi)
    return s.replace(/[aeiou]/ig, x=>vowel.pop())
};