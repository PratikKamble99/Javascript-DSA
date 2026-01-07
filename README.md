# Javascript-DSA

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
