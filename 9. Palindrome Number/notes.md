# 🧠 LeetCode — Palindrome Number (9)
https://leetcode.com/problems/palindrome-number/

## 📌 Problem Summary
Determine if an integer reads the same forwards and backwards (palindrome).

- Difficulty: Easy

Constraints (paraphrased):
- Negative numbers are not palindromes.
- Numbers ending with 0 are not palindromes unless the number is 0.

---

## 🧠 My Approach (Current Code in main.js)
I convert the number to a string, reverse it, and compare.

```javascript
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let y = String(x);
    let z = '';
    for (let i = y.length - 1; i >= 0; i--) {
        z += y[i];
    }
    return z === y;
};
```
---
## 📚 Takeaways
- String method is the fastest to write and clear.