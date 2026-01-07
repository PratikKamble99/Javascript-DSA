
Golden Rule (Memorize This Table) - Identify which time complexity is required just by looking at constraints

| Input Size (N) | Expected Time Complexity | Typical Approach          |
| -------------- | ------------------------ | ------------------------- |
| **N ≤ 10**     | O(N!) / O(2ⁿ)            | Backtracking, brute force |
| **N ≤ 20**     | O(2ⁿ)                    | Bitmask DP                |
| **N ≤ 100**    | O(N³)                    | DP, Floyd-Warshall        |
| **N ≤ 1,000**  | O(N²)                    | Nested loops              |
| **N ≤ 10⁵**    | O(N log N)               | Sorting, greedy, heaps    |
| **N ≤ 10⁶**    | O(N)                     | Prefix sums, hashing      |
| **N ≤ 10⁷**    | O(N) (tight)             | Simple loops              |
| **N ≥ 10⁸**    | O(log N) / O(1)          | Binary search, math       |


📊 Time Complexity Identification Chart (From Code)

🔹 1. Loops
| Code Pattern         | Example                   | Time Complexity |
| -------------------- | ------------------------- | --------------- |
| Single loop          | `for (i = 0; i < n; i++)` | **O(N)**        |
| Two nested loops     | `for i → for j`           | **O(N²)**       |
| Three nested loops   | `for i → for j → for k`   | **O(N³)**       |
| Sequential loops     | `loop1; loop2;`           | **O(N + M)**    |
| Loop skipping values | `i *= 2` / `i /= 2`       | **O(log N)**    |

🔹 2. While Loops
| Condition     | Variable Change | Complexity   |
| ------------- | --------------- | ------------ |
| `i++` / `i--` | Linear          | **O(N)**     |
| `i = i / 2`   | Halving         | **O(log N)** |
| `i = i * 2`   | Doubling        | **O(log N)** |

🔹 3. Function Calls
| Pattern               | Example          | Complexity          |
| --------------------- | ---------------- | ------------------- |
| Function once         | `helper()`       | Depends on helper   |
| Function inside loop  | `for → helper()` | **Loop × Function** |
| Nested function calls | `f() → g()`      | **Combined**        |

🔹 4. Conditionals (Worst Case Rule)
| Code        | Worst Case     |
| ----------- | -------------- |
| `if` only   | Inside block   |
| `if / else` | **Max branch** |
| `switch`    | Max case       |

🔹 5. Recursion
| Recursion Type   | Code Pattern      | Complexity     |
| ---------------- | ----------------- | -------------- |
| Linear           | `f(n-1)`          | **O(N)**       |
| Binary           | `f(n-1) + f(n-1)` | **O(2ⁿ)**      |
| Divide & conquer | `f(n/2)`          | **O(log N)**   |
| Merge sort       | `2f(n/2) + n`     | **O(N log N)** |

🔹 6. Array / Data Structure Ops
| Operation          | Time           |
| ------------------ | -------------- |
| Array access       | **O(1)**       |
| Push / Pop         | **O(1)**       |
| Shift / Unshift    | **O(N)**       |
| Includes / IndexOf | **O(N)**       |
| Map / Filter       | **O(N)**       |
| Sort               | **O(N log N)** |
| HashMap get/set    | **O(1)** avg   |

🔹 7. Common Hidden Traps

| Code                   | Real Complexity |
| ---------------------- | --------------- |
| `loop → includes()`    | **O(N²)**       |
| `loop → map()`         | **O(N²)**       |
| `sort inside loop`     | **O(N² log N)** |
| Recursion without base | ❌ Infinite      |

🔹 8. Math Simplification Rules
| Expression       | Simplified     |
| ---------------- | -------------- |
| `O(3N + 5)`      | **O(N)**       |
| `O(N² + N)`      | **O(N²)**      |
| `O(log₂N)`       | **O(log N)**   |
| `O(N log N + N)` | **O(N log N)** |
