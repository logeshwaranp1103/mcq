// ==========================================
window.TOPICS = window.TOPICS || {};
window.TOPICS["basic_data_structures"] = {
  "id": "basic_data_structures",
  "level": "basic",
  "title": "Data Structures",
  "icon": "🌳",
  "description": "200 essential data structures & algorithms multiple choice questions covering complexity analysis, arrays, strings, linked lists, stacks, queues, trees, heaps, graphs, hashing, sorting, and searching.",
  "questions": [
    {
      "id": 1,
      "subtopic": "Complexity Analysis & Basics",
      "question": "What does Big-O notation primarily describe?",
      "options": {
        "A": "Amount of RAM",
        "B": "Upper bound on an algorithm's growth rate",
        "C": "Programming language speed",
        "D": "Memory address",
        "E": "Exact running time",
        "F": "Best case only"
      },
      "answer": "B",
      "explanation": "Big-O notation characterizes the upper bound on the asymptotic growth rate of an algorithm's runtime or space requirements as input size increases."
    },
    {
      "id": 2,
      "subtopic": "Complexity Analysis & Basics",
      "question": "What is the time complexity of accessing an element by index in an array?",
      "options": {
        "A": "O(log n)",
        "B": "O(n^2)",
        "C": "O(n)",
        "D": "O(2^n)",
        "E": "O(n log n)",
        "F": "O(1)"
      },
      "answer": "F",
      "explanation": "Arrays occupy contiguous memory, so calculating the memory offset `base_address + index * element_size` executes in constant time O(1)."
    },
    {
      "id": 3,
      "subtopic": "Complexity Analysis & Basics",
      "question": "What is the time complexity of searching for an element in an unsorted array?",
      "options": {
        "A": "O(log n)",
        "B": "O(sqrt n)",
        "C": "O(n^2)",
        "D": "O(n)",
        "E": "O(1)",
        "F": "O(n log n)"
      },
      "answer": "D",
      "explanation": "In an unsorted array, linear search must examine up to every element in the worst case, requiring O(n) comparisons."
    },
    {
      "id": 4,
      "subtopic": "Complexity Analysis & Basics",
      "question": "What is the time complexity of binary search on a sorted array of n elements?",
      "options": {
        "A": "O(1)",
        "B": "O(sqrt n)",
        "C": "O(n^2)",
        "D": "O(n)",
        "E": "O(log n)",
        "F": "O(n log n)"
      },
      "answer": "E",
      "explanation": "Binary search repeatedly cuts the search space in half at each comparison, taking logarithmic time O(log n)."
    },
    {
      "id": 5,
      "subtopic": "Complexity Analysis & Basics",
      "question": "Which case represents the scenario where an algorithm performs the maximum number of operations?",
      "options": {
        "A": "Best case",
        "B": "Average case",
        "C": "Amortized case",
        "D": "None of these",
        "E": "Typical case",
        "F": "Worst case"
      },
      "answer": "F",
      "explanation": "The worst case denotes the input configuration that demands the maximum execution steps or resource consumption."
    },
    {
      "id": 6,
      "subtopic": "Complexity Analysis & Basics",
      "question": "What does space complexity measure?",
      "options": {
        "A": "The number of lines of code",
        "B": "The number of variables declared",
        "C": "The amount of memory an algorithm uses relative to input size",
        "D": "The speed of the CPU",
        "E": "The number of function calls only",
        "F": "The size of the hard disk"
      },
      "answer": "C",
      "explanation": "Space complexity quantifies the total auxiliary and working memory an algorithm needs as a function of the input size n."
    },
    {
      "id": 7,
      "subtopic": "Complexity Analysis & Basics",
      "question": "Which notation describes the tight bound (both upper and lower) of an algorithm's growth rate?",
      "options": {
        "A": "None of these",
        "B": "Big-Omega",
        "C": "Little-o",
        "D": "Big-O",
        "E": "Little-omega",
        "F": "Big-Theta (Θ)"
      },
      "answer": "F",
      "explanation": "Big-Theta (Θ) defines an asymptotically tight bound, sandwiching an algorithm's growth rate between positive constant multiples from above and below."
    },
    {
      "id": 8,
      "subtopic": "Complexity Analysis & Basics",
      "question": "Which notation describes the lower bound (best-case growth) of an algorithm?",
      "options": {
        "A": "Little-o",
        "B": "None of these",
        "C": "Big-Theta",
        "D": "Big-Omega (Ω)",
        "E": "Little-omega",
        "F": "Big-O"
      },
      "answer": "D",
      "explanation": "Big-Omega (Ω) notation specifies the asymptotic lower bound on the growth rate of an algorithm."
    },
    {
      "id": 9,
      "subtopic": "Complexity Analysis & Basics",
      "question": "What is the time complexity of an algorithm with two nested loops, each running n times?",
      "options": {
        "A": "O(2^n)",
        "B": "O(n log n)",
        "C": "O(log n)",
        "D": "O(n^2)",
        "E": "O(n)",
        "F": "O(1)"
      },
      "answer": "D",
      "explanation": "Two nested loops executing n iterations each perform approximately n * n = n^2 total iterations, resulting in O(n^2) quadratic time."
    },
    {
      "id": 10,
      "subtopic": "Complexity Analysis & Basics",
      "question": "Which data structure category stores elements in sequential order, where each element (except the first/last) has one predecessor and one successor?",
      "options": {
        "A": "Non-linear data structure",
        "B": "Hybrid data structure",
        "C": "Hash structure",
        "D": "Graph structure",
        "E": "Linear data structure",
        "F": "Hierarchical data structure"
      },
      "answer": "E",
      "explanation": "A linear data structure organizes data sequentially in a single dimension where elements are traversed one after another (e.g. arrays, linked lists, stacks, queues)."
    },
    {
      "id": 11,
      "subtopic": "Complexity Analysis & Basics",
      "question": "Which category includes data structures like trees and graphs, where elements are not arranged sequentially?",
      "options": {
        "A": "Non-linear data structure",
        "B": "Primitive structure",
        "C": "Sequential structure",
        "D": "Static structure",
        "E": "Linear data structure",
        "F": "Dynamic structure only"
      },
      "answer": "A",
      "explanation": "In non-linear data structures, elements exhibit multi-level or multi-directional connections without a single sequential order (e.g., trees and graphs)."
    },
    {
      "id": 12,
      "subtopic": "Complexity Analysis & Basics",
      "question": "What is amortized time complexity typically used to describe?",
      "options": {
        "A": "The average time per operation over a sequence of operations, even if some are costly",
        "B": "The compilation time",
        "C": "Only the worst-case single operation",
        "D": "The total memory used",
        "E": "A fixed constant time for every operation",
        "F": "Only best-case operations"
      },
      "answer": "A",
      "explanation": "Amortized analysis averages the running time of a sequence of operations over all operations, demonstrating that occasional expensive operations (like dynamic array resizing) are balanced by frequent inexpensive ones."
    },
    {
      "id": 13,
      "subtopic": "Complexity Analysis & Basics",
      "question": "Among common complexity classes, which one grows the slowest as input size increases?",
      "options": {
        "A": "O(n)",
        "B": "O(n log n)",
        "C": "O(1)",
        "D": "O(n^2)",
        "E": "O(2^n)",
        "F": "O(log n)"
      },
      "answer": "C",
      "explanation": "Constant time O(1) does not grow at all as input size increases, making it the slowest-growing (most efficient) complexity class."
    },
    {
      "id": 14,
      "subtopic": "Complexity Analysis & Basics",
      "question": "Which complexity is typically associated with recursive algorithms that branch into two calls without meaningfully reducing the problem, such as naive Fibonacci?",
      "options": {
        "A": "O(2^n)",
        "B": "O(n)",
        "C": "O(n log n)",
        "D": "O(log n)",
        "E": "O(n^2)",
        "F": "O(1)"
      },
      "answer": "A",
      "explanation": "Algorithms that double the number of subproblems with each recursive level (e.g., fib(n) = fib(n-1) + fib(n-2)) yield exponential time complexity O(2^n)."
    },
    {
      "id": 15,
      "subtopic": "Complexity Analysis & Basics",
      "question": "Which of these best explains why time complexity analysis is important in data structures?",
      "options": {
        "A": "It only matters for very small inputs",
        "B": "It measures how many bugs a program has",
        "C": "It calculates memory addresses",
        "D": "It helps predict how an algorithm's performance scales as input size grows",
        "E": "It replaces the need for testing",
        "F": "It determines the programming language to use"
      },
      "answer": "D",
      "explanation": "Asymptotic analysis abstracts away specific hardware and clock speeds to predict mathematical scalability on arbitrarily large datasets."
    },
    {
      "id": 16,
      "subtopic": "Complexity Analysis & Basics",
      "question": "What is the time complexity of inserting an element at the beginning of an array of size n?",
      "options": {
        "A": "O(n)",
        "B": "O(n log n)",
        "C": "O(n^2)",
        "D": "O(sqrt n)",
        "E": "O(log n)",
        "F": "O(1)"
      },
      "answer": "A",
      "explanation": "Inserting at index 0 of an array requires shifting all existing n elements one position to the right, which takes O(n) time."
    },
    {
      "id": 17,
      "subtopic": "Complexity Analysis & Basics",
      "question": "A static data structure is best described as:",
      "options": {
        "A": "One used only for sorting",
        "B": "One with no elements",
        "C": "One that changes size dynamically at runtime",
        "D": "One that only stores strings",
        "E": "One used only in graphs",
        "F": "One whose size is fixed at creation and cannot grow or shrink"
      },
      "answer": "F",
      "explanation": "Static data structures have their memory allocation and capacity determined at compile/creation time and cannot be resized during execution."
    },
    {
      "id": 18,
      "subtopic": "Complexity Analysis & Basics",
      "question": "A dynamic data structure is best described as:",
      "options": {
        "A": "One with a fixed size determined at compile time",
        "B": "One used only for constants",
        "C": "One that can grow or shrink in size during program execution",
        "D": "One that only exists temporarily in memory",
        "E": "One that cannot be modified",
        "F": "One that is always sorted"
      },
      "answer": "C",
      "explanation": "Dynamic data structures expand or contract their allocated capacity at runtime as elements are inserted or deleted."
    },
    {
      "id": 19,
      "subtopic": "Complexity Analysis & Basics",
      "question": "Which of the following commonly has O(n log n) time complexity, typical of efficient sorting algorithms?",
      "options": {
        "A": "Insertion into a linked list head",
        "B": "Bubble Sort's best case",
        "C": "A constant-time operation",
        "D": "Merge Sort or Heap Sort",
        "E": "Array index access",
        "F": "Binary Search"
      },
      "answer": "D",
      "explanation": "Optimal comparison-based sorting algorithms like Merge Sort and Heap Sort achieve O(n log n) time complexity in both average and worst cases."
    },
    {
      "id": 20,
      "subtopic": "Complexity Analysis & Basics",
      "question": "When comparing two algorithms for very large inputs, which of the following complexities would generally perform better?",
      "options": {
        "A": "O(n log n) compared to O(n^2)",
        "B": "O(2^n) compared to O(n)",
        "C": "O(n^2) compared to O(n log n)",
        "D": "O(n!) compared to O(n^2)",
        "E": "They perform identically regardless of n",
        "F": "Complexity does not affect performance"
      },
      "answer": "A",
      "explanation": "For large n, O(n log n) grows significantly slower than O(n^2), providing substantially faster execution."
    },
    {
      "id": 21,
      "subtopic": "Arrays & Strings",
      "question": "What is the main advantage of arrays for accessing elements?",
      "options": {
        "A": "They eliminate the need for indexing",
        "B": "They are always faster than linked lists for insertion",
        "C": "They automatically resize",
        "D": "Constant-time O(1) access using an index",
        "E": "They never need contiguous memory",
        "F": "They store elements of mixed types"
      },
      "answer": "D",
      "explanation": "Due to contiguous memory layout, any element in an array can be fetched in O(1) time via direct pointer arithmetic using its numeric index."
    },
    {
      "id": 22,
      "subtopic": "Arrays & Strings",
      "question": "What is a key limitation of static arrays?",
      "options": {
        "A": "They cannot be indexed",
        "B": "They are always slower than linked lists for every operation",
        "C": "They cannot store duplicate values",
        "D": "Their size must be fixed at declaration and cannot grow dynamically",
        "E": "They cannot be traversed",
        "F": "They cannot store integers"
      },
      "answer": "D",
      "explanation": "Static arrays have predetermined, fixed capacities; they cannot expand if additional elements need to be stored."
    },
    {
      "id": 23,
      "subtopic": "Arrays & Strings",
      "question": "Which data structure automatically resizes itself as elements are added, unlike a plain static array?",
      "options": {
        "A": "Queue only",
        "B": "Dynamic array (e.g. ArrayList/Vector)",
        "C": "Static array",
        "D": "Hash table only",
        "E": "Stack only",
        "F": "Singly linked list"
      },
      "answer": "B",
      "explanation": "Dynamic arrays (like Java's ArrayList or C++'s std::vector) automatically allocate a larger buffer (usually 1.5x or 2x) when capacity is exhausted."
    },
    {
      "id": 24,
      "subtopic": "Arrays & Strings",
      "question": "What is the amortized time complexity of inserting an element at the end of a dynamic array?",
      "options": {
        "A": "O(n) always",
        "B": "O(log n)",
        "C": "O(1) amortized",
        "D": "O(n log n)",
        "E": "O(1) worst case always",
        "F": "O(n^2)"
      },
      "answer": "C",
      "explanation": "Although resizing takes O(n) occasionally, it occurs infrequently enough that the average time per append operation is O(1) amortized."
    },
    {
      "id": 25,
      "subtopic": "Arrays & Strings",
      "question": "A 2D array is best described as:",
      "options": {
        "A": "A tree with two children",
        "B": "A single array with duplicate values",
        "C": "An array of arrays, arranged in rows and columns",
        "D": "A hash table with two keys",
        "E": "A stack with two ends",
        "F": "A linked list with two pointers"
      },
      "answer": "C",
      "explanation": "A 2D array is structured as a collection of 1D arrays, creating a grid of elements addressable by row and column coordinates [row][col]."
    },
    {
      "id": 26,
      "subtopic": "Arrays & Strings",
      "question": "What is a sparse array/matrix?",
      "options": {
        "A": "A matrix where most elements are zero, stored efficiently using only non-zero elements",
        "B": "A matrix with a fixed size of 2x2",
        "C": "A matrix stored only in RAM",
        "D": "A matrix used only for strings",
        "E": "A matrix with all non-zero elements",
        "F": "A 1D array only"
      },
      "answer": "A",
      "explanation": "A sparse matrix contains mostly zero or default values; compressed formats (like CSR, COO) store only non-zero coordinates and values to conserve memory."
    },
    {
      "id": 27,
      "subtopic": "Arrays & Strings",
      "question": "In C-style languages, how is a string typically represented internally?",
      "options": {
        "A": "As a binary tree",
        "B": "As a linked list only",
        "C": "As a hash map",
        "D": "As a null-terminated array of characters",
        "E": "As a stack",
        "F": "As a dedicated built-in type unrelated to arrays"
      },
      "answer": "D",
      "explanation": "In C, strings are sequences of ASCII/char values stored in contiguous memory and terminated by the '\\0' null character."
    },
    {
      "id": 28,
      "subtopic": "Arrays & Strings",
      "question": "Which algorithm is a simple/naive approach to pattern matching that checks the pattern at every position in the text?",
      "options": {
        "A": "Rabin-Karp algorithm",
        "B": "Boyer-Moore algorithm",
        "C": "Z-algorithm",
        "D": "Naive/Brute-force string matching",
        "E": "Suffix array matching",
        "F": "KMP algorithm"
      },
      "answer": "D",
      "explanation": "The brute-force / naive approach slides the pattern across every text index one by one and compares characters until a match or mismatch occurs."
    },
    {
      "id": 29,
      "subtopic": "Arrays & Strings",
      "question": "Which pattern matching algorithm preprocesses the pattern to build a partial-match (failure) table, achieving O(n+m) time?",
      "options": {
        "A": "Linear Search",
        "B": "Naive Algorithm",
        "C": "Binary Search",
        "D": "KMP (Knuth-Morris-Pratt) Algorithm",
        "E": "Quick Sort",
        "F": "Bubble Sort"
      },
      "answer": "D",
      "explanation": "The KMP algorithm constructs an LPS (longest prefix which is also suffix) array to skip redundant comparisons, matching in linear O(n + m) time."
    },
    {
      "id": 30,
      "subtopic": "Arrays & Strings",
      "question": "Which pattern matching algorithm uses hashing to compare the pattern with substrings of the text efficiently?",
      "options": {
        "A": "KMP Algorithm",
        "B": "Binary Search",
        "C": "Rabin-Karp Algorithm",
        "D": "Quick Sort",
        "E": "Naive Algorithm",
        "F": "Merge Sort"
      },
      "answer": "C",
      "explanation": "The Rabin-Karp algorithm computes a rolling hash of the pattern and text windows, comparing the hash values before inspecting full strings."
    },
    {
      "id": 31,
      "subtopic": "Arrays & Strings",
      "question": "What is string hashing commonly used for?",
      "options": {
        "A": "Quickly comparing strings or substrings by converting them to numeric values",
        "B": "Reversing a string",
        "C": "Sorting strings alphabetically only",
        "D": "Formatting output",
        "E": "Removing whitespace",
        "F": "Converting a string to uppercase"
      },
      "answer": "A",
      "explanation": "String hashing transforms variable-length character sequences into fixed-size integers, enabling rapid O(1) equality checks and hash table indexing."
    },
    {
      "id": 32,
      "subtopic": "Arrays & Strings",
      "question": "What is the time complexity of finding the length of a string in most C-like implementations without a stored length field?",
      "options": {
        "A": "O(1) always regardless of implementation",
        "B": "O(1), since length is always stored",
        "C": "O(log n)",
        "D": "O(n log n)",
        "E": "O(n), since it must scan until the null terminator",
        "F": "O(n^2)"
      },
      "answer": "E",
      "explanation": "Without a cached length property, strlen() must scan each character sequentially until hitting '\\0', running in O(n) time."
    },
    {
      "id": 33,
      "subtopic": "Arrays & Strings",
      "question": "Which of these best describes the typical space complexity of an in-place array reversal algorithm?",
      "options": {
        "A": "O(n^2) extra space",
        "B": "It cannot be done in-place",
        "C": "O(log n) extra space",
        "D": "O(n log n) extra space",
        "E": "O(n) extra space always",
        "F": "O(1) extra space, using two-pointer swapping"
      },
      "answer": "F",
      "explanation": "By swapping elements symmetrically using left and right indices moving inward, the array is reversed with O(1) auxiliary space."
    },
    {
      "id": 34,
      "subtopic": "Arrays & Strings",
      "question": "What is the time complexity of deleting an element from the middle of an array of size n, including shifting subsequent elements?",
      "options": {
        "A": "O(sqrt n)",
        "B": "O(n log n)",
        "C": "O(n^2)",
        "D": "O(log n)",
        "E": "O(n)",
        "F": "O(1)"
      },
      "answer": "E",
      "explanation": "Removing an element from the middle requires shifting all subsequent elements left by one position, an operation that takes O(n) time."
    },
    {
      "id": 35,
      "subtopic": "Arrays & Strings",
      "question": "Which technique is commonly used to find pairs in a sorted array that sum to a target value efficiently?",
      "options": {
        "A": "Breadth-first search",
        "B": "Recursion only",
        "C": "Depth-first search",
        "D": "Binary search only",
        "E": "Hashing only, as the sole valid approach",
        "F": "Two-pointer (left/right converging) technique"
      },
      "answer": "F",
      "explanation": "Placing one pointer at the start and another at the end of a sorted array and moving inward based on comparison with target finds pairs in O(n) time."
    },
    {
      "id": 36,
      "subtopic": "Arrays & Strings",
      "question": "What does 'in-place' mean when describing an array algorithm?",
      "options": {
        "A": "The algorithm requires a completely new array of the same size",
        "B": "The algorithm works only on strings",
        "C": "The algorithm cannot modify the original array",
        "D": "The algorithm modifies the array using only a constant (or minimal) amount of extra memory",
        "E": "The algorithm always uses recursion",
        "F": "The algorithm only works on sorted arrays"
      },
      "answer": "D",
      "explanation": "An in-place algorithm transforms the input data directly within the existing memory structure without allocating auxiliary arrays (typically O(1) auxiliary space)."
    },
    {
      "id": 37,
      "subtopic": "Arrays & Strings",
      "question": "Which of these is a common real-world application of the sliding window technique on arrays/strings?",
      "options": {
        "A": "Finding the maximum sum subarray of a fixed size k",
        "B": "Hashing a password",
        "C": "Reversing a linked list",
        "D": "Sorting an array in reverse",
        "E": "Building a binary search tree",
        "F": "Performing matrix multiplication"
      },
      "answer": "A",
      "explanation": "Sliding window maintains a running total or state across a subarray window of size k in O(n) time by adding the incoming element and subtracting the outgoing element."
    },
    {
      "id": 38,
      "subtopic": "Arrays & Strings",
      "question": "What is the worst-case time complexity of the naive string matching algorithm searching a pattern of length m in a text of length n?",
      "options": {
        "A": "O(1)",
        "B": "O(n*m)",
        "C": "O(n+m)",
        "D": "O(m)",
        "E": "O(n)",
        "F": "O(log(n*m))"
      },
      "answer": "B",
      "explanation": "In worst-case scenarios with repetitive characters (e.g. text 'AAAAAAAA', pattern 'AAAB'), the algorithm compares m characters at each of the (n - m + 1) positions, yielding O(n * m)."
    },
    {
      "id": 39,
      "subtopic": "Arrays & Strings",
      "question": "Which array-based technique is often used to solve 'find the duplicate/missing number' problems in O(1) extra space?",
      "options": {
        "A": "Using a stack",
        "B": "Using a separate hash map always",
        "C": "Sorting with an extra array",
        "D": "Using a linked list",
        "E": "Using recursion only",
        "F": "In-place marking/swapping using array indices as a hash"
      },
      "answer": "F",
      "explanation": "When array elements fall within the range [1, n], negating elements at indices corresponding to observed values (or cycle sorting) flags visited elements with zero extra memory."
    },
    {
      "id": 40,
      "subtopic": "Arrays & Strings",
      "question": "What is a key difference between an array and a linked list regarding memory allocation?",
      "options": {
        "A": "Linked lists cannot store pointers",
        "B": "Both always use identical memory layouts",
        "C": "Arrays cannot be allocated dynamically ever",
        "D": "Arrays always use non-contiguous memory",
        "E": "Arrays typically use contiguous memory; linked lists use non-contiguous memory linked via pointers",
        "F": "Linked lists always use contiguous memory"
      },
      "answer": "E",
      "explanation": "Array elements sit consecutively in memory, whereas linked list nodes reside anywhere on the heap and are connected explicitly via pointers."
    },
    {
      "id": 41,
      "subtopic": "Linked Lists",
      "question": "What is a linked list?",
      "options": {
        "A": "An array with a fixed size",
        "B": "A linear data structure where nodes are linked using pointers, not necessarily stored contiguously",
        "C": "A stack with two ends",
        "D": "A hash table",
        "E": "A tree with only one child per node",
        "F": "A graph with no edges"
      },
      "answer": "B",
      "explanation": "A linked list is a linear collection of data nodes dynamically connected via explicit pointer references rather than physical memory adjacency."
    },
    {
      "id": 42,
      "subtopic": "Linked Lists",
      "question": "In a singly linked list, each node typically contains:",
      "options": {
        "A": "Data and an array index",
        "B": "Two data fields and no pointers",
        "C": "Only data, with no pointers",
        "D": "Data and pointers to both next and previous nodes",
        "E": "Data and a pointer to the next node",
        "F": "A key and a value only"
      },
      "answer": "E",
      "explanation": "A standard singly linked list node contains a payload (data field) and a single pointer pointing forward to the next node in sequence."
    },
    {
      "id": 43,
      "subtopic": "Linked Lists",
      "question": "In a doubly linked list, each node typically contains:",
      "options": {
        "A": "Data and two next pointers",
        "B": "Data and an array index",
        "C": "Only data",
        "D": "Data, a pointer to the next node, and a pointer to the previous node",
        "E": "A key-value pair only",
        "F": "Only a pointer to the next node"
      },
      "answer": "D",
      "explanation": "Nodes in a doubly linked list store the data value, a pointer to the subsequent node ('next'), and a pointer to the preceding node ('prev')."
    },
    {
      "id": 44,
      "subtopic": "Linked Lists",
      "question": "In a circular linked list, what does the last node's next pointer point to?",
      "options": {
        "A": "An external table",
        "B": "NULL, like a singly linked list",
        "C": "A previous node in the middle",
        "D": "Itself",
        "E": "Back to the first node (head), forming a cycle",
        "F": "Nothing; it stays unset"
      },
      "answer": "E",
      "explanation": "In a circular linked list, the final node references the head node instead of NULL, forming a continuous traversal loop."
    },
    {
      "id": 45,
      "subtopic": "Linked Lists",
      "question": "What is the time complexity of accessing the nth element in a singly linked list?",
      "options": {
        "A": "O(n)",
        "B": "O(n^2)",
        "C": "O(n log n)",
        "D": "O(sqrt n)",
        "E": "O(log n)",
        "F": "O(1)"
      },
      "answer": "A",
      "explanation": "Because linked lists lack indexed address calculation, retrieving the nth element necessitates traversing n pointers from the head in O(n) time."
    },
    {
      "id": 46,
      "subtopic": "Linked Lists",
      "question": "What is the time complexity of inserting a new node at the head of a singly linked list?",
      "options": {
        "A": "O(log n)",
        "B": "O(n^2)",
        "C": "O(1)",
        "D": "O(n log n)",
        "E": "O(n)",
        "F": "O(sqrt n)"
      },
      "answer": "C",
      "explanation": "Prepend requires setting `newNode->next = head; head = newNode;`, which executes in constant time O(1) without shifting any elements."
    },
    {
      "id": 47,
      "subtopic": "Linked Lists",
      "question": "What is the time complexity of inserting a new node at the tail of a singly linked list that has no tail pointer?",
      "options": {
        "A": "O(n), since you must traverse to find the last node",
        "B": "O(n^2)",
        "C": "O(log n)",
        "D": "O(n log n)",
        "E": "O(1) always",
        "F": "O(sqrt n)"
      },
      "answer": "A",
      "explanation": "Without maintaining a tail pointer, insertion requires walking through all n nodes from head to end to locate the last node."
    },
    {
      "id": 48,
      "subtopic": "Linked Lists",
      "question": "Which algorithm is commonly used to detect a cycle in a linked list using two pointers moving at different speeds?",
      "options": {
        "A": "Kruskal's Algorithm",
        "B": "Quick Sort",
        "C": "Binary Search",
        "D": "Merge Sort",
        "E": "Floyd's Cycle Detection Algorithm (Tortoise and Hare)",
        "F": "Dijkstra's Algorithm"
      },
      "answer": "E",
      "explanation": "Floyd's Tortoise and Hare algorithm detects loops by advancing a slow pointer by 1 step and a fast pointer by 2 steps; if a cycle exists, they are guaranteed to meet."
    },
    {
      "id": 49,
      "subtopic": "Linked Lists",
      "question": "In Floyd's cycle detection algorithm, what are the two pointers commonly called?",
      "options": {
        "A": "Slow pointer and fast pointer",
        "B": "Root pointer and leaf pointer",
        "C": "Parent pointer and child pointer",
        "D": "Source pointer and destination pointer",
        "E": "Left pointer and right pointer",
        "F": "Head pointer and tail pointer"
      },
      "answer": "A",
      "explanation": "The pointers are standardly called the slow pointer (advances 1 step) and fast pointer (advances 2 steps)."
    },
    {
      "id": 50,
      "subtopic": "Linked Lists",
      "question": "What is the main advantage of a linked list over an array for frequent insertions and deletions in the middle?",
      "options": {
        "A": "It always uses less total memory",
        "B": "It eliminates the need for pointers",
        "C": "It sorts itself automatically",
        "D": "Elements can be accessed randomly in O(1)",
        "E": "Insertion/deletion is O(1) once the position is found, without shifting elements",
        "F": "It never requires traversal"
      },
      "answer": "E",
      "explanation": "Once a target node reference is known, inserting or deleting simply rewires pointer links in O(1) without having to shift subsequent elements."
    },
    {
      "id": 51,
      "subtopic": "Linked Lists",
      "question": "What is a key disadvantage of a linked list compared to an array?",
      "options": {
        "A": "It cannot be traversed",
        "B": "It requires a fixed size",
        "C": "No random access; accessing an arbitrary element requires O(n) traversal",
        "D": "It always uses less memory than arrays",
        "E": "It cannot store data",
        "F": "It cannot grow dynamically"
      },
      "answer": "C",
      "explanation": "Linked lists do not allow direct index-based random access; jumping to the k-th node requires sequential pointer chasing."
    },
    {
      "id": 52,
      "subtopic": "Linked Lists",
      "question": "Which operation reverses the direction of all the 'next' pointers in a singly linked list?",
      "options": {
        "A": "List sorting",
        "B": "List merging",
        "C": "List rotation",
        "D": "List reversal",
        "E": "List deletion",
        "F": "List flattening"
      },
      "answer": "D",
      "explanation": "List reversal inverts every forward link so that the original tail becomes the new head and each node points to its previous predecessor."
    },
    {
      "id": 53,
      "subtopic": "Linked Lists",
      "question": "What is the time complexity of reversing a singly linked list iteratively?",
      "options": {
        "A": "O(log n)",
        "B": "O(n^2)",
        "C": "O(1)",
        "D": "O(n log n)",
        "E": "O(n)",
        "F": "O(sqrt n)"
      },
      "answer": "E",
      "explanation": "Iterative reversal visits each of the n nodes exactly once using three pointers (prev, curr, next), taking O(n) linear time."
    },
    {
      "id": 54,
      "subtopic": "Linked Lists",
      "question": "Which type of linked list allows traversal in both forward and backward directions?",
      "options": {
        "A": "Doubly linked list",
        "B": "Static linked list",
        "C": "Circular singly linked list",
        "D": "Hash-based linked list",
        "E": "Singly linked list",
        "F": "None of these"
      },
      "answer": "A",
      "explanation": "Having both next and prev pointers enables a doubly linked list to be traversed bi-directionally."
    },
    {
      "id": 55,
      "subtopic": "Linked Lists",
      "question": "What is a common technique to find the middle element of a linked list in a single pass?",
      "options": {
        "A": "Converting to an array first",
        "B": "Using binary search",
        "C": "Sorting the list first",
        "D": "Using a hash table",
        "E": "Using recursion with O(n^2) time",
        "F": "Slow and fast pointer technique"
      },
      "answer": "F",
      "explanation": "When a fast pointer reaches the end moving at 2 steps per iteration, a slow pointer moving at 1 step will rest exactly at the middle node."
    },
    {
      "id": 56,
      "subtopic": "Linked Lists",
      "question": "Merging two sorted linked lists into one sorted linked list is typically done with what time complexity?",
      "options": {
        "A": "O(1)",
        "B": "O(log(n+m))",
        "C": "O(n + m), where n and m are the lengths of the two lists",
        "D": "O(n^2)",
        "E": "O(n * m)",
        "F": "O(n log n)"
      },
      "answer": "C",
      "explanation": "A two-pointer merge compares the current heads of both lists and links the smaller node, taking linear time proportional to the sum of lengths O(n + m)."
    },
    {
      "id": 57,
      "subtopic": "Linked Lists",
      "question": "What does it mean for a linked list to use a 'dummy' head node?",
      "options": {
        "A": "A node used only in circular lists",
        "B": "A placeholder node at the start that simplifies edge-case handling for insertion/deletion, without holding real data",
        "C": "A node in the middle of the list",
        "D": "The last node in the list",
        "E": "A corrupted node",
        "F": "A node with a NULL pointer only"
      },
      "answer": "B",
      "explanation": "A dummy (sentinel) node eliminates special edge-case branch checks when inserting or deleting at the list head."
    },
    {
      "id": 58,
      "subtopic": "Linked Lists",
      "question": "What is the space complexity of a singly linked list storing n elements, aside from the data itself?",
      "options": {
        "A": "O(n) extra space for the pointers",
        "B": "O(1)",
        "C": "O(log n)",
        "D": "O(n^2)",
        "E": "O(sqrt n)",
        "F": "O(n log n)"
      },
      "answer": "A",
      "explanation": "Every node requires one pointer to link to the next element, incurring an O(n) total pointer memory overhead."
    },
    {
      "id": 59,
      "subtopic": "Linked Lists",
      "question": "Which linked list variation is most memory-efficient in terms of pointers per node, at the cost of no backward traversal?",
      "options": {
        "A": "XOR linked list only",
        "B": "Circular doubly linked list",
        "C": "Singly linked list",
        "D": "None of these",
        "E": "Skip list",
        "F": "Doubly linked list"
      },
      "answer": "C",
      "explanation": "A singly linked list stores only a single pointer per node, minimizing memory overhead compared to doubly linked or skip lists."
    },
    {
      "id": 60,
      "subtopic": "Linked Lists",
      "question": "What is a practical real-world use case commonly implemented using a doubly linked list?",
      "options": {
        "A": "Implementing binary search",
        "B": "Implementing bubble sort",
        "C": "Implementing a hash function",
        "D": "Storing a fixed lookup table",
        "E": "Browser history (forward/back navigation) or an LRU cache",
        "F": "Implementing matrix multiplication"
      },
      "answer": "E",
      "explanation": "Doubly linked lists enable O(1) removal and re-insertion at both ends, making them the standard data structure for LRU caches and browser navigation histories."
    },
    {
      "id": 61,
      "subtopic": "Stacks",
      "question": "What principle does a stack data structure follow?",
      "options": {
        "A": "Priority-based access",
        "B": "Round-robin access",
        "C": "Sorted access",
        "D": "Random access",
        "E": "LIFO (Last In, First Out)",
        "F": "FIFO (First In, First Out)"
      },
      "answer": "E",
      "explanation": "A stack enforces LIFO (Last In, First Out): the most recently inserted element is always the first one to be removed."
    },
    {
      "id": 62,
      "subtopic": "Stacks",
      "question": "Which operation adds an element to the top of a stack?",
      "options": {
        "A": "Push",
        "B": "Enqueue",
        "C": "Insert at head",
        "D": "Peek",
        "E": "Pop",
        "F": "Dequeue"
      },
      "answer": "A",
      "explanation": "The 'push' operation places a new item onto the top of the stack."
    },
    {
      "id": 63,
      "subtopic": "Stacks",
      "question": "Which operation removes and returns the top element of a stack?",
      "options": {
        "A": "Dequeue",
        "B": "Enqueue",
        "C": "Delete at tail",
        "D": "Peek",
        "E": "Pop",
        "F": "Push"
      },
      "answer": "E",
      "explanation": "The 'pop' operation extracts and returns the current top item from the stack."
    },
    {
      "id": 64,
      "subtopic": "Stacks",
      "question": "Which operation returns the top element of a stack without removing it?",
      "options": {
        "A": "Enqueue",
        "B": "Peek (or Top)",
        "C": "Pop",
        "D": "Insert",
        "E": "Push",
        "F": "Dequeue"
      },
      "answer": "B",
      "explanation": "'peek()' (or 'top()') inspects the value of the topmost element without modifying the stack."
    },
    {
      "id": 65,
      "subtopic": "Stacks",
      "question": "What is the time complexity of push and pop operations on an array-based stack (no resizing needed)?",
      "options": {
        "A": "O(n log n)",
        "B": "O(log n)",
        "C": "O(sqrt n)",
        "D": "O(1)",
        "E": "O(n)",
        "F": "O(n^2)"
      },
      "answer": "D",
      "explanation": "Inserting or removing at the end index of an array without resizing executes in constant time O(1)."
    },
    {
      "id": 66,
      "subtopic": "Stacks",
      "question": "Which classic application of a stack is used to check whether parentheses/brackets in an expression are balanced?",
      "options": {
        "A": "Binary search",
        "B": "Hashing",
        "C": "Dijkstra's algorithm",
        "D": "Balanced parentheses checking",
        "E": "Merge sort",
        "F": "Breadth-first search"
      },
      "answer": "D",
      "explanation": "Opening brackets are pushed onto a stack and popped upon encountering matching closing brackets; an empty stack at the end indicates balanced delimiters."
    },
    {
      "id": 67,
      "subtopic": "Stacks",
      "question": "Stacks are commonly used to convert which type of expression to postfix or prefix notation?",
      "options": {
        "A": "Only prefix expressions",
        "B": "Regular expressions",
        "C": "Infix expressions",
        "D": "Binary expressions only",
        "E": "Boolean expressions only",
        "F": "Only postfix expressions"
      },
      "answer": "C",
      "explanation": "Compilers use stacks (e.g. Dijkstra's Shunting-yard algorithm) to convert human-readable infix arithmetic expressions (A + B) into postfix (A B +) or prefix (+ A B)."
    },
    {
      "id": 68,
      "subtopic": "Stacks",
      "question": "What data structure is typically used to implement function call management, including recursion, in most programming languages?",
      "options": {
        "A": "Linked list without stack behavior",
        "B": "Hash table",
        "C": "Call stack (a stack data structure)",
        "D": "Heap (priority queue)",
        "E": "Graph",
        "F": "Queue"
      },
      "answer": "C",
      "explanation": "Execution environments use a call stack to push stack frames (local variables, return addresses) during function invocations and pop them upon return."
    },
    {
      "id": 69,
      "subtopic": "Stacks",
      "question": "What happens when you try to push an element onto a stack that has reached its maximum capacity (fixed-size array implementation)?",
      "options": {
        "A": "Segmentation fault only",
        "B": "Stack Underflow",
        "C": "Nothing happens",
        "D": "Stack Overflow",
        "E": "Silent data loss with no error",
        "F": "Automatic resizing always"
      },
      "answer": "D",
      "explanation": "Attempting to push onto an already full, fixed-capacity stack triggers a Stack Overflow error."
    },
    {
      "id": 70,
      "subtopic": "Stacks",
      "question": "What happens when you try to pop an element from an empty stack?",
      "options": {
        "A": "Stack Underflow",
        "B": "Automatic resizing",
        "C": "It returns zero silently",
        "D": "Stack Overflow",
        "E": "Nothing happens",
        "F": "Segmentation fault always"
      },
      "answer": "A",
      "explanation": "Attempting to pop or peek from an empty stack results in a Stack Underflow error."
    },
    {
      "id": 71,
      "subtopic": "Stacks",
      "question": "Which algorithmic technique commonly uses a stack (explicitly or via recursion) to explore as far as possible along a branch before backtracking?",
      "options": {
        "A": "Breadth-First Search (BFS)",
        "B": "Depth-First Search (DFS)",
        "C": "Dijkstra's Algorithm",
        "D": "Counting Sort",
        "E": "Merge Sort",
        "F": "Binary Search"
      },
      "answer": "B",
      "explanation": "Depth-First Search (DFS) relies on a stack (or system call stack via recursion) to probe deeply into paths and backtrack when dead ends are reached."
    },
    {
      "id": 72,
      "subtopic": "Stacks",
      "question": "A stack that also efficiently supports retrieving the minimum (or maximum) element at any time is commonly called what?",
      "options": {
        "A": "Priority Queue",
        "B": "Min-Stack (or Max-Stack)",
        "C": "Circular Queue",
        "D": "Deque",
        "E": "Heap only",
        "F": "Trie"
      },
      "answer": "B",
      "explanation": "A Min-Stack maintains an auxiliary tracking stack (or value pairs) to return the minimum element in O(1) time alongside standard O(1) push and pop."
    },
    {
      "id": 73,
      "subtopic": "Stacks",
      "question": "Which of these is a common use of a stack in text editors and similar applications?",
      "options": {
        "A": "Implementing spell check",
        "B": "Implementing file compression",
        "C": "Implementing undo/redo functionality",
        "D": "Implementing syntax highlighting only",
        "E": "Implementing autocomplete",
        "F": "Implementing search indexing"
      },
      "answer": "C",
      "explanation": "Text editors push actions onto an 'undo' stack and pop them onto a 'redo' stack to revert and re-apply user edits in LIFO order."
    },
    {
      "id": 74,
      "subtopic": "Stacks",
      "question": "What is the typical space complexity of a stack holding n elements?",
      "options": {
        "A": "O(1)",
        "B": "O(sqrt n)",
        "C": "O(n log n)",
        "D": "O(n)",
        "E": "O(log n)",
        "F": "O(n^2)"
      },
      "answer": "D",
      "explanation": "A stack requires linear O(n) storage space directly proportional to the number of elements it contains."
    },
    {
      "id": 75,
      "subtopic": "Stacks",
      "question": "In evaluating a postfix expression using a stack, what typically happens when an operator is encountered?",
      "options": {
        "A": "The stack is reversed",
        "B": "Nothing happens until the end",
        "C": "The entire expression is cleared",
        "D": "The operator itself is pushed onto the stack",
        "E": "Two operands are popped, the operation is applied, and the result is pushed back",
        "F": "A new stack is created"
      },
      "answer": "E",
      "explanation": "In postfix evaluation, an operator causes the top two operands to be popped, evaluated with that operator, and the computed result pushed back."
    },
    {
      "id": 76,
      "subtopic": "Stacks",
      "question": "Which data structure combination can be used to implement a stack using two queues?",
      "options": {
        "A": "A hash table",
        "B": "A single linked list only",
        "C": "A graph",
        "D": "A binary tree",
        "E": "A single array only",
        "F": "Two Queues (each used to simulate stack behavior)"
      },
      "answer": "F",
      "explanation": "A stack can be simulated using two queues by either making the push operation costly (cycling elements into the second queue) or pop costly."
    },
    {
      "id": 77,
      "subtopic": "Stacks",
      "question": "What does it mean for a stack to be implemented using a dynamic array rather than a fixed-size array?",
      "options": {
        "A": "The stack requires manual resizing every time",
        "B": "The stack automatically grows/resizes when full, avoiding a fixed capacity limit",
        "C": "The stack loses LIFO order",
        "D": "The stack cannot support pop operations",
        "E": "The stack becomes a queue",
        "F": "The stack cannot hold more than one type of data"
      },
      "answer": "B",
      "explanation": "A dynamic array stack doubles its memory buffer whenever it becomes full, eliminating artificial capacity boundaries."
    },
    {
      "id": 78,
      "subtopic": "Stacks",
      "question": "Which of these correctly describes a typical approach for converting infix to postfix using a stack (Shunting Yard-like)?",
      "options": {
        "A": "A hash table replaces the need for a stack",
        "B": "Operators are pushed/popped based on precedence while operands go directly to output",
        "C": "Operands are pushed onto a separate queue only",
        "D": "Operators always go directly to output",
        "E": "A queue is required, not a stack",
        "F": "The expression is reversed character by character with no stack"
      },
      "answer": "B",
      "explanation": "Operands pass straight to the output string, whereas operators reside on the stack and pop to output when lower-precedence operators arrive."
    },
    {
      "id": 79,
      "subtopic": "Stacks",
      "question": "What is a common real-world example that mirrors stack (LIFO) behavior?",
      "options": {
        "A": "A stack of plates, where you add/remove only from the top",
        "B": "A round-robin CPU scheduler",
        "C": "A sorted phone book",
        "D": "A circular buffer",
        "E": "A priority-based hospital triage system",
        "F": "A queue at a ticket counter"
      },
      "answer": "A",
      "explanation": "A stack of plates cleanly models LIFO behavior: plates are placed onto the top and the top plate is always retrieved first."
    },
    {
      "id": 80,
      "subtopic": "Stacks",
      "question": "Recursion in programming implicitly relies on which data structure to keep track of function calls and their local variables?",
      "options": {
        "A": "A tree structure exclusively",
        "B": "A heap exclusively",
        "C": "The call stack",
        "D": "A graph",
        "E": "A hash table",
        "F": "A queue"
      },
      "answer": "C",
      "explanation": "The runtime call stack preserves activation frames across nested recursive function invocations until base conditions unwind them."
    },
    {
      "id": 81,
      "subtopic": "Queues",
      "question": "What principle does a standard queue data structure follow?",
      "options": {
        "A": "Sorted access only",
        "B": "Round-robin only",
        "C": "LIFO (Last In, First Out)",
        "D": "Priority-based only",
        "E": "Random access",
        "F": "FIFO (First In, First Out)"
      },
      "answer": "F",
      "explanation": "Standard queues enforce FIFO (First In, First Out): elements exit in the identical chronological sequence in which they arrived."
    },
    {
      "id": 82,
      "subtopic": "Queues",
      "question": "Which operation adds an element to the rear of a queue?",
      "options": {
        "A": "Dequeue",
        "B": "Enqueue",
        "C": "Insert at front",
        "D": "Peek",
        "E": "Push",
        "F": "Pop"
      },
      "answer": "B",
      "explanation": "The 'enqueue' operation appends a new item to the back (rear) of the queue."
    },
    {
      "id": 83,
      "subtopic": "Queues",
      "question": "Which operation removes and returns the element at the front of a queue?",
      "options": {
        "A": "Push",
        "B": "Peek",
        "C": "Pop",
        "D": "Delete at rear",
        "E": "Enqueue",
        "F": "Dequeue"
      },
      "answer": "F",
      "explanation": "The 'dequeue' operation removes and returns the oldest remaining element from the front of the queue."
    },
    {
      "id": 84,
      "subtopic": "Queues",
      "question": "What is the time complexity of enqueue and dequeue operations in a well-implemented queue (linked list or circular array)?",
      "options": {
        "A": "O(sqrt n)",
        "B": "O(n log n)",
        "C": "O(n^2)",
        "D": "O(n)",
        "E": "O(1)",
        "F": "O(log n)"
      },
      "answer": "E",
      "explanation": "With front and rear pointers, inserting at the rear and removing from the front both execute in O(1) constant time."
    },
    {
      "id": 85,
      "subtopic": "Queues",
      "question": "Which type of queue allows insertion and deletion from both the front and rear ends?",
      "options": {
        "A": "Stack",
        "B": "Simple Queue",
        "C": "Deque (Double-Ended Queue)",
        "D": "Singly linked list",
        "E": "Circular Queue",
        "F": "Priority Queue"
      },
      "answer": "C",
      "explanation": "A Deque (Double-Ended Queue) generalizes queues to allow push and pop operations at both the front and rear boundaries."
    },
    {
      "id": 86,
      "subtopic": "Queues",
      "question": "Which type of queue treats the underlying storage as circular, so the rear wraps around to the beginning when space is available?",
      "options": {
        "A": "Stack",
        "B": "Priority Queue",
        "C": "Simple Queue",
        "D": "Circular Queue",
        "E": "Deque",
        "F": "Linked Queue only"
      },
      "answer": "D",
      "explanation": "A circular queue uses modulo indexing `(index + 1) % capacity` to wrap pointers to index 0, preventing wasted front memory slots."
    },
    {
      "id": 87,
      "subtopic": "Queues",
      "question": "In a priority queue, elements are removed based on what criterion rather than insertion order?",
      "options": {
        "A": "Removal time only (LIFO)",
        "B": "Alphabetical order always",
        "C": "Priority (highest or lowest priority first)",
        "D": "Random selection",
        "E": "Insertion time only (FIFO)",
        "F": "Memory address"
      },
      "answer": "C",
      "explanation": "A priority queue dequeues elements according to assigned numerical priority values rather than their arrival sequence."
    },
    {
      "id": 88,
      "subtopic": "Queues",
      "question": "Which data structure is commonly used to efficiently implement a priority queue?",
      "options": {
        "A": "Simple array without ordering",
        "B": "Hash table",
        "C": "Stack",
        "D": "Singly linked list without ordering",
        "E": "Circular buffer only",
        "F": "Heap (Min-Heap or Max-Heap)"
      },
      "answer": "F",
      "explanation": "Binary heaps provide optimal O(log n) insertions and O(log n) extractions of the extreme priority element, making them the standard choice for priority queues."
    },
    {
      "id": 89,
      "subtopic": "Queues",
      "question": "Which classic graph traversal algorithm uses a queue to explore nodes level by level?",
      "options": {
        "A": "Merge Sort",
        "B": "Kruskal's Algorithm",
        "C": "Depth-First Search (DFS)",
        "D": "Binary Search",
        "E": "Dijkstra's Algorithm using a stack",
        "F": "Breadth-First Search (BFS)"
      },
      "answer": "F",
      "explanation": "Breadth-First Search (BFS) enqueues adjacent neighboring vertices to visit all nodes at distance k before moving to distance k + 1."
    },
    {
      "id": 90,
      "subtopic": "Queues",
      "question": "What happens when you try to enqueue an element into a queue that has reached its maximum capacity (fixed-size implementation)?",
      "options": {
        "A": "Nothing happens",
        "B": "Queue Overflow",
        "C": "Queue Underflow",
        "D": "Silent data loss with no error",
        "E": "Automatic resizing always",
        "F": "Segmentation fault always"
      },
      "answer": "B",
      "explanation": "Adding an element to a full, bounded queue triggers a Queue Overflow condition."
    },
    {
      "id": 91,
      "subtopic": "Queues",
      "question": "What happens when you try to dequeue an element from an empty queue?",
      "options": {
        "A": "Automatic resizing",
        "B": "Segmentation fault always",
        "C": "It returns zero silently",
        "D": "Queue Overflow",
        "E": "Nothing happens",
        "F": "Queue Underflow"
      },
      "answer": "F",
      "explanation": "Attempting to dequeue from an empty queue generates a Queue Underflow error."
    },
    {
      "id": 92,
      "subtopic": "Queues",
      "question": "Which of these is a common real-world application of a queue data structure?",
      "options": {
        "A": "Depth-first traversal",
        "B": "Balanced parentheses checking",
        "C": "Function call management",
        "D": "Undo/redo functionality in an editor",
        "E": "CPU task scheduling or a print job queue, processed in arrival order",
        "F": "Expression evaluation"
      },
      "answer": "E",
      "explanation": "Print spoolers and operating system task schedulers use FIFO queues to service jobs in the exact order received."
    },
    {
      "id": 93,
      "subtopic": "Queues",
      "question": "What is the main advantage of a circular queue over a simple linear queue implemented with an array?",
      "options": {
        "A": "It efficiently reuses freed space at the front, avoiding wasted array slots",
        "B": "It eliminates the need for a front pointer",
        "C": "It automatically sorts elements",
        "D": "It allows LIFO order instead of FIFO",
        "E": "It removes the need for a rear pointer",
        "F": "It only works with linked lists"
      },
      "answer": "A",
      "explanation": "In linear array queues, dequeuing creates unusable 'dead space' at earlier indices; circular queues reclaim those slots by wrapping pointers."
    },
    {
      "id": 94,
      "subtopic": "Queues",
      "question": "What is the typical space complexity of a queue holding n elements?",
      "options": {
        "A": "O(n^2)",
        "B": "O(n)",
        "C": "O(sqrt n)",
        "D": "O(log n)",
        "E": "O(1)",
        "F": "O(n log n)"
      },
      "answer": "B",
      "explanation": "A queue storing n elements requires O(n) memory proportional to the number of stored items."
    },
    {
      "id": 95,
      "subtopic": "Queues",
      "question": "Which algorithm for finding the shortest path in an unweighted graph relies fundamentally on a queue-based BFS traversal?",
      "options": {
        "A": "Depth-First Search Shortest Path",
        "B": "Prim's Algorithm (MST)",
        "C": "Bellman-Ford Algorithm (weighted)",
        "D": "Kruskal's Algorithm (MST)",
        "E": "BFS-based Shortest Path Algorithm",
        "F": "Dijkstra's Algorithm (weighted)"
      },
      "answer": "E",
      "explanation": "In unweighted graphs, BFS guarantees discovery of the shortest path (minimum edge count) because it visits vertices in order of increasing distance."
    },
    {
      "id": 96,
      "subtopic": "Queues",
      "question": "In operating systems, which queue-based scheduling approach gives each process a fixed time slice in a cyclic order?",
      "options": {
        "A": "Shortest Job First only",
        "B": "Round-Robin Scheduling",
        "C": "Random Scheduling",
        "D": "First-Come-First-Served only",
        "E": "Priority Scheduling only",
        "F": "LIFO Scheduling"
      },
      "answer": "B",
      "explanation": "Round-Robin scheduling places runnable tasks in a circular FIFO queue and executes each process for a predefined quantum before rotating it to the back."
    },
    {
      "id": 97,
      "subtopic": "Queues",
      "question": "Which data structure combination can be used to implement a queue using two stacks?",
      "options": {
        "A": "Two Stacks (each used to simulate queue behavior)",
        "B": "A single array only",
        "C": "A binary tree",
        "D": "A single linked list only",
        "E": "A hash table",
        "F": "A graph"
      },
      "answer": "A",
      "explanation": "One stack handles incoming pushes (inStack), while elements are transferred to the second stack (outStack) to reverse order and achieve FIFO popping."
    },
    {
      "id": 98,
      "subtopic": "Queues",
      "question": "What is a Deque commonly used for that a simple queue cannot efficiently support?",
      "options": {
        "A": "Only single-ended access",
        "B": "Only LIFO operations",
        "C": "Insertion and deletion from both ends (e.g., a sliding window maximum)",
        "D": "Only insertion at the rear",
        "E": "Only deletion at the front",
        "F": "Only priority-based operations"
      },
      "answer": "C",
      "explanation": "Deques support O(1) push and pop at both boundaries, which is essential for algorithms like the monotonic sliding window maximum."
    },
    {
      "id": 99,
      "subtopic": "Queues",
      "question": "Which of the following best describes a blocking queue, often used in multi-threaded producer-consumer scenarios?",
      "options": {
        "A": "A queue that only works with a single thread",
        "B": "A queue that makes threads wait when it's full (producers) or empty (consumers)",
        "C": "A queue with no size limit ever",
        "D": "A queue that automatically sorts elements",
        "E": "A queue exclusive to graph algorithms",
        "F": "A queue that never allows dequeue operations"
      },
      "answer": "B",
      "explanation": "A blocking queue suspends producer threads attempting to insert into a full buffer and suspends consumer threads attempting to extract from an empty buffer."
    },
    {
      "id": 100,
      "subtopic": "Queues",
      "question": "In a priority queue implemented with a min-heap, which element is always at the root and removed first?",
      "options": {
        "A": "The least recently inserted element",
        "B": "The middle element",
        "C": "The most recently inserted element",
        "D": "A randomly chosen element",
        "E": "The element with the smallest priority value",
        "F": "The element with the largest priority value"
      },
      "answer": "E",
      "explanation": "In a min-heap, every parent node is smaller than or equal to its children, keeping the smallest element at root index 0."
    },
    {
      "id": 101,
      "subtopic": "Trees & Heaps",
      "question": "What is a tree data structure primarily characterized by?",
      "options": {
        "A": "A structure with cycles",
        "B": "A LIFO structure",
        "C": "A FIFO structure",
        "D": "A hierarchical, non-linear structure with a root node and child nodes, and no cycles",
        "E": "A linear sequence of nodes",
        "F": "A fixed-size array"
      },
      "answer": "D",
      "explanation": "A tree is an acyclic connected hierarchical graph consisting of a root node and subtrees of child nodes."
    },
    {
      "id": 102,
      "subtopic": "Trees & Heaps",
      "question": "In a binary tree, what is the maximum number of children a single node can have?",
      "options": {
        "A": "2",
        "B": "4",
        "C": "0",
        "D": "1",
        "E": "3",
        "F": "Unlimited"
      },
      "answer": "A",
      "explanation": "By definition, every node in a binary tree has at most two children (conventionally labeled left and right)."
    },
    {
      "id": 103,
      "subtopic": "Trees & Heaps",
      "question": "Which tree traversal visits the left subtree, then the root, then the right subtree?",
      "options": {
        "A": "Postorder Traversal",
        "B": "Reverse-order Traversal",
        "C": "Root-first Traversal",
        "D": "Preorder Traversal",
        "E": "Level-order Traversal",
        "F": "Inorder Traversal"
      },
      "answer": "F",
      "explanation": "Inorder traversal follows the recursive order: Left Subtree -> Root Node -> Right Subtree (visiting nodes in ascending order in a BST)."
    },
    {
      "id": 104,
      "subtopic": "Trees & Heaps",
      "question": "Which tree traversal visits the root first, then the left subtree, then the right subtree?",
      "options": {
        "A": "Reverse-order Traversal",
        "B": "Root-last Traversal",
        "C": "Inorder Traversal",
        "D": "Postorder Traversal",
        "E": "Preorder Traversal",
        "F": "Level-order Traversal"
      },
      "answer": "E",
      "explanation": "Preorder traversal processes the current Root node first, followed by the Left subtree, and finally the Right subtree."
    },
    {
      "id": 105,
      "subtopic": "Trees & Heaps",
      "question": "Which tree traversal visits the left subtree, then the right subtree, then the root?",
      "options": {
        "A": "Root-first Traversal",
        "B": "Level-order Traversal",
        "C": "Postorder Traversal",
        "D": "Preorder Traversal",
        "E": "Inorder Traversal",
        "F": "Reverse-order Traversal"
      },
      "answer": "C",
      "explanation": "Postorder traversal visits the Left subtree, then the Right subtree, and concludes with the Root node (ideal for tree deletion/destruction)."
    },
    {
      "id": 106,
      "subtopic": "Trees & Heaps",
      "question": "Which tree traversal visits nodes level by level, typically implemented using a queue (BFS)?",
      "options": {
        "A": "Reverse-order Traversal",
        "B": "Postorder Traversal",
        "C": "Level-order Traversal",
        "D": "DFS-only Traversal",
        "E": "Preorder Traversal",
        "F": "Inorder Traversal"
      },
      "answer": "C",
      "explanation": "Level-order traversal visits nodes horizontally top-to-bottom and left-to-right using a breadth-first queue."
    },
    {
      "id": 107,
      "subtopic": "Trees & Heaps",
      "question": "In a Binary Search Tree (BST), for any node, where are values smaller than the node's value located?",
      "options": {
        "A": "In both subtrees equally",
        "B": "In a separate structure",
        "C": "In the right subtree",
        "D": "Randomly placed",
        "E": "In the left subtree",
        "F": "At the root only"
      },
      "answer": "E",
      "explanation": "The BST invariant dictates that all nodes in a node's left subtree must have keys smaller than the node's key."
    },
    {
      "id": 108,
      "subtopic": "Trees & Heaps",
      "question": "What is the average time complexity of search, insert, and delete operations in a balanced BST?",
      "options": {
        "A": "O(1)",
        "B": "O(2^n)",
        "C": "O(n^2)",
        "D": "O(log n)",
        "E": "O(n log n)",
        "F": "O(n)"
      },
      "answer": "D",
      "explanation": "A balanced BST maintains height h ≈ log2(n), ensuring lookup, insertion, and deletion all run in O(log n) time."
    },
    {
      "id": 109,
      "subtopic": "Trees & Heaps",
      "question": "What is the worst-case time complexity of search in an unbalanced BST that has degenerated into a linked-list-like shape?",
      "options": {
        "A": "O(n log n)",
        "B": "O(sqrt n)",
        "C": "O(1)",
        "D": "O(n^2)",
        "E": "O(log n)",
        "F": "O(n)"
      },
      "answer": "F",
      "explanation": "Inserting already-sorted data into a naive BST forms a degenerate skewed tree (chain) of height n, degrading search to linear O(n)."
    },
    {
      "id": 110,
      "subtopic": "Trees & Heaps",
      "question": "Which self-balancing binary search tree maintains O(log n) height automatically using rotations after every insertion/deletion?",
      "options": {
        "A": "A stack",
        "B": "A simple array",
        "C": "A plain, unbalanced BST",
        "D": "A linked list",
        "E": "AVL Tree (or Red-Black Tree)",
        "F": "A hash table"
      },
      "answer": "E",
      "explanation": "Self-balancing search trees (AVL Trees and Red-Black Trees) perform tree rotations upon node mutations to keep tree height bounded to O(log n)."
    },
    {
      "id": 111,
      "subtopic": "Trees & Heaps",
      "question": "What key property does a Red-Black Tree maintain to ensure the tree stays approximately balanced?",
      "options": {
        "A": "No specific structural rules",
        "B": "A fixed number of nodes",
        "C": "Strict equal height on every subtree with no exceptions",
        "D": "Alphabetical ordering of node values only",
        "E": "Random node placement",
        "F": "Specific coloring rules (red/black) on nodes that limit the maximum path length relative to the minimum"
      },
      "answer": "F",
      "explanation": "By enforcing rules (root is black, no two consecutive red nodes, equal black-height), Red-Black trees guarantee the longest path is at most twice the shortest."
    },
    {
      "id": 112,
      "subtopic": "Trees & Heaps",
      "question": "What is a common real-world/database use case for B-Trees and B+ Trees?",
      "options": {
        "A": "Implementing a circular queue",
        "B": "Indexing large datasets on disk, such as in database indexes and file systems",
        "C": "Implementing bubble sort",
        "D": "Implementing a simple stack",
        "E": "Implementing a hash function",
        "F": "Implementing an undo feature in a text editor"
      },
      "answer": "B",
      "explanation": "B-Trees and B+ Trees have broad branching factors, minimizing expensive disk I/O seek operations when indexing relational databases and OS file systems."
    },
    {
      "id": 113,
      "subtopic": "Trees & Heaps",
      "question": "What key difference distinguishes a B+ Tree from a B-Tree?",
      "options": {
        "A": "A B+ Tree never has more than 2 children per node",
        "B": "They are identical with no differences",
        "C": "A B-Tree only stores data in the root",
        "D": "A B+ Tree cannot be used for indexing",
        "E": "A B-Tree always has fewer nodes than a B+ Tree",
        "F": "In a B+ Tree, all actual data is stored only in leaf nodes, with leaves linked for fast range queries"
      },
      "answer": "F",
      "explanation": "B+ trees store record pointers exclusively in leaf nodes and link adjacent leaves sequentially, enabling rapid range scans and maximum index fanout."
    },
    {
      "id": 114,
      "subtopic": "Trees & Heaps",
      "question": "What data structure is a Trie (prefix tree) primarily optimized for?",
      "options": {
        "A": "Efficient numeric range queries",
        "B": "Efficient LIFO operations",
        "C": "Efficient graph shortest-path computation",
        "D": "Efficiently storing and searching strings, especially by common prefixes (e.g., autocomplete)",
        "E": "Efficient matrix multiplication",
        "F": "Efficient FIFO operations"
      },
      "answer": "D",
      "explanation": "A Trie stores strings character by character across paths, sharing common prefixes to provide O(L) search, insertion, and autocomplete operations."
    },
    {
      "id": 115,
      "subtopic": "Trees & Heaps",
      "question": "What is the defining property of a Min-Heap?",
      "options": {
        "A": "The left child is always smaller than the right child, with no other rule",
        "B": "Every parent node's value is greater than or equal to its children's values",
        "C": "It must be a perfect binary search tree",
        "D": "It has no structural rules at all",
        "E": "Every node has exactly one child",
        "F": "Every parent node's value is less than or equal to its children's values"
      },
      "answer": "F",
      "explanation": "The min-heap property requires that `parent <= child` for every node, placing the global minimum at the root."
    },
    {
      "id": 116,
      "subtopic": "Trees & Heaps",
      "question": "What is the time complexity of extracting the minimum (root) element from a Min-Heap and restoring heap order?",
      "options": {
        "A": "O(1)",
        "B": "O(sqrt n)",
        "C": "O(n)",
        "D": "O(n log n)",
        "E": "O(n^2)",
        "F": "O(log n)"
      },
      "answer": "F",
      "explanation": "Removing the root and sifting down the replacement leaf through heap height takes O(log n) time."
    },
    {
      "id": 117,
      "subtopic": "Trees & Heaps",
      "question": "Which sorting algorithm builds a heap from the input data and repeatedly extracts the max/min element to produce a sorted array?",
      "options": {
        "A": "Insertion Sort",
        "B": "Quick Sort",
        "C": "Bubble Sort",
        "D": "Merge Sort",
        "E": "Heap Sort",
        "F": "Counting Sort"
      },
      "answer": "E",
      "explanation": "Heap Sort constructs a max-heap in O(n) and repeatedly swaps the root with the end element, re-heapifying in O(n log n) total time."
    },
    {
      "id": 118,
      "subtopic": "Trees & Heaps",
      "question": "What is a Segment Tree primarily used for?",
      "options": {
        "A": "Efficiently sorting strings alphabetically",
        "B": "Representing graphs with weighted edges",
        "C": "Storing hash table collisions",
        "D": "Compressing text data",
        "E": "Balancing binary search trees automatically",
        "F": "Efficiently answering range queries (sum, min, max) and updates over an array in O(log n)"
      },
      "answer": "F",
      "explanation": "A segment tree stores aggregated interval information, permitting logarithmic range queries and point updates in O(log n)."
    },
    {
      "id": 119,
      "subtopic": "Trees & Heaps",
      "question": "What is a Fenwick Tree (Binary Indexed Tree) primarily used for?",
      "options": {
        "A": "Efficient hash collision resolution",
        "B": "Efficient string pattern matching",
        "C": "Efficient graph coloring",
        "D": "Efficient prefix sum queries and updates in O(log n)",
        "E": "Efficient stack operations",
        "F": "Efficient queue operations"
      },
      "answer": "D",
      "explanation": "A Binary Indexed Tree (BIT) uses bit manipulation on powers of two to compute prefix sums and perform array updates in O(log n) with minimal memory overhead."
    },
    {
      "id": 120,
      "subtopic": "Trees & Heaps",
      "question": "What does it mean for a binary tree to be 'complete'?",
      "options": {
        "A": "Every node has exactly two children with no exceptions",
        "B": "The tree is always balanced with equal subtree heights",
        "C": "The tree has only a root node",
        "D": "The tree is sorted like a BST",
        "E": "All levels are fully filled except possibly the last, which is filled left to right",
        "F": "The tree has no leaf nodes"
      },
      "answer": "E",
      "explanation": "A complete binary tree has every depth level completely saturated except potentially the final level, where all leaf nodes are packed as far left as possible."
    },
    {
      "id": 121,
      "subtopic": "Graphs",
      "question": "A graph data structure consists primarily of which two components?",
      "options": {
        "A": "Keys and values only",
        "B": "Vertices (nodes) and edges (connections between them)",
        "C": "Heads and tails only",
        "D": "Roots and leaves only",
        "E": "Parents and children only",
        "F": "Rows and columns only"
      },
      "answer": "B",
      "explanation": "A graph G = (V, E) is fundamentally composed of a set of vertices (V) and a set of edges (E) linking vertex pairs."
    },
    {
      "id": 122,
      "subtopic": "Graphs",
      "question": "Which graph representation uses a 2D matrix where cell [i][j] indicates whether an edge exists between vertex i and vertex j?",
      "options": {
        "A": "Adjacency List",
        "B": "Path Matrix",
        "C": "Degree Sequence",
        "D": "Adjacency Matrix",
        "E": "Edge List only",
        "F": "Incidence Matrix only"
      },
      "answer": "D",
      "explanation": "An adjacency matrix is a V x V grid where matrix[i][j] holds edge weights or 1/0 flags denoting adjacency."
    },
    {
      "id": 123,
      "subtopic": "Graphs",
      "question": "Which graph representation stores, for each vertex, a list of its directly connected neighboring vertices?",
      "options": {
        "A": "Path List",
        "B": "Edge Matrix",
        "C": "Incidence List only",
        "D": "Adjacency Matrix",
        "E": "Degree List",
        "F": "Adjacency List"
      },
      "answer": "F",
      "explanation": "An adjacency list maintains an array/map of lists where each vertex index references a list containing only its adjacent incident neighbors."
    },
    {
      "id": 124,
      "subtopic": "Graphs",
      "question": "Which graph traversal algorithm explores as deep as possible along each branch before backtracking, typically using a stack or recursion?",
      "options": {
        "A": "Prim's Algorithm",
        "B": "Kruskal's Algorithm",
        "C": "Depth-First Search (DFS)",
        "D": "Breadth-First Search (BFS)",
        "E": "Dijkstra's Algorithm",
        "F": "Bellman-Ford Algorithm"
      },
      "answer": "C",
      "explanation": "Depth-First Search (DFS) proceeds along unvisited edges until a dead end is encountered, then backtracks along the active search path."
    },
    {
      "id": 125,
      "subtopic": "Graphs",
      "question": "Which graph traversal algorithm explores all neighbors at the current depth before moving deeper, typically using a queue?",
      "options": {
        "A": "Depth-First Search (DFS)",
        "B": "Bellman-Ford Algorithm",
        "C": "Prim's Algorithm",
        "D": "Dijkstra's Algorithm",
        "E": "Kruskal's Algorithm",
        "F": "Breadth-First Search (BFS)"
      },
      "answer": "F",
      "explanation": "Breadth-First Search (BFS) processes all vertices at distance d before investigating vertices at distance d + 1 using a FIFO queue."
    },
    {
      "id": 126,
      "subtopic": "Graphs",
      "question": "Which shortest-path algorithm works efficiently on graphs with non-negative edge weights using a greedy, priority-queue-based approach?",
      "options": {
        "A": "Dijkstra's Algorithm",
        "B": "Floyd-Warshall Algorithm",
        "C": "Prim's Algorithm",
        "D": "Kruskal's Algorithm",
        "E": "Bellman-Ford Algorithm",
        "F": "DFS-based shortest path"
      },
      "answer": "A",
      "explanation": "Dijkstra's algorithm greedily extracts the unvisited vertex with the minimum tentative distance using a priority queue in O((V + E) log V) time."
    },
    {
      "id": 127,
      "subtopic": "Graphs",
      "question": "Which shortest-path algorithm can correctly handle graphs with negative edge weights and also detect negative weight cycles?",
      "options": {
        "A": "Dijkstra's Algorithm",
        "B": "Kruskal's Algorithm",
        "C": "Bellman-Ford Algorithm",
        "D": "BFS shortest path",
        "E": "A* Algorithm only",
        "F": "Prim's Algorithm"
      },
      "answer": "C",
      "explanation": "Bellman-Ford relaxes all edges V - 1 times, correctly computing shortest paths with negative weights and flagging negative-weight cycles."
    },
    {
      "id": 128,
      "subtopic": "Graphs",
      "question": "Which algorithm computes the shortest paths between all pairs of vertices in a weighted graph?",
      "options": {
        "A": "BFS",
        "B": "Dijkstra's Algorithm (single-source only)",
        "C": "Prim's Algorithm",
        "D": "Kruskal's Algorithm",
        "E": "Floyd-Warshall Algorithm",
        "F": "Bellman-Ford Algorithm (single-source only)"
      },
      "answer": "E",
      "explanation": "The Floyd-Warshall dynamic programming algorithm evaluates all pairs of vertices via intermediate nodes in O(V^3) time."
    },
    {
      "id": 129,
      "subtopic": "Graphs",
      "question": "Which MST algorithm always adds the smallest edge that doesn't form a cycle, typically using a Union-Find structure?",
      "options": {
        "A": "Floyd-Warshall Algorithm",
        "B": "Dijkstra's Algorithm",
        "C": "Prim's Algorithm (grows from a single vertex)",
        "D": "DFS",
        "E": "Kruskal's Algorithm",
        "F": "Bellman-Ford Algorithm"
      },
      "answer": "E",
      "explanation": "Kruskal's algorithm sorts all edges by weight and uses Disjoint Set Union (DSU) to connect components without generating cycles."
    },
    {
      "id": 130,
      "subtopic": "Graphs",
      "question": "Which MST algorithm starts from an arbitrary vertex and greedily grows the tree by adding the cheapest connecting edge?",
      "options": {
        "A": "Floyd-Warshall Algorithm",
        "B": "Bellman-Ford Algorithm",
        "C": "Dijkstra's Algorithm",
        "D": "Prim's Algorithm",
        "E": "BFS",
        "F": "Kruskal's Algorithm (edge-based, uses Union-Find)"
      },
      "answer": "D",
      "explanation": "Prim's algorithm initializes from a single source node and repeatedly expands the frontier by selecting the minimum-weight incident edge."
    },
    {
      "id": 131,
      "subtopic": "Graphs",
      "question": "What is a Minimum Spanning Tree (MST) of a connected, weighted graph?",
      "options": {
        "A": "A tree with the maximum total edge weight",
        "B": "A subset of edges connecting all vertices with the minimum possible total edge weight and no cycles",
        "C": "A matrix representation of the graph",
        "D": "A cycle covering all edges",
        "E": "A subgraph with only two vertices",
        "F": "A path visiting every vertex exactly once"
      },
      "answer": "B",
      "explanation": "An MST is an acyclic spanning subgraph that connects all V vertices using exactly V - 1 edges with the smallest possible sum of edge weights."
    },
    {
      "id": 132,
      "subtopic": "Graphs",
      "question": "What does topological sorting produce for a Directed Acyclic Graph (DAG)?",
      "options": {
        "A": "A cycle detection result only",
        "B": "A random ordering of vertices",
        "C": "A linear ordering of vertices such that for every directed edge u→v, u comes before v",
        "D": "A sorted list of edge weights",
        "E": "A minimum spanning tree",
        "F": "An adjacency matrix"
      },
      "answer": "C",
      "explanation": "Topological sorting sequences vertices of a DAG linearly such that every directed edge u -> v places u before v, representing valid task dependency orderings."
    },
    {
      "id": 133,
      "subtopic": "Graphs",
      "question": "Which data structure is commonly used to efficiently detect cycles and manage connected components, especially in Kruskal's algorithm?",
      "options": {
        "A": "Simple Stack",
        "B": "Union-Find (Disjoint Set Union, DSU)",
        "C": "Trie",
        "D": "Hash Table only",
        "E": "Simple Queue",
        "F": "Priority Queue"
      },
      "answer": "B",
      "explanation": "DSU supports near constant time `find()` and `union()` operations (using path compression and union by rank) to check whether two vertices belong to the same component."
    },
    {
      "id": 134,
      "subtopic": "Graphs",
      "question": "What is the time complexity of BFS or DFS traversal on a graph with V vertices and E edges, using an adjacency list?",
      "options": {
        "A": "O(log V)",
        "B": "O(1)",
        "C": "O(V^2)",
        "D": "O(E^2)",
        "E": "O(V + E)",
        "F": "O(V * E)"
      },
      "answer": "E",
      "explanation": "Traversing an adjacency list inspects each vertex once and checks each incident edge once (or twice in undirected graphs), achieving O(V + E) time."
    },
    {
      "id": 135,
      "subtopic": "Graphs",
      "question": "What does it mean for a graph to be 'directed'?",
      "options": {
        "A": "Its edges have a specific direction, indicating one-way relationships between vertices",
        "B": "The graph has a fixed number of vertices",
        "C": "The graph cannot have cycles",
        "D": "All edges are bidirectional by default",
        "E": "The graph has no edges",
        "F": "The graph must be a tree"
      },
      "answer": "A",
      "explanation": "In a directed graph (digraph), edges are ordered pairs (u, v) representing unidirectional navigation from u to v."
    },
    {
      "id": 136,
      "subtopic": "Graphs",
      "question": "What does it mean for a graph to be 'weighted'?",
      "options": {
        "A": "The graph must be undirected",
        "B": "The graph must be acyclic",
        "C": "Each vertex has a numeric label only",
        "D": "Each edge has an associated numeric value (cost/weight/distance)",
        "E": "All edges must have the same value",
        "F": "The graph has no edges"
      },
      "answer": "D",
      "explanation": "A weighted graph assigns a real number (cost, capacity, length) to each edge."
    },
    {
      "id": 137,
      "subtopic": "Graphs",
      "question": "What is a connected component in an undirected graph?",
      "options": {
        "A": "A single isolated vertex only",
        "B": "A spanning tree of the graph",
        "C": "A maximal subgraph in which every pair of vertices is connected via some path",
        "D": "A cycle in the graph",
        "E": "An edge list only",
        "F": "The entire graph with all edges removed"
      },
      "answer": "C",
      "explanation": "A connected component is a maximal set of vertices such that there exists a valid path between any two vertices in the set."
    },
    {
      "id": 138,
      "subtopic": "Graphs",
      "question": "Which technique is commonly used to detect a cycle in a directed graph, typically using recursion and a 'visiting' state?",
      "options": {
        "A": "Dijkstra's Algorithm",
        "B": "Prim's Algorithm",
        "C": "BFS only, without any marking",
        "D": "Kruskal's Algorithm",
        "E": "DFS with color-marking (white/gray/black) or a recursion stack check",
        "F": "Bellman-Ford Algorithm exclusively"
      },
      "answer": "E",
      "explanation": "A directed graph contains a cycle if and only if a DFS traversal encounters a 'back-edge' pointing to a vertex currently active in the recursion stack (gray node)."
    },
    {
      "id": 139,
      "subtopic": "Graphs",
      "question": "What is a bipartite graph?",
      "options": {
        "A": "A graph with exactly two vertices",
        "B": "A weighted graph with two weights per edge",
        "C": "A graph with exactly two edges",
        "D": "A graph with two connected components only",
        "E": "A tree with two roots",
        "F": "A graph whose vertices can be divided into two disjoint sets such that every edge connects vertices from different sets"
      },
      "answer": "F",
      "explanation": "A graph is bipartite (2-colorable) if its vertices can be partitioned into sets U and V such that every edge has one endpoint in U and the other in V."
    },
    {
      "id": 140,
      "subtopic": "Graphs",
      "question": "Which graph search algorithm, an extension of Dijkstra's, uses a heuristic function to more efficiently find the shortest path toward a specific goal node?",
      "options": {
        "A": "Prim's Algorithm",
        "B": "Bellman-Ford Algorithm",
        "C": "A* (A-Star) Algorithm",
        "D": "Plain BFS",
        "E": "Kruskal's Algorithm",
        "F": "Floyd-Warshall Algorithm"
      },
      "answer": "C",
      "explanation": "The A* algorithm guides shortest-path discovery using f(n) = g(n) + h(n), where g(n) is the exact cost from start and h(n) is an admissible heuristic estimate to the goal."
    },
    {
      "id": 141,
      "subtopic": "Hashing",
      "question": "What is a hash table primarily designed to provide?",
      "options": {
        "A": "Guaranteed O(1) time complexity even in the worst case, always",
        "B": "A LIFO access pattern",
        "C": "O(log n) time complexity always",
        "D": "Sorted order traversal of elements",
        "E": "A FIFO access pattern",
        "F": "Average O(1) time complexity for insertion, deletion, and lookup using key-value pairs"
      },
      "answer": "F",
      "explanation": "Hash tables map unique keys to values using hash functions, achieving expected constant time O(1) for common dictionary operations."
    },
    {
      "id": 142,
      "subtopic": "Hashing",
      "question": "What is a hash function primarily responsible for?",
      "options": {
        "A": "Converting a key into an index (hash code) used to locate a value in the hash table",
        "B": "Compressing files",
        "C": "Encrypting data permanently",
        "D": "Balancing a binary search tree",
        "E": "Comparing two hash tables for equality",
        "F": "Sorting elements in ascending order"
      },
      "answer": "A",
      "explanation": "A hash function computes a numerical hash code from an arbitrary key and bounds it to an index within the table's bucket array."
    },
    {
      "id": 143,
      "subtopic": "Hashing",
      "question": "What is a hash collision?",
      "options": {
        "A": "When a hash function returns a negative number",
        "B": "When the hash table is resized",
        "C": "When two different keys produce the same hash value/index in a hash table",
        "D": "When two hash tables merge",
        "E": "When a key is deleted incorrectly",
        "F": "When a hash table becomes completely full"
      },
      "answer": "C",
      "explanation": "A collision occurs when distinct keys k1 ≠ k2 evaluate to the exact same bucket slot index."
    },
    {
      "id": 144,
      "subtopic": "Hashing",
      "question": "Which collision resolution technique stores multiple colliding elements in a linked list (or similar structure) at the same index?",
      "options": {
        "A": "Double Hashing (a distinct standalone term)",
        "B": "Separate Chaining",
        "C": "Linear Probing (a distinct standalone term)",
        "D": "Open Addressing",
        "E": "Cuckoo Hashing exclusively",
        "F": "Perfect Hashing"
      },
      "answer": "B",
      "explanation": "Separate chaining handles collisions by maintaining an auxiliary chain (such as a linked list or red-black tree) at each bucket index."
    },
    {
      "id": 145,
      "subtopic": "Hashing",
      "question": "Which collision resolution technique searches for the next available slot within the hash table itself when a collision occurs?",
      "options": {
        "A": "Separate Chaining",
        "B": "Graph-based Resolution",
        "C": "External Chaining",
        "D": "Tree Chaining",
        "E": "Bucket Linking",
        "F": "Open Addressing"
      },
      "answer": "F",
      "explanation": "In open addressing, all entries reside directly inside the table array; colliding keys systematically probe alternate empty slots."
    },
    {
      "id": 146,
      "subtopic": "Hashing",
      "question": "Which open addressing technique searches sequentially for the next available slot in a fixed direction (e.g., i+1, i+2, ...)?",
      "options": {
        "A": "Quadratic Probing",
        "B": "Cuckoo Hashing",
        "C": "Linear Probing",
        "D": "Separate Chaining",
        "E": "Double Hashing",
        "F": "Robin Hood Hashing"
      },
      "answer": "C",
      "explanation": "Linear probing increments the probe sequence linearly `(hash(k) + i) % m` to inspect consecutive neighboring slots."
    },
    {
      "id": 147,
      "subtopic": "Hashing",
      "question": "Which open addressing technique searches for a slot using an increasing quadratic step size to reduce clustering?",
      "options": {
        "A": "Quadratic Probing",
        "B": "Separate Chaining",
        "C": "Robin Hood Hashing",
        "D": "Cuckoo Hashing",
        "E": "Double Hashing (a distinct technique)",
        "F": "Linear Probing"
      },
      "answer": "A",
      "explanation": "Quadratic probing offsets probes quadratically `(hash(k) + c1*i + c2*i^2) % m` to mitigate primary clustering."
    },
    {
      "id": 148,
      "subtopic": "Hashing",
      "question": "Which open addressing technique uses a second hash function to determine the probing step size, reducing clustering further?",
      "options": {
        "A": "Separate Chaining",
        "B": "Double Hashing",
        "C": "Linear Probing",
        "D": "Cuckoo Hashing",
        "E": "Robin Hood Hashing",
        "F": "Quadratic Probing"
      },
      "answer": "B",
      "explanation": "Double hashing computes probe step sizes via a secondary hash function `(hash1(k) + i * hash2(k)) % m`, minimizing both primary and secondary clustering."
    },
    {
      "id": 149,
      "subtopic": "Hashing",
      "question": "What is the 'load factor' of a hash table?",
      "options": {
        "A": "The maximum number of elements a hash table can ever store",
        "B": "The number of resize operations performed",
        "C": "The ratio of the number of stored elements to the total number of slots (buckets)",
        "D": "The size of each individual key",
        "E": "The number of collisions that have occurred",
        "F": "The number of hash functions used"
      },
      "answer": "C",
      "explanation": "Load factor α = n / m measures table saturation (number of stored entries n divided by total available buckets m)."
    },
    {
      "id": 150,
      "subtopic": "Hashing",
      "question": "What typically happens to a hash table's performance as its load factor approaches or exceeds a high threshold?",
      "options": {
        "A": "The table automatically becomes sorted",
        "B": "The hash function stops working entirely",
        "C": "Nothing changes at all",
        "D": "Performance degrades due to increased collisions, often triggering a resize/rehash",
        "E": "Performance always improves",
        "F": "All elements are deleted"
      },
      "answer": "D",
      "explanation": "As the table becomes crowded, collision chains lengthen and probing distances grow, degrading operations toward O(n)."
    },
    {
      "id": 151,
      "subtopic": "Hashing",
      "question": "What is 'rehashing' in the context of hash tables?",
      "options": {
        "A": "Creating a larger hash table and reinserting all existing elements using a new hash function/size",
        "B": "Sorting elements within the table",
        "C": "Encrypting all stored keys",
        "D": "Merging two separate hash tables into one",
        "E": "Deleting all elements without reinserting them",
        "F": "Converting the hash table into a binary tree"
      },
      "answer": "A",
      "explanation": "When load factor exceeds a threshold (e.g. 0.75), rehashing creates a larger table (usually double capacity) and recomputes bucket indices for all entries."
    },
    {
      "id": 152,
      "subtopic": "Hashing",
      "question": "Which data structure or concept is typically implemented directly using a hash table for O(1) average-time membership testing?",
      "options": {
        "A": "A Queue exclusively",
        "B": "A Balanced BST exclusively",
        "C": "A Set (or HashSet)",
        "D": "A Stack exclusively",
        "E": "A Sorted Array",
        "F": "A Linked List exclusively"
      },
      "answer": "C",
      "explanation": "A HashSet stores unique values as keys in an underlying hash table to deliver O(1) average time membership verification."
    },
    {
      "id": 153,
      "subtopic": "Hashing",
      "question": "What is a common real-world application of hashing besides hash tables/maps?",
      "options": {
        "A": "Implementing a stack",
        "B": "Balancing a binary search tree",
        "C": "Implementing a queue",
        "D": "Password storage using cryptographic hash functions",
        "E": "Reversing a linked list",
        "F": "Sorting an array in ascending order"
      },
      "answer": "D",
      "explanation": "One-way cryptographic hash functions (such as SHA-256 or bcrypt) securely verify user credentials without storing raw plaintext passwords."
    },
    {
      "id": 154,
      "subtopic": "Hashing",
      "question": "What is 'clustering' in open addressing hash tables, and why is it undesirable?",
      "options": {
        "A": "A required step before rehashing",
        "B": "A way to sort hash table entries",
        "C": "Groups of adjacent occupied slots that form due to collisions, degrading probe efficiency",
        "D": "A technique used to speed up hash table resizing",
        "E": "A benefit that improves lookup speed",
        "F": "A method to encrypt hash values"
      },
      "answer": "C",
      "explanation": "Clustering refers to long contiguous blocks of occupied buckets that increase search and insertion times for subsequent keys."
    },
    {
      "id": 155,
      "subtopic": "Hashing",
      "question": "Which hashing approach guarantees O(1) worst-case lookup by using two hash functions and relocating existing entries on collision?",
      "options": {
        "A": "Cuckoo Hashing",
        "B": "Quadratic Probing",
        "C": "Standard Double Hashing",
        "D": "Linear Probing",
        "E": "Robin Hood Hashing exclusively",
        "F": "Separate Chaining"
      },
      "answer": "A",
      "explanation": "Cuckoo hashing ensures a key is located in one of exactly two potential bucket positions, guaranteeing constant O(1) worst-case lookup."
    },
    {
      "id": 156,
      "subtopic": "Hashing",
      "question": "What is a good property for a hash function to have in order to minimize collisions?",
      "options": {
        "A": "Producing outputs that grow with key length",
        "B": "Ignoring most of the key's information",
        "C": "Always producing the same output regardless of the input key",
        "D": "Only working with numeric keys",
        "E": "Uniformly distributing keys across the available hash table slots",
        "F": "Always producing sequential integer outputs"
      },
      "answer": "E",
      "explanation": "A high-quality hash function satisfies the Simple Uniform Hashing assumption, scattering keys evenly across all buckets."
    },
    {
      "id": 157,
      "subtopic": "Hashing",
      "question": "What is the average time complexity of insertion, deletion, and search in a well-implemented hash table with a low load factor?",
      "options": {
        "A": "O(log n)",
        "B": "O(n^2)",
        "C": "O(1)",
        "D": "O(sqrt n)",
        "E": "O(n log n)",
        "F": "O(n)"
      },
      "answer": "C",
      "explanation": "When properly sized with minimal collisions, hash tables complete lookups, inserts, and deletes in expected constant time O(1)."
    },
    {
      "id": 158,
      "subtopic": "Hashing",
      "question": "In the worst case, such as with many collisions or a poor hash function, what can hash table operation time complexity degrade to?",
      "options": {
        "A": "O(n), similar to searching a linked list",
        "B": "O(1) is guaranteed by design in every implementation",
        "C": "O(log n) always",
        "D": "It becomes undefined",
        "E": "O(n^2) always",
        "F": "O(1) always, regardless of collisions"
      },
      "answer": "A",
      "explanation": "If every key hashes into the exact same bucket, operations degenerate into searching a single linear chain of size n in O(n) time."
    },
    {
      "id": 159,
      "subtopic": "Hashing",
      "question": "What distinguishes a HashMap's key-value storage from a HashSet, conceptually?",
      "options": {
        "A": "A HashMap can only store numeric keys",
        "B": "They are functionally identical with no distinction",
        "C": "A HashSet requires a value for every key too",
        "D": "A HashMap associates each key with a value, while a HashSet only stores unique keys with no associated value",
        "E": "A HashSet can store duplicate keys, unlike a HashMap",
        "F": "A HashMap is always slower than a HashSet"
      },
      "answer": "D",
      "explanation": "A HashMap stores key-value pairs (k -> v), whereas a HashSet stores distinct elements (keys) alone without associated satellite values."
    },
    {
      "id": 160,
      "subtopic": "Hashing",
      "question": "Which of these is a typical use of a Bloom Filter, a probabilistic hashing-based data structure?",
      "options": {
        "A": "Guaranteeing 100% accurate membership testing with zero errors",
        "B": "Sorting large datasets efficiently",
        "C": "Efficiently testing whether an element is possibly in a set, with no false negatives but possible false positives",
        "D": "Replacing binary search trees entirely",
        "E": "Computing shortest paths in a graph",
        "F": "Storing key-value pairs with guaranteed uniqueness"
      },
      "answer": "C",
      "explanation": "A Bloom Filter uses a bit array and multiple hash functions to test set membership in O(k) time; it never yields false negatives, but may produce false positives."
    },
    {
      "id": 161,
      "subtopic": "Sorting Algorithms",
      "question": "Which simple sorting algorithm repeatedly swaps adjacent elements if they are in the wrong order, causing larger elements to 'bubble' to the end?",
      "options": {
        "A": "Insertion Sort",
        "B": "Bubble Sort",
        "C": "Selection Sort",
        "D": "Heap Sort",
        "E": "Quick Sort",
        "F": "Merge Sort"
      },
      "answer": "B",
      "explanation": "Bubble Sort steps through an array repeatedly swapping misordered adjacent pairs until the largest elements float to the end."
    },
    {
      "id": 162,
      "subtopic": "Sorting Algorithms",
      "question": "Which sorting algorithm repeatedly selects the minimum (or maximum) element from the unsorted part and moves it to the sorted part?",
      "options": {
        "A": "Merge Sort",
        "B": "Insertion Sort",
        "C": "Heap Sort",
        "D": "Quick Sort",
        "E": "Bubble Sort",
        "F": "Selection Sort"
      },
      "answer": "F",
      "explanation": "Selection Sort divides the list into sorted and unsorted segments, repeatedly scanning the unsorted segment to find the minimum and swapping it into place."
    },
    {
      "id": 163,
      "subtopic": "Sorting Algorithms",
      "question": "Which sorting algorithm builds the sorted array one element at a time by inserting each element into its correct position among already-sorted elements?",
      "options": {
        "A": "Selection Sort",
        "B": "Quick Sort",
        "C": "Bubble Sort",
        "D": "Insertion Sort",
        "E": "Merge Sort",
        "F": "Heap Sort"
      },
      "answer": "D",
      "explanation": "Insertion Sort takes elements one by one and inserts them into their appropriate position among already sorted elements, much like sorting playing cards in hand."
    },
    {
      "id": 164,
      "subtopic": "Sorting Algorithms",
      "question": "What is the average and worst-case time complexity of Bubble Sort, Selection Sort, and Insertion Sort?",
      "options": {
        "A": "O(log n)",
        "B": "O(2^n)",
        "C": "O(n)",
        "D": "O(1)",
        "E": "O(n log n)",
        "F": "O(n^2)"
      },
      "answer": "F",
      "explanation": "All three elementary comparison sorts employ nested loops that result in O(n^2) quadratic time complexity on arbitrary data."
    },
    {
      "id": 165,
      "subtopic": "Sorting Algorithms",
      "question": "Which sorting algorithm uses a divide-and-conquer approach, recursively splitting the array in half, sorting each half, and merging?",
      "options": {
        "A": "Merge Sort",
        "B": "Selection Sort",
        "C": "Insertion Sort",
        "D": "Quick Sort (partition-based, a different approach)",
        "E": "Bubble Sort",
        "F": "Counting Sort"
      },
      "answer": "A",
      "explanation": "Merge Sort recursively bisects the array into halves until singletons remain, then merges the sorted subarrays back together."
    },
    {
      "id": 166,
      "subtopic": "Sorting Algorithms",
      "question": "What is the time complexity of Merge Sort in the average, best, and worst cases?",
      "options": {
        "A": "O(n^2) in the worst case only",
        "B": "O(n) in all cases",
        "C": "O(n^2) in all cases",
        "D": "O(n log n) in all cases",
        "E": "O(log n) in all cases",
        "F": "O(1) in the best case"
      },
      "answer": "D",
      "explanation": "Because division is always balanced into two equal halves, Merge Sort operates in strict Θ(n log n) across best, average, and worst cases."
    },
    {
      "id": 167,
      "subtopic": "Sorting Algorithms",
      "question": "Which sorting algorithm selects a 'pivot' element and partitions the array so smaller elements are on one side and larger on the other, then recurses on each side?",
      "options": {
        "A": "Quick Sort",
        "B": "Radix Sort",
        "C": "Selection Sort",
        "D": "Merge Sort",
        "E": "Insertion Sort",
        "F": "Bubble Sort"
      },
      "answer": "A",
      "explanation": "Quick Sort partitions the array around a chosen pivot value such that left elements are <= pivot and right elements are >= pivot, recursing on both sides."
    },
    {
      "id": 168,
      "subtopic": "Sorting Algorithms",
      "question": "What is the worst-case time complexity of Quick Sort, which typically occurs with a poor pivot choice?",
      "options": {
        "A": "O(n)",
        "B": "O(2^n)",
        "C": "O(log n)",
        "D": "O(n^2)",
        "E": "O(1)",
        "F": "O(n log n)"
      },
      "answer": "D",
      "explanation": "When partitions are maximally unbalanced (e.g. sorted input with first/last element chosen as pivot), Quick Sort degrades to O(n^2)."
    },
    {
      "id": 169,
      "subtopic": "Sorting Algorithms",
      "question": "Which sorting algorithm builds a max-heap (or min-heap) from the data and repeatedly extracts the largest (or smallest) element?",
      "options": {
        "A": "Merge Sort",
        "B": "Heap Sort",
        "C": "Counting Sort",
        "D": "Insertion Sort",
        "E": "Quick Sort",
        "F": "Bubble Sort"
      },
      "answer": "B",
      "explanation": "Heap Sort utilizes a binary heap to extract the maximum element n times, placing each at the array end."
    },
    {
      "id": 170,
      "subtopic": "Sorting Algorithms",
      "question": "What is the time complexity of Heap Sort in the average and worst cases?",
      "options": {
        "A": "O(2^n)",
        "B": "O(n log n)",
        "C": "O(n)",
        "D": "O(n^2)",
        "E": "O(1)",
        "F": "O(log n)"
      },
      "answer": "B",
      "explanation": "Building the heap takes O(n) and each of the n extractions takes O(log n), producing an asymptotic upper bound of O(n log n) in all cases."
    },
    {
      "id": 171,
      "subtopic": "Sorting Algorithms",
      "question": "Which non-comparison-based sorting algorithm counts occurrences of each distinct value, working well for a small range of integers?",
      "options": {
        "A": "Radix Sort (digit-based, related but distinct)",
        "B": "Quick Sort",
        "C": "Heap Sort",
        "D": "Bucket Sort",
        "E": "Merge Sort",
        "F": "Counting Sort"
      },
      "answer": "F",
      "explanation": "Counting Sort tallies frequencies of keys in a small discrete integer range [0, k], placing elements in sorted order in O(n + k) time."
    },
    {
      "id": 172,
      "subtopic": "Sorting Algorithms",
      "question": "Which non-comparison-based sorting algorithm sorts numbers digit by digit, typically from least significant to most significant?",
      "options": {
        "A": "Bucket Sort",
        "B": "Heap Sort",
        "C": "Radix Sort",
        "D": "Quick Sort",
        "E": "Merge Sort",
        "F": "Counting Sort (value-based, not digit-based)"
      },
      "answer": "C",
      "explanation": "Radix Sort orders numbers by decomposing them into individual radix digits (often using stable Counting Sort as a subroutine) in O(d * (n + k)) time."
    },
    {
      "id": 173,
      "subtopic": "Sorting Algorithms",
      "question": "Which sorting algorithm distributes elements into a number of 'buckets', sorts each bucket individually, then concatenates the results?",
      "options": {
        "A": "Quick Sort",
        "B": "Heap Sort",
        "C": "Bucket Sort",
        "D": "Radix Sort",
        "E": "Merge Sort",
        "F": "Counting Sort"
      },
      "answer": "C",
      "explanation": "Bucket Sort partitions uniformly distributed data into discrete bucket intervals, independently sorts each bucket, and concatenates them."
    },
    {
      "id": 174,
      "subtopic": "Sorting Algorithms",
      "question": "Which sorting algorithm is considered 'stable', meaning equal elements retain their original relative order after sorting?",
      "options": {
        "A": "All comparison sorts are always stable by definition",
        "B": "None of these are ever stable",
        "C": "Quick Sort (typically unstable)",
        "D": "Selection Sort (typically unstable)",
        "E": "Heap Sort (typically unstable)",
        "F": "Merge Sort (typically implemented stably)"
      },
      "answer": "F",
      "explanation": "Merge Sort preserves the original relative ordering of equivalent keys when <= comparisons prioritize elements from the left subarray."
    },
    {
      "id": 175,
      "subtopic": "Sorting Algorithms",
      "question": "Which sorting algorithm is generally fastest in practice for large datasets due to good cache performance, despite an O(n^2) worst case?",
      "options": {
        "A": "Radix Sort (only for fixed-digit data)",
        "B": "Counting Sort (only for limited integer ranges)",
        "C": "Insertion Sort (best only for small/nearly sorted data)",
        "D": "Selection Sort",
        "E": "Quick Sort",
        "F": "Bubble Sort"
      },
      "answer": "E",
      "explanation": "Quick Sort possesses excellent spatial locality with in-place sequential memory scanning, maximizing CPU hardware cache efficiency."
    },
    {
      "id": 176,
      "subtopic": "Sorting Algorithms",
      "question": "Which sorting algorithm performs particularly well, close to O(n), on data that is already nearly sorted?",
      "options": {
        "A": "Selection Sort (unaffected)",
        "B": "Insertion Sort",
        "C": "Bucket Sort (depends on distribution, not sortedness)",
        "D": "Radix Sort (unaffected by sortedness)",
        "E": "Heap Sort (unaffected)",
        "F": "Quick Sort (generally unaffected positively)"
      },
      "answer": "B",
      "explanation": "When an array is already sorted or nearly sorted, Insertion Sort only needs a single comparison per element, finishing in O(n) linear time."
    },
    {
      "id": 177,
      "subtopic": "Sorting Algorithms",
      "question": "What is the space complexity of Merge Sort, due to its use of auxiliary arrays during merging?",
      "options": {
        "A": "O(n)",
        "B": "O(log n)",
        "C": "O(n log n)",
        "D": "O(sqrt n)",
        "E": "O(n^2)",
        "F": "O(1)"
      },
      "answer": "A",
      "explanation": "Standard array-based Merge Sort requires an auxiliary buffer of size O(n) to combine and merge sorted sublists."
    },
    {
      "id": 178,
      "subtopic": "Sorting Algorithms",
      "question": "What is the typical space complexity of an in-place Quick Sort implementation, aside from the recursion stack?",
      "options": {
        "A": "O(n) auxiliary space always",
        "B": "It cannot be implemented in-place",
        "C": "O(n^2) auxiliary space",
        "D": "A mandatory O(log n) extra array",
        "E": "O(n log n) auxiliary space",
        "F": "O(1) auxiliary space, excluding the recursion stack"
      },
      "answer": "F",
      "explanation": "In-place Quick Sort partitions the existing array directly using pointer swaps, requiring O(1) auxiliary data memory (plus O(log n) call stack space)."
    },
    {
      "id": 179,
      "subtopic": "Sorting Algorithms",
      "question": "Which sorting algorithm is most appropriate when the range of input values (k) is small compared to n, achieving O(n+k) time?",
      "options": {
        "A": "Selection Sort",
        "B": "Counting Sort",
        "C": "Merge Sort",
        "D": "Bubble Sort",
        "E": "Heap Sort",
        "F": "Quick Sort"
      },
      "answer": "B",
      "explanation": "Counting Sort achieves linear O(n + k) time when the key range k is small relative to array length n."
    },
    {
      "id": 180,
      "subtopic": "Sorting Algorithms",
      "question": "Which of these best explains why Quick Sort's worst-case behavior can often be avoided in practice?",
      "options": {
        "A": "Pivot choice has no effect on performance",
        "B": "Quick Sort is always O(n log n) regardless of pivot choice",
        "C": "Using a good pivot selection strategy (e.g., median-of-three or random pivot) reduces the chance of worst-case partitioning",
        "D": "Worst-case behavior cannot be avoided under any circumstances",
        "E": "Quick Sort has no worst case in theory",
        "F": "Only Merge Sort can avoid worst-case behavior"
      },
      "answer": "C",
      "explanation": "Selecting a randomized pivot or using the median-of-three heuristic prevents degenerate O(n^2) splits on pre-sorted or adversarial inputs."
    },
    {
      "id": 181,
      "subtopic": "Searching & Algorithmic Techniques",
      "question": "What is the time complexity of linear search on an unsorted array of n elements?",
      "options": {
        "A": "O(log n)",
        "B": "O(sqrt n)",
        "C": "O(n^2)",
        "D": "O(1)",
        "E": "O(n log n)",
        "F": "O(n)"
      },
      "answer": "F",
      "explanation": "Linear search checks elements one-by-one from index 0 to n - 1, requiring O(n) comparisons in the worst case."
    },
    {
      "id": 182,
      "subtopic": "Searching & Algorithmic Techniques",
      "question": "What is the time complexity of binary search on a sorted array of n elements?",
      "options": {
        "A": "O(n log n)",
        "B": "O(1)",
        "C": "O(n^2)",
        "D": "O(n)",
        "E": "O(log n)",
        "F": "O(sqrt n)"
      },
      "answer": "E",
      "explanation": "Binary search eliminates half the remaining elements with every step, running in O(log n) logarithmic time."
    },
    {
      "id": 183,
      "subtopic": "Searching & Algorithmic Techniques",
      "question": "What is a prerequisite for binary search to work correctly on an array?",
      "options": {
        "A": "The array must be unsorted",
        "B": "The array must be a linked list",
        "C": "The array must have an even number of elements",
        "D": "The array must be sorted",
        "E": "The array must contain only unique elements",
        "F": "The array must contain only integers"
      },
      "answer": "D",
      "explanation": "Binary search fundamentally depends on monotonic sorting order so that comparing against the midpoint guarantees which half contains the target."
    },
    {
      "id": 184,
      "subtopic": "Searching & Algorithmic Techniques",
      "question": "Which search algorithm divides the search interval into three parts instead of two, useful for unimodal functions?",
      "options": {
        "A": "Ternary Search",
        "B": "Interpolation Search",
        "C": "Jump Search",
        "D": "Exponential Search",
        "E": "Binary Search",
        "F": "Linear Search"
      },
      "answer": "A",
      "explanation": "Ternary search places two midpoints to divide the search space into thirds, widely used to find the extremum (maximum/minimum) of unimodal curves."
    },
    {
      "id": 185,
      "subtopic": "Searching & Algorithmic Techniques",
      "question": "Which search algorithm estimates the likely position of a target value based on the bounds, working best on uniformly distributed sorted data?",
      "options": {
        "A": "Exponential Search",
        "B": "Jump Search",
        "C": "Binary Search",
        "D": "Ternary Search",
        "E": "Linear Search",
        "F": "Interpolation Search"
      },
      "answer": "F",
      "explanation": "Interpolation search estimates the probe index via linear interpolation `pos = low + ((target - arr[low]) * (high - low)) / (arr[high] - arr[low])`, achieving O(log(log n)) on uniformly distributed data."
    },
    {
      "id": 186,
      "subtopic": "Searching & Algorithmic Techniques",
      "question": "Which search algorithm jumps ahead by fixed steps (typically sqrt(n)) in a sorted array, then linearly searches within the identified block?",
      "options": {
        "A": "Interpolation Search",
        "B": "Linear Search",
        "C": "Exponential Search",
        "D": "Jump Search",
        "E": "Binary Search",
        "F": "Ternary Search"
      },
      "answer": "D",
      "explanation": "Jump Search advances by block steps of size √n until an element exceeding the target is found, then performs a linear search within that √n block, yielding O(√n) overall time."
    },
    {
      "id": 187,
      "subtopic": "Searching & Algorithmic Techniques",
      "question": "Which optimization technique solves problems by breaking them into overlapping subproblems and storing results to avoid redundant computation?",
      "options": {
        "A": "Brute Force",
        "B": "Backtracking exclusively",
        "C": "Greedy Algorithm approach",
        "D": "Randomized Algorithm",
        "E": "Dynamic Programming",
        "F": "Divide and Conquer (non-overlapping subproblems)"
      },
      "answer": "E",
      "explanation": "Dynamic Programming solves problems exhibiting optimal substructure and overlapping subproblems by caching and reusing subproblem solutions."
    },
    {
      "id": 188,
      "subtopic": "Searching & Algorithmic Techniques",
      "question": "What are the two main approaches used to implement Dynamic Programming solutions?",
      "options": {
        "A": "Memoization (top-down) and Tabulation (bottom-up)",
        "B": "Sorting and Searching",
        "C": "Backtracking and Branch-and-Bound only",
        "D": "Hashing and Indexing",
        "E": "Recursion only, without memoization",
        "F": "Greedy and Divide-and-Conquer only"
      },
      "answer": "A",
      "explanation": "The two canonical DP approaches are top-down with memoization (recursive with a lookup cache) and bottom-up with tabulation (iterative array filling)."
    },
    {
      "id": 189,
      "subtopic": "Searching & Algorithmic Techniques",
      "question": "What characterizes a Greedy algorithm's approach to solving a problem?",
      "options": {
        "A": "Sorting all inputs before making any decisions",
        "B": "Exploring all possible solutions exhaustively",
        "C": "Breaking the problem into overlapping subproblems and caching results",
        "D": "Randomly selecting solutions",
        "E": "Making the locally optimal choice at each step, hoping it leads to a global optimum",
        "F": "Always using recursion with backtracking"
      },
      "answer": "E",
      "explanation": "A greedy strategy makes the best local choice at each decision stage without ever reconsidering or backtracking on prior commitments."
    },
    {
      "id": 190,
      "subtopic": "Searching & Algorithmic Techniques",
      "question": "Which technique uses two pointers moving through a data structure to solve problems in O(n) instead of O(n^2)?",
      "options": {
        "A": "Greedy Algorithm",
        "B": "Dynamic Programming exclusively",
        "C": "Two-Pointer Technique",
        "D": "Backtracking",
        "E": "Divide and Conquer",
        "F": "Sliding Window Technique (related but distinct)"
      },
      "answer": "C",
      "explanation": "The Two-Pointer approach coordinates two indices (converging from opposite ends or moving at different speeds) to eliminate nested loops and achieve O(n) time."
    },
    {
      "id": 191,
      "subtopic": "Searching & Algorithmic Techniques",
      "question": "Which technique maintains a contiguous 'window' of elements that expands or shrinks to solve subarray/substring problems efficiently, often in O(n)?",
      "options": {
        "A": "Greedy Algorithm",
        "B": "Two-Pointer Technique (a related but distinct term)",
        "C": "Binary Search exclusively",
        "D": "Sliding Window Technique",
        "E": "Backtracking",
        "F": "Divide and Conquer"
      },
      "answer": "D",
      "explanation": "The sliding window technique dynamically adjusts the left and right bounds of a contiguous subsegment to track subarray constraints in linear time."
    },
    {
      "id": 192,
      "subtopic": "Searching & Algorithmic Techniques",
      "question": "What is bit manipulation commonly used for in data structures and algorithms?",
      "options": {
        "A": "Building binary search trees",
        "B": "Implementing hash functions exclusively",
        "C": "Traversing graphs",
        "D": "Efficiently performing operations like checking, setting, or toggling individual bits, often for optimization",
        "E": "Balancing AVL trees",
        "F": "Sorting strings alphabetically"
      },
      "answer": "D",
      "explanation": "Bitwise operators (&, |, ^, ~, <<, >>) manipulate individual binary flags directly in CPU registers, enabling fast bitmasking and compact state representation."
    },
    {
      "id": 193,
      "subtopic": "Searching & Algorithmic Techniques",
      "question": "What is a Skip List primarily designed to provide?",
      "options": {
        "A": "A structure that only supports sequential access",
        "B": "A structure used only for graphs",
        "C": "A guaranteed O(1) search structure",
        "D": "A structure identical to a simple linked list",
        "E": "A probabilistic data structure allowing O(log n) average search, insertion, and deletion, as an alternative to balanced trees",
        "F": "A structure used only for sorting"
      },
      "answer": "E",
      "explanation": "A Skip List builds layered express forward pointers over sorted linked lists to provide probabilistic O(log n) search, insertion, and deletion."
    },
    {
      "id": 194,
      "subtopic": "Searching & Algorithmic Techniques",
      "question": "What is the primary goal of an LRU (Least Recently Used) Cache design?",
      "options": {
        "A": "Evicting items randomly",
        "B": "Never evicting any items regardless of capacity",
        "C": "Evicting the most recently accessed item first",
        "D": "Storing items in strictly sorted order",
        "E": "Evicting the least recently accessed item when the cache reaches capacity, typically using a hash map + doubly linked list",
        "F": "Evicting the oldest inserted item regardless of access pattern"
      },
      "answer": "E",
      "explanation": "An LRU cache evicts the key that has gone the longest without being accessed once capacity is reached, typically using a hash map combined with a doubly linked list."
    },
    {
      "id": 195,
      "subtopic": "Searching & Algorithmic Techniques",
      "question": "What is the primary goal of an LFU (Least Frequently Used) Cache design, in contrast to LRU?",
      "options": {
        "A": "Evicting a random item",
        "B": "Evicting items in sorted order by value",
        "C": "Evicting the most frequently accessed item",
        "D": "Evicting the item that has been accessed the fewest number of times",
        "E": "Never evicting any items",
        "F": "Evicting the item inserted first, regardless of access frequency"
      },
      "answer": "D",
      "explanation": "An LFU cache records access counts for each stored item and evicts whichever key has the lowest cumulative access frequency upon capacity exhaustion."
    },
    {
      "id": 196,
      "subtopic": "Searching & Algorithmic Techniques",
      "question": "What is 'backtracking' as an algorithmic technique?",
      "options": {
        "A": "Always exploring every possible solution without pruning",
        "B": "A hashing technique",
        "C": "A greedy technique with no exploration",
        "D": "Incrementally building candidates for a solution and abandoning ('backtracking' from) a candidate as soon as it's determined invalid",
        "E": "A technique used only for graph traversal",
        "F": "A sorting technique"
      },
      "answer": "D",
      "explanation": "Backtracking builds solution paths incrementally and immediately discards (prunes) branches that violate problem constraints, saving exponential search time."
    },
    {
      "id": 197,
      "subtopic": "Searching & Algorithmic Techniques",
      "question": "Which classic problem is commonly solved using backtracking, exploring placements while pruning invalid configurations?",
      "options": {
        "A": "Dijkstra's Algorithm",
        "B": "Binary Search",
        "C": "Hash Table Insertion",
        "D": "Queue Enqueue Operation",
        "E": "Merge Sort",
        "F": "The N-Queens problem"
      },
      "answer": "F",
      "explanation": "The N-Queens problem places non-attacking queens column by column, backtracking whenever an attacked square is detected."
    },
    {
      "id": 198,
      "subtopic": "Searching & Algorithmic Techniques",
      "question": "What does 'memoization' specifically refer to in the context of Dynamic Programming?",
      "options": {
        "A": "A synonym for tabulation with no distinction",
        "B": "Storing (caching) the results of expensive function calls and returning the cached result when the same inputs occur again",
        "C": "Sorting an array before processing",
        "D": "A hashing technique unrelated to caching",
        "E": "Compressing memory usage without caching",
        "F": "Always recomputing every subproblem from scratch"
      },
      "answer": "B",
      "explanation": "Memoization caches the output of function calls keyed by input arguments so subsequent invocations with identical parameters return immediately in O(1)."
    },
    {
      "id": 199,
      "subtopic": "Searching & Algorithmic Techniques",
      "question": "Which technique represents a solution as a state space and prunes large portions of the search based on bounds, often alongside backtracking?",
      "options": {
        "A": "Simple Binary Search",
        "B": "Simple Linear Search",
        "C": "Two-Pointer",
        "D": "Branch and Bound",
        "E": "Sliding Window",
        "F": "Greedy Algorithm"
      },
      "answer": "D",
      "explanation": "Branch and Bound maintains upper and lower bounds on optimal solutions to safely prune subtrees in combinatorial optimization problems (e.g. Traveling Salesperson)."
    },
    {
      "id": 200,
      "subtopic": "Searching & Algorithmic Techniques",
      "question": "Which of the following best describes why understanding both data structures and algorithmic techniques together matters in practice?",
      "options": {
        "A": "Efficient algorithms often rely on choosing the right underlying data structure to achieve their target time/space complexity",
        "B": "Algorithms never depend on the data structure used",
        "C": "Only sorting algorithms require data structures",
        "D": "Data structures are only relevant for storage, never for computation",
        "E": "Data structures and algorithms are entirely unrelated fields",
        "F": "Efficiency is determined solely by programming language choice, not data structures"
      },
      "answer": "A",
      "explanation": "As expressed by Niklaus Wirth's adage 'Algorithms + Data Structures = Programs', algorithmic performance fundamentally hinges upon selecting suitable underlying data representations."
    }
  ]
};
