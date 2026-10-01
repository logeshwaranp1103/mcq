// ==========================================
// 300 Data Structures & Algorithms Questions and Verified Answer Key
window.TOPICS = window.TOPICS || {};
window.TOPICS["dsa"] = {
  id: "dsa",
  level: "basic",
  title: "Data Structures & Algorithms",
  icon: "⚡",
  description: "300 comprehensive multiple-choice questions with verified answers covering Arrays, Strings, Trees, Graphs, DP, and more.",
  questions: [
  {
    "id": 1,
    "subtopic": "Arrays",
    "question": "What is the time complexity of accessing an element by index in an array?",
    "options": {
      "A": "O(log n)",
      "B": "O(n)",
      "C": "O(n log n)",
      "D": "O(1)"
    },
    "answer": "D"
  },
  {
    "id": 2,
    "subtopic": "Arrays",
    "question": "What is the worst-case time complexity of inserting an element at the beginning of an array of size n?",
    "options": {
      "A": "O(n^2)",
      "B": "O(log n)",
      "C": "O(n)",
      "D": "O(1)"
    },
    "answer": "C"
  },
  {
    "id": 3,
    "subtopic": "Arrays",
    "question": "Using Kadane's Algorithm, what is the maximum subarray sum of [-2,1,-3,4,-1,2,1,-5,4]?",
    "options": {
      "A": "7",
      "B": "5",
      "C": "4",
      "D": "6"
    },
    "answer": "D"
  },
  {
    "id": 4,
    "subtopic": "Arrays",
    "question": "Which technique is most efficient for finding a pair with a given sum in a sorted array?",
    "options": {
      "A": "Nested loops (brute force)",
      "B": "Recursion without memoization",
      "C": "Two pointers",
      "D": "Bubble sort first"
    },
    "answer": "C"
  },
  {
    "id": 5,
    "subtopic": "Arrays",
    "question": "What does the 'sliding window' technique primarily optimize for?",
    "options": {
      "A": "Sorting arrays in place",
      "B": "Finding the median of two arrays",
      "C": "Reversing linked lists",
      "D": "Contiguous subarray/substring problems"
    },
    "answer": "D"
  },
  {
    "id": 6,
    "subtopic": "Arrays",
    "question": "What is the time complexity of building a prefix sum array of size n?",
    "options": {
      "A": "O(n^2)",
      "B": "O(1)",
      "C": "O(log n)",
      "D": "O(n)"
    },
    "answer": "D"
  },
  {
    "id": 7,
    "subtopic": "Arrays",
    "question": "After building a prefix sum array, a range sum query [l, r] can be answered in:",
    "options": {
      "A": "O(log n)",
      "B": "O(n)",
      "C": "O(1)",
      "D": "O(r-l)"
    },
    "answer": "C"
  },
  {
    "id": 8,
    "subtopic": "Arrays",
    "question": "What is the output of the following code?\n\nint[] arr = {1, 2, 3, 4, 5};\n\nint sum = 0;\n\nfor (int i = 1; i < arr.length; i += 2) {\n\n    sum++;\n\n}\n\nSystem.out.println(sum);",
    "options": {
      "A": "2",
      "B": "Compilation Error",
      "C": "3",
      "D": "4"
    },
    "answer": "C"
  },
  {
    "id": 9,
    "subtopic": "Arrays",
    "question": "Which algorithm is used to rotate an array of size n by k positions in O(n) time and O(1) extra space?",
    "options": {
      "A": "Reversal algorithm (reverse whole array, then reverse parts)",
      "B": "Using a second array of size n always",
      "C": "Insertion sort",
      "D": "Bubble rotation"
    },
    "answer": "A"
  },
  {
    "id": 10,
    "subtopic": "Arrays",
    "question": "What is the time complexity of the two-pointer approach to check if a sorted array has a pair summing to a target?",
    "options": {
      "A": "O(n log n)",
      "B": "O(1)",
      "C": "O(n)",
      "D": "O(n^2)"
    },
    "answer": "C"
  },
  {
    "id": 11,
    "subtopic": "Arrays",
    "question": "In the 'Dutch National Flag' algorithm used to sort an array of 0s, 1s, and 2s, how many passes over the array are required?",
    "options": {
      "A": "3",
      "B": "2",
      "C": "n",
      "D": "1"
    },
    "answer": "D"
  },
  {
    "id": 12,
    "subtopic": "Arrays",
    "question": "What will the following code print?\n\nint[] arr = {4, 2, 6, 8, 10};\n\nint target = 5;\n\nint lo = 0, hi = arr.length - 1, ans = -1;\n\nwhile (lo <= hi) {\n\n    int mid = (lo + hi) / 2;\n\n    if (arr[mid] == target) { ans = mid; break; }\n\n    else if (arr[mid] < target) lo = mid + 1;\n\n    else hi = mid - 1;\n\n}\n\nSystem.out.println(ans);",
    "options": {
      "A": "ArrayIndexOutOfBoundsException",
      "B": "4",
      "C": "0",
      "D": "-1"
    },
    "answer": "D"
  },
  {
    "id": 13,
    "subtopic": "Arrays",
    "question": "You need to find the majority element (appears more than n/2 times) in O(n) time and O(1) space. Which algorithm should you use?",
    "options": {
      "A": "Binary Search",
      "B": "Merge Sort",
      "C": "Boyer-Moore Voting Algorithm",
      "D": "Kadane's Algorithm"
    },
    "answer": "C"
  },
  {
    "id": 14,
    "subtopic": "Arrays",
    "question": "A ride-sharing app stores driver ratings in an array and needs the k-th largest rating frequently as new ratings arrive. Which data structure gives the best amortized performance for repeated k-th largest queries?",
    "options": {
      "A": "Sorting the array on every query",
      "B": "Singly linked list",
      "C": "Unsorted array with linear scan each time",
      "D": "Min-heap of size k"
    },
    "answer": "D"
  },
  {
    "id": 15,
    "subtopic": "Arrays",
    "question": "What is the time complexity of merging two sorted arrays of size m and n into one sorted array?",
    "options": {
      "A": "O(m + n)",
      "B": "O(m * n)",
      "C": "O(min(m,n))",
      "D": "O((m+n) log(m+n))"
    },
    "answer": "A"
  },
  {
    "id": 16,
    "subtopic": "Arrays",
    "question": "Which of the following best describes 'in-place' array rotation?",
    "options": {
      "A": "It uses recursion of depth n",
      "B": "It rotates the array using O(1) extra space",
      "C": "It only works on sorted arrays",
      "D": "It requires a second array equal in size"
    },
    "answer": "B"
  },
  {
    "id": 17,
    "subtopic": "Arrays",
    "question": "What is the output of the following code snippet?\n\nint[] arr = {1, 1, 2, 2, 3};\n\nStringBuilder sb = new StringBuilder();\n\nfor (int x : arr) sb.append(x).append(\" \");\n\nSystem.out.println(sb.toString().trim());",
    "options": {
      "A": "1 2 3",
      "B": "Compilation Error",
      "C": "3 2 1",
      "D": "1 1 2 2 3"
    },
    "answer": "D"
  },
  {
    "id": 18,
    "subtopic": "Arrays",
    "question": "Given an array representing stock prices per day, which approach finds the maximum profit from a single buy-sell transaction in O(n) time?",
    "options": {
      "A": "Try every pair of buy/sell days (O(n^2))",
      "B": "Use a stack of all prices",
      "C": "Track minimum price so far and max profit while scanning once",
      "D": "Sort the array first"
    },
    "answer": "C"
  },
  {
    "id": 19,
    "subtopic": "Arrays",
    "question": "What happens when you try to access arr[arr.length] in a Java array of size 'arr.length'?",
    "options": {
      "A": "Compilation error",
      "B": "It returns null",
      "C": "It returns 0 silently",
      "D": "ArrayIndexOutOfBoundsException is thrown at runtime"
    },
    "answer": "D"
  },
  {
    "id": 20,
    "subtopic": "Arrays",
    "question": "What is the space complexity of the standard merge sort algorithm applied on an array?",
    "options": {
      "A": "O(n)",
      "B": "O(1)",
      "C": "O(log n)",
      "D": "O(n^2)"
    },
    "answer": "A"
  },
  {
    "id": 21,
    "subtopic": "Strings",
    "question": "Which of these problems is typically solved using the 'sliding window' technique rather than the 'two-pointer on sorted array' technique?",
    "options": {
      "A": "Longest substring without repeating characters",
      "B": "Binary search on a sorted array",
      "C": "Merging two sorted arrays",
      "D": "Finding a pair with given sum in a sorted array"
    },
    "answer": "A"
  },
  {
    "id": 22,
    "subtopic": "Strings",
    "question": "What is the time complexity of the naive (brute-force) pattern matching algorithm for a text of length n and pattern of length m?",
    "options": {
      "A": "O(n*m)",
      "B": "O(m log n)",
      "C": "O(n log m)",
      "D": "O(n+m)"
    },
    "answer": "A"
  },
  {
    "id": 23,
    "subtopic": "Strings",
    "question": "The KMP (Knuth-Morris-Pratt) algorithm improves pattern matching by precomputing:",
    "options": {
      "A": "The suffix array of the text",
      "B": "The reverse of the pattern",
      "C": "A hash table of all substrings",
      "D": "The longest proper prefix which is also a suffix (LPS array)"
    },
    "answer": "D"
  },
  {
    "id": 24,
    "subtopic": "Strings",
    "question": "What is the time complexity of the KMP string matching algorithm?",
    "options": {
      "A": "O(n log m)",
      "B": "O(m^2)",
      "C": "O(n + m)",
      "D": "O(n * m)"
    },
    "answer": "C"
  },
  {
    "id": 25,
    "subtopic": "Strings",
    "question": "The Rabin-Karp algorithm primarily relies on which concept to achieve fast average-case matching?",
    "options": {
      "A": "Dynamic programming",
      "B": "Rolling hash",
      "C": "Suffix trees",
      "D": "Binary search"
    },
    "answer": "B"
  },
  {
    "id": 26,
    "subtopic": "Strings",
    "question": "What does the following code check?\n\nboolean check(String s) {\n\n    int i = 0, j = s.length() - 1;\n\n    while (i < j) {\n\n        if (s.charAt(i) != s.charAt(j)) return false;\n\n        i++; j--;\n\n    }\n\n    return true;\n\n}",
    "options": {
      "A": "Whether the string has duplicate characters",
      "B": "Whether the string is empty",
      "C": "Whether the string is a palindrome",
      "D": "Whether the string is sorted"
    },
    "answer": "C"
  },
  {
    "id": 27,
    "subtopic": "Strings",
    "question": "Two strings are anagrams of each other. What is the most efficient way to check this using O(n) time (assuming a fixed alphabet size)?",
    "options": {
      "A": "Reverse one string and compare",
      "B": "Compare characters one by one without sorting",
      "C": "Sort both strings and compare (O(n log n))",
      "D": "Use a frequency count array of character occurrences"
    },
    "answer": "D"
  },
  {
    "id": 28,
    "subtopic": "Strings",
    "question": "What is the output of the following code?\n\nString s = \"hello\";\n\nString rev = new StringBuilder(s).reverse().toString();\n\nSystem.out.println(rev);",
    "options": {
      "A": "hello",
      "B": "hlelo",
      "C": "olleh",
      "D": "Compilation Error"
    },
    "answer": "C"
  },
  {
    "id": 29,
    "subtopic": "Strings",
    "question": "Which data structure is most commonly used to efficiently store and search a large dictionary of words for prefix-based search (autocomplete)?",
    "options": {
      "A": "Linked List",
      "B": "Stack",
      "C": "Trie",
      "D": "Array of strings sorted alphabetically only"
    },
    "answer": "C"
  },
  {
    "id": 30,
    "subtopic": "Strings",
    "question": "What is the time complexity to insert a word of length m into a Trie?",
    "options": {
      "A": "O(m)",
      "B": "O(m^2)",
      "C": "O(log m)",
      "D": "O(1)"
    },
    "answer": "A"
  },
  {
    "id": 31,
    "subtopic": "Strings",
    "question": "The 'Z-Algorithm' is used to compute, for each position in a string, the length of:",
    "options": {
      "A": "The number of distinct characters so far",
      "B": "The longest substring starting there that matches a prefix of the string",
      "C": "The longest common subsequence",
      "D": "The longest palindromic substring"
    },
    "answer": "B"
  },
  {
    "id": 32,
    "subtopic": "Strings",
    "question": "What is the output of the following code?\n\nString s = \"aabbbcc\";\n\nint maxCount = 0, count = 1;\n\nfor (int i = 1; i < s.length(); i++) {\n\n    if (s.charAt(i) == s.charAt(i - 1)) count++;\n\n    else count = 1;\n\n    maxCount = Math.max(maxCount, count);\n\n}\n\nSystem.out.println(maxCount);",
    "options": {
      "A": "3",
      "B": "1",
      "C": "4",
      "D": "2"
    },
    "answer": "A"
  },
  {
    "id": 33,
    "subtopic": "Strings",
    "question": "String compression converts \"aaabbc\" to which of the following (typical run-length encoding)?",
    "options": {
      "A": "a3b2c1",
      "B": "abc",
      "C": "a3b2c",
      "D": "3a2b1c"
    },
    "answer": "A"
  },
  {
    "id": 34,
    "subtopic": "Strings",
    "question": "A search engine's autosuggest feature must return all words with a given prefix quickly as the user types. Which structure best supports this?",
    "options": {
      "A": "Unsorted array of words",
      "B": "Stack",
      "C": "Trie",
      "D": "Singly linked list"
    },
    "answer": "C"
  },
  {
    "id": 35,
    "subtopic": "Strings",
    "question": "What is the time complexity of checking if a string is a palindrome using the two-pointer technique?",
    "options": {
      "A": "O(n^2)",
      "B": "O(log n)",
      "C": "O(n)",
      "D": "O(n log n)"
    },
    "answer": "C"
  },
  {
    "id": 36,
    "subtopic": "Strings",
    "question": "In the Longest Common Subsequence (LCS) problem for two strings of length m and n, what is the time complexity of the standard DP solution?",
    "options": {
      "A": "O(m+n)",
      "B": "O(m*n*min(m,n))",
      "C": "O(2^(m+n))",
      "D": "O(m*n)"
    },
    "answer": "D"
  },
  {
    "id": 37,
    "subtopic": "Strings",
    "question": "What does this code output?\n\nString a = \"listen\";\n\nString b = \"silent\";\n\nchar[] ac = a.toCharArray();\n\nchar[] bc = b.toCharArray();\n\nArrays.sort(ac);\n\nArrays.sort(bc);\n\nSystem.out.println(Arrays.equals(ac, bc));",
    "options": {
      "A": "false",
      "B": "true",
      "C": "Compilation Error",
      "D": "null"
    },
    "answer": "B"
  },
  {
    "id": 38,
    "subtopic": "Strings",
    "question": "Which approach finds the longest substring without repeating characters in O(n) time?",
    "options": {
      "A": "Sliding window with a hash set/map of last seen indices",
      "B": "Sorting the string first",
      "C": "Checking every substring individually (O(n^3))",
      "D": "Using recursion without memoization"
    },
    "answer": "A"
  },
  {
    "id": 39,
    "subtopic": "Strings",
    "question": "A plagiarism-detection tool needs to check if one document's text contains another shorter text as a substring, for very long documents, many times. Which algorithm avoids the O(n*m) worst case of naive search?",
    "options": {
      "A": "Bubble sort based comparison",
      "B": "KMP or Rabin-Karp",
      "C": "Selection sort of characters",
      "D": "Linear scan without preprocessing"
    },
    "answer": "B"
  },
  {
    "id": 40,
    "subtopic": "Strings",
    "question": "What is the output of the following code?\n\nString s = \"abcabcbb\";\n\nSet<Character> set = new HashSet<>();\n\nint left = 0, maxLen = 0;\n\nfor (int right = 0; right < s.length(); right++) {\n\n    while (set.contains(s.charAt(right))) {\n\n        set.remove(s.charAt(left));\n\n        left++;\n\n    }\n\n    set.add(s.charAt(right));\n\n    maxLen = Math.max(maxLen, right - left + 1);\n\n}\n\nSystem.out.println(maxLen);",
    "options": {
      "A": "0",
      "B": "abc",
      "C": "cba",
      "D": "3"
    },
    "answer": "D"
  },
  {
    "id": 41,
    "subtopic": "Strings",
    "question": "Which of the following correctly describes a 'suffix array'?",
    "options": {
      "A": "A hash table mapping characters to indices",
      "B": "An array storing character frequencies",
      "C": "A sorted array of all suffixes of a string",
      "D": "An array of all prefixes only"
    },
    "answer": "C"
  },
  {
    "id": 42,
    "subtopic": "Linked Lists",
    "question": "What is the time complexity of accessing the k-th element in a singly linked list?",
    "options": {
      "A": "O(log n)",
      "B": "O(1)",
      "C": "O(n)",
      "D": "O(k^2)"
    },
    "answer": "C"
  },
  {
    "id": 43,
    "subtopic": "Linked Lists",
    "question": "Which algorithm is commonly used to detect a cycle in a linked list in O(n) time and O(1) space?",
    "options": {
      "A": "Merge Sort",
      "B": "Depth First Search",
      "C": "Binary Search",
      "D": "Floyd's Cycle Detection (slow and fast pointer)"
    },
    "answer": "D"
  },
  {
    "id": 44,
    "subtopic": "Linked Lists",
    "question": "What is the time complexity of reversing a singly linked list iteratively?",
    "options": {
      "A": "O(1)",
      "B": "O(n)",
      "C": "O(log n)",
      "D": "O(n^2)"
    },
    "answer": "B"
  },
  {
    "id": 45,
    "subtopic": "Linked Lists",
    "question": "In Floyd's cycle detection algorithm, if a cycle exists, at what point do the slow and fast pointers meet?",
    "options": {
      "A": "Always at the head of the list",
      "B": "Somewhere inside the cycle",
      "C": "They never meet",
      "D": "Always at the tail"
    },
    "answer": "B"
  },
  {
    "id": 46,
    "subtopic": "Linked Lists",
    "question": "What is the output of the following code, assuming the list is 1->2->3->4->5?\n\nNode slow = head, fast = head;\n\nwhile (fast != null && fast.next != null) {\n\n    slow = slow.next;\n\n    fast = fast.next.next;\n\n}\n\nSystem.out.println(slow.val);",
    "options": {
      "A": "5",
      "B": "3",
      "C": "2",
      "D": "4"
    },
    "answer": "B"
  },
  {
    "id": 47,
    "subtopic": "Linked Lists",
    "question": "Which of these is a key advantage of a doubly linked list over a singly linked list?",
    "options": {
      "A": "It cannot have a cycle",
      "B": "It uses less memory per node",
      "C": "It allows O(1) random access",
      "D": "It allows O(1) traversal in both forward and backward directions"
    },
    "answer": "D"
  },
  {
    "id": 48,
    "subtopic": "Linked Lists",
    "question": "To merge two sorted singly linked lists of size m and n into one sorted list, what is the time complexity of the optimal approach?",
    "options": {
      "A": "O(m * n)",
      "B": "O((m+n) log(m+n))",
      "C": "O(m + n)",
      "D": "O(m^2 + n^2)"
    },
    "answer": "C"
  },
  {
    "id": 49,
    "subtopic": "Linked Lists",
    "question": "An LRU (Least Recently Used) Cache is most efficiently implemented using which combination of data structures?",
    "options": {
      "A": "A max-heap only",
      "B": "A doubly linked list combined with a hash map",
      "C": "A singly linked list only",
      "D": "An array sorted by recency"
    },
    "answer": "B"
  },
  {
    "id": 50,
    "subtopic": "Linked Lists",
    "question": "What is the output of the following code, given the list 1->2->3->4 and no cycle?\n\nNode slow = head, fast = head;\n\nboolean hasCycle = false;\n\nwhile (fast != null && fast.next != null) {\n\n    slow = slow.next;\n\n    fast = fast.next.next;\n\n    if (slow == fast) { hasCycle = true; break; }\n\n}\n\nSystem.out.println(hasCycle);",
    "options": {
      "A": "true",
      "B": "Compilation Error",
      "C": "NullPointerException",
      "D": "false"
    },
    "answer": "D"
  },
  {
    "id": 51,
    "subtopic": "Linked Lists",
    "question": "What is the time complexity to find the middle node of a singly linked list using the slow/fast pointer technique?",
    "options": {
      "A": "O(n^2)",
      "B": "O(n/2) is asymptotically different from O(n)",
      "C": "O(log n)",
      "D": "O(n)"
    },
    "answer": "D"
  },
  {
    "id": 52,
    "subtopic": "Linked Lists",
    "question": "In a music streaming app's 'Now Playing' queue that supports moving forward and backward between songs efficiently, which structure fits best?",
    "options": {
      "A": "Singly linked list only",
      "B": "Stack only",
      "C": "Array with shifting on every move",
      "D": "Doubly linked list"
    },
    "answer": "D"
  },
  {
    "id": 53,
    "subtopic": "Linked Lists",
    "question": "What is a key disadvantage of arrays compared to linked lists for frequent insertions/deletions in the middle?",
    "options": {
      "A": "Arrays require shifting elements, costing O(n) per operation",
      "B": "Arrays require more memory per element always",
      "C": "Arrays cannot be resized ever",
      "D": "Arrays cannot store insertion order"
    },
    "answer": "A"
  },
  {
    "id": 54,
    "subtopic": "Linked Lists",
    "question": "What does the following code do to a singly linked list?\n\nNode prev = null, curr = head;\n\nwhile (curr != null) {\n\n    Node next = curr.next;\n\n    curr.next = prev;\n\n    prev = curr;\n\n    curr = next;\n\n}\n\nhead = prev;",
    "options": {
      "A": "Reverses the list",
      "B": "Detects a cycle",
      "C": "Finds the middle node",
      "D": "Deletes every alternate node"
    },
    "answer": "A"
  },
  {
    "id": 55,
    "subtopic": "Linked Lists",
    "question": "To detect the starting node of a cycle in a linked list (not just whether a cycle exists), after slow and fast meet, what is the next step?",
    "options": {
      "A": "Delete the node where they met",
      "B": "Move one pointer to head, then advance both one step at a time until they meet",
      "C": "Immediately return the meeting point as the start",
      "D": "Restart fast pointer from head at double speed"
    },
    "answer": "B"
  },
  {
    "id": 56,
    "subtopic": "Linked Lists",
    "question": "What is the space complexity of reversing a singly linked list using recursion (call stack included)?",
    "options": {
      "A": "O(n)",
      "B": "O(n^2)",
      "C": "O(1)",
      "D": "O(log n)"
    },
    "answer": "A"
  },
  {
    "id": 57,
    "subtopic": "Stacks",
    "question": "Which data structure is best suited to check if an expression has balanced parentheses?",
    "options": {
      "A": "Stack",
      "B": "Queue",
      "C": "Array without auxiliary structure",
      "D": "Linked List traversal only"
    },
    "answer": "A"
  },
  {
    "id": 58,
    "subtopic": "Stacks",
    "question": "What is the time complexity of pushing and popping elements from a stack implemented using an array or linked list?",
    "options": {
      "A": "O(n) for both",
      "B": "O(1) push, O(n) pop",
      "C": "O(log n) for both",
      "D": "O(1) for both"
    },
    "answer": "D"
  },
  {
    "id": 59,
    "subtopic": "Stacks",
    "question": "What is the output of the following code?\n\nStack<Character> st = new Stack<>();\n\nString s = \"{[()]}\";\n\nboolean valid = true;\n\nMap<Character, Character> map = Map.of(')', '(', ']', '[', '}', '{');\n\nfor (char c : s.toCharArray()) {\n\n    if (\"([{\".indexOf(c) != -1) st.push(c);\n\n    else {\n\n        if (st.isEmpty() || st.pop() != map.get(c)) { valid = false; break; }\n\n    }\n\n}\n\nSystem.out.println(valid && st.isEmpty());",
    "options": {
      "A": "Compilation Error",
      "B": "StackOverflowError",
      "C": "false",
      "D": "true"
    },
    "answer": "D"
  },
  {
    "id": 60,
    "subtopic": "Stacks",
    "question": "The 'Next Greater Element' problem for an array is most efficiently solved in O(n) time using:",
    "options": {
      "A": "A min-heap",
      "B": "A monotonic decreasing stack",
      "C": "Sorting the array first",
      "D": "Nested loops (O(n^2))"
    },
    "answer": "B"
  },
  {
    "id": 61,
    "subtopic": "Stacks",
    "question": "How can a Min Stack support push, pop, and getMin all in O(1) time?",
    "options": {
      "A": "By sorting the stack after every push",
      "B": "By scanning the whole stack on every getMin call",
      "C": "It is not possible in O(1)",
      "D": "By maintaining an auxiliary stack that tracks the minimum at each level"
    },
    "answer": "D"
  },
  {
    "id": 62,
    "subtopic": "Stacks",
    "question": "What is the primary use of a stack in evaluating postfix (Reverse Polish Notation) expressions?",
    "options": {
      "A": "To convert infix to postfix only",
      "B": "To reverse the expression first",
      "C": "To store operands and apply operators as they are encountered",
      "D": "To store operators only"
    },
    "answer": "C"
  },
  {
    "id": 63,
    "subtopic": "Stacks",
    "question": "What is the output of the following code?\n\nStack<Integer> st = new Stack<>();\n\nst.push(10);\n\nst.push(20);\n\nst.push(30);\n\nst.pop();\n\nSystem.out.println(st.peek());",
    "options": {
      "A": "10",
      "B": "Empty stack error",
      "C": "20",
      "D": "30"
    },
    "answer": "C"
  },
  {
    "id": 64,
    "subtopic": "Stacks",
    "question": "How is a stack typically used to implement function call recursion internally?",
    "options": {
      "A": "Each function call pushes a stack frame; returning pops it off (call stack)",
      "B": "Each function call is stored in a queue",
      "C": "Function calls are stored in a heap-ordered structure",
      "D": "Recursion does not use any stack-like structure"
    },
    "answer": "A"
  },
  {
    "id": 65,
    "subtopic": "Stacks",
    "question": "Which of the following problems is a classic application of a stack rather than a queue?",
    "options": {
      "A": "Breadth-first search of a graph",
      "B": "Evaluating and converting infix/postfix/prefix expressions",
      "C": "Level-order traversal of a tree",
      "D": "Implementing a print job scheduler (FIFO)"
    },
    "answer": "B"
  },
  {
    "id": 66,
    "subtopic": "Stacks",
    "question": "A text editor's 'undo' feature stores each edit action as it happens and reverts the most recent one first when undo is pressed. Which data structure models this behavior naturally?",
    "options": {
      "A": "Array sorted by timestamp requiring search",
      "B": "Queue (FIFO)",
      "C": "Stack (LIFO)",
      "D": "Min-heap"
    },
    "answer": "C"
  },
  {
    "id": 67,
    "subtopic": "Stacks",
    "question": "Two stacks can be used together to efficiently implement which other data structure, achieving amortized O(1) operations?",
    "options": {
      "A": "A binary search tree",
      "B": "A hash map",
      "C": "A queue",
      "D": "A min-heap"
    },
    "answer": "C"
  },
  {
    "id": 68,
    "subtopic": "Stacks",
    "question": "What is the time complexity of the 'Next Greater Element' problem using a monotonic stack, for an array of size n?",
    "options": {
      "A": "O(2^n)",
      "B": "O(n^2)",
      "C": "O(n log n)",
      "D": "O(n)"
    },
    "answer": "D"
  },
  {
    "id": 69,
    "subtopic": "Stacks",
    "question": "What is the output of the following code, which finds the next greater element for [2, 1, 2, 4, 3]?\n\nint[] arr = {2, 1, 2, 4, 3};\n\nint[] res = new int[arr.length];\n\nArrays.fill(res, -1);\n\nDeque<Integer> stack = new ArrayDeque<>();\n\nfor (int i = 0; i < arr.length; i++) {\n\n    while (!stack.isEmpty() && arr[stack.peek()] < arr[i]) {\n\n        res[stack.pop()] = arr[i];\n\n    }\n\n    stack.push(i);\n\n}\n\nSystem.out.println(Arrays.toString(res));",
    "options": {
      "A": "[4, 2, 4, -1, -1]",
      "B": "[4, 4, 4, -1, -1]",
      "C": "[1, 2, 4, 3, -1]",
      "D": "[-1, -1, -1, -1, -1]"
    },
    "answer": "A"
  },
  {
    "id": 70,
    "subtopic": "Stacks",
    "question": "In a browser, the 'back' button functionality (returning to previously visited pages in reverse order of visit) is best modeled using:",
    "options": {
      "A": "A queue of visited pages",
      "B": "A stack of visited pages",
      "C": "A sorted array of URLs",
      "D": "A hash set of URLs"
    },
    "answer": "B"
  },
  {
    "id": 71,
    "subtopic": "Stacks",
    "question": "What happens when you call pop() on an empty stack implemented using Java's java.util.Stack class?",
    "options": {
      "A": "It returns 0",
      "B": "It returns null silently",
      "C": "It blocks until an element is pushed",
      "D": "EmptyStackException is thrown"
    },
    "answer": "D"
  },
  {
    "id": 72,
    "subtopic": "Queues & Deques",
    "question": "A queue follows which ordering principle?",
    "options": {
      "A": "LIFO (Last In First Out)",
      "B": "Priority order always",
      "C": "FIFO (First In First Out)",
      "D": "Random order"
    },
    "answer": "C"
  },
  {
    "id": 73,
    "subtopic": "Queues & Deques",
    "question": "What is the main advantage of a circular queue over a simple linear queue implemented with an array?",
    "options": {
      "A": "It requires no fixed size",
      "B": "It allows negative indices",
      "C": "It reuses freed space efficiently, avoiding wasted slots",
      "D": "It allows LIFO order"
    },
    "answer": "C"
  },
  {
    "id": 74,
    "subtopic": "Queues & Deques",
    "question": "Which data structure is most naturally used to implement Breadth-First Search (BFS) on a graph?",
    "options": {
      "A": "Min-heap only",
      "B": "Queue",
      "C": "Doubly linked list is required",
      "D": "Stack"
    },
    "answer": "B"
  },
  {
    "id": 75,
    "subtopic": "Queues & Deques",
    "question": "What is the time complexity of enqueue and dequeue operations in a properly implemented circular queue or deque?",
    "options": {
      "A": "O(n^2)",
      "B": "O(1)",
      "C": "O(n)",
      "D": "O(log n)"
    },
    "answer": "B"
  },
  {
    "id": 76,
    "subtopic": "Queues & Deques",
    "question": "A priority queue typically is implemented internally using which data structure for O(log n) insert and extract-min/max?",
    "options": {
      "A": "A singly linked list",
      "B": "A stack",
      "C": "An unsorted array",
      "D": "A binary heap"
    },
    "answer": "D"
  },
  {
    "id": 77,
    "subtopic": "Queues & Deques",
    "question": "What is the output of the following code?\n\nQueue<Integer> q = new LinkedList<>();\n\nq.add(1);\n\nq.add(2);\n\nq.add(3);\n\nStringBuilder sb = new StringBuilder();\n\nwhile (!q.isEmpty()) {\n\n    sb.append(q.poll()).append(\" \");\n\n}\n\nSystem.out.println(sb.toString().trim());",
    "options": {
      "A": "3 2 1",
      "B": "Compilation Error",
      "C": "1",
      "D": "1 2 3"
    },
    "answer": "D"
  },
  {
    "id": 78,
    "subtopic": "Queues & Deques",
    "question": "The 'Sliding Window Maximum' problem (finding max in every window of size k) can be solved in O(n) time using:",
    "options": {
      "A": "A max-heap rebuilt every window (O(n log k))",
      "B": "Brute force scanning each window (O(n*k))",
      "C": "A stack only",
      "D": "A monotonic deque storing indices"
    },
    "answer": "D"
  },
  {
    "id": 79,
    "subtopic": "Queues & Deques",
    "question": "In a print spooler system, jobs must be processed in the exact order they were submitted. Which structure models this correctly?",
    "options": {
      "A": "Queue (FIFO)",
      "B": "Priority queue by job size",
      "C": "Stack (LIFO)",
      "D": "Unordered set"
    },
    "answer": "A"
  },
  {
    "id": 80,
    "subtopic": "Queues & Deques",
    "question": "A 'deque' (double-ended queue) allows insertion and deletion at:",
    "options": {
      "A": "Only the back",
      "B": "Both the front and the back in O(1)",
      "C": "Only the middle",
      "D": "Only the front"
    },
    "answer": "B"
  },
  {
    "id": 81,
    "subtopic": "Queues & Deques",
    "question": "What is the output of the following code that finds the maximum in each window of size 3 for [1,3,-1,-3,5,3,6,7]? (first window only)\n\nint[] arr = {1, 3, -1, -3, 5, 3, 6, 7};\n\nint k = 3;\n\nDeque<Integer> dq = new ArrayDeque<>();\n\nfor (int i = 0; i < k; i++) {\n\n    while (!dq.isEmpty() && arr[dq.peekLast()] <= arr[i]) dq.pollLast();\n\n    dq.addLast(i);\n\n}\n\nSystem.out.println(arr[dq.peekFirst()]);",
    "options": {
      "A": "-1",
      "B": "3",
      "C": "5",
      "D": "1"
    },
    "answer": "B"
  },
  {
    "id": 82,
    "subtopic": "Queues & Deques",
    "question": "A hospital emergency room treats patients based on severity of condition rather than arrival order. Which structure best models patient scheduling?",
    "options": {
      "A": "Priority queue",
      "B": "Stack",
      "C": "Simple FIFO queue",
      "D": "Circular array without priority"
    },
    "answer": "A"
  },
  {
    "id": 83,
    "subtopic": "Queues & Deques",
    "question": "What is a key limitation of implementing a queue using a simple (non-circular) array with a fixed front index that only increments?",
    "options": {
      "A": "Space at the front becomes unusable/wasted over time",
      "B": "It cannot store integers",
      "C": "It cannot support enqueue at all",
      "D": "It has O(n) enqueue always"
    },
    "answer": "A"
  },
  {
    "id": 84,
    "subtopic": "Trees & BST",
    "question": "What is the time complexity of searching for a value in a balanced Binary Search Tree (BST) with n nodes?",
    "options": {
      "A": "O(1)",
      "B": "O(n log n)",
      "C": "O(log n)",
      "D": "O(n)"
    },
    "answer": "C"
  },
  {
    "id": 85,
    "subtopic": "Trees & BST",
    "question": "What is the worst-case time complexity of searching in a BST that has degenerated into a skewed (linked-list-like) shape?",
    "options": {
      "A": "O(n log n)",
      "B": "O(1)",
      "C": "O(n)",
      "D": "O(log n)"
    },
    "answer": "C"
  },
  {
    "id": 86,
    "subtopic": "Trees & BST",
    "question": "In-order traversal of a Binary Search Tree produces elements in which order?",
    "options": {
      "A": "Sorted (descending) order",
      "B": "Random order",
      "C": "Sorted (ascending) order",
      "D": "Level order"
    },
    "answer": "C"
  },
  {
    "id": 87,
    "subtopic": "Trees & BST",
    "question": "Which traversal visits nodes level by level, using a queue internally?",
    "options": {
      "A": "In-order traversal",
      "B": "Level-order (BFS) traversal",
      "C": "Pre-order traversal",
      "D": "Post-order traversal"
    },
    "answer": "B"
  },
  {
    "id": 88,
    "subtopic": "Trees & BST",
    "question": "What is the height of a balanced binary tree with n nodes?",
    "options": {
      "A": "O(n)",
      "B": "O(1)",
      "C": "O(n^2)",
      "D": "O(log n)"
    },
    "answer": "D"
  },
  {
    "id": 89,
    "subtopic": "Trees & BST",
    "question": "An AVL tree maintains balance by ensuring the height difference between left and right subtrees of any node is at most:",
    "options": {
      "A": "log n",
      "B": "2",
      "C": "1",
      "D": "0"
    },
    "answer": "C"
  },
  {
    "id": 90,
    "subtopic": "Trees & BST",
    "question": "What is the output of the following code, which performs an in-order traversal of the BST built by inserting 5, 3, 8, 1, 4?\n\n// Insert order: 5, 3, 8, 1, 4 into a BST\n\n// In-order traversal (left, root, right)\n\nvoid inorder(Node n) {\n\n    if (n == null) return;\n\n    inorder(n.left);\n\n    System.out.print(n.val + \" \");\n\n    inorder(n.right);\n\n}",
    "options": {
      "A": "8 5 4 3 1",
      "B": "1 3 4 5 8",
      "C": "1 4 3 8 5",
      "D": "5 3 8 1 4"
    },
    "answer": "B"
  },
  {
    "id": 91,
    "subtopic": "Trees & BST",
    "question": "What data structure is a Trie primarily optimized for?",
    "options": {
      "A": "Random access by index",
      "B": "Efficient storage and prefix search of strings",
      "C": "Storing graphs with cycles",
      "D": "Efficient numeric range queries"
    },
    "answer": "B"
  },
  {
    "id": 92,
    "subtopic": "Trees & BST",
    "question": "Which algorithm finds the Lowest Common Ancestor (LCA) of two nodes in a BST most efficiently by comparing values?",
    "options": {
      "A": "Use Dijkstra's algorithm",
      "B": "Sort all values first",
      "C": "Always traverse full tree with BFS",
      "D": "Traverse from root, moving left/right based on comparing node values to both targets"
    },
    "answer": "D"
  },
  {
    "id": 93,
    "subtopic": "Trees & BST",
    "question": "A Segment Tree is primarily used for:",
    "options": {
      "A": "Sorting an array in O(n)",
      "B": "Storing hierarchical file systems only",
      "C": "Efficient range queries and range updates on an array",
      "D": "Finding shortest paths in graphs"
    },
    "answer": "C"
  },
  {
    "id": 94,
    "subtopic": "Trees & BST",
    "question": "What is the time complexity of a range sum query using a Segment Tree built on an array of size n?",
    "options": {
      "A": "O(log n)",
      "B": "O(1)",
      "C": "O(n log n)",
      "D": "O(n)"
    },
    "answer": "A"
  },
  {
    "id": 95,
    "subtopic": "Trees & BST",
    "question": "A Fenwick Tree (Binary Indexed Tree) supports point update and prefix sum query both in:",
    "options": {
      "A": "O(log n)",
      "B": "O(n log n)",
      "C": "O(n)",
      "D": "O(1)"
    },
    "answer": "A"
  },
  {
    "id": 96,
    "subtopic": "Trees & BST",
    "question": "What is the output of the following code that computes the height of a binary tree?\n\n// Tree:      1\n\n//           / \\\n\n//          2   3\n\n//         /\n\n//        4\n\nint height(Node n) {\n\n    if (n == null) return 0;\n\n    return 1 + Math.max(height(n.left), height(n.right));\n\n}\n\n// height(root) called on the tree above",
    "options": {
      "A": "4",
      "B": "3",
      "C": "2",
      "D": "1"
    },
    "answer": "B"
  },
  {
    "id": 97,
    "subtopic": "Trees & BST",
    "question": "Which traversal order is used to safely delete a binary tree (deleting children before the parent)?",
    "options": {
      "A": "In-order traversal",
      "B": "Level-order traversal",
      "C": "Pre-order traversal",
      "D": "Post-order traversal"
    },
    "answer": "D"
  },
  {
    "id": 98,
    "subtopic": "Trees & BST",
    "question": "In a file system explorer feature, folders and subfolders need to be displayed with efficient search by path. Which structure models this naturally?",
    "options": {
      "A": "A single flat array",
      "B": "A hash set without hierarchy",
      "C": "A stack only",
      "D": "A tree (hierarchical) structure"
    },
    "answer": "D"
  },
  {
    "id": 99,
    "subtopic": "Trees & BST",
    "question": "What is the 'diameter' of a binary tree?",
    "options": {
      "A": "The number of nodes at the deepest level",
      "B": "The number of leaf nodes",
      "C": "The length of the longest path between any two nodes in the tree",
      "D": "The height of the root"
    },
    "answer": "C"
  },
  {
    "id": 100,
    "subtopic": "Trees & BST",
    "question": "Which of the following is true about a complete binary tree with n nodes stored in an array (0-indexed)?",
    "options": {
      "A": "It cannot be represented using an array",
      "B": "The children of node i are always at i-1 and i+1",
      "C": "The parent of node i is at index i+2",
      "D": "The children of node i are at indices 2i+1 and 2i+2"
    },
    "answer": "D"
  },
  {
    "id": 101,
    "subtopic": "Trees & BST",
    "question": "What is the time complexity of building a balanced BST from a sorted array of n elements?",
    "options": {
      "A": "O(log n)",
      "B": "O(n log n)",
      "C": "O(n)",
      "D": "O(n^2)"
    },
    "answer": "C"
  },
  {
    "id": 102,
    "subtopic": "Trees & BST",
    "question": "Which traversal would you use to serialize a binary tree such that it can be exactly reconstructed (with null markers)?",
    "options": {
      "A": "In-order traversal alone (without markers)",
      "B": "Pre-order traversal with null markers",
      "C": "Only level-order traversal works, others do not",
      "D": "Any traversal without markers works"
    },
    "answer": "B"
  },
  {
    "id": 103,
    "subtopic": "Trees & BST",
    "question": "What is the output of the following code that checks if a binary tree is a valid BST (using min/max bounds), given tree: root=5, left=3, right=8?\n\nboolean isBST(Node n, Integer min, Integer max) {\n\n    if (n == null) return true;\n\n    if ((min != null && n.val <= min) || (max != null && n.val >= max)) return false;\n\n    return isBST(n.left, min, n.val) && isBST(n.right, n.val, max);\n\n}\n\n// Called as isBST(root, null, null) on tree: root=5, left=3, right=8",
    "options": {
      "A": "false",
      "B": "true",
      "C": "NullPointerException",
      "D": "Compilation Error"
    },
    "answer": "B"
  },
  {
    "id": 104,
    "subtopic": "Heaps & Priority Queues",
    "question": "In a min-heap, what is always true about the root element?",
    "options": {
      "A": "It is always at the last index",
      "B": "It is the smallest element in the heap",
      "C": "It is unrelated to ordering",
      "D": "It is the largest element in the heap"
    },
    "answer": "B"
  },
  {
    "id": 105,
    "subtopic": "Heaps & Priority Queues",
    "question": "What is the time complexity of extracting the minimum element from a min-heap of size n?",
    "options": {
      "A": "O(1)",
      "B": "O(n log n)",
      "C": "O(n)",
      "D": "O(log n)"
    },
    "answer": "D"
  },
  {
    "id": 106,
    "subtopic": "Heaps & Priority Queues",
    "question": "What is the time complexity of building a heap from an unsorted array of n elements (heapify)?",
    "options": {
      "A": "O(log n)",
      "B": "O(n)",
      "C": "O(n log n)",
      "D": "O(n^2)"
    },
    "answer": "B"
  },
  {
    "id": 107,
    "subtopic": "Heaps & Priority Queues",
    "question": "To find the k largest elements in a stream of numbers efficiently, which structure is most suitable?",
    "options": {
      "A": "A stack",
      "B": "A max-heap of size n storing all elements and re-sorting",
      "C": "A min-heap of size k",
      "D": "A sorted array requiring O(n) insertion each time"
    },
    "answer": "C"
  },
  {
    "id": 108,
    "subtopic": "Heaps & Priority Queues",
    "question": "What is the output of the following code?\n\nPriorityQueue<Integer> pq = new PriorityQueue<>();\n\npq.add(5);\n\npq.add(1);\n\npq.add(3);\n\nSystem.out.println(pq.peek());",
    "options": {
      "A": "3",
      "B": "1",
      "C": "5",
      "D": "Compilation Error"
    },
    "answer": "B"
  },
  {
    "id": 109,
    "subtopic": "Heaps & Priority Queues",
    "question": "Which algorithm uses a heap to repeatedly select the smallest/largest remaining element, achieving O(n log n) sorting?",
    "options": {
      "A": "Bubble Sort",
      "B": "Counting Sort",
      "C": "Radix Sort",
      "D": "Heap Sort"
    },
    "answer": "D"
  },
  {
    "id": 110,
    "subtopic": "Heaps & Priority Queues",
    "question": "To find the median of a running stream of numbers efficiently, a common technique uses:",
    "options": {
      "A": "A single sorted array re-sorted on every insert",
      "B": "A single queue",
      "C": "Two heaps: a max-heap for the lower half and a min-heap for the upper half",
      "D": "A single stack"
    },
    "answer": "C"
  },
  {
    "id": 111,
    "subtopic": "Heaps & Priority Queues",
    "question": "In Dijkstra's shortest path algorithm, a min-heap (priority queue) is used to:",
    "options": {
      "A": "Reverse the graph edges",
      "B": "Store the graph's adjacency list",
      "C": "Always process the next unvisited node with the smallest known distance",
      "D": "Detect cycles in the graph"
    },
    "answer": "C"
  },
  {
    "id": 112,
    "subtopic": "Heaps & Priority Queues",
    "question": "A hospital triage system needs to always treat the most critical patient next as new patients arrive continuously. Which structure supports this in O(log n) per operation?",
    "options": {
      "A": "A max-heap (priority queue) keyed by severity",
      "B": "A stack",
      "C": "An unsorted array scanned each time",
      "D": "A simple FIFO queue"
    },
    "answer": "A"
  },
  {
    "id": 113,
    "subtopic": "Heaps & Priority Queues",
    "question": "What is the parent index of the node at index i in a 0-indexed array-based binary heap?",
    "options": {
      "A": "i / 2",
      "B": "(i - 1) / 2",
      "C": "i * 2",
      "D": "i + 1"
    },
    "answer": "B"
  },
  {
    "id": 114,
    "subtopic": "Heaps & Priority Queues",
    "question": "What is the output of the following code that builds a max-heap style priority queue and polls elements?\n\nPriorityQueue<Integer> pq = new PriorityQueue<>(Collections.reverseOrder());\n\npq.add(5);\n\npq.add(9);\n\npq.add(2);\n\nStringBuilder sb = new StringBuilder();\n\nwhile (!pq.isEmpty()) sb.append(pq.poll()).append(\" \");\n\nSystem.out.println(sb.toString().trim());",
    "options": {
      "A": "2 5 9",
      "B": "9 2 5",
      "C": "Compilation Error",
      "D": "9 5 2"
    },
    "answer": "D"
  },
  {
    "id": 115,
    "subtopic": "Heaps & Priority Queues",
    "question": "Which of these best describes why a heap (not a sorted array) is preferred for a priority queue with frequent insertions?",
    "options": {
      "A": "A sorted array cannot store duplicate priorities",
      "B": "A heap allows O(1) search for any arbitrary element",
      "C": "A heap always uses less total memory than an array",
      "D": "Heap insertion is O(log n) while keeping a sorted array requires O(n) shifting per insert"
    },
    "answer": "D"
  },
  {
    "id": 116,
    "subtopic": "Hashing & Hash Maps",
    "question": "What is the average-case time complexity of insert, delete, and search operations in a hash map?",
    "options": {
      "A": "O(n)",
      "B": "O(log n)",
      "C": "O(1)",
      "D": "O(n log n)"
    },
    "answer": "C"
  },
  {
    "id": 117,
    "subtopic": "Hashing & Hash Maps",
    "question": "What is the worst-case time complexity of a hash map lookup when many keys collide into the same bucket (e.g., all in one linked list)?",
    "options": {
      "A": "O(n log n)",
      "B": "O(n)",
      "C": "O(1)",
      "D": "O(log n)"
    },
    "answer": "B"
  },
  {
    "id": 118,
    "subtopic": "Hashing & Hash Maps",
    "question": "Which collision resolution technique stores colliding elements in a linked list (or similar structure) at each bucket?",
    "options": {
      "A": "Open addressing with linear probing only",
      "B": "Double hashing only",
      "C": "Chaining",
      "D": "Perfect hashing only"
    },
    "answer": "C"
  },
  {
    "id": 119,
    "subtopic": "Hashing & Hash Maps",
    "question": "In 'open addressing' with linear probing, what happens when a collision occurs during insertion?",
    "options": {
      "A": "The element replaces the existing one silently",
      "B": "A new hash table is always created",
      "C": "The element is discarded",
      "D": "The algorithm probes the next slot(s) in sequence until an empty one is found"
    },
    "answer": "D"
  },
  {
    "id": 120,
    "subtopic": "Hashing & Hash Maps",
    "question": "What is the time complexity of checking whether two strings are anagrams using a frequency hash map, for strings of length n?",
    "options": {
      "A": "O(1)",
      "B": "O(n^2)",
      "C": "O(n)",
      "D": "O(n log n)"
    },
    "answer": "C"
  },
  {
    "id": 121,
    "subtopic": "Hashing & Hash Maps",
    "question": "What is the output of the following code?\n\nint[] arr = {1, 2, 3, 2, 4};\n\nSet<Integer> seen = new HashSet<>();\n\nboolean hasDup = false;\n\nfor (int x : arr) {\n\n    if (!seen.add(x)) { hasDup = true; break; }\n\n}\n\nSystem.out.println(hasDup);",
    "options": {
      "A": "Compilation Error",
      "B": "true",
      "C": "NullPointerException",
      "D": "false"
    },
    "answer": "B"
  },
  {
    "id": 122,
    "subtopic": "Hashing & Hash Maps",
    "question": "A good hash function for a hash table should primarily aim to:",
    "options": {
      "A": "Distribute keys uniformly across buckets to minimize collisions",
      "B": "Only work for integer keys",
      "C": "Be as slow as possible for security",
      "D": "Always produce the same output regardless of input"
    },
    "answer": "A"
  },
  {
    "id": 123,
    "subtopic": "Hashing & Hash Maps",
    "question": "Finding the first non-repeating character in a string can be done efficiently in O(n) time using:",
    "options": {
      "A": "Sorting the string (O(n log n)) then scanning",
      "B": "A frequency hash map followed by a single pass to find the first count-1 character",
      "C": "Checking every character against every other character (O(n^2))",
      "D": "A stack only"
    },
    "answer": "B"
  },
  {
    "id": 124,
    "subtopic": "Hashing & Hash Maps",
    "question": "What is the output of the following code that finds two numbers in an array summing to a target using a hash map?\n\nint[] nums = {2, 7, 11, 15};\n\nint target = 9;\n\nMap<Integer, Integer> map = new HashMap<>();\n\nfor (int i = 0; i < nums.length; i++) {\n\n    int need = target - nums[i];\n\n    if (map.containsKey(need)) {\n\n        System.out.println(\"[\" + map.get(need) + \", \" + i + \"]\");\n\n        break;\n\n    }\n\n    map.put(nums[i], i);\n\n}",
    "options": {
      "A": "[1, 2]",
      "B": "No pair found",
      "C": "[0, 1]",
      "D": "[0, 2]"
    },
    "answer": "C"
  },
  {
    "id": 125,
    "subtopic": "Hashing & Hash Maps",
    "question": "A caching system (e.g., a web cache) needs O(1) average lookup for whether a resource is already cached. Which structure is most suitable?",
    "options": {
      "A": "A singly linked list scanned linearly",
      "B": "A sorted array requiring binary search",
      "C": "A hash map/hash set",
      "D": "A stack"
    },
    "answer": "C"
  },
  {
    "id": 126,
    "subtopic": "Hashing & Hash Maps",
    "question": "What is the load factor of a hash table?",
    "options": {
      "A": "The number of collisions that occurred",
      "B": "The size of the largest bucket only",
      "C": "The ratio of the number of stored elements to the number of buckets",
      "D": "The maximum key value stored"
    },
    "answer": "C"
  },
  {
    "id": 127,
    "subtopic": "Hashing & Hash Maps",
    "question": "When the load factor of a hash table exceeds a threshold, what commonly happens?",
    "options": {
      "A": "Nothing; performance is unaffected",
      "B": "The table is resized (rehashed) to a larger size",
      "C": "All elements are deleted",
      "D": "The table stops accepting new elements permanently"
    },
    "answer": "B"
  },
  {
    "id": 128,
    "subtopic": "Hashing & Hash Maps",
    "question": "Grouping anagrams together from a list of strings is efficiently done by:",
    "options": {
      "A": "Using a min-heap of string lengths",
      "B": "Using a stack of characters",
      "C": "Using a hash map keyed by the sorted version (or character count signature) of each string",
      "D": "Comparing every pair of strings directly (O(n^2 * m))"
    },
    "answer": "C"
  },
  {
    "id": 129,
    "subtopic": "Hashing & Hash Maps",
    "question": "What is the output of the following code, which counts frequency of elements?\n\nint[] arr = {1, 2, 1, 3};\n\nMap<Integer, Integer> freq = new TreeMap<>();\n\nfor (int x : arr) freq.put(x, freq.getOrDefault(x, 0) + 1);\n\nSystem.out.println(freq);",
    "options": {
      "A": "{1=2, 2=1, 3=1}",
      "B": "{1=3, 2=1, 3=1}",
      "C": "{1=1, 2=2, 3=1}",
      "D": "Compilation Error"
    },
    "answer": "A"
  },
  {
    "id": 130,
    "subtopic": "Hashing & Hash Maps",
    "question": "Which of the following is a valid reason to use a HashSet over an ArrayList when checking for membership repeatedly?",
    "options": {
      "A": "ArrayList cannot store duplicate-free data at all",
      "B": "HashSet uses less memory than ArrayList always",
      "C": "HashSet preserves insertion order strictly, ArrayList does not",
      "D": "HashSet offers O(1) average membership checks vs O(n) for ArrayList"
    },
    "answer": "D"
  },
  {
    "id": 131,
    "subtopic": "Graphs & Traversal",
    "question": "Which traversal algorithm uses a queue and explores a graph level by level from the source?",
    "options": {
      "A": "Breadth-First Search (BFS)",
      "B": "Depth-First Search (DFS)",
      "C": "Dijkstra's Algorithm",
      "D": "Kruskal's Algorithm"
    },
    "answer": "A"
  },
  {
    "id": 132,
    "subtopic": "Graphs & Traversal",
    "question": "Which traversal algorithm uses a stack (explicit or via recursion) and explores as far as possible along each branch?",
    "options": {
      "A": "Prim's Algorithm",
      "B": "Breadth-First Search (BFS)",
      "C": "Bellman-Ford Algorithm",
      "D": "Depth-First Search (DFS)"
    },
    "answer": "D"
  },
  {
    "id": 133,
    "subtopic": "Graphs & Traversal",
    "question": "BFS is guaranteed to find the shortest path (in terms of number of edges) between two nodes in which type of graph?",
    "options": {
      "A": "An unweighted graph",
      "B": "It never guarantees shortest path",
      "C": "Only in a tree",
      "D": "A weighted graph with negative edges"
    },
    "answer": "A"
  },
  {
    "id": 134,
    "subtopic": "Graphs & Traversal",
    "question": "Which algorithm finds the shortest paths from a single source in a graph with non-negative edge weights?",
    "options": {
      "A": "Kruskal's Algorithm",
      "B": "Depth-First Search",
      "C": "Topological Sort",
      "D": "Dijkstra's Algorithm"
    },
    "answer": "D"
  },
  {
    "id": 135,
    "subtopic": "Graphs & Traversal",
    "question": "Which algorithm can handle graphs with negative edge weights (but no negative cycles) to find shortest paths from a single source?",
    "options": {
      "A": "Bellman-Ford Algorithm",
      "B": "Dijkstra's Algorithm",
      "C": "BFS",
      "D": "Prim's Algorithm"
    },
    "answer": "A"
  },
  {
    "id": 136,
    "subtopic": "Graphs & Traversal",
    "question": "Which algorithm computes shortest paths between all pairs of nodes in a graph?",
    "options": {
      "A": "Dijkstra's Algorithm (single run)",
      "B": "Floyd-Warshall Algorithm",
      "C": "BFS",
      "D": "DFS"
    },
    "answer": "B"
  },
  {
    "id": 137,
    "subtopic": "Graphs & Traversal",
    "question": "Topological sorting is only well-defined for which type of graph?",
    "options": {
      "A": "Any undirected graph",
      "B": "A Directed Acyclic Graph (DAG)",
      "C": "A graph with negative cycles",
      "D": "A complete graph only"
    },
    "answer": "B"
  },
  {
    "id": 138,
    "subtopic": "Graphs & Traversal",
    "question": "Which two algorithms are commonly used to find the Minimum Spanning Tree (MST) of a weighted undirected graph?",
    "options": {
      "A": "Floyd-Warshall and Topological Sort",
      "B": "Dijkstra's and Bellman-Ford",
      "C": "Kruskal's and Prim's Algorithms",
      "D": "BFS and DFS"
    },
    "answer": "C"
  },
  {
    "id": 139,
    "subtopic": "Graphs & Traversal",
    "question": "Kruskal's algorithm for MST relies primarily on which data structure to efficiently detect cycles?",
    "options": {
      "A": "A min-heap only",
      "B": "A stack only",
      "C": "A hash map only",
      "D": "Disjoint Set Union (Union-Find)"
    },
    "answer": "D"
  },
  {
    "id": 140,
    "subtopic": "Graphs & Traversal",
    "question": "What is the time complexity of BFS/DFS traversal on a graph with V vertices and E edges (adjacency list representation)?",
    "options": {
      "A": "O(E log V)",
      "B": "O(V + E)",
      "C": "O(V * E)",
      "D": "O(V^2)"
    },
    "answer": "B"
  },
  {
    "id": 141,
    "subtopic": "Graphs & Traversal",
    "question": "Which algorithm is used to detect a cycle in a directed graph using DFS?",
    "options": {
      "A": "DFS with three colors (white/gray/black) or a recursion-stack visited array",
      "B": "BFS with a simple visited array only",
      "C": "Dijkstra's algorithm",
      "D": "Kruskal's algorithm"
    },
    "answer": "A"
  },
  {
    "id": 142,
    "subtopic": "Graphs & Traversal",
    "question": "What is the output (order of nodes visited) when performing BFS from node A on graph: A-B, A-C, B-D, C-D (undirected, adjacency in insertion order)?\n\nMap<String, List<String>> graph = Map.of(\n\n    \"A\", List.of(\"B\", \"C\"),\n\n    \"B\", List.of(\"A\", \"D\"),\n\n    \"C\", List.of(\"A\", \"D\"),\n\n    \"D\", List.of(\"B\", \"C\")\n\n);\n\nQueue<String> queue = new LinkedList<>();\n\nSet<String> visited = new HashSet<>();\n\nqueue.add(\"A\"); visited.add(\"A\");\n\nList<String> order = new ArrayList<>();\n\nwhile (!queue.isEmpty()) {\n\n    String node = queue.poll();\n\n    order.add(node);\n\n    for (String nb : graph.get(node)) {\n\n        if (!visited.contains(nb)) { visited.add(nb); queue.add(nb); }\n\n    }\n\n}\n\nSystem.out.println(String.join(\" \", order));",
    "options": {
      "A": "A D B C",
      "B": "A C B D",
      "C": "A B D C",
      "D": "A B C D"
    },
    "answer": "D"
  },
  {
    "id": 143,
    "subtopic": "Graphs & Traversal",
    "question": "A social network wants to suggest 'friends of friends' (2 hops away) efficiently. Which traversal is naturally suited?",
    "options": {
      "A": "BFS starting from the user, limited to depth 2",
      "B": "DFS to the deepest possible node",
      "C": "A stack-based reversal of the friend list",
      "D": "Sorting all users alphabetically"
    },
    "answer": "A"
  },
  {
    "id": 144,
    "subtopic": "Graphs & Traversal",
    "question": "In a road network with travel times as weights (all non-negative) between cities, which algorithm finds the fastest route from one city to all others?",
    "options": {
      "A": "Dijkstra's Algorithm",
      "B": "DFS only",
      "C": "Kruskal's Algorithm",
      "D": "Topological Sort"
    },
    "answer": "A"
  },
  {
    "id": 145,
    "subtopic": "Graphs & Traversal",
    "question": "What does 'Union-Find' (Disjoint Set Union) with path compression and union by rank achieve in terms of amortized time complexity per operation?",
    "options": {
      "A": "O(log n) always with no better bound possible",
      "B": "O(n^2)",
      "C": "Nearly O(1) (inverse Ackermann function)",
      "D": "O(n) always"
    },
    "answer": "C"
  },
  {
    "id": 146,
    "subtopic": "Graphs & Traversal",
    "question": "Which algorithm is used to find strongly connected components (SCCs) in a directed graph?",
    "options": {
      "A": "Dijkstra's Algorithm",
      "B": "Kosaraju's or Tarjan's Algorithm",
      "C": "Kruskal's Algorithm",
      "D": "Simple BFS only"
    },
    "answer": "B"
  },
  {
    "id": 147,
    "subtopic": "Graphs & Traversal",
    "question": "A 'bridge' in a graph refers to:",
    "options": {
      "A": "An edge with the maximum weight",
      "B": "An edge whose removal increases the number of connected components",
      "C": "Any edge in a spanning tree",
      "D": "The shortest edge in the graph"
    },
    "answer": "B"
  },
  {
    "id": 148,
    "subtopic": "Graphs & Traversal",
    "question": "What is the time complexity of Prim's algorithm for MST using a binary heap, with V vertices and E edges?",
    "options": {
      "A": "O(1)",
      "B": "O(E log V)",
      "C": "O(V^3)",
      "D": "O(V + E)"
    },
    "answer": "B"
  },
  {
    "id": 149,
    "subtopic": "Graphs & Traversal",
    "question": "A flight-booking system models airports as nodes and flights as directed weighted edges (cost). To find the cheapest route between two specific airports, which algorithm is most appropriate given non-negative costs?",
    "options": {
      "A": "Dijkstra's Algorithm",
      "B": "Topological Sort alone",
      "C": "Simple DFS without weights",
      "D": "Union-Find"
    },
    "answer": "A"
  },
  {
    "id": 150,
    "subtopic": "Graphs & Traversal",
    "question": "Course scheduling, where some courses have prerequisites, is typically modeled and solved using:",
    "options": {
      "A": "Topological Sort on a Directed Acyclic Graph",
      "B": "A min-heap without graph structure",
      "C": "Dijkstra's Algorithm",
      "D": "Union-Find only"
    },
    "answer": "A"
  },
  {
    "id": 151,
    "subtopic": "Dynamic Programming",
    "question": "What are the two key properties a problem must exhibit to be solvable using Dynamic Programming?",
    "options": {
      "A": "Overlapping subproblems and optimal substructure",
      "B": "Randomization and approximation",
      "C": "Sorted input and divide and conquer only",
      "D": "Greedy choice property and matroid structure"
    },
    "answer": "A"
  },
  {
    "id": 152,
    "subtopic": "Dynamic Programming",
    "question": "What is the time complexity of computing the n-th Fibonacci number using memoization (top-down DP)?",
    "options": {
      "A": "O(log n)",
      "B": "O(n)",
      "C": "O(n^2)",
      "D": "O(2^n)"
    },
    "answer": "B"
  },
  {
    "id": 153,
    "subtopic": "Dynamic Programming",
    "question": "What is the time complexity of the naive recursive (no memoization) Fibonacci algorithm?",
    "options": {
      "A": "O(2^n)",
      "B": "O(n)",
      "C": "O(n^2)",
      "D": "O(n log n)"
    },
    "answer": "A"
  },
  {
    "id": 154,
    "subtopic": "Dynamic Programming",
    "question": "For the 0/1 Knapsack problem with n items and capacity W, what is the time complexity of the standard DP solution?",
    "options": {
      "A": "O(n log n)",
      "B": "O(2^n)",
      "C": "O(n + W)",
      "D": "O(n * W)"
    },
    "answer": "D"
  },
  {
    "id": 155,
    "subtopic": "Dynamic Programming",
    "question": "What is the key difference between the 0/1 Knapsack and the Fractional Knapsack problem?",
    "options": {
      "A": "There is no difference in approach",
      "B": "0/1 Knapsack always has a greedy optimal solution",
      "C": "0/1 Knapsack requires taking an item fully or not at all, while Fractional allows partial items",
      "D": "Fractional Knapsack is solved with DP and 0/1 with greedy"
    },
    "answer": "C"
  },
  {
    "id": 156,
    "subtopic": "Dynamic Programming",
    "question": "What is the time complexity of the standard DP solution for the Longest Common Subsequence (LCS) of two strings of length m and n?",
    "options": {
      "A": "O(m + n)",
      "B": "O(2^(m+n))",
      "C": "O(m * n * min(m,n))",
      "D": "O(m * n)"
    },
    "answer": "D"
  },
  {
    "id": 157,
    "subtopic": "Dynamic Programming",
    "question": "The Longest Increasing Subsequence (LIS) problem can be solved in O(n log n) time using:",
    "options": {
      "A": "Only brute force in O(2^n)",
      "B": "Binary search combined with a patience-sorting-like array of tails",
      "C": "A single pass with no auxiliary structure in O(n)",
      "D": "Sorting the array first, destroying order information"
    },
    "answer": "B"
  },
  {
    "id": 158,
    "subtopic": "Dynamic Programming",
    "question": "What is the output of the following code, which computes the n-th Fibonacci number using DP for n = 6 (0-indexed, fib(0)=0, fib(1)=1)?\n\nint n = 6;\n\nint[] dp = new int[n + 1];\n\ndp[0] = 0; dp[1] = 1;\n\nfor (int i = 2; i <= n; i++) {\n\n    dp[i] = dp[i - 1] + dp[i - 2];\n\n}\n\nSystem.out.println(dp[n]);",
    "options": {
      "A": "13",
      "B": "8",
      "C": "5",
      "D": "6"
    },
    "answer": "B"
  },
  {
    "id": 159,
    "subtopic": "Dynamic Programming",
    "question": "In the Matrix Chain Multiplication problem, DP is used to determine:",
    "options": {
      "A": "The optimal order of multiplying matrices to minimize total scalar multiplications",
      "B": "The determinant of each matrix",
      "C": "The actual product of the matrices",
      "D": "The transpose of the final matrix"
    },
    "answer": "A"
  },
  {
    "id": 160,
    "subtopic": "Dynamic Programming",
    "question": "What is 'tabulation' in the context of Dynamic Programming?",
    "options": {
      "A": "A method to avoid using arrays entirely",
      "B": "A technique unrelated to DP used only for sorting",
      "C": "A bottom-up approach that fills a table iteratively starting from base cases",
      "D": "A top-down recursive approach with memoization"
    },
    "answer": "C"
  },
  {
    "id": 161,
    "subtopic": "Dynamic Programming",
    "question": "What is 'memoization' in the context of Dynamic Programming?",
    "options": {
      "A": "A technique that only works for sorting algorithms",
      "B": "Randomly guessing subproblem answers",
      "C": "A bottom-up approach that never uses recursion",
      "D": "A top-down approach that caches results of subproblems to avoid recomputation"
    },
    "answer": "D"
  },
  {
    "id": 162,
    "subtopic": "Dynamic Programming",
    "question": "For the Coin Change problem (minimum coins to make amount A with n coin denominations), what is the time complexity of the standard DP solution?",
    "options": {
      "A": "O(n * A)",
      "B": "O(n + A)",
      "C": "O(A log A)",
      "D": "O(2^A)"
    },
    "answer": "A"
  },
  {
    "id": 163,
    "subtopic": "Dynamic Programming",
    "question": "'Digit DP' is a specialized DP technique typically used to solve problems that involve:",
    "options": {
      "A": "Sorting digits of a number",
      "B": "Graph traversal problems",
      "C": "Matrix multiplication only",
      "D": "Counting numbers within a range satisfying digit-based constraints"
    },
    "answer": "D"
  },
  {
    "id": 164,
    "subtopic": "Dynamic Programming",
    "question": "What is the space complexity of an optimized DP solution for the 0/1 Knapsack problem using a 1D array instead of a 2D table?",
    "options": {
      "A": "O(n)",
      "B": "O(1)",
      "C": "O(n * W)",
      "D": "O(W)"
    },
    "answer": "D"
  },
  {
    "id": 165,
    "subtopic": "Dynamic Programming",
    "question": "What is the output of the following code that computes the minimum number of coins for amount 11 using denominations {1, 2, 5}?\n\nint amount = 11;\n\nint[] coins = {1, 2, 5};\n\nint[] dp = new int[amount + 1];\n\nArrays.fill(dp, Integer.MAX_VALUE - 1);\n\ndp[0] = 0;\n\nfor (int i = 1; i <= amount; i++) {\n\n    for (int c : coins) {\n\n        if (c <= i) dp[i] = Math.min(dp[i], dp[i - c] + 1);\n\n    }\n\n}\n\nSystem.out.println(dp[amount]);",
    "options": {
      "A": "3",
      "B": "11",
      "C": "2",
      "D": "5"
    },
    "answer": "A"
  },
  {
    "id": 166,
    "subtopic": "Dynamic Programming",
    "question": "'Bitmask DP' is commonly used to solve which classic problem optimally for small n (e.g., n <= 20)?",
    "options": {
      "A": "Traveling Salesman Problem (TSP)",
      "B": "Simple linear search",
      "C": "Binary search on sorted arrays",
      "D": "Standard merge sort"
    },
    "answer": "A"
  },
  {
    "id": 167,
    "subtopic": "Dynamic Programming",
    "question": "A budgeting app wants to select a subset of expenses to maximize satisfaction without exceeding a fixed budget, where each expense is indivisible. Which technique models this best?",
    "options": {
      "A": "Simple sorting only",
      "B": "Fractional Knapsack Greedy",
      "C": "0/1 Knapsack DP",
      "D": "Union-Find"
    },
    "answer": "C"
  },
  {
    "id": 168,
    "subtopic": "Dynamic Programming",
    "question": "Which of the following problems does NOT typically require Dynamic Programming (a greedy approach suffices instead)?",
    "options": {
      "A": "Longest Common Subsequence",
      "B": "Fractional Knapsack",
      "C": "0/1 Knapsack",
      "D": "Matrix Chain Multiplication"
    },
    "answer": "B"
  },
  {
    "id": 169,
    "subtopic": "Dynamic Programming",
    "question": "What is 'Tree DP' primarily used for?",
    "options": {
      "A": "Solving optimization problems defined recursively over the structure of a tree",
      "B": "Sorting the nodes of a tree",
      "C": "Traversing a tree in level order only",
      "D": "Balancing a BST"
    },
    "answer": "A"
  },
  {
    "id": 170,
    "subtopic": "Dynamic Programming",
    "question": "In the Edit Distance (Levenshtein Distance) DP problem between two strings of length m and n, which three operations are typically considered at each step?",
    "options": {
      "A": "Insert, Delete, Replace",
      "B": "Delete, Merge, Rotate",
      "C": "Replace, Rotate, Compress",
      "D": "Insert, Sort, Reverse"
    },
    "answer": "A"
  },
  {
    "id": 171,
    "subtopic": "Dynamic Programming",
    "question": "What is the output of the following code that computes the maximum sum of non-adjacent elements in [3, 2, 5, 10, 7] (House Robber style DP)?\n\nint[] nums = {3, 2, 5, 10, 7};\n\nint prev2 = 0, prev1 = 0;\n\nfor (int num : nums) {\n\n    int curr = Math.max(prev1, prev2 + num);\n\n    prev2 = prev1;\n\n    prev1 = curr;\n\n}\n\nSystem.out.println(prev1);",
    "options": {
      "A": "12",
      "B": "13",
      "C": "17",
      "D": "15"
    },
    "answer": "D"
  },
  {
    "id": 172,
    "subtopic": "Dynamic Programming",
    "question": "Which statement about DP with rolling arrays (space optimization) is correct?",
    "options": {
      "A": "It reduces space complexity by keeping only the last one or two rows/states needed for the current computation",
      "B": "It is only applicable to graph algorithms",
      "C": "It removes the need for base cases",
      "D": "It always increases time complexity to compensate"
    },
    "answer": "A"
  },
  {
    "id": 173,
    "subtopic": "Dynamic Programming",
    "question": "For the Longest Palindromic Subsequence problem, DP is typically applied on which two indices?",
    "options": {
      "A": "Only the length of the string",
      "B": "Start and end indices of the substring being considered",
      "C": "The frequency count of characters",
      "D": "The ASCII values of characters"
    },
    "answer": "B"
  },
  {
    "id": 174,
    "subtopic": "Dynamic Programming",
    "question": "What is the time complexity of solving the classic 'Subset Sum' problem (does a subset sum to target S) with n items using DP?",
    "options": {
      "A": "O(S log S)",
      "B": "O(n + S)",
      "C": "O(n * S)",
      "D": "O(2^n)"
    },
    "answer": "C"
  },
  {
    "id": 175,
    "subtopic": "Dynamic Programming",
    "question": "A delivery company wants to determine the minimum cost route visiting all delivery points exactly once and returning to the depot, for a small number of points (n <= 15). Which approach is feasible and optimal?",
    "options": {
      "A": "Simple greedy nearest-neighbor guaranteed optimal",
      "B": "Bitmask DP (Held-Karp algorithm) for TSP",
      "C": "Plain BFS without weights",
      "D": "Union-Find"
    },
    "answer": "B"
  },
  {
    "id": 176,
    "subtopic": "Greedy Algorithms",
    "question": "A greedy algorithm makes decisions based on:",
    "options": {
      "A": "Random selection among all choices",
      "B": "Always backtracking after every choice",
      "C": "The locally optimal choice at each step, hoping it leads to a global optimum",
      "D": "Exploring all possible solutions exhaustively"
    },
    "answer": "C"
  },
  {
    "id": 177,
    "subtopic": "Greedy Algorithms",
    "question": "The Activity Selection Problem (selecting maximum non-overlapping intervals) is optimally solved by a greedy approach that sorts activities by:",
    "options": {
      "A": "Finish time",
      "B": "Duration only",
      "C": "Start time only",
      "D": "Number of overlaps"
    },
    "answer": "A"
  },
  {
    "id": 178,
    "subtopic": "Greedy Algorithms",
    "question": "Huffman Coding, used for lossless data compression, greedily builds a tree by repeatedly combining:",
    "options": {
      "A": "The two nodes with the largest frequencies",
      "B": "Nodes in alphabetical order",
      "C": "The two nodes with the smallest frequencies",
      "D": "Random pairs of nodes"
    },
    "answer": "C"
  },
  {
    "id": 179,
    "subtopic": "Greedy Algorithms",
    "question": "The Fractional Knapsack problem is solved optimally using a greedy strategy based on:",
    "options": {
      "A": "The value of each item alone",
      "B": "The value-to-weight ratio of each item, taken in decreasing order",
      "C": "The weight of each item alone",
      "D": "Random item selection"
    },
    "answer": "B"
  },
  {
    "id": 180,
    "subtopic": "Greedy Algorithms",
    "question": "Why does a greedy approach fail to give an optimal solution for the 0/1 Knapsack problem in general?",
    "options": {
      "A": "Because 0/1 Knapsack has no optimal solution",
      "B": "Because items cannot be split, so a locally best ratio choice may block a better overall combination",
      "C": "Because greedy algorithms are always slower than DP",
      "D": "Because greedy cannot be implemented in code"
    },
    "answer": "B"
  },
  {
    "id": 181,
    "subtopic": "Greedy Algorithms",
    "question": "Which classic scheduling problem is greedily solved by always picking the job with the earliest deadline (or Earliest Deadline First)?",
    "options": {
      "A": "Job Sequencing / Single machine scheduling to minimize lateness",
      "B": "Graph coloring",
      "C": "Longest Common Subsequence",
      "D": "Matrix Chain Multiplication"
    },
    "answer": "A"
  },
  {
    "id": 182,
    "subtopic": "Greedy Algorithms",
    "question": "What is the time complexity of the Activity Selection greedy algorithm for n activities (dominated by sorting)?",
    "options": {
      "A": "O(n)",
      "B": "O(n log n)",
      "C": "O(n^2)",
      "D": "O(2^n)"
    },
    "answer": "B"
  },
  {
    "id": 183,
    "subtopic": "Greedy Algorithms",
    "question": "In a meeting-room scheduling app, you need to select the maximum number of non-overlapping meetings from a list with start and end times. Which strategy is optimal?",
    "options": {
      "A": "Sort by meeting duration and pick shortest first always",
      "B": "Try every possible subset of meetings (exponential)",
      "C": "Greedy: sort by end time and pick each meeting that doesn't conflict with the last selected one",
      "D": "Pick meetings in the order they were requested"
    },
    "answer": "C"
  },
  {
    "id": 184,
    "subtopic": "Greedy Algorithms",
    "question": "Which of these problems is correctly solved using a greedy approach (guaranteed optimal)?",
    "options": {
      "A": "Longest Common Subsequence",
      "B": "Minimum Spanning Tree via Kruskal's or Prim's Algorithm",
      "C": "0/1 Knapsack Problem",
      "D": "Traveling Salesman Problem (exact optimal)"
    },
    "answer": "B"
  },
  {
    "id": 185,
    "subtopic": "Greedy Algorithms",
    "question": "A cashier giving change wants to use the minimum number of coins from denominations {1, 5, 10, 25} (standard US coins) for an amount. Why does the greedy 'largest coin first' approach work here?",
    "options": {
      "A": "Because this particular coin system has the property that greedy choices lead to a global optimum",
      "B": "Because it uses dynamic programming internally",
      "C": "Because greedy always works for every coin system",
      "D": "Because it only works when the amount is even"
    },
    "answer": "A"
  },
  {
    "id": 186,
    "subtopic": "Greedy Algorithms",
    "question": "What is the primary reason Huffman coding produces optimal prefix codes?",
    "options": {
      "A": "It compresses data using a fixed dictionary",
      "B": "It assigns shorter codes to more frequent symbols by greedily merging least frequent nodes first",
      "C": "It sorts symbols alphabetically before encoding",
      "D": "It assigns equal-length codes to all symbols"
    },
    "answer": "B"
  },
  {
    "id": 187,
    "subtopic": "Greedy Algorithms",
    "question": "A greedy algorithm for interval scheduling that sorts by start time instead of finish time would most likely:",
    "options": {
      "A": "Run in exponential time",
      "B": "Only work for exactly two activities",
      "C": "Always still produce the optimal answer",
      "D": "Fail to produce the maximum number of non-overlapping activities in general"
    },
    "answer": "D"
  },
  {
    "id": 188,
    "subtopic": "Recursion & Backtracking",
    "question": "What is the primary risk of writing a recursive function without a proper base case?",
    "options": {
      "A": "It will silently return 0",
      "B": "It will always run faster than iteration",
      "C": "It cannot be compiled",
      "D": "Infinite recursion leading to a StackOverflowError"
    },
    "answer": "D"
  },
  {
    "id": 189,
    "subtopic": "Recursion & Backtracking",
    "question": "Backtracking algorithms explore solutions by:",
    "options": {
      "A": "Randomly guessing without any structure",
      "B": "Building a solution incrementally and abandoning ('backtracking') a path as soon as it's determined invalid",
      "C": "Always exploring the entire search space in parallel",
      "D": "Only exploring one fixed path without ever reversing choices"
    },
    "answer": "B"
  },
  {
    "id": 190,
    "subtopic": "Recursion & Backtracking",
    "question": "The N-Queens problem, which places N queens on an N x N board with none attacking another, is classically solved using:",
    "options": {
      "A": "BFS only",
      "B": "Greedy algorithm",
      "C": "Dynamic Programming only",
      "D": "Backtracking"
    },
    "answer": "D"
  },
  {
    "id": 191,
    "subtopic": "Recursion & Backtracking",
    "question": "What is the output of the following recursive code for factorial(5)?\n\nint factorial(int n) {\n\n    if (n <= 1) return 1;\n\n    return n * factorial(n - 1);\n\n}\n\nSystem.out.println(factorial(5));",
    "options": {
      "A": "StackOverflowError",
      "B": "24",
      "C": "120",
      "D": "60"
    },
    "answer": "C"
  },
  {
    "id": 192,
    "subtopic": "Recursion & Backtracking",
    "question": "Generating all permutations of a set of n distinct elements using backtracking has a time complexity of:",
    "options": {
      "A": "O(n!)",
      "B": "O(2^n)",
      "C": "O(n)",
      "D": "O(n^2)"
    },
    "answer": "A"
  },
  {
    "id": 193,
    "subtopic": "Recursion & Backtracking",
    "question": "Solving Sudoku using backtracking works by:",
    "options": {
      "A": "Placing a valid number, recursing, and undoing the placement if it leads to no valid solution",
      "B": "Randomly filling cells until valid",
      "C": "Checking every possible full grid combination without pruning",
      "D": "Using only dynamic programming with a fixed table"
    },
    "answer": "A"
  },
  {
    "id": 194,
    "subtopic": "Recursion & Backtracking",
    "question": "What is the time complexity of the classic Tower of Hanoi problem with n disks (number of moves)?",
    "options": {
      "A": "O(n^2)",
      "B": "O(log n)",
      "C": "O(n)",
      "D": "O(2^n)"
    },
    "answer": "D"
  },
  {
    "id": 195,
    "subtopic": "Recursion & Backtracking",
    "question": "What is the output of the following recursive code that computes the sum of digits of 1234?\n\nint digitSum(int n) {\n\n    if (n == 0) return 0;\n\n    return n % 10 + digitSum(n / 10);\n\n}\n\nSystem.out.println(digitSum(1234));",
    "options": {
      "A": "4",
      "B": "1",
      "C": "1234",
      "D": "10"
    },
    "answer": "D"
  },
  {
    "id": 196,
    "subtopic": "Recursion & Backtracking",
    "question": "Generating all valid combinations of n pairs of balanced parentheses is a classic application of:",
    "options": {
      "A": "Dijkstra's Algorithm",
      "B": "Simple iteration without recursion",
      "C": "Kruskal's Algorithm",
      "D": "Backtracking"
    },
    "answer": "D"
  },
  {
    "id": 197,
    "subtopic": "Recursion & Backtracking",
    "question": "In backtracking, 'pruning' refers to:",
    "options": {
      "A": "Always exploring every branch fully regardless of validity",
      "B": "Sorting the input before recursion",
      "C": "Converting recursion into an iterative loop",
      "D": "Cutting off a branch of the search early once it's known it cannot lead to a valid solution"
    },
    "answer": "D"
  },
  {
    "id": 198,
    "subtopic": "Recursion & Backtracking",
    "question": "What is the space complexity of a recursive solution to compute Fibonacci(n) without memoization, considering the call stack depth?",
    "options": {
      "A": "O(2^n)",
      "B": "O(log n)",
      "C": "O(1)",
      "D": "O(n)"
    },
    "answer": "D"
  },
  {
    "id": 199,
    "subtopic": "Recursion & Backtracking",
    "question": "The 'Rat in a Maze' problem, where a path must be found from source to destination while avoiding blocked cells, is typically solved using:",
    "options": {
      "A": "Greedy algorithm exclusively",
      "B": "Sorting the maze cells",
      "C": "Backtracking (or BFS/DFS for shortest/any path)",
      "D": "Only Dijkstra's algorithm with no other approach possible"
    },
    "answer": "C"
  },
  {
    "id": 200,
    "subtopic": "Recursion & Backtracking",
    "question": "A puzzle-solving app needs to generate every possible way to partition a given set into non-empty subsets. Which technique is most suitable?",
    "options": {
      "A": "A single greedy pass",
      "B": "A hash map lookup only",
      "C": "Binary search",
      "D": "Backtracking / recursive subset generation"
    },
    "answer": "D"
  },
  {
    "id": 201,
    "subtopic": "Recursion & Backtracking",
    "question": "What does 'tail recursion' refer to?",
    "options": {
      "A": "A recursive call that is the last operation performed in the function, allowing potential compiler optimization",
      "B": "Any recursive function regardless of structure",
      "C": "A recursive function with no base case",
      "D": "A function that calls itself twice"
    },
    "answer": "A"
  },
  {
    "id": 202,
    "subtopic": "Recursion & Backtracking",
    "question": "Generating all subsets (the power set) of a set with n elements using backtracking/recursion produces how many subsets?",
    "options": {
      "A": "n^2",
      "B": "n",
      "C": "2^n",
      "D": "n!"
    },
    "answer": "C"
  },
  {
    "id": 203,
    "subtopic": "Searching Algorithms",
    "question": "What is the prerequisite for applying standard binary search on an array?",
    "options": {
      "A": "The array must have an even number of elements",
      "B": "The array must be sorted",
      "C": "The array must be a linked list",
      "D": "The array must contain only integers"
    },
    "answer": "B"
  },
  {
    "id": 204,
    "subtopic": "Searching Algorithms",
    "question": "What is the time complexity of binary search on a sorted array of n elements?",
    "options": {
      "A": "O(n log n)",
      "B": "O(1)",
      "C": "O(n)",
      "D": "O(log n)"
    },
    "answer": "D"
  },
  {
    "id": 205,
    "subtopic": "Searching Algorithms",
    "question": "What is the output of the following binary search code searching for target=23 in [4,10,15,23,45,67]?\n\nint[] arr = {4, 10, 15, 23, 45, 67};\n\nint target = 23;\n\nint lo = 0, hi = arr.length - 1, result = -1;\n\nwhile (lo <= hi) {\n\n    int mid = lo + (hi - lo) / 2;\n\n    if (arr[mid] == target) { result = mid; break; }\n\n    else if (arr[mid] < target) lo = mid + 1;\n\n    else hi = mid - 1;\n\n}\n\nSystem.out.println(result);",
    "options": {
      "A": "4",
      "B": "3",
      "C": "-1",
      "D": "2"
    },
    "answer": "B"
  },
  {
    "id": 206,
    "subtopic": "Searching Algorithms",
    "question": "'Binary Search on the Answer' is a technique typically applied when:",
    "options": {
      "A": "The array must always be unsorted",
      "B": "The problem has no numeric answer space",
      "C": "Only linked lists are involved",
      "D": "The search space of possible answers is monotonic (sorted in terms of feasibility), even if the input array isn't directly searched"
    },
    "answer": "D"
  },
  {
    "id": 207,
    "subtopic": "Searching Algorithms",
    "question": "What is the time complexity of linear search on an unsorted array of n elements?",
    "options": {
      "A": "O(n log n)",
      "B": "O(log n)",
      "C": "O(1)",
      "D": "O(n)"
    },
    "answer": "D"
  },
  {
    "id": 208,
    "subtopic": "Searching Algorithms",
    "question": "Which searching technique divides the search space into three parts instead of two, typically used on unimodal functions?",
    "options": {
      "A": "Binary Search",
      "B": "Exponential Search",
      "C": "Linear Search",
      "D": "Ternary Search"
    },
    "answer": "D"
  },
  {
    "id": 209,
    "subtopic": "Searching Algorithms",
    "question": "Finding the first and last occurrence of a target value in a sorted array with duplicates is efficiently done using:",
    "options": {
      "A": "Two modified binary searches (one biased left, one biased right)",
      "B": "A single linear scan only, since binary search cannot handle duplicates",
      "C": "A hash map of all indices built at O(n) always required",
      "D": "Sorting the array again"
    },
    "answer": "A"
  },
  {
    "id": 210,
    "subtopic": "Searching Algorithms",
    "question": "What is the output of the following code that finds the square root (floor) of 28 using binary search on the answer?\n\nint n = 28;\n\nint lo = 0, hi = n, ans = 0;\n\nwhile (lo <= hi) {\n\n    int mid = lo + (hi - lo) / 2;\n\n    if ((long) mid * mid <= n) { ans = mid; lo = mid + 1; }\n\n    else hi = mid - 1;\n\n}\n\nSystem.out.println(ans);",
    "options": {
      "A": "4",
      "B": "6",
      "C": "5",
      "D": "28"
    },
    "answer": "C"
  },
  {
    "id": 211,
    "subtopic": "Searching Algorithms",
    "question": "A logistics company wants to determine the minimum number of trucks needed such that all packages can be delivered within a time limit, given package weights and a monotonic feasibility condition. Which technique is most suitable?",
    "options": {
      "A": "Simple sorting alone without search",
      "B": "Depth-first search on packages",
      "C": "Linear scan of every possible truck count without any pruning",
      "D": "Binary search on the answer (minimum feasible capacity/trucks)"
    },
    "answer": "D"
  },
  {
    "id": 212,
    "subtopic": "Searching Algorithms",
    "question": "Searching for an element in a rotated sorted array (e.g., [4,5,6,7,0,1,2]) can be done in O(log n) time using:",
    "options": {
      "A": "A hash map lookup requiring O(n) preprocessing every time",
      "B": "Sorting the array first, which changes the original order",
      "C": "Only linear search, since binary search cannot be adapted",
      "D": "A modified binary search that determines which half is properly sorted at each step"
    },
    "answer": "D"
  },
  {
    "id": 213,
    "subtopic": "Searching Algorithms",
    "question": "What is the worst-case time complexity of searching for an element using Jump Search on a sorted array of size n?",
    "options": {
      "A": "O(log n)",
      "B": "O(sqrt n)",
      "C": "O(1)",
      "D": "O(n)"
    },
    "answer": "B"
  },
  {
    "id": 214,
    "subtopic": "Searching Algorithms",
    "question": "Which of the following statements about binary search is correct?",
    "options": {
      "A": "It works correctly on unsorted data as long as data is unique",
      "B": "It always runs in O(1) regardless of input size",
      "C": "Its worst-case number of comparisons is proportional to log base 2 of n",
      "D": "It requires O(n) extra space always"
    },
    "answer": "C"
  },
  {
    "id": 215,
    "subtopic": "Sorting Algorithms",
    "question": "What is the average-case and worst-case time complexity of Merge Sort?",
    "options": {
      "A": "O(n log n) in both average and worst case",
      "B": "O(n) in average case, O(n^2) in worst case",
      "C": "O(n^2) in both average and worst case",
      "D": "O(n log n) average, O(n) worst case"
    },
    "answer": "A"
  },
  {
    "id": 216,
    "subtopic": "Sorting Algorithms",
    "question": "What is the worst-case time complexity of Quick Sort?",
    "options": {
      "A": "O(log n)",
      "B": "O(n^2)",
      "C": "O(n log n)",
      "D": "O(n)"
    },
    "answer": "B"
  },
  {
    "id": 217,
    "subtopic": "Sorting Algorithms",
    "question": "Why does Quick Sort typically outperform Merge Sort in practice despite having a worse worst-case complexity?",
    "options": {
      "A": "Quick Sort uses less comparisons in every single case",
      "B": "Merge Sort cannot be implemented iteratively",
      "C": "It always has a better worst-case complexity",
      "D": "It has better cache locality and lower constant factors, with good pivot selection avoiding worst cases"
    },
    "answer": "D"
  },
  {
    "id": 218,
    "subtopic": "Sorting Algorithms",
    "question": "Which sorting algorithm is 'stable' by default (equal elements retain their relative order)?",
    "options": {
      "A": "Merge Sort",
      "B": "Heap Sort",
      "C": "Selection Sort",
      "D": "Quick Sort (standard in-place version)"
    },
    "answer": "A"
  },
  {
    "id": 219,
    "subtopic": "Sorting Algorithms",
    "question": "What is the time complexity of Counting Sort for an array of n integers within range [0, k]?",
    "options": {
      "A": "O(k^2)",
      "B": "O(n log n)",
      "C": "O(n + k)",
      "D": "O(n * k)"
    },
    "answer": "C"
  },
  {
    "id": 220,
    "subtopic": "Sorting Algorithms",
    "question": "Radix Sort is most efficient when sorting:",
    "options": {
      "A": "Only single-digit numbers",
      "B": "Arbitrary floating point numbers with unbounded precision",
      "C": "Integers (or fixed-length strings) with a bounded number of digits",
      "D": "Any comparison-based data type generically"
    },
    "answer": "C"
  },
  {
    "id": 221,
    "subtopic": "Sorting Algorithms",
    "question": "What is the space complexity of the standard (non-in-place) Merge Sort implementation?",
    "options": {
      "A": "O(n)",
      "B": "O(log n)",
      "C": "O(n^2)",
      "D": "O(1)"
    },
    "answer": "A"
  },
  {
    "id": 222,
    "subtopic": "Sorting Algorithms",
    "question": "What is the output of the following code after sorting?\n\nint[] arr = {5, 2, 8, 1, 3};\n\nArrays.sort(arr);\n\nSystem.out.println(Arrays.toString(arr));",
    "options": {
      "A": "[1, 2, 3, 5, 8]",
      "B": "Compilation Error",
      "C": "[8, 5, 3, 2, 1]",
      "D": "[1, 2, 3, 8, 5]"
    },
    "answer": "A"
  },
  {
    "id": 223,
    "subtopic": "Sorting Algorithms",
    "question": "Which sorting algorithm has the best worst-case time complexity guarantee among Quick Sort, Merge Sort, and Heap Sort, all being O(n log n) except one?",
    "options": {
      "A": "Quick Sort always guarantees O(n log n) worst case",
      "B": "None of them guarantee O(n log n)",
      "C": "Only Quick Sort guarantees O(n log n)",
      "D": "Both Merge Sort and Heap Sort guarantee O(n log n) worst case; Quick Sort does not"
    },
    "answer": "D"
  },
  {
    "id": 224,
    "subtopic": "Sorting Algorithms",
    "question": "What is the time complexity of Bubble Sort in the best case, when the array is already sorted (with an early-exit optimization)?",
    "options": {
      "A": "O(log n)",
      "B": "O(n^2)",
      "C": "O(1)",
      "D": "O(n)"
    },
    "answer": "D"
  },
  {
    "id": 225,
    "subtopic": "Sorting Algorithms",
    "question": "Which sorting algorithm is typically preferred for nearly-sorted or small arrays due to low overhead?",
    "options": {
      "A": "Merge Sort",
      "B": "Insertion Sort",
      "C": "Quick Sort with random pivot",
      "D": "Heap Sort"
    },
    "answer": "B"
  },
  {
    "id": 226,
    "subtopic": "Sorting Algorithms",
    "question": "A company needs to sort millions of employee records by salary, and the data does not fit entirely in memory. Which sorting strategy is most suitable?",
    "options": {
      "A": "External Merge Sort",
      "B": "In-place Quick Sort assuming it always fits in memory",
      "C": "Bubble Sort",
      "D": "Selection Sort"
    },
    "answer": "A"
  },
  {
    "id": 227,
    "subtopic": "Sorting Algorithms",
    "question": "What is the output of the following code that implements a simple selection sort pass on [5, 3, 8, 1] (finding minimum for the first position only)?\n\nint[] arr = {5, 3, 8, 1};\n\nint minIdx = 0;\n\nfor (int i = 1; i < arr.length; i++) {\n\n    if (arr[i] < arr[minIdx]) minIdx = i;\n\n}\n\nSystem.out.println(arr[minIdx]);",
    "options": {
      "A": "5",
      "B": "3",
      "C": "1",
      "D": "8"
    },
    "answer": "C"
  },
  {
    "id": 228,
    "subtopic": "Sorting Algorithms",
    "question": "Heap Sort achieves O(n log n) time complexity in all cases by:",
    "options": {
      "A": "Comparing every pair of elements exhaustively",
      "B": "Using recursion similar to Merge Sort with extra arrays",
      "C": "Building a heap in O(n) and repeatedly extracting the max/min in O(log n) each",
      "D": "Using random pivot selection like Quick Sort"
    },
    "answer": "C"
  },
  {
    "id": 229,
    "subtopic": "Sorting Algorithms",
    "question": "Which statement about sorting algorithm stability matters most in practice?",
    "options": {
      "A": "When sorting records by one key but needing to preserve relative order from a prior sort on another key",
      "B": "Unstable sorts are always faster and preferred in all cases",
      "C": "Stability guarantees O(n log n) time complexity",
      "D": "Stability only matters for numeric arrays, never for objects"
    },
    "answer": "A"
  },
  {
    "id": 230,
    "subtopic": "Bit Manipulation",
    "question": "What is the result of XOR-ing a number with itself (n ^ n)?",
    "options": {
      "A": "0",
      "B": "n",
      "C": "1",
      "D": "-1"
    },
    "answer": "A"
  },
  {
    "id": 231,
    "subtopic": "Bit Manipulation",
    "question": "Which bitwise trick is commonly used to check if a number n is a power of two (n > 0)?",
    "options": {
      "A": "(n & (n - 1)) == 0",
      "B": "(n | (n - 1)) == 0",
      "C": "(n % 2) == 0",
      "D": "(n >> 1) == 0"
    },
    "answer": "A"
  },
  {
    "id": 232,
    "subtopic": "Bit Manipulation",
    "question": "To find the single non-repeating element in an array where every other element appears exactly twice, the most efficient O(n) time, O(1) space approach uses:",
    "options": {
      "A": "XOR of all elements",
      "B": "Sorting the array first",
      "C": "Nested loops comparing every pair",
      "D": "A hash map (uses O(n) extra space)"
    },
    "answer": "A"
  },
  {
    "id": 233,
    "subtopic": "Bit Manipulation",
    "question": "What does the left shift operation (n << 1) do to an integer n?",
    "options": {
      "A": "Multiplies n by 2",
      "B": "Reverses the bits of n",
      "C": "Divides n by 2",
      "D": "Sets n to 0"
    },
    "answer": "A"
  },
  {
    "id": 234,
    "subtopic": "Bit Manipulation",
    "question": "What is the output of the following code?\n\nint a = 5, b = 3;\n\nint result = a ^ b;\n\nSystem.out.println(result);",
    "options": {
      "A": "1",
      "B": "6",
      "C": "3",
      "D": "5"
    },
    "answer": "C"
  },
  {
    "id": 235,
    "subtopic": "Bit Manipulation",
    "question": "Generating all subsets of a set with n elements can be done efficiently using:",
    "options": {
      "A": "Only recursion with no bit tricks possible",
      "B": "A single linear scan of the set",
      "C": "Bitmasking, iterating from 0 to 2^n - 1 and checking set bits",
      "D": "Sorting the set first"
    },
    "answer": "C"
  },
  {
    "id": 236,
    "subtopic": "Bit Manipulation",
    "question": "What does the expression 'n & 1' check for an integer n?",
    "options": {
      "A": "Whether n is a power of two",
      "B": "Whether n equals zero",
      "C": "Whether n is odd (result is 1) or even (result is 0)",
      "D": "Whether n is negative"
    },
    "answer": "C"
  },
  {
    "id": 237,
    "subtopic": "Bit Manipulation",
    "question": "What is the output of the following code that counts set bits (1s) in the binary representation of 13?\n\nint n = 13; // binary: 1101\n\nint count = 0;\n\nwhile (n > 0) {\n\n    count += (n & 1);\n\n    n >>= 1;\n\n}\n\nSystem.out.println(count);",
    "options": {
      "A": "3",
      "B": "4",
      "C": "13",
      "D": "2"
    },
    "answer": "A"
  },
  {
    "id": 238,
    "subtopic": "Bit Manipulation",
    "question": "The XOR swap trick (swapping two variables without a temporary variable) works based on which property of XOR?",
    "options": {
      "A": "XOR is the same as addition",
      "B": "XOR always returns zero",
      "C": "XOR only works on floating point numbers",
      "D": "XOR is its own inverse: applying it twice with the same value cancels out"
    },
    "answer": "D"
  },
  {
    "id": 239,
    "subtopic": "Bit Manipulation",
    "question": "What does 'n & (n - 1)' do to the binary representation of a positive integer n?",
    "options": {
      "A": "It reverses all bits of n",
      "B": "It clears (removes) the lowest set bit of n",
      "C": "It doubles the value of n",
      "D": "It sets the lowest unset bit of n"
    },
    "answer": "B"
  },
  {
    "id": 240,
    "subtopic": "Bit Manipulation",
    "question": "A network protocol uses individual bits of a byte as independent boolean flags (e.g., permissions). Which technique is most efficient for checking and setting these flags?",
    "options": {
      "A": "Storing each flag as a separate boolean array requiring more memory and no atomic combination",
      "B": "Using a sorted array of flag values",
      "C": "Bitmasking with AND/OR/XOR operations",
      "D": "Using a hash map of flag names"
    },
    "answer": "C"
  },
  {
    "id": 241,
    "subtopic": "Bit Manipulation",
    "question": "What is the time complexity of counting the number of set bits in an n-bit integer using Brian Kernighan's algorithm, in terms of the number of set bits k?",
    "options": {
      "A": "O(n^2)",
      "B": "O(n log n)",
      "C": "O(k)",
      "D": "O(2^n)"
    },
    "answer": "C"
  },
  {
    "id": 242,
    "subtopic": "Math & Number Theory",
    "question": "What is the time complexity of the Euclidean algorithm for computing the GCD of two numbers a and b?",
    "options": {
      "A": "O(a + b)",
      "B": "O(log(min(a, b)))",
      "C": "O(sqrt(a))",
      "D": "O(a * b)"
    },
    "answer": "B"
  },
  {
    "id": 243,
    "subtopic": "Math & Number Theory",
    "question": "The Sieve of Eratosthenes computes all prime numbers up to n in what time complexity?",
    "options": {
      "A": "O(n)",
      "B": "O(n^2)",
      "C": "O(n log log n)",
      "D": "O(n log n)"
    },
    "answer": "C"
  },
  {
    "id": 244,
    "subtopic": "Math & Number Theory",
    "question": "What is the relationship between GCD and LCM of two numbers a and b?",
    "options": {
      "A": "LCM(a, b) = (a * b) / GCD(a, b)",
      "B": "There is no general relationship",
      "C": "LCM(a, b) = GCD(a, b) / (a * b)",
      "D": "LCM(a, b) = a + b - GCD(a, b)"
    },
    "answer": "A"
  },
  {
    "id": 245,
    "subtopic": "Math & Number Theory",
    "question": "What is the output of the following code that computes GCD(48, 18) using the Euclidean algorithm?\n\nint gcd(int a, int b) {\n\n    if (b == 0) return a;\n\n    return gcd(b, a % b);\n\n}\n\nSystem.out.println(gcd(48, 18));",
    "options": {
      "A": "48",
      "B": "6",
      "C": "18",
      "D": "3"
    },
    "answer": "B"
  },
  {
    "id": 246,
    "subtopic": "Math & Number Theory",
    "question": "Modular exponentiation (computing a^b mod m efficiently) uses which technique to achieve O(log b) time complexity?",
    "options": {
      "A": "Binary search on the exponent value",
      "B": "Sieve of Eratosthenes",
      "C": "Simple iterative multiplication b times",
      "D": "Fast exponentiation (repeated squaring)"
    },
    "answer": "D"
  },
  {
    "id": 247,
    "subtopic": "Math & Number Theory",
    "question": "In modular arithmetic, why is the modular multiplicative inverse needed when performing division under a modulus?",
    "options": {
      "A": "Because subtraction requires an inverse instead",
      "B": "Because addition under modulus is undefined",
      "C": "Because multiplication under modulus is undefined",
      "D": "Because standard division is not directly defined in modular arithmetic, so multiplying by the inverse achieves the equivalent effect"
    },
    "answer": "D"
  },
  {
    "id": 248,
    "subtopic": "Math & Number Theory",
    "question": "What is the time complexity to check if a single number n is prime using trial division up to its square root?",
    "options": {
      "A": "O(n)",
      "B": "O(log n)",
      "C": "O(sqrt n)",
      "D": "O(n^2)"
    },
    "answer": "C"
  },
  {
    "id": 249,
    "subtopic": "Math & Number Theory",
    "question": "Combinatorics problems computing nCr (combinations) for many queries are often optimized by precomputing:",
    "options": {
      "A": "A sorted array of all subsets",
      "B": "A single recursive call with no precomputation",
      "C": "Factorials (and their modular inverses) up to the maximum n",
      "D": "Only the value of n itself"
    },
    "answer": "C"
  },
  {
    "id": 250,
    "subtopic": "Math & Number Theory",
    "question": "What is the output of the following code that checks whether 29 is a prime number?\n\nint n = 29;\n\nboolean isPrime = n > 1;\n\nfor (int i = 2; i * i <= n; i++) {\n\n    if (n % i == 0) { isPrime = false; break; }\n\n}\n\nSystem.out.println(isPrime);",
    "options": {
      "A": "false",
      "B": "Compilation Error",
      "C": "0",
      "D": "true"
    },
    "answer": "D"
  },
  {
    "id": 251,
    "subtopic": "Math & Number Theory",
    "question": "A cryptography application needs to compute large powers modulo a prime number very quickly. Which technique should be used?",
    "options": {
      "A": "Naive repeated multiplication in a simple loop up to the exponent",
      "B": "Fast (binary) modular exponentiation",
      "C": "Sieve of Eratosthenes",
      "D": "Bubble sort of the digits"
    },
    "answer": "B"
  },
  {
    "id": 252,
    "subtopic": "Math & Number Theory",
    "question": "What does the Sieve of Eratosthenes fundamentally rely on to mark composite numbers efficiently?",
    "options": {
      "A": "Marking all multiples of each prime starting from that prime's square",
      "B": "Sorting numbers in descending order first",
      "C": "Checking divisibility of every number by every other number",
      "D": "Using recursion to factorize every number"
    },
    "answer": "A"
  },
  {
    "id": 253,
    "subtopic": "Math & Number Theory",
    "question": "Why is O(sqrt n) trial division preferred over checking all numbers up to n-1 when testing primality?",
    "options": {
      "A": "If n has a factor greater than sqrt(n), it must also have a corresponding factor smaller than sqrt(n), so checking beyond sqrt(n) is redundant",
      "B": "Because numbers greater than sqrt(n) are never factors under any circumstance",
      "C": "There is no actual benefit; both are equally fast",
      "D": "Because it always finds all prime factors, not just primality"
    },
    "answer": "A"
  },
  {
    "id": 254,
    "subtopic": "Object-Oriented Programming",
    "question": "Which OOP principle allows a subclass to provide a specific implementation of a method already defined in its superclass?",
    "options": {
      "A": "Encapsulation",
      "B": "Method Overriding (Polymorphism)",
      "C": "Composition only",
      "D": "Abstraction"
    },
    "answer": "B"
  },
  {
    "id": 255,
    "subtopic": "Object-Oriented Programming",
    "question": "What is 'encapsulation' in object-oriented programming?",
    "options": {
      "A": "Allowing a class to inherit from multiple parent classes",
      "B": "The ability of an object to take many forms",
      "C": "Hiding the implementation of an entire program in one file",
      "D": "Bundling data and methods that operate on it within a class while restricting direct access to internal state"
    },
    "answer": "D"
  },
  {
    "id": 256,
    "subtopic": "Object-Oriented Programming",
    "question": "What is the key difference between method overloading and method overriding?",
    "options": {
      "A": "Overloading only works with static methods, overriding only with private",
      "B": "Overloading has same method name with different parameters in the same class; overriding redefines a parent method in a subclass with the same signature",
      "C": "There is no difference; they mean the same thing",
      "D": "Overriding requires different parameter lists; overloading requires identical signatures"
    },
    "answer": "B"
  },
  {
    "id": 257,
    "subtopic": "Object-Oriented Programming",
    "question": "What is the output of the following code demonstrating polymorphism?\n\nclass Animal {\n\n    void sound() { System.out.println(\"Animal sound\"); }\n\n}\n\nclass Dog extends Animal {\n\n    @Override\n\n    void sound() { System.out.println(\"Woof\"); }\n\n}\n\npublic class Main {\n\n    public static void main(String[] args) {\n\n        Animal a = new Dog();\n\n        a.sound();\n\n    }\n\n}",
    "options": {
      "A": "Bark",
      "B": "Compilation Error",
      "C": "Woof",
      "D": "Animal sound"
    },
    "answer": "C"
  },
  {
    "id": 258,
    "subtopic": "Object-Oriented Programming",
    "question": "An abstract class in Java can have:",
    "options": {
      "A": "Only abstract methods and no fields",
      "B": "No constructors under any circumstance",
      "C": "Only static methods",
      "D": "Both abstract (unimplemented) methods and concrete (fully implemented) methods"
    },
    "answer": "D"
  },
  {
    "id": 259,
    "subtopic": "Object-Oriented Programming",
    "question": "What is the main difference between an interface and an abstract class in modern Java (Java 8+)?",
    "options": {
      "A": "A class can implement multiple interfaces but extend only one abstract class",
      "B": "Abstract classes cannot have constructors while interfaces can",
      "C": "Interfaces cannot have any methods with a body at all",
      "D": "There is no meaningful difference between them"
    },
    "answer": "A"
  },
  {
    "id": 260,
    "subtopic": "Object-Oriented Programming",
    "question": "What does 'this' keyword refer to inside a non-static method in Java?",
    "options": {
      "A": "The parent class instance always",
      "B": "The class itself, not an instance",
      "C": "The current instance of the class on which the method is called",
      "D": "A static reference shared by all instances"
    },
    "answer": "C"
  },
  {
    "id": 261,
    "subtopic": "Object-Oriented Programming",
    "question": "What is the output of the following code?\n\nclass Counter {\n\n    private int count = 10;\n\n    public int getCount() { return count; }\n\n}\n\npublic class Main {\n\n    public static void main(String[] args) {\n\n        Counter c = new Counter();\n\n        System.out.println(c.getCount());\n\n    }\n\n}",
    "options": {
      "A": "10",
      "B": "0",
      "C": "null",
      "D": "Compilation Error"
    },
    "answer": "A"
  },
  {
    "id": 262,
    "subtopic": "Object-Oriented Programming",
    "question": "Which access modifier restricts a member's visibility to only within its own class?",
    "options": {
      "A": "public",
      "B": "protected",
      "C": "private",
      "D": "default (package-private)"
    },
    "answer": "C"
  },
  {
    "id": 263,
    "subtopic": "Object-Oriented Programming",
    "question": "What does 'composition' mean in object-oriented design (often summarized as 'has-a' relationship)?",
    "options": {
      "A": "A class inherits directly from another class",
      "B": "A class contains an instance of another class as a field to reuse its functionality",
      "C": "An interface extends another interface",
      "D": "A method calls itself recursively"
    },
    "answer": "B"
  },
  {
    "id": 264,
    "subtopic": "Object-Oriented Programming",
    "question": "In Java, what keyword is used to prevent a class from being subclassed (inherited)?",
    "options": {
      "A": "static",
      "B": "private",
      "C": "final",
      "D": "abstract"
    },
    "answer": "C"
  },
  {
    "id": 265,
    "subtopic": "Object-Oriented Programming",
    "question": "What is the output of the following code that demonstrates constructor overloading?\n\nclass Point {\n\n    int x, y;\n\n    Point() { this(0, 0); }\n\n    Point(int x, int y) { this.x = x; this.y = y; }\n\n    public String toString() { return \"Point(\" + x + \", \" + y + \")\"; }\n\n}\n\npublic class Main {\n\n    public static void main(String[] args) {\n\n        System.out.println(new Point());\n\n        System.out.println(new Point(3, 4));\n\n    }\n\n}",
    "options": {
      "A": "Compilation Error",
      "B": "Point(0, 0) Point(3, 4)",
      "C": "Point(0, 0) Point(0, 0)",
      "D": "Point(3, 4) Point(3, 4)"
    },
    "answer": "B"
  },
  {
    "id": 266,
    "subtopic": "Object-Oriented Programming",
    "question": "What is a key benefit of using Generics in Java (e.g., List<Integer> instead of a raw List)?",
    "options": {
      "A": "Faster runtime execution in every case",
      "B": "Automatic multithreading support",
      "C": "Elimination of the need for interfaces",
      "D": "Compile-time type safety, avoiding ClassCastException at runtime"
    },
    "answer": "D"
  },
  {
    "id": 267,
    "subtopic": "Object-Oriented Programming",
    "question": "What is the output of the following code that demonstrates an interface with a default method?\n\ninterface Greetable {\n\n    default void greet() { System.out.println(\"Default greeting\"); }\n\n}\n\nclass Person implements Greetable {}\n\npublic class Main {\n\n    public static void main(String[] args) {\n\n        new Person().greet();\n\n    }\n\n}",
    "options": {
      "A": "Default greeting",
      "B": "Compilation Error",
      "C": "Abstract error",
      "D": "null"
    },
    "answer": "A"
  },
  {
    "id": 268,
    "subtopic": "Object-Oriented Programming",
    "question": "Which statement best describes 'abstraction' in OOP?",
    "options": {
      "A": "Making all class members public for easy access",
      "B": "Combining multiple unrelated classes into one",
      "C": "Exposing only essential features of an object while hiding implementation complexity",
      "D": "Duplicating code across multiple classes for clarity"
    },
    "answer": "C"
  },
  {
    "id": 269,
    "subtopic": "Complexity Analysis (Big-O)",
    "question": "What does Big-O notation primarily describe about an algorithm?",
    "options": {
      "A": "An upper bound on its growth rate (worst-case time or space) as input size grows",
      "B": "The exact number of operations for any input",
      "C": "The amount of memory a computer has",
      "D": "Only the best-case running time"
    },
    "answer": "A"
  },
  {
    "id": 270,
    "subtopic": "Complexity Analysis (Big-O)",
    "question": "Which of these time complexities grows the fastest as n becomes very large?",
    "options": {
      "A": "O(2^n)",
      "B": "O(n log n)",
      "C": "O(n)",
      "D": "O(n^2)"
    },
    "answer": "A"
  },
  {
    "id": 271,
    "subtopic": "Complexity Analysis (Big-O)",
    "question": "Which of the following correctly orders complexities from fastest to slowest growth?",
    "options": {
      "A": "O(2^n) < O(n^2) < O(n log n) < O(n) < O(log n) < O(1)",
      "B": "O(n) < O(1) < O(log n) < O(n^2)",
      "C": "O(1) < O(log n) < O(n) < O(n log n) < O(n^2) < O(2^n)",
      "D": "O(n log n) < O(log n) < O(n) < O(1)"
    },
    "answer": "C"
  },
  {
    "id": 272,
    "subtopic": "Complexity Analysis (Big-O)",
    "question": "What is the time complexity of a nested loop where the outer loop runs n times and the inner loop runs n times independently each iteration?",
    "options": {
      "A": "O(n^2)",
      "B": "O(n)",
      "C": "O(2n)",
      "D": "O(log n)"
    },
    "answer": "A"
  },
  {
    "id": 273,
    "subtopic": "Complexity Analysis (Big-O)",
    "question": "What is the time complexity of the following code?\n\nint sum = 0;\n\nfor (int i = 0; i < n; i++) {\n\n    sum += i;\n\n}\n\nSystem.out.println(sum);",
    "options": {
      "A": "O(n^2)",
      "B": "O(1)",
      "C": "O(n)",
      "D": "O(log n)"
    },
    "answer": "C"
  },
  {
    "id": 274,
    "subtopic": "Complexity Analysis (Big-O)",
    "question": "What is the time complexity of the following code?\n\nfor (int i = 0; i < n; i++) {\n\n    for (int j = 0; j < n; j++) {\n\n        System.out.println(i + j);\n\n    }\n\n}",
    "options": {
      "A": "O(1)",
      "B": "O(n^2)",
      "C": "O(n log n)",
      "D": "O(n)"
    },
    "answer": "B"
  },
  {
    "id": 275,
    "subtopic": "Complexity Analysis (Big-O)",
    "question": "What is the time complexity of the following recursive code (recurrence: T(n) = T(n/2) + O(1))?\n\nint func(int n) {\n\n    if (n <= 1) return 1;\n\n    return func(n / 2) + 1;\n\n}",
    "options": {
      "A": "O(n)",
      "B": "O(log n)",
      "C": "O(2^n)",
      "D": "O(n log n)"
    },
    "answer": "B"
  },
  {
    "id": 276,
    "subtopic": "Complexity Analysis (Big-O)",
    "question": "Which term describes the best-case running time analysis of an algorithm, as opposed to Big-O (worst-case)?",
    "options": {
      "A": "Big-Omega notation",
      "B": "Big-O notation also covers best case identically",
      "C": "There is no notation for best case",
      "D": "Big-Theta notation only refers to average case"
    },
    "answer": "A"
  },
  {
    "id": 277,
    "subtopic": "Complexity Analysis (Big-O)",
    "question": "What does Big-Theta (Θ) notation represent?",
    "options": {
      "A": "The exact memory used by a program",
      "B": "Only the worst-case scenario",
      "C": "A tight bound, meaning both the upper and lower bounds of growth rate match",
      "D": "Only the best-case scenario"
    },
    "answer": "C"
  },
  {
    "id": 278,
    "subtopic": "Complexity Analysis (Big-O)",
    "question": "Amortized time complexity (e.g., O(1) amortized for dynamic array append) means:",
    "options": {
      "A": "The worst single operation is always O(1)",
      "B": "Every single operation always takes exactly the same time",
      "C": "The average time per operation over a sequence of operations is bounded, even if some individual operations are costlier",
      "D": "It only applies to recursive algorithms"
    },
    "answer": "C"
  },
  {
    "id": 279,
    "subtopic": "Complexity Analysis (Big-O)",
    "question": "What is the time complexity of an algorithm with the recurrence relation T(n) = 2T(n/2) + O(n) (as in Merge Sort)?",
    "options": {
      "A": "O(n log n)",
      "B": "O(log n)",
      "C": "O(n)",
      "D": "O(n^2)"
    },
    "answer": "A"
  },
  {
    "id": 280,
    "subtopic": "Complexity Analysis (Big-O)",
    "question": "When comparing two algorithms for a large-scale system processing millions of records daily, why does asymptotic complexity (Big-O) matter more than raw constant-factor speed for small inputs?",
    "options": {
      "A": "Because Big-O gives the exact runtime in seconds",
      "B": "Because as input size grows large, the growth rate dominates performance regardless of constant factors",
      "C": "Because Big-O only applies to sorting algorithms",
      "D": "Because constant factors always matter more than growth rate"
    },
    "answer": "B"
  },
  {
    "id": 281,
    "subtopic": "Applied DSA & System Design",
    "question": "A food delivery app needs to match each new order to the nearest available delivery partner in real time, where partners' locations update frequently. Which approach is most practical for approximate nearest-neighbor queries at scale?",
    "options": {
      "A": "A spatial index such as a grid or a k-d tree / quad-tree over partner locations",
      "B": "A stack of recent partners",
      "C": "Linear scan of all partners for every order (no indexing)",
      "D": "A single sorted array of partner IDs"
    },
    "answer": "A"
  },
  {
    "id": 282,
    "subtopic": "Applied DSA & System Design",
    "question": "A social media platform wants to detect if a user's friend network contains a cycle of mutual introductions for a 'closed loop' badge feature. Which technique detects this?",
    "options": {
      "A": "Cycle detection in an undirected/directed graph using DFS or Union-Find",
      "B": "Sorting friends alphabetically",
      "C": "Binary search on the friend list",
      "D": "A simple hash map without traversal"
    },
    "answer": "A"
  },
  {
    "id": 283,
    "subtopic": "Applied DSA & System Design",
    "question": "An online judge (competitive programming platform) needs to check for balanced use of brackets in submitted code snippets as a first syntax check. Which data structure is ideal?",
    "options": {
      "A": "Heap",
      "B": "Trie",
      "C": "Queue",
      "D": "Stack"
    },
    "answer": "D"
  },
  {
    "id": 284,
    "subtopic": "Applied DSA & System Design",
    "question": "A banking system must process a queue of pending transactions strictly in the order they were received, with support for adding new transactions at the end and processing from the front only. Which structure fits best?",
    "options": {
      "A": "Queue (FIFO)",
      "B": "Unordered set",
      "C": "Stack (LIFO)",
      "D": "Priority Queue by transaction amount"
    },
    "answer": "A"
  },
  {
    "id": 285,
    "subtopic": "Applied DSA & System Design",
    "question": "A text-processing tool needs to find, for a very large document, all locations where a specific pattern string occurs, and this search will be repeated with different patterns many times. Building which structure once on the document enables fast repeated queries?",
    "options": {
      "A": "A single-pass linear scan repeated each time with no preprocessing",
      "B": "A max-heap of character counts",
      "C": "A stack of characters",
      "D": "A suffix array (or suffix automaton) of the document"
    },
    "answer": "D"
  },
  {
    "id": 286,
    "subtopic": "Applied DSA & System Design",
    "question": "An e-commerce site wants to display the top 10 best-selling products out of millions, updated periodically. Which approach is most memory-efficient?",
    "options": {
      "A": "A stack of all products",
      "B": "A min-heap of size 10 tracking the current top 10 by sales count",
      "C": "Sorting all millions of products every time a query is made",
      "D": "A queue of all products in insertion order"
    },
    "answer": "B"
  },
  {
    "id": 287,
    "subtopic": "Applied DSA & System Design",
    "question": "A GPS navigation app needs to compute the shortest driving distance between two points on a road network with non-negative travel times. Which algorithm is the standard choice?",
    "options": {
      "A": "Dijkstra's Algorithm (or A* for further optimization)",
      "B": "Union-Find alone",
      "C": "Bubble Sort of road segments",
      "D": "Depth-First Search without weights"
    },
    "answer": "A"
  },
  {
    "id": 288,
    "subtopic": "Applied DSA & System Design",
    "question": "A version control system (like Git) needs to find the common ancestor commit of two branches, where commits form a directed acyclic graph. Which concept is most relevant?",
    "options": {
      "A": "Lowest Common Ancestor (LCA) in a DAG/tree",
      "B": "Binary search on commit hashes",
      "C": "Bubble sort of commit timestamps",
      "D": "A simple stack of commits"
    },
    "answer": "A"
  },
  {
    "id": 289,
    "subtopic": "Applied DSA & System Design",
    "question": "A telecom company wants to find the minimum cost of laying cables to connect all cities in a network, where each possible cable has a cost. Which algorithm directly solves this?",
    "options": {
      "A": "Topological Sort",
      "B": "Dijkstra's Algorithm (single-source shortest path)",
      "C": "Simple DFS without weights",
      "D": "Minimum Spanning Tree (Kruskal's or Prim's Algorithm)"
    },
    "answer": "D"
  },
  {
    "id": 290,
    "subtopic": "Applied DSA & System Design",
    "question": "An online multiplayer game needs to assign matchmaking lobbies such that players with the closest skill ratings are grouped together, and ratings are frequently inserted and removed. Which structure supports fast insertion, deletion, and nearest-value queries?",
    "options": {
      "A": "A balanced BST (or a sorted structure like a TreeMap)",
      "B": "A stack",
      "C": "A basic queue",
      "D": "An unsorted array requiring full scans"
    },
    "answer": "A"
  },
  {
    "id": 291,
    "subtopic": "Applied DSA & System Design",
    "question": "A spell-checker application needs to suggest words from a large dictionary that share a given prefix as the user types. Which structure is optimal?",
    "options": {
      "A": "Unsorted list of words scanned linearly",
      "B": "Stack of characters",
      "C": "Trie",
      "D": "Priority queue by word length"
    },
    "answer": "C"
  },
  {
    "id": 292,
    "subtopic": "Applied DSA & System Design",
    "question": "A distributed system needs to detect whether two servers belong to the same network partition, with the network structure changing dynamically (merges of partitions over time). Which structure is ideal?",
    "options": {
      "A": "A trie",
      "B": "Disjoint Set Union (Union-Find)",
      "C": "A sorted array requiring full re-sort on every merge",
      "D": "A simple stack"
    },
    "answer": "B"
  },
  {
    "id": 293,
    "subtopic": "Applied DSA & System Design",
    "question": "A stock trading platform wants to detect the maximum profit achievable from at most two non-overlapping buy-sell transactions. Which technique is most efficient?",
    "options": {
      "A": "Trying every possible pair of transactions (O(n^4))",
      "B": "Dynamic Programming tracking best profit states across transactions in O(n) time",
      "C": "A single stack without any state tracking",
      "D": "Sorting prices and picking extremes only"
    },
    "answer": "B"
  },
  {
    "id": 294,
    "subtopic": "Applied DSA & System Design",
    "question": "A ride-sharing app needs to efficiently check if a rider's requested pickup point falls within any of several circular service zones. Given the zones don't change often but queries are frequent, what best balances preprocessing and query time?",
    "options": {
      "A": "Recompute all zone boundaries from scratch on every single query",
      "B": "Use a stack of zones with no spatial reasoning",
      "C": "Precompute zone boundaries and use efficient geometric point-in-shape checks per query",
      "D": "Use bubble sort on zone radii"
    },
    "answer": "C"
  },
  {
    "id": 295,
    "subtopic": "Applied DSA & System Design",
    "question": "A calendar app needs to merge overlapping meeting time intervals into consolidated blocks. What is the standard efficient approach?",
    "options": {
      "A": "Use a stack without sorting first",
      "B": "Use a hash map keyed by meeting duration",
      "C": "Compare every pair of intervals directly (O(n^2)) without sorting",
      "D": "Sort intervals by start time, then merge overlapping ones in a single linear pass"
    },
    "answer": "D"
  },
  {
    "id": 296,
    "subtopic": "Applied DSA & System Design",
    "question": "A cloud storage system needs to deduplicate identical files among millions of uploads efficiently by comparing content hashes. Which structure enables average O(1) duplicate detection?",
    "options": {
      "A": "A hash set/hash map of file content hashes",
      "B": "A singly linked list scanned for every new file",
      "C": "A stack of file names",
      "D": "A sorted array requiring binary search rebuilt on every upload"
    },
    "answer": "A"
  },
  {
    "id": 297,
    "subtopic": "Applied DSA & System Design",
    "question": "A recommendation engine models users and products as a bipartite graph and wants to find products connected to a user within 2 hops (product bought by similar users). Which traversal is appropriate?",
    "options": {
      "A": "BFS limited to depth 2 from the user node",
      "B": "A single stack pop",
      "C": "DFS to maximum depth regardless of hop limit",
      "D": "Sorting products alphabetically"
    },
    "answer": "A"
  },
  {
    "id": 298,
    "subtopic": "Applied DSA & System Design",
    "question": "An autocomplete search bar needs to also rank suggestions by popularity (frequency of past searches) in addition to matching the prefix. Combining a Trie with which structure at each node helps retrieve top suggestions quickly?",
    "options": {
      "A": "A single boolean flag per node with no ranking",
      "B": "A stack of all searches ever made",
      "C": "A small heap or sorted list of top-k frequent completions stored at trie nodes",
      "D": "Bubble sort applied at query time only"
    },
    "answer": "C"
  },
  {
    "id": 299,
    "subtopic": "Applied DSA & System Design",
    "question": "A warehouse robot needs to find the shortest path across a grid with some blocked cells, where all moves cost the same. Which algorithm is most appropriate?",
    "options": {
      "A": "DFS to find the shortest path directly",
      "B": "BFS on the grid treating it as an unweighted graph",
      "C": "Bubble sort of grid cells",
      "D": "Dijkstra's Algorithm only, since BFS cannot be used on grids"
    },
    "answer": "B"
  },
  {
    "id": 300,
    "subtopic": "Applied DSA & System Design",
    "question": "A finance application needs to efficiently answer 'what is the maximum value in the last k transactions' as new transactions stream in continuously. Which structure achieves O(1) amortized per new transaction?",
    "options": {
      "A": "A min-heap without any window eviction logic",
      "B": "A simple stack without any sliding mechanism",
      "C": "A monotonic deque maintaining candidates for the maximum in the current window",
      "D": "Recomputing the maximum over the last k transactions from scratch every time"
    },
    "answer": "C"
  }
]
};


// ==========================================
// 3. DATA: RATIO & PROPORTION (150 Qs)
// ==========================================
// 150 Ratio & Proportion Questions and Verified Answer Key
window.TOPICS = window.TOPICS || {};
