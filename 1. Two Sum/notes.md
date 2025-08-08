<!-- # 🧠 LeetCode Basic Problem — [Two Sum](https://leetcode.com/problems/two-sum)

## 📌 Problem Summary
**Difficulty:** Easy
**Topic Tags:** `Array`, `Hash Table`
**ID:** `1`

> This is the first problem of leetcode. I tried to solve it in python 🐍 in my first go, but unfortunately I was not good in python due to that i tried to do in JS using same logic and it is in front of you. - You can find my written python code below too 😂 

---

## 🧠 Initial Thoughts / Approach
> So, you grip this problem you will need to read clearly the very first line `Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target` the remaining description only holds the constraint like `exactly one solution` and `you may not use the same element twice`

- I will be given an array of `integer` minimum of length 2 and max 10^4
- I will be given an `integer` against which i will've to find array indecies that give `A[1] + A[2] = X`
- When I have find the solution, I've to exist the system as only first solution needed
- 😅 I find myself using `length()` to find length of array that was actually `length` only and second on some first run I noticed Test Cases are not passing. the problem was i was rendering the condition incorrect like starting inner loop from `i` that was actually `i+1` and i also forgot `loos equality` and `strict equality`

---

## 🐍 Python Code
arraySize=int(input("Enter the size of your array:"))
if arraySize>=2 && arraySize<=10000
    acutalArray=[None]*arraySize
    for (i=0; i<= arraySize; i++){
        dummy=int(input("Enter Value:"))
        if dummy>= -1000000000 && dummy<=1000000000
            acutalArray[i]=dummy
        return
    }

userNumber=int(input("Enter Integer:"))
if (userNumber>=-1000000000 && userNumber<=1000000000)
    for (i=0; i<=arraySize; i++){
        for(j=i+1; j<=arraySize; j++){
            test= acutalArray[i]+acutalArray[j]
            if test=userNumber
            print("Index of i", i)
            print("Index of j", j)
            
        }
    }


I was trying to implement constraints, then i find leetcode provide always valid inputs -->
# 🧠 LeetCode Basic Problem — [Two Sum](https://leetcode.com/problems/two-sum/)

## 📌 Problem Summary

**Difficulty:** Easy
**Topic Tags:** `Array`, `Hash Table`
**ID:** `1`

> This is the first problem on LeetCode. I initially tried to solve it in Python 🐍, but due to my limited comfort with the language, I switched to JavaScript using the same logic — which worked!
> My Python attempt is still documented below for learning purposes. 😂

---

## 🧠 Initial Thoughts / Approach

> To understand this problem clearly, the key is in the very first line of the prompt:
>
> `"Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target."`
>
> The rest of the description just enforces the constraints like:
>
> * Only one solution exists
> * You may not use the same element twice

### Breakdown:

* You're given an array of integers (`nums`) of size at least 2 and up to 10⁴.
* You're also given a `target` integer.
* You need to **find the two indices** `i` and `j` such that `nums[i] + nums[j] == target`.
* As soon as you find a valid pair, you return the result — only one solution exists, so no need to continue checking.

### Mistakes I Made:

* 😅 I mistakenly used `.length()` instead of `.length` in JavaScript.
* I also incorrectly used `j = i` in my nested loop instead of `j = i + 1`.
* Initially, I used `==` (loose equality) rather than `===` (strict equality) in JavaScript.

---

## 🐍 Python Attempt (Initial)

> I tried to apply input validation and constraints myself before I realized LeetCode **guarantees valid input**, so such checks are unnecessary.

```python
arraySize = int(input("Enter the size of your array:"))
if arraySize >= 2 and arraySize <= 10000:
    acutalArray = [None] * arraySize
    for i in range(arraySize):
        dummy = int(input("Enter Value:"))
        if dummy >= -1000000000 and dummy <= 1000000000:
            acutalArray[i] = dummy

userNumber = int(input("Enter Integer:"))
if userNumber >= -1000000000 and userNumber <= 1000000000:
    for i in range(arraySize):
        for j in range(i + 1, arraySize):
            test = acutalArray[i] + acutalArray[j]
            if test == userNumber:
                print("Index of i", i)
                print("Index of j", j)
                return
```

> 📝 **Lesson learned**: LeetCode handles constraints internally — we don't need to write manual range checks or interactive inputs.

---

## 🌐 JavaScript Solution (Final Working Version)

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (target === nums[i] + nums[j]) {
                return [i, j];
            }
        }
    }
};
```

---

## 🧮 Time & Space Complexity

* **Time Complexity:** O(n²) — due to the nested loop
* **Space Complexity:** O(1) — no additional memory used

---

## 📚 Learning / Takeaways

* Avoid implementing input constraints manually on LeetCode — the platform enforces them.
* Remember JavaScript array properties: `.length` (not `.length()`)
* Avoid using `==` unless explicitly required; always prefer `===` for strict equality.
* Nested loop brute-force works but can be optimized using hash maps.