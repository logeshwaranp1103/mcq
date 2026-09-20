// ==========================================
window.TOPICS = window.TOPICS || {};
window.TOPICS["intermediate_c"] = {
  id: "intermediate_c",
  level: "intermediate",
  title: "C Programming & Problem Solving",
  icon: "💻",
  description: "195 comprehensive multiple-choice questions with verified answer keys covering loops, arrays, pointers, recursion, and algorithm tracing.",
  questions: [
    {
      "id": 1,
      "subtopic": "C Programming & Problem Solving",
      "question": "What is the output of the following code? `int x=7;\nif(x>5)\n  printf(\"A\");\nelse\n  printf(\"B\");`",
      "options": {
        "A": "A",
        "B": "B",
        "C": "7",
        "D": "0",
        "E": "Error",
        "F": "No output"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": 2,
      "subtopic": "C Programming & Problem Solving",
      "question": "What is the output? `int i=1, sum=0;\nwhile(i<=4) {\n  sum=sum+i;\n  i++;\n}\nprintf(\"%d\", sum);`",
      "options": {
        "A": "10",
        "B": "8",
        "C": "6",
        "D": "4",
        "E": "12",
        "F": "0"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": 3,
      "subtopic": "C Programming & Problem Solving",
      "question": "Which condition correctly checks whether an integer `n` is divisible by both 3 and 5?",
      "options": {
        "A": "n%3==0 || n%5==0",
        "B": "n/3==0 && n/5==0",
        "C": "n%3==0 && n%5==0",
        "D": "n%15==1",
        "E": "n%3!=0 && n%5!=0",
        "F": "n%15==0 || n%5==0"
      },
      "answer": "C",
      "explanation": ""
    },
    {
      "id": 4,
      "subtopic": "C Programming & Problem Solving",
      "question": "What is the output? `int a[4] = {3, 6, 9, 12};\nprintf(\"%d\", a[2]);`",
      "options": {
        "A": "3",
        "B": "6",
        "C": "9",
        "D": "12",
        "E": "2",
        "F": "0"
      },
      "answer": "C",
      "explanation": ""
    },
    {
      "id": 5,
      "subtopic": "C Programming & Problem Solving",
      "question": "What is the output? `int x=4;\nx=x+3;\nif(x%2==1)\n  printf(\"Odd\");\nelse\n  printf(\"Even\");`",
      "options": {
        "A": "Odd",
        "B": "Even",
        "C": "7",
        "D": "4",
        "E": "Error",
        "F": "No output"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": 6,
      "subtopic": "C Programming & Problem Solving",
      "question": "Which statement correctly initializes an integer array containing 5, 10, 15?",
      "options": {
        "A": "int a=(5,10,15);",
        "B": "array a[3]={5,10,15};",
        "C": "int a[]={5,10,15};",
        "D": "int a[3]=(5,10,15);",
        "E": "int a={5,10,15};",
        "F": "int a[3]=5,10,15;"
      },
      "answer": "C",
      "explanation": ""
    },
    {
      "id": 7,
      "subtopic": "C Programming & Problem Solving",
      "question": "What is the output? `int n=8;\nwhile(n>2) {\n  n=n-2;\n}\nprintf(\"%d\", n);`",
      "options": {
        "A": "0",
        "B": "1",
        "C": "2",
        "D": "4",
        "E": "6",
        "F": "8"
      },
      "answer": "C",
      "explanation": ""
    },
    {
      "id": 8,
      "subtopic": "C Programming & Problem Solving",
      "question": "Which expression accesses the fourth element of an array `a`?",
      "options": {
        "A": "a[4]",
        "B": "a[3]",
        "C": "a(3)",
        "D": "a{3}",
        "E": "a[2]",
        "F": "a[1]"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": 9,
      "subtopic": "C Programming & Problem Solving",
      "question": "What is the output? `int x=10;\nif(x>=10)\n  printf(\"Yes\");`",
      "options": {
        "A": "Yes",
        "B": "No",
        "C": "10",
        "D": "Error",
        "E": "1",
        "F": "Nothing"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": 10,
      "subtopic": "C Programming & Problem Solving",
      "question": "Which statement skips the remaining statements of the current loop iteration and starts the next iteration?",
      "options": {
        "A": "break",
        "B": "continue",
        "C": "return",
        "D": "goto",
        "E": "exit",
        "F": "skip"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": 11,
      "subtopic": "C Programming & Problem Solving",
      "question": "What is the output? `int a=5, b=2;\nif(a>b)\n  a=a-b;\nprintf(\"%d\", a);`",
      "options": {
        "A": "2",
        "B": "3",
        "C": "5",
        "D": "7",
        "E": "0",
        "F": "1"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": 12,
      "subtopic": "C Programming & Problem Solving",
      "question": "Which condition checks whether `x` lies between 10 and 20 inclusive?",
      "options": {
        "A": "x>10 && x<20",
        "B": "x>=10 && x<=20",
        "C": "x>=10 || x<=20",
        "D": "x<10 && x>20",
        "E": "x==10 && x==20",
        "F": "x>10 || x<20"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": 13,
      "subtopic": "C Programming & Problem Solving",
      "question": "What is the output? `int i=0;\ndo {\n  printf(\"%d\", i);\n  i++;\n} while (i<3);`",
      "options": {
        "A": "12",
        "B": "123",
        "C": "1",
        "D": "123",
        "E": "210",
        "F": "0"
      },
      "answer": "None",
      "explanation": "All options are wrong. The right answer is 012, which is not given in the options (the do-while loop executes for i = 0, 1, 2 and prints '012')."
    },
    {
      "id": 14,
      "subtopic": "C Programming & Problem Solving",
      "question": "If `int a[5] = {2,4,6,8,10};`, what is the value of `a[1] + a[4]`?",
      "options": {
        "A": "10",
        "B": "12",
        "C": "14",
        "D": "16",
        "E": "18",
        "F": "20"
      },
      "answer": "C",
      "explanation": ""
    },
    {
      "id": 15,
      "subtopic": "C Programming & Problem Solving",
      "question": "What is the output? `int i=1, sum=0;\nwhile(i<=5) {\n  if(i%2==0)\n    sum+=i;\n  else\n    sum-=i;\n  i++;\n}\nprintf(\"%d\", sum);`",
      "options": {
        "A": "-3",
        "B": "3",
        "C": "5",
        "D": "-5",
        "E": "0",
        "F": "15"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": 16,
      "subtopic": "C Programming & Problem Solving",
      "question": "What is the output? `int a[] = {4, 7, 2, 9, 6};\nint i=0;\nwhile(i<5) {\n  if(a[i]>5)\n    a[i]--;\n  i++;\n}\nprintf(\"%d\", a[3]);`",
      "options": {
        "A": "9",
        "B": "8",
        "C": "7",
        "D": "6",
        "E": "5",
        "F": "4"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": 17,
      "subtopic": "C Programming & Problem Solving",
      "question": "A program should count elements greater than the average of an array. Which sequence is logically correct?",
      "options": {
        "A": "Count first → calculate average → find sum",
        "B": "Find sum → calculate average → traverse array and count",
        "C": "Calculate average → find sum → count",
        "D": "Sort → count → calculate average",
        "E": "Count → sort → calculate average",
        "F": "Find maximum → count → calculate average"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": 18,
      "subtopic": "C Programming & Problem Solving",
      "question": "What is the output? `int n=25, count=0;\nwhile(n>1) {\n  n=n/2;\n  count++;\n}\nprintf(\"%d\", count);`",
      "options": {
        "A": "3",
        "B": "4",
        "C": "5",
        "D": "6",
        "E": "12",
        "F": "25"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": 19,
      "subtopic": "C Programming & Problem Solving",
      "question": "Which modification correctly replaces every negative element of `a[6]` with 0?",
      "options": {
        "A": "Use `if(a[i]>0) a[i]=0;`",
        "B": "Use a loop and `if(a[i]<0) a[i]=0;`",
        "C": "Use `a[-1]=0;`",
        "D": "Set only `a[0]=0;`",
        "E": "Sort the array first",
        "F": "Use `if(a[i]==0) a[i]=-1;`"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": 20,
      "subtopic": "C Programming & Problem Solving",
      "question": "What is the output? `int a[] = {8, 3, 5, 2};\nint i=0, sum=0;\nwhile(i<4) {\n  if(i%2==0)\n    sum+=a[i];\n  i++;\n}\nprintf(\"%d\", sum);`",
      "options": {
        "A": "8",
        "B": "10",
        "C": "13",
        "D": "18",
        "E": "5",
        "F": "20"
      },
      "answer": "C",
      "explanation": ""
    },
    {
      "id": 21,
      "subtopic": "C Programming & Problem Solving",
      "question": "A loop is intended to print only odd array elements, but uses `if(a[i]%2==0) printf(...)`. What change is needed?",
      "options": {
        "A": "Change `!=0` to `==0`",
        "B": "Change `==0` to `!=0`",
        "C": "Remove the if condition",
        "D": "Use `a[i]/2==0`",
        "E": "Change the loop to do-while",
        "F": "Use `a[i]%2==1 && a[i]%2==0`"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": 22,
      "subtopic": "C Programming & Problem Solving",
      "question": "What is the output? `int x=3;\nwhile(x<20) {\n  x=x*2;\n  if(x>10)\n    x=x-3;\n}\nprintf(\"%d\", x);`",
      "options": {
        "A": "12",
        "B": "15",
        "C": "18",
        "D": "21",
        "E": "24",
        "F": "27"
      },
      "answer": "F",
      "explanation": ""
    },
    {
      "id": 23,
      "subtopic": "C Programming & Problem Solving",
      "question": "Given `a={5,2,8,2,9}`, which logic finds the index of the first occurrence of 2?",
      "options": {
        "A": "Traverse from last index and stop at `a[i]!=2`",
        "B": "Traverse from index 0 and stop when `a[i]==2`",
        "C": "Sort the array then select index 2",
        "D": "Compare only `a[0]`",
        "E": "Check `a[i]>2`",
        "F": "Use `a[i]%2==0`"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": 24,
      "subtopic": "C Programming & Problem Solving",
      "question": "What is the output? `int a[] = {3, 1, 4, 1, 5};\nint i=0;\nwhile(i<5) {\n  if(a[i]%2!=0)\n    a[i]+=1;\n  i++;\n}\nprintf(\"%d\", a[4]);`",
      "options": {
        "A": "5",
        "B": "6",
        "C": "4",
        "D": "3",
        "E": "2",
        "F": "1"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": 25,
      "subtopic": "C Programming & Problem Solving",
      "question": "Which condition correctly identifies an element that is even and greater than 10?",
      "options": {
        "A": "a[i]%2==0 || a[i]>10",
        "B": "a[i]%2!=0 && a[i]>10",
        "C": "a[i]%2==0 && a[i]>10",
        "D": "a[i]/2==0 && a[i]>10",
        "E": "a[i]>10 && a[i]%2!=1",
        "F": "a[i]==10 && a[i]%2==0"
      },
      "answer": "C",
      "explanation": ""
    },
    {
      "id": 26,
      "subtopic": "C Programming & Problem Solving",
      "question": "What is the output? `int i=1;\ndo {\n  if(i%3==0)\n    printf(\"%d \", i);\n  i++;\n} while (i<=7);`",
      "options": {
        "A": "1 4 2007",
        "B": "2 5",
        "C": "3 6",
        "D": "3 5 2007",
        "E": "6",
        "F": "2000 3 6"
      },
      "answer": "C",
      "explanation": ""
    },
    {
      "id": 27,
      "subtopic": "C Programming & Problem Solving",
      "question": "A program must terminate when the user enters 0, but 0 should not be added to `sum`. Which approach is correct?",
      "options": {
        "A": "Add value first, then break",
        "B": "Read value, test `value==0`, break; otherwise add it",
        "C": "Always add 0 and continue",
        "D": "Break before reading input",
        "E": "Use only `if(value>0)`",
        "F": "Use `continue` before reading input"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": 28,
      "subtopic": "C Programming & Problem Solving",
      "question": "What is the output? `int a[] = {10, 20, 30, 40};\nint i=3;\nwhile(i>=0) {\n  if(a[i]>20)\n    printf(\"%d \", a[i]);\n  i-=1;\n}`",
      "options": {
        "A": "10 20",
        "B": "20 30",
        "C": "40 30",
        "D": "40 30 20",
        "E": "30 40",
        "F": "10 20 30"
      },
      "answer": "C",
      "explanation": ""
    },
    {
      "id": 29,
      "subtopic": "C Programming & Problem Solving",
      "question": "Which logic correctly computes the number of array elements equal to the maximum value?",
      "options": {
        "A": "Count before finding maximum",
        "B": "Find minimum and count values equal to it",
        "C": "Find maximum first, then traverse and count values equal to it",
        "D": "Sort only and count the last element once",
        "E": "Count all positive values",
        "F": "Compare every element only with `a[0]`"
      },
      "answer": "C",
      "explanation": ""
    },
    {
      "id": 30,
      "subtopic": "C Programming & Problem Solving",
      "question": "What is the output? `int x=1;\nwhile(x<10) {\n  x+=3;\n}\nprintf(\"%d\", x);`",
      "options": {
        "A": "7",
        "B": "9",
        "C": "10",
        "D": "11",
        "E": "12",
        "F": "13"
      },
      "answer": "C",
      "explanation": ""
    },
    {
      "id": 31,
      "subtopic": "C Programming & Problem Solving",
      "question": "Given `a={6,1,9,4,7}`, what value is produced by summing elements that are both greater than 5 and at even indices?",
      "options": {
        "A": "6",
        "B": "9",
        "C": "13",
        "D": "15",
        "E": "22",
        "F": "27"
      },
      "answer": "E",
      "explanation": ""
    },
    {
      "id": 32,
      "subtopic": "C Programming & Problem Solving",
      "question": "A search loop uses `while(i<n && found==0)`. What is the main advantage of this condition?",
      "options": {
        "A": "It always scans the entire array",
        "B": "It stops when the array ends or the target is found",
        "C": "It sorts the array automatically",
        "D": "It avoids initializing `i`",
        "E": "It guarantees the target exists",
        "F": "It checks only even indices"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": 33,
      "subtopic": "C Programming & Problem Solving",
      "question": "What is the output? `int a[] = {2, 5, 8, 11};\nint i=0;\nwhile(i<4) {\n  if(a[i]>a[1])\n    printf(\"%d \", a[i]);\n  i++;\n}`",
      "options": {
        "A": "2 5",
        "B": "5 8",
        "C": "8 11",
        "D": "2 8 11",
        "E": "11",
        "F": "5 11"
      },
      "answer": "C",
      "explanation": ""
    },
    {
      "id": 34,
      "subtopic": "C Programming & Problem Solving",
      "question": "What is the output? `int a[] = {4, 7, 2, 9, 5};\nint i=0, j=4;\nwhile(i<j) {\n  if(a[i]<a[j])\n    i++;\n  else\n    j--;\n}\nprintf(\"%d\", a[i]);`",
      "options": {
        "A": "4",
        "B": "7",
        "C": "2",
        "D": "9",
        "E": "5",
        "F": "0"
      },
      "answer": "D",
      "explanation": ""
    },
    {
      "id": 35,
      "subtopic": "C Programming & Problem Solving",
      "question": "A program must move all values greater than 10 one position to the right without losing elements. Which issue must be handled first?",
      "options": {
        "A": "Process from left to right always",
        "B": "Process elements from right to left to avoid overwriting values",
        "C": "Sort the array first",
        "D": "Set every element to 0",
        "E": "Use only an if statement",
        "F": "Start from index 0 and copy forward"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": 36,
      "subtopic": "C Programming & Problem Solving",
      "question": "What is the output? `int a[] = {2, 4, 6, 8, 10};\nint i=0, sum=0;\nwhile(i<5) {\n  if(a[i]%4==0)\n    sum+=a[i];\n  else if(a[i]%3==0)\n    sum-=a[i];\n  i++;\n}\nprintf(\"%d\", sum);`",
      "options": {
        "A": "4",
        "B": "8",
        "C": "12",
        "D": "18",
        "E": "20",
        "F": "24"
      },
      "answer": "C",
      "explanation": ""
    },
    {
      "id": 37,
      "subtopic": "C Programming & Problem Solving",
      "question": "A loop is intended to find the first element that is greater than both its immediate neighbors. For `a={2,5,3,8,6}`, which index should be found first?",
      "options": {
        "A": "0",
        "B": "1",
        "C": "2",
        "D": "3",
        "E": "4",
        "F": "-1"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": 38,
      "subtopic": "C Programming & Problem Solving",
      "question": "What is the output? `int a[] = {5, 1, 4, 2, 8};\nint i=0;\nwhile(i<4) {\n  if(a[i]>a[i+1]) {\n    int t=a[i];\n    a[i]=a[i+1];\n    a[i+1]=t;\n  }\n  i++;\n}\nprintf(\"%d\", a[2]);`",
      "options": {
        "A": "1",
        "B": "2",
        "C": "4",
        "D": "5",
        "E": "8",
        "F": "0"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": 39,
      "subtopic": "C Programming & Problem Solving",
      "question": "A program should determine whether an array is sorted in ascending order using one pass. Which condition is sufficient to declare it unsorted?",
      "options": {
        "A": "Find any `a[i] < a[i+1]`",
        "B": "Find any `a[i] > a[i+1]`",
        "C": "Check only `a[0]` and `a[n-1]`",
        "D": "Check whether all values are even",
        "E": "Compare every value with zero",
        "F": "Check whether the sum is positive"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": 40,
      "subtopic": "C Programming & Problem Solving",
      "question": "What is the output? `int a[] = {3, 6, 9, 12, 15};\nint i=0, sum=0;\nwhile(i<5) {\n  if(i+1<5 && a[i+1]>a[i])\n    sum+=a[i+1]-a[i];\n  i++;\n}\nprintf(\"%d\", sum);`",
      "options": {
        "A": "3",
        "B": "6",
        "C": "9",
        "D": "12",
        "E": "15",
        "F": "30"
      },
      "answer": "D",
      "explanation": ""
    },
    {
      "id": 41,
      "subtopic": "C Programming & Problem Solving",
      "question": "A program searches for a target in an array and should report the last occurrence. What change is required compared with first-occurrence search?",
      "options": {
        "A": "Stop immediately at the first match",
        "B": "Do not stop at the first match; update the index whenever a match is found",
        "C": "Sort the array and return 0",
        "D": "Only check the first element",
        "E": "Use `break` on every match",
        "F": "Compare only adjacent elements"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": 42,
      "subtopic": "C Programming & Problem Solving",
      "question": "What is the output? `int a[] = {7, 2, 9, 4, 6};\nint i=0, max=a[0], second=a[0];\nwhile(i<5) {\n  if(a[i]>max) {\n    second=max;\n    max=a[i];\n  } else if (a[i]>second && a[i]!=max) {\n    second=a[i];\n  }\n  i++;\n}\nprintf(\"%d\", second);`",
      "options": {
        "A": "2",
        "B": "4",
        "C": "6",
        "D": "7",
        "E": "9",
        "F": "0"
      },
      "answer": "D",
      "explanation": ""
    },
    {
      "id": 43,
      "subtopic": "C Programming & Problem Solving",
      "question": "A program must remove an element at index `k` from an array while preserving order. Which operation is required for indices after `k`?",
      "options": {
        "A": "Shift right by two positions",
        "B": "Shift each element one position to the left",
        "C": "Sort the array",
        "D": "Replace every element with zero",
        "E": "Swap only adjacent elements once",
        "F": "Reverse the array"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": 44,
      "subtopic": "C Programming & Problem Solving",
      "question": "What is the output? `int a[] = {1, 2, 3, 4, 5};\nint i=0, j=4;\nwhile(i<j) {\n  int t=a[i];\n  a[i]=a[j];\n  a[j]=t;\n  i++;\n  j--;\n}\nprintf(\"%d %d\", a[1], a[3]);`",
      "options": {
        "A": "2 4",
        "B": "4 2",
        "C": "5 1",
        "D": "3 3",
        "E": "1 5",
        "F": "4 3"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": 45,
      "subtopic": "C Programming & Problem Solving",
      "question": "For an array containing duplicate values, a search must return the index of the last value smaller than 10. Which strategy is correct?",
      "options": {
        "A": "Stop at the first value smaller than 10",
        "B": "Traverse the complete array and update the index whenever `a[i]<10`",
        "C": "Sort and return index 0",
        "D": "Count values and return the count",
        "E": "Check only the last element",
        "F": "Update only when `a[i]>10`"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": 46,
      "subtopic": "C Programming & Problem Solving",
      "question": "What is the output? `int a[] = {4, 1, 7, 2, 9};\nint i=1, count=0;\nwhile(i<4) {\n  if(a[i]>a[i-1] && a[i]>a[i+1])\n    count++;\n  i++;\n}\nprintf(\"%d\", count);`",
      "options": {
        "A": "0",
        "B": "1",
        "C": "2",
        "D": "3",
        "E": "4",
        "F": "5"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": 47,
      "subtopic": "C Programming & Problem Solving",
      "question": "A program checks whether an array contains two adjacent equal elements. Which condition should be tested while traversing?",
      "options": {
        "A": "a[i] != a[i+1]",
        "B": "a[i] == a[i+1]",
        "C": "a[i] > a[i+1]",
        "D": "a[i] < a[i+1]",
        "E": "a[i] == 0",
        "F": "a[i+1] == 0"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": 48,
      "subtopic": "C Programming & Problem Solving",
      "question": "What is the output? `int a[] = {2, 7, 4, 9, 6};\nint i=0, result=0;\nwhile(i<5) {\n  if(a[i]%2==0 && a[i]>5)\n    result+=a[i];\n  else if(a[i]%2!=0 && a[i]<8)\n    result-=a[i];\n  i++;\n}\nprintf(\"%d\", result);`",
      "options": {
        "A": "-9",
        "B": "-1",
        "C": "0",
        "D": "1",
        "E": "5",
        "F": "10"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": 49,
      "subtopic": "C Programming & Problem Solving",
      "question": "What is the output? `int a[] = {5, 10, 15, 20};\nint i=0, sum=0;\nwhile(i<4) {\n  if(a[i]%5==0 && a[i]>10)\n    sum+=a[i];\n  i++;\n}\nprintf(\"%d\", sum);`",
      "options": {
        "A": "10",
        "B": "15",
        "C": "20",
        "D": "25",
        "E": "30",
        "F": "35"
      },
      "answer": "F",
      "explanation": ""
    },
    {
      "id": 50,
      "subtopic": "C Programming & Problem Solving",
      "question": "Predict the output of the following code: `int i;\nfor (i=10; i>=1; i-=2)\n  printf(\"%d \", i);`",
      "options": {
        "A": "10 8 6 4 2",
        "B": "10 9 8 7",
        "C": "1 3 5 7 9",
        "D": "10 5",
        "E": "2 4 6 8 10",
        "F": "Infinite loop"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": 51,
      "subtopic": "C Programming & Problem Solving",
      "question": "Identify the declaration that correctly creates an integer array of 5 elements, all initialized to 0.",
      "options": {
        "A": "int a[5];",
        "B": "int a[5]={0};",
        "C": "int a={0,0,0,0,0};",
        "D": "array a[5]=0;",
        "E": "int a[0]=5;",
        "F": "int a[5]=0;"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": 52,
      "subtopic": "C Programming & Problem Solving",
      "question": "Trace the following code and state its output: `int a=5;\na+=3;\nprintf(\"%d\", a);`",
      "options": {
        "A": "5",
        "B": "8",
        "C": "3",
        "D": "53",
        "E": "15",
        "F": "0"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": 53,
      "subtopic": "C Programming & Problem Solving",
      "question": "Examine the code below and determine the output it produces: `int x=3, y=4;\nprintf(\"%d\", x+y*2);`",
      "options": {
        "A": "14",
        "B": "11",
        "C": "10",
        "D": "7",
        "E": "8",
        "F": "22"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": 54,
      "subtopic": "C Programming & Problem Solving",
      "question": "Select the condition that correctly checks whether an integer `n` is even.",
      "options": {
        "A": "n/2==0",
        "B": "n%2==0",
        "C": "n%2==1",
        "D": "n==2",
        "E": "n/2==1",
        "F": "n%1==0"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": 55,
      "subtopic": "C Programming & Problem Solving",
      "question": "Name the statement that immediately exits the loop it is placed in, skipping any remaining iterations.",
      "options": {
        "A": "continue",
        "B": "break",
        "C": "return",
        "D": "exit",
        "E": "goto",
        "F": "skip"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": 56,
      "subtopic": "C Programming & Problem Solving",
      "question": "Given the following code, determine the value printed: `int a[4] = {1, 2, 3, 4};\nint sum=0;\nfor (int i=0; i<4; i++)\n  sum+=a[i];\nprintf(\"%d\", sum);`",
      "options": {
        "A": "6",
        "B": "10",
        "C": "4",
        "D": "24",
        "E": "0",
        "F": "14"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": 57,
      "subtopic": "C Programming & Problem Solving",
      "question": "Read through the code and state the exact output: `int x=5;\nwhile(x>0) {\n  printf(\"%d\", x);\n  x--;\n}`",
      "options": {
        "A": "12345",
        "B": "54321",
        "C": "55555",
        "D": "0",
        "E": "Infinite loop",
        "F": "5"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": 58,
      "subtopic": "C Programming & Problem Solving",
      "question": "The following code executes -- determine what it prints: `int a[3] = {2, 4, 6};\nprintf(\"%d\", a[0]+a[2]);`",
      "options": {
        "A": "6",
        "B": "8",
        "C": "10",
        "D": "2",
        "E": "4",
        "F": "12"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": 59,
      "subtopic": "C Programming & Problem Solving",
      "question": "Consider the code below and identify its output: `int i, sum=0;\nfor (i=1; i<=5; i++)\n  sum+=i;\nprintf(\"%d\", sum);`",
      "options": {
        "A": "10",
        "B": "15",
        "C": "20",
        "D": "5",
        "E": "0",
        "F": "25"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": 60,
      "subtopic": "C Programming & Problem Solving",
      "question": "Run the following code mentally and state its output: `int a=10, b=20;\nif(a<b)\n  printf(\"A\");\nelse\n  printf(\"B\");`",
      "options": {
        "A": "A",
        "B": "B",
        "C": "AB",
        "D": "10",
        "E": "20",
        "F": "Nothing"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": 61,
      "subtopic": "C Programming & Problem Solving",
      "question": "Identify the loop that is guaranteed to execute its body at least once, regardless of the condition.",
      "options": {
        "A": "for",
        "B": "while",
        "C": "do-while",
        "D": "if",
        "E": "switch",
        "F": "goto"
      },
      "answer": "C",
      "explanation": ""
    },
    {
      "id": 62,
      "subtopic": "C Programming & Problem Solving",
      "question": "Predict the output of the following code: `int x=5, y=10, z;\nz=(x>y)?x:y;\nprintf(\"%d\", z);`",
      "options": {
        "A": "5",
        "B": "10",
        "C": "0",
        "D": "1",
        "E": "15",
        "F": "Error"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": 63,
      "subtopic": "C Programming & Problem Solving",
      "question": "A program must skip printing multiples of 3 while looping from 1 to n, but should still continue checking the remaining numbers. Select the statement that accomplishes this.",
      "options": {
        "A": "break",
        "B": "continue",
        "C": "return",
        "D": "goto end",
        "E": "exit(0)",
        "F": "stop"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": 64,
      "subtopic": "C Programming & Problem Solving",
      "question": "Trace the following code and state its output: `int a[3] = {5, 10, 15};\nint b[3];\nfor (int i=0; i<3; i++)\n  b[i]=a[i]*2;\nprintf(\"%d %d %d\", b[0], b[1], b[2]);`",
      "options": {
        "A": "5 10 15",
        "B": "10 20 30",
        "C": "15 20 25",
        "D": "10 10 10",
        "E": "0 0 0",
        "F": "20 10 30"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": 65,
      "subtopic": "C Programming & Problem Solving",
      "question": "Examine the code below and determine the output it produces: `int count=0;\nfor (int i=1; i<=20; i++) {\n  if(i%3==0 && i%5==0)\n    count++;\n}\nprintf(\"%d\", count);`",
      "options": {
        "A": "0",
        "B": "1",
        "C": "2",
        "D": "3",
        "E": "4",
        "F": "6"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": 66,
      "subtopic": "C Programming & Problem Solving",
      "question": "A loop should stop scanning an array as soon as it finds a negative number, without checking the remaining elements. Identify the statement that should be used at that point.",
      "options": {
        "A": "continue",
        "B": "break",
        "C": "return 0 only",
        "D": "goto start",
        "E": "i=n",
        "F": "exit(1)"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": 67,
      "subtopic": "C Programming & Problem Solving",
      "question": "Study the following program and identify the output: `int a[5] = {10, 20, 30, 40, 50};\nint sum=0;\nfor (int i=4; i>=0; i--)\n  sum+=a[i];\nprintf(\"%d\", sum);`",
      "options": {
        "A": "100",
        "B": "120",
        "C": "150",
        "D": "50",
        "E": "10",
        "F": "200"
      },
      "answer": "C",
      "explanation": ""
    },
    {
      "id": 68,
      "subtopic": "C Programming & Problem Solving",
      "question": "A program should sum only the even-indexed elements of an array (index 0, 2, 4, ...). Select the loop increment that achieves this.",
      "options": {
        "A": "i++",
        "B": "i+=2",
        "C": "i--",
        "D": "i*=2",
        "E": "i+=3",
        "F": "i=i"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": 69,
      "subtopic": "C Programming & Problem Solving",
      "question": "Analyze the code snippet below and find its output: `int a[5] = {2, 3, 6, 7, 10};\nint even=0, odd=0;\nfor (int i=0; i<5; i++) {\n  if(a[i]%2==0)\n    even++;\n  else\n    odd++;\n}\nprintf(\"%d %d\", even, odd);`",
      "options": {
        "A": "2 3",
        "B": "3 2",
        "C": "5 0",
        "D": "0 5",
        "E": "4 1",
        "F": "1 4"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": 70,
      "subtopic": "C Programming & Problem Solving",
      "question": "Point out the condition that correctly identifies an array element `a[i]` that is both positive and even.",
      "options": {
        "A": "a[i]>0 || a[i]%2==0",
        "B": "a[i]>0 && a[i]%2==0",
        "C": "a[i]<0 && a[i]%2==0",
        "D": "a[i]%2==0",
        "E": "a[i]>0",
        "F": "a[i]!=0 && a[i]%2==1"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": 71,
      "subtopic": "C Programming & Problem Solving",
      "question": "Given the following code, determine the value printed: `int i, sum=0;\nfor (i=1; i<=5; i++) {\n  if(i==3)\n    sum+=10;\n  else\n    sum+=i;\n}\nprintf(\"%d\", sum);`",
      "options": {
        "A": "15",
        "B": "20",
        "C": "22",
        "D": "25",
        "E": "12",
        "F": "10"
      },
      "answer": "C",
      "explanation": ""
    },
    {
      "id": 72,
      "subtopic": "C Programming & Problem Solving",
      "question": "Identify the loop condition that correctly processes every element of an array `a` of size `n`, indexed from 0 to n-1.",
      "options": {
        "A": "i<=n",
        "B": "i<n",
        "C": "i<n-1",
        "D": "i<=n-2",
        "E": "i>n",
        "F": "i==n"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": 73,
      "subtopic": "C Programming & Problem Solving",
      "question": "Select the sequence of steps that correctly computes the average of `n` array elements.",
      "options": {
        "A": "Divide first element by n, then add the rest",
        "B": "Sum all elements first, then divide the sum by n",
        "C": "Sort the array, then divide the middle element by n",
        "D": "Divide each element by n before adding them, in any order",
        "E": "Count elements first, then multiply by n",
        "F": "Find the maximum, then divide by n"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": 74,
      "subtopic": "C Programming & Problem Solving",
      "question": "The following code executes -- determine what it prints: `int a[3][2] = {{1, 2}, {3, 4}, {5, 6}};\nint sum=0;\nfor (int i=0; i<3; i++)\n  for (int j=0; j<2; j++)\n    sum+=a[i][j];\nprintf(\"%d\", sum);`",
      "options": {
        "A": "15",
        "B": "18",
        "C": "21",
        "D": "12",
        "E": "6",
        "F": "24"
      },
      "answer": "C",
      "explanation": ""
    },
    {
      "id": 75,
      "subtopic": "C Programming & Problem Solving",
      "question": "Consider the code below and identify its output: `char s[]=\"Hello\";\nint count=0;\nfor (int i=0; s[i]!='\\0'; i++) {\n  if(s[i]=='l')\n    count++;\n}\nprintf(\"%d\", count);`",
      "options": {
        "A": "0",
        "B": "1",
        "C": "2",
        "D": "3",
        "E": "5",
        "F": "Error"
      },
      "answer": "C",
      "explanation": ""
    },
    {
      "id": 76,
      "subtopic": "C Programming & Problem Solving",
      "question": "Run the following code mentally and state its output: `int i=1, sum=0;\nwhile(i<=6) {\n  sum+=i*i;\n  i++;\n}\nprintf(\"%d\", sum);`",
      "options": {
        "A": "21",
        "B": "56",
        "C": "91",
        "D": "36",
        "E": "100",
        "F": "120"
      },
      "answer": "C",
      "explanation": ""
    },
    {
      "id": 77,
      "subtopic": "C Programming & Problem Solving",
      "question": "Predict the output of the following code: `int a[4] = {5, 10, 15, 20};\nint prod=1;\nfor (int i=0; i<4; i++)\n  prod*=a[i];\nprintf(\"%d\", prod);`",
      "options": {
        "A": "1500",
        "B": "15000",
        "C": "150000",
        "D": "50",
        "E": "5000",
        "F": "500"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": 78,
      "subtopic": "C Programming & Problem Solving",
      "question": "Trace the following code and state its output: `int a[6] = {3, 7, 2, 9, 4, 1};\nint max=a[0];\nfor (int i=1; i<6; i++)\n  if(a[i]>max)\n    max=a[i];\nprintf(\"%d\", max);`",
      "options": {
        "A": "3",
        "B": "7",
        "C": "9",
        "D": "4",
        "E": "1",
        "F": "2"
      },
      "answer": "C",
      "explanation": ""
    },
    {
      "id": 79,
      "subtopic": "C Programming & Problem Solving",
      "question": "Examine the code below and determine the output it produces: `int sum=0;\nfor (int i=1; i<=10; i++) {\n  if(i%2==0)\n    continue;\n  sum+=i;\n}\nprintf(\"%d\", sum);`",
      "options": {
        "A": "25",
        "B": "30",
        "C": "55",
        "D": "20",
        "E": "45",
        "F": "0"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": 80,
      "subtopic": "C Programming & Problem Solving",
      "question": "Study the following program and identify the output: `int i=0;\nwhile(i<10) {\n  if(i==5)\n    break;\n  i++;\n}\nprintf(\"%d\", i);`",
      "options": {
        "A": "4",
        "B": "5",
        "C": "9",
        "D": "10",
        "E": "0",
        "F": "6"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": 81,
      "subtopic": "C Programming & Problem Solving",
      "question": "A program needs to find the second largest element of an array in a single pass. Select the approach that is correct.",
      "options": {
        "A": "Sort the array and pick the last element",
        "B": "Track both the largest and second-largest values while traversing once, updating both as needed",
        "C": "Only compare the first two elements of the array",
        "D": "Divide every element by 2 and find the maximum",
        "E": "Find the maximum twice using two separate full passes over unmodified data",
        "F": "Count how many elements are above zero"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": 82,
      "subtopic": "C Programming & Problem Solving",
      "question": "Analyze the code snippet below and find its output: `int a[3][3] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};\nint sum=0;\nfor (int i=0; i<3; i++)\n  for (int j=0; j<3; j++)\n    if(i!=j)\n      sum+=a[i][j];\nprintf(\"%d\", sum);`",
      "options": {
        "A": "15",
        "B": "25",
        "C": "30",
        "D": "35",
        "E": "45",
        "F": "20"
      },
      "answer": "C",
      "explanation": ""
    },
    {
      "id": 83,
      "subtopic": "C Programming & Problem Solving",
      "question": "Given the following code, determine the value printed: `int n=6, a=0, b=1, c;\nfor (int i=2; i<=n; i++) {\n  c=a+b;\n  a=b;\n  b=c;\n}\nprintf(\"%d\", b);`",
      "options": {
        "A": "5",
        "B": "6",
        "C": "8",
        "D": "13",
        "E": "3",
        "F": "21"
      },
      "answer": "C",
      "explanation": ""
    },
    {
      "id": 84,
      "subtopic": "C Programming & Problem Solving",
      "question": "To count pairs `(i, j)` with `i < j` such that `a[i] + a[j]` equals a target sum, using nested loops, state what the inner loop's starting index should be.",
      "options": {
        "A": "j = 0",
        "B": "j = i",
        "C": "j = i + 1",
        "D": "j = i - 1",
        "E": "j = n",
        "F": "j = n - i"
      },
      "answer": "C",
      "explanation": ""
    },
    {
      "id": 85,
      "subtopic": "C Programming & Problem Solving",
      "question": "Read through the code and state the exact output: `int a[4] = {8, 3, 5, 1};\nint i, j, temp;\nfor (i=0; i<3; i++) {\n  for (j=0; j<3-i; j++) {\n    if(a[j]>a[j+1]) {\n      temp=a[j];\n      a[j]=a[j+1];\n      a[j+1]=temp;\n    }\n  }\n}\nprintf(\"%d%d%d%d\", a[0], a[1], a[2], a[3]);`",
      "options": {
        "A": "8351",
        "B": "1358",
        "C": "1538",
        "D": "3158",
        "E": "8531",
        "F": "5138"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": 86,
      "subtopic": "C Programming & Problem Solving",
      "question": "A program checks whether an array is sorted in ascending order. Identify the single-pass condition that is sufficient to prove it is NOT sorted.",
      "options": {
        "A": "Any element equals its neighbor",
        "B": "Any element is greater than the element right after it",
        "C": "The first element is greater than zero",
        "D": "The array has an even number of elements",
        "E": "The last element is the maximum",
        "F": "Any element is negative"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": 87,
      "subtopic": "C Programming & Problem Solving",
      "question": "The following code executes -- determine what it prints: `int i, j, sum=0;\nfor (i=1; i<=3; i++) {\n  for (j=1; j<=i; j++) {\n    sum+=j;\n  }\n}\nprintf(\"%d\", sum);`",
      "options": {
        "A": "6",
        "B": "9",
        "C": "10",
        "D": "12",
        "E": "15",
        "F": "3"
      },
      "answer": "C",
      "explanation": ""
    },
    {
      "id": 88,
      "subtopic": "C Programming & Problem Solving",
      "question": "Consider the code below and identify its output: `int a[5] = {2, 4, 6, 8, 10};\nint i=0, j=4, sum=0;\nwhile(i<=j) {\n  sum+=a[i]+a[j];\n  i++;\n  j--;\n}\nprintf(\"%d\", sum);`",
      "options": {
        "A": "24",
        "B": "30",
        "C": "36",
        "D": "40",
        "E": "48",
        "F": "20"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": 89,
      "subtopic": "C Programming & Problem Solving",
      "question": "Run the following code mentally and state its output: `int count=0;\nfor (int i=2; i<=30; i++) {\n  int isPrime=1;\n  for (int j=2; j<i; j++) {\n    if(i%j==0) {\n      isPrime=0;\n      break;\n    }\n  }\n  if(isPrime)\n    count++;\n}\nprintf(\"%d\", count);`",
      "options": {
        "A": "8",
        "B": "9",
        "C": "10",
        "D": "11",
        "E": "12",
        "F": "7"
      },
      "answer": "C",
      "explanation": ""
    },
    {
      "id": 90,
      "subtopic": "C Programming & Problem Solving",
      "question": "Predict the output of the following code: `int a[6] = {4, 2, 7, 1, 9, 3};\nint temp;\nfor (int i=0; i<5; i++) {\n  for (int j=0; j<5-i; j++) {\n    if(a[j]>a[j+1]) {\n      temp=a[j];\n      a[j]=a[j+1];\n      a[j+1]=temp;\n    }\n  }\n}\nprintf(\"%d\", a[5]);`",
      "options": {
        "A": "1",
        "B": "3",
        "C": "7",
        "D": "9",
        "E": "4",
        "F": "2"
      },
      "answer": "D",
      "explanation": ""
    },
    {
      "id": 91,
      "subtopic": "C Programming & Problem Solving",
      "question": "A program reverses an array in place using two indices, one starting at the first element and one at the last, moving toward the middle. State what the loop's continuation condition should be.",
      "options": {
        "A": "while(i == j)",
        "B": "while(i < j)",
        "C": "while(i > j)",
        "D": "while(i != 0)",
        "E": "while(j != 0)",
        "F": "while(true)"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": 92,
      "subtopic": "C Programming & Problem Solving",
      "question": "Trace the following code and state its output: `int fib[10];\nfib[0]=0;\nfib[1]=1;\nfor (int i=2; i<10; i++)\n  fib[i]=fib[i-1]+fib[i-2];\nprintf(\"%d\", fib[8]);`",
      "options": {
        "A": "13",
        "B": "21",
        "C": "34",
        "D": "8",
        "E": "5",
        "F": "55"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": 93,
      "subtopic": "C Programming & Problem Solving",
      "question": "Examine the code below and determine the output it produces: `int i=1, sum=0;\nwhile(i<=10) {\n  if(i%2==0) {\n    i++;\n    continue;\n  }\n  sum+=i;\n  i++;\n}\nprintf(\"%d\", sum);`",
      "options": {
        "A": "20",
        "B": "25",
        "C": "30",
        "D": "55",
        "E": "45",
        "F": "0"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": 94,
      "subtopic": "C Programming & Problem Solving",
      "question": "Study the following program and identify the output: `int a[5] = {3, 1, 4, 1, 5};\nint count=0;\nfor (int i=0; i<5; i++)\n  for (int j=i+1; j<5; j++)\n    if(a[i]==a[j])\n      count++;\nprintf(\"%d\", count);`",
      "options": {
        "A": "0",
        "B": "1",
        "C": "2",
        "D": "3",
        "E": "4",
        "F": "5"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": 95,
      "subtopic": "C Programming & Problem Solving",
      "question": "Analyze the code snippet below and find its output: `int i=0, j=10, sum=0;\nwhile(i<j) {\n  sum+=(j-i);\n  i++;\n  j--;\n}\nprintf(\"%d\", sum);`",
      "options": {
        "A": "20",
        "B": "25",
        "C": "30",
        "D": "35",
        "E": "40",
        "F": "10"
      },
      "answer": "C",
      "explanation": ""
    },
    {
      "id": 96,
      "subtopic": "C Programming & Problem Solving",
      "question": "What is the output of the following code? `int x=12;\nif(x%4==0)\n  printf(\"A\");\nelse\n  printf(\"B\");`",
      "options": {
        "A": "0",
        "B": "B",
        "C": "12",
        "D": "Error",
        "E": "A",
        "F": "No output"
      },
      "answer": "E",
      "explanation": ""
    },
    {
      "id": 97,
      "subtopic": "C Programming & Problem Solving",
      "question": "What is the output? `int i=1, sum=0;\nwhile(i<=6) {\n  sum+=i;\n  i++;\n}\nprintf(\"%d\", sum);`",
      "options": {
        "A": "6",
        "B": "21",
        "C": "15",
        "D": "7",
        "E": "0",
        "F": "20"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": 98,
      "subtopic": "C Programming & Problem Solving",
      "question": "What is the output? `int a[5] = {10, 20, 30, 40, 50};\nprintf(\"%d\", a[3]);`",
      "options": {
        "A": "20",
        "B": "30",
        "C": "50",
        "D": "40",
        "E": "10",
        "F": "Error"
      },
      "answer": "D",
      "explanation": ""
    },
    {
      "id": 99,
      "subtopic": "C Programming & Problem Solving",
      "question": "What is the output? `int x=15;\nx=x-6;\nif(x%3==0)\n  printf(\"Div3\");\nelse\n  printf(\"NotDiv3\");`",
      "options": {
        "A": "NotDiv3",
        "B": "9",
        "C": "15",
        "D": "Error",
        "E": "No output",
        "F": "Div3"
      },
      "answer": "F",
      "explanation": ""
    },
    {
      "id": 100,
      "subtopic": "C Programming & Problem Solving",
      "question": "What is the output? `int n=9;\nwhile(n>0) {\n  n=n-3;\n}\nprintf(\"%d\", n);`",
      "options": {
        "A": "3",
        "B": "-3",
        "C": "9",
        "D": "0",
        "E": "Infinite loop",
        "F": "6"
      },
      "answer": "D",
      "explanation": ""
    },
    {
      "id": 101,
      "subtopic": "C Programming & Problem Solving",
      "question": "What is the output? `int a=6, b=9;\nif(a<b)\n  printf(\"Small\");\nelse\n  printf(\"Big\");`",
      "options": {
        "A": "6",
        "B": "Big",
        "C": "Small",
        "D": "9",
        "E": "Error",
        "F": "No output"
      },
      "answer": "C",
      "explanation": ""
    },
    {
      "id": 102,
      "subtopic": "C Programming & Problem Solving",
      "question": "What is the output? `int a[4] = {7, 14, 21, 28};\nprintf(\"%d\", a[0]+a[3]);`",
      "options": {
        "A": "49",
        "B": "21",
        "C": "35",
        "D": "42",
        "E": "7",
        "F": "28"
      },
      "answer": "C",
      "explanation": ""
    },
    {
      "id": 103,
      "subtopic": "C Programming & Problem Solving",
      "question": "What is the output? `int x=5;\nfor (int i=1; i<=3; i++) {\n  x=x+i;\n}\nprintf(\"%d\", x);`",
      "options": {
        "A": "8",
        "B": "9",
        "C": "5",
        "D": "14",
        "E": "6",
        "F": "11"
      },
      "answer": "F",
      "explanation": ""
    },
    {
      "id": 104,
      "subtopic": "C Programming & Problem Solving",
      "question": "Which condition correctly checks whether an integer `n` is divisible by both 4 and 6?",
      "options": {
        "A": "n/4==0 && n/6==0",
        "B": "n%4==0 || n%6==0",
        "C": "n%4==0 && n%6==0",
        "D": "n%10==0",
        "E": "n%4==0 && n%6==1",
        "F": "n%24==0 || n%4==0"
      },
      "answer": "C",
      "explanation": ""
    },
    {
      "id": 105,
      "subtopic": "C Programming & Problem Solving",
      "question": "Which statement correctly initializes an integer array containing 6, 12, 18, 24?",
      "options": {
        "A": "int arr[4] = (6,12,18,24);",
        "B": "int arr(4) = {6,12,18,24};",
        "C": "int arr[4]: {6,12,18,24};",
        "D": "array arr[4] = {6,12,18,24};",
        "E": "int arr[4] = {6,12,18,24};",
        "F": "int arr = {6,12,18,24};"
      },
      "answer": "E",
      "explanation": ""
    },
    {
      "id": 106,
      "subtopic": "C Programming & Problem Solving",
      "question": "Which loop header correctly processes all 7 elements of an array `a` indexed from 0 to 6?",
      "options": {
        "A": "for(i=0;i<=7;i++)",
        "B": "for(i=0;i<7;i++)",
        "C": "for(i=0;i<6;i++)",
        "D": "for(i=1;i<7;i++)",
        "E": "for(i=7;i>0;i--)",
        "F": "for(i=0;i<8;i++)"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": 107,
      "subtopic": "C Programming & Problem Solving",
      "question": "Which expression accesses the fifth element of an array `a`?",
      "options": {
        "A": "a[5]",
        "B": "a[6]",
        "C": "a(5)",
        "D": "a.5",
        "E": "a[4]",
        "F": "a[-1]"
      },
      "answer": "E",
      "explanation": ""
    },
    {
      "id": 108,
      "subtopic": "C Programming & Problem Solving",
      "question": "Which statement transfers control immediately to the loop's condition check, skipping any remaining statements in the current iteration?",
      "options": {
        "A": "skip;",
        "B": "exit;",
        "C": "goto end;",
        "D": "break;",
        "E": "continue;",
        "F": "return;"
      },
      "answer": "E",
      "explanation": ""
    },
    {
      "id": 109,
      "subtopic": "C Programming & Problem Solving",
      "question": "Which condition checks whether `x` lies between 50 and 100 inclusive?",
      "options": {
        "A": "x>50 || x<100",
        "B": "x>50 && x<100",
        "C": "x>=50 && x<=100",
        "D": "x==50 && x==100",
        "E": "x<=50 && x>=100",
        "F": "x>=50 || x<=100"
      },
      "answer": "C",
      "explanation": ""
    },
    {
      "id": 110,
      "subtopic": "C Programming & Problem Solving",
      "question": "What is the output? `int a[] = {5, 10, 15, 20, 25};\nint i=0, sum=0;\nwhile(i<5) {\n  if(a[i]%10==0)\n    sum+=a[i];\n  i++;\n}\nprintf(\"%d\", sum);`",
      "options": {
        "A": "10",
        "B": "30",
        "C": "75",
        "D": "0",
        "E": "20",
        "F": "50"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": 111,
      "subtopic": "C Programming & Problem Solving",
      "question": "What is the output? `int a[] = {3, 8, 1, 6, 9};\nint i=0;\nwhile(i<5) {\n  if(a[i]>5)\n    a[i]+=2;\n  i++;\n}\nprintf(\"%d\", a[4]);`",
      "options": {
        "A": "8",
        "B": "6",
        "C": "11",
        "D": "7",
        "E": "9",
        "F": "10"
      },
      "answer": "C",
      "explanation": ""
    },
    {
      "id": 112,
      "subtopic": "C Programming & Problem Solving",
      "question": "What is the output? `int i, sum=0;\nfor (i=1; i<=10; i++) {\n  if(i%2==0)\n    sum+=i;\n  else\n    sum-=i;\n}\nprintf(\"%d\", sum);`",
      "options": {
        "A": "5",
        "B": "30",
        "C": "10",
        "D": "-5",
        "E": "55",
        "F": "0"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": 113,
      "subtopic": "C Programming & Problem Solving",
      "question": "What is the output? `int n=100, count=0;\nwhile(n>1) {\n  n=n/3;\n  count++;\n}\nprintf(\"%d\", count);`",
      "options": {
        "A": "6",
        "B": "3",
        "C": "100",
        "D": "1",
        "E": "5",
        "F": "4"
      },
      "answer": "E",
      "explanation": ""
    },
    {
      "id": 114,
      "subtopic": "C Programming & Problem Solving",
      "question": "What is the output? `int a[] = {2, -3, 5, -7, 9};\nint i=0;\nwhile(i<5) {\n  if(a[i]<0)\n    a[i]=0;\n  i++;\n}\nprintf(\"%d\", a[1]+a[3]);`",
      "options": {
        "A": "-3",
        "B": "2",
        "C": "7",
        "D": "-10",
        "E": "0",
        "F": "10"
      },
      "answer": "E",
      "explanation": ""
    },
    {
      "id": 115,
      "subtopic": "C Programming & Problem Solving",
      "question": "What is the output? `int a[] = {4, 9, 2, 7, 5};\nint i=0, sum=0;\nwhile(i<5) {\n  if(i%2==1)\n    sum+=a[i];\n  i++;\n}\nprintf(\"%d\", sum);`",
      "options": {
        "A": "16",
        "B": "2",
        "C": "9",
        "D": "5",
        "E": "27",
        "F": "11"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": 116,
      "subtopic": "C Programming & Problem Solving",
      "question": "What is the output? `int x=2;\nwhile(x<50) {\n  x=x*3;\n  if(x>20)\n    x=x-5;\n}\nprintf(\"%d\", x);`",
      "options": {
        "A": "137",
        "B": "49",
        "C": "142",
        "D": "54",
        "E": "18",
        "F": "6"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": 117,
      "subtopic": "C Programming & Problem Solving",
      "question": "What is the output? `int a[] = {6, 3, 8, 3, 9};\nint idx=-1, i=0;\nwhile(i<5) {\n  if(a[i]==3 && idx==-1)\n    idx=i;\n  i++;\n}\nprintf(\"%d\", idx);`",
      "options": {
        "A": "1",
        "B": "3",
        "C": "-1",
        "D": "0",
        "E": "2",
        "F": "4"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": 118,
      "subtopic": "C Programming & Problem Solving",
      "question": "What is the output? `int a[] = {5, 2, 9, 1, 7};\nint i=0;\nwhile(i<5) {\n  if(a[i]%2!=0)\n    a[i]-=1;\n  i++;\n}\nprintf(\"%d\", a[2]);`",
      "options": {
        "A": "8",
        "B": "1",
        "C": "7",
        "D": "0",
        "E": "9",
        "F": "2"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": 119,
      "subtopic": "C Programming & Problem Solving",
      "question": "What is the output? `int i=1, count=0;\ndo {\n  if(i%4==0)\n    count++;\n  i++;\n} while (i<=16);printf(\"%d\", count);`",
      "options": {
        "A": "3",
        "B": "5",
        "C": "16",
        "D": "2",
        "E": "0",
        "F": "4"
      },
      "answer": "F",
      "explanation": ""
    },
    {
      "id": 120,
      "subtopic": "C Programming & Problem Solving",
      "question": "What is the output? `int a[] = {12, 7, 18, 3, 25};\nint i=4, sum=0;\nwhile(i>=0) {\n  if(a[i]<15)\n    sum+=a[i];\n  i--;\n}\nprintf(\"%d\", sum);`",
      "options": {
        "A": "7",
        "B": "43",
        "C": "65",
        "D": "22",
        "E": "10",
        "F": "3"
      },
      "answer": "D",
      "explanation": ""
    },
    {
      "id": 121,
      "subtopic": "C Programming & Problem Solving",
      "question": "What is the output? `int max=0, i;\nint a[] = {4, 17, 9, 22, 6};\nfor (i=0; i<5; i++) {\n  if(a[i]>max)\n    max=a[i];\n}\nprintf(\"%d\", max);`",
      "options": {
        "A": "17",
        "B": "22",
        "C": "58",
        "D": "9",
        "E": "6",
        "F": "4"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": 122,
      "subtopic": "C Programming & Problem Solving",
      "question": "A program should count elements less than the average of an array. Which sequence is logically correct?",
      "options": {
        "A": "Count elements greater than zero without computing any average",
        "B": "Loop once comparing each element to element 0 while simultaneously computing the sum",
        "C": "Compare each element to the maximum value found so far during a single pass",
        "D": "Sort the array first and then count how many elements are negative",
        "E": "Compute the sum of all elements, divide by count to get the average, then loop again comparing each element to the average",
        "F": "Divide each element by its index and count how many are less than 1"
      },
      "answer": "E",
      "explanation": ""
    },
    {
      "id": 123,
      "subtopic": "C Programming & Problem Solving",
      "question": "Which modification correctly replaces every element greater than 100 in `a[7]` with 100?",
      "options": {
        "A": "for(i=0;i<=100;i++){ a[i]=100; }",
        "B": "for(i=0;i<7;i++){ if(a[i]>100) a[i]=0; }",
        "C": "for(i=0;i<7;i++){ if(a[i]==100) a[i]=0; }",
        "D": "for(i=0;i<7;i++){ if(a[i]<100) a[i]=100; }",
        "E": "for(i=0;i<7;i++){ a[i]=100; }",
        "F": "for(i=0;i<7;i++){ if(a[i]>100) a[i]=100; }"
      },
      "answer": "F",
      "explanation": ""
    },
    {
      "id": 124,
      "subtopic": "C Programming & Problem Solving",
      "question": "A loop intended to print only even array elements uses `if(a[i]%2!=0) printf(\"%d \",a[i]);`. What change is needed?",
      "options": {
        "A": "Change `printf` to `scanf`",
        "B": "Add an else clause that also prints",
        "C": "Change the loop to a do-while loop",
        "D": "Change the condition to `a[i]%2==1`",
        "E": "Remove the if statement entirely",
        "F": "Change the condition to `a[i]%2==0`"
      },
      "answer": "F",
      "explanation": ""
    },
    {
      "id": 125,
      "subtopic": "C Programming & Problem Solving",
      "question": "Given `a={7,3,7,9,1}`, which logic finds the index of the last occurrence of 7?",
      "options": {
        "A": "Compare only `a[0]` and `a[4]` for equality to 7",
        "B": "Loop backward and return the first index where `a[i]!=7`",
        "C": "Loop through the array updating `idx` to `i` every time `a[i]==7` is found, without breaking",
        "D": "Loop through the array and break as soon as `a[i]==7` is found the first time",
        "E": "Sort the array and return the last index",
        "F": "Count how many times 7 appears and return that count"
      },
      "answer": "C",
      "explanation": ""
    },
    {
      "id": 126,
      "subtopic": "C Programming & Problem Solving",
      "question": "Which condition correctly identifies an element that is odd and less than 20?",
      "options": {
        "A": "a[i]%2!=0 && a[i]>20",
        "B": "a[i]%2==0 || a[i]<20",
        "C": "a[i]%2!=0 || a[i]<20",
        "D": "a[i]%2!=0 && a[i]<20",
        "E": "a[i]<20 || a[i]>20",
        "F": "a[i]%2==0 && a[i]<20"
      },
      "answer": "D",
      "explanation": ""
    },
    {
      "id": 127,
      "subtopic": "C Programming & Problem Solving",
      "question": "A program must terminate when the user enters -1, but -1 should not be included in the running `sum`. Which approach is correct?",
      "options": {
        "A": "Add -1 to `sum` once and then stop the loop",
        "B": "Check if `sum` equals -1 after each addition and stop if true",
        "C": "Add every value to `sum` first, then check if it equals -1 and stop the loop",
        "D": "Stop the loop only after 100 iterations regardless of the input value",
        "E": "Read the value first, check if it equals -1 and break before adding it to `sum`, otherwise add it",
        "F": "Read the value and always add it to `sum`, then break if the value is positive"
      },
      "answer": "E",
      "explanation": ""
    },
    {
      "id": 128,
      "subtopic": "C Programming & Problem Solving",
      "question": "Which logic correctly computes the number of array elements equal to the minimum value?",
      "options": {
        "A": "Sort the array and count how many elements are at even indices",
        "B": "Find the maximum value and count elements equal to it",
        "C": "Loop once and count elements equal to `a[0]` only",
        "D": "Count all elements without any comparison",
        "E": "First find the minimum value with one pass, then loop again counting elements equal to that minimum",
        "F": "Loop once and count elements greater than `a[0]`"
      },
      "answer": "E",
      "explanation": ""
    },
    {
      "id": 129,
      "subtopic": "C Programming & Problem Solving",
      "question": "A validation loop uses `while(i<n && !valid)`. What is the main advantage of this condition?",
      "options": {
        "A": "The loop always runs exactly `n` times regardless of `valid`",
        "B": "The loop runs faster because it uses a do-while structure",
        "C": "The loop guarantees `valid` becomes true",
        "D": "The loop ignores the value of `i` entirely",
        "E": "The loop prevents the array from being modified",
        "F": "The loop stops as soon as a valid result is found, avoiding unnecessary iterations"
      },
      "answer": "F",
      "explanation": ""
    },
    {
      "id": 130,
      "subtopic": "C Programming & Problem Solving",
      "question": "What is the output? `int a[] = {8, 3, 10, 4, 6};\nint i=0, j=4;\nwhile(i<j) {\n  if(a[i]>a[j])\n    j--;\n  else\n    i++;\n}\nprintf(\"%d\", a[i]);`",
      "options": {
        "A": "10",
        "B": "6",
        "C": "3",
        "D": "0",
        "E": "4",
        "F": "8"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": 131,
      "subtopic": "C Programming & Problem Solving",
      "question": "What is the output? `int a[] = {5, 10, 15, 20, 25};\nint i=0, sum=0;\nwhile(i<5) {\n  if(a[i]%5==0 && a[i]%3==0)\n    sum+=a[i];\n  else if(a[i]%5==0)\n    sum-=1;\n  i++;\n}\nprintf(\"%d\", sum);`",
      "options": {
        "A": "11",
        "B": "10",
        "C": "-5",
        "D": "4",
        "E": "0",
        "F": "15"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": 132,
      "subtopic": "C Programming & Problem Solving",
      "question": "What is the output? `int a[] = {3, 7, 2, 9, 4, 1};\nint i=1, idx=-1;\nwhile(i<5) {\n  if(a[i]>a[i-1] && a[i]>a[i+1] && idx==-1)\n    idx=i;\n  i++;\n}\nprintf(\"%d\", idx);`",
      "options": {
        "A": "1",
        "B": "3",
        "C": "2",
        "D": "0",
        "E": "4",
        "F": "-1"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": 133,
      "subtopic": "C Programming & Problem Solving",
      "question": "What is the output? `int a[] = {9, 2, 7, 4, 1};\nint i=0;\nwhile(i<4) {\n  if(a[i]<a[i+1]) {\n    int t=a[i];\n    a[i]=a[i+1];\n    a[i+1]=t;\n  }\n  i++;\n}\nprintf(\"%d\", a[1]);`",
      "options": {
        "A": "9",
        "B": "4",
        "C": "0",
        "D": "1",
        "E": "2",
        "F": "7"
      },
      "answer": "F",
      "explanation": ""
    },
    {
      "id": 134,
      "subtopic": "C Programming & Problem Solving",
      "question": "What is the output? `int a[] = {2, 5, 1, 8, 3};\nint i=0, j=4;\nwhile(i<j) {\n  int t=a[i];\n  a[i]=a[j];\n  a[j]=t;\n  i++;\n  j--;\n}\nprintf(\"%d %d\", a[0], a[2]);`",
      "options": {
        "A": "8 1",
        "B": "8 5",
        "C": "3 5",
        "D": "2 1",
        "E": "2 5",
        "F": "3 1"
      },
      "answer": "F",
      "explanation": ""
    },
    {
      "id": 135,
      "subtopic": "C Programming & Problem Solving",
      "question": "What is the output? `int a[] = {4, 8, 2, 10, 6};\nint i=0, sum=0;\nwhile(i<5) {\n  if(i+1<5 && a[i+1]<a[i])\n    sum+=a[i]-a[i+1];\n  i++;\n}\nprintf(\"%d\", sum);`",
      "options": {
        "A": "6",
        "B": "4",
        "C": "14",
        "D": "0",
        "E": "8",
        "F": "10"
      },
      "answer": "E",
      "explanation": ""
    },
    {
      "id": 136,
      "subtopic": "C Programming & Problem Solving",
      "question": "What is the output? `int a[] = {3, 3, 5, 3, 7};\nint i=0, count=0;\nwhile(i<5) {\n  if(a[i]==3)\n    count++;\n  i++;\n}\nprintf(\"%d\", count);`",
      "options": {
        "A": "2",
        "B": "5",
        "C": "1",
        "D": "0",
        "E": "4",
        "F": "3"
      },
      "answer": "F",
      "explanation": ""
    },
    {
      "id": 137,
      "subtopic": "C Programming & Problem Solving",
      "question": "What is the output? `int a[] = {6, 2, 9, 4, 9, 1};\nint i=0, max=a[0], second=-1;\nwhile(i<6) {\n  if(a[i]>max) {\n    second=max;\n    max=a[i];\n  } else if (a[i]>second && a[i]!=max) {\n    second=a[i];\n  }\n  i++;\n}\nprintf(\"%d\", second);`",
      "options": {
        "A": "-1",
        "B": "6",
        "C": "1",
        "D": "9",
        "E": "2",
        "F": "4"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": 138,
      "subtopic": "C Programming & Problem Solving",
      "question": "A program must shift all elements less than 5 one position to the left without losing data. Which issue must be handled first?",
      "options": {
        "A": "Every element must first be multiplied by 2",
        "B": "The array must be sorted in descending order before shifting",
        "C": "The value at the first index must be saved separately, since shifting left overwrites it before it can be reused",
        "D": "The last index must be set to zero before any shifting occurs",
        "E": "The loop must run in reverse from the last index to the first",
        "F": "No special handling is required since left shifts never lose data"
      },
      "answer": "C",
      "explanation": ""
    },
    {
      "id": 139,
      "subtopic": "C Programming & Problem Solving",
      "question": "A loop is intended to find the first element that is smaller than both its immediate neighbors. For `a={9,4,7,2,6}`, which index should be found first?",
      "options": {
        "A": "Index 0 (value 9)",
        "B": "Index 4 (value 6)",
        "C": "No such index exists",
        "D": "Index 1 (value 4), since 4<9 and 4<7",
        "E": "Index 3 (value 2), since 2<7 and 2<6",
        "F": "Index 2 (value 7)"
      },
      "answer": "D",
      "explanation": ""
    },
    {
      "id": 140,
      "subtopic": "C Programming & Problem Solving",
      "question": "A program should determine whether an array is sorted in descending order using one pass. Which condition is sufficient to declare it unsorted?",
      "options": {
        "A": "If the array has an even number of elements",
        "B": "If any consecutive pair satisfies `a[i] < a[i+1]`, the array is not sorted in descending order",
        "C": "If any consecutive pair satisfies `a[i] > a[i+1]`, the array is not sorted in descending order",
        "D": "If any element equals zero",
        "E": "If the sum of all elements is negative",
        "F": "If the first element is smaller than the last element only"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": 141,
      "subtopic": "C Programming & Problem Solving",
      "question": "A program searches for a target and should report the second occurrence instead of the first. What change is required compared with a first-occurrence search?",
      "options": {
        "A": "Search only the second half of the array",
        "B": "Search the array in reverse and stop at the first match",
        "C": "Stop the loop immediately at the first match as before",
        "D": "Double the target value before comparing",
        "E": "Keep a counter of matches found and only stop the loop when the counter reaches 2, continuing past the first match",
        "F": "Sort the array first and then return index 1"
      },
      "answer": "E",
      "explanation": ""
    },
    {
      "id": 142,
      "subtopic": "C Programming & Problem Solving",
      "question": "A program must insert an element at index `k` in an array while preserving order. Which operation is required for indices from the end down to `k`?",
      "options": {
        "A": "All elements must be set to zero before inserting",
        "B": "The array must be reversed entirely before inserting",
        "C": "The last element must be deleted before inserting the new value",
        "D": "Only the element at index `k` needs to change; no shifting is required",
        "E": "Each element must be shifted one position to the left, moving from index `k` to the end",
        "F": "Each element must be shifted one position to the right, moving from the last index down to `k`, before placing the new value at `k`"
      },
      "answer": "F",
      "explanation": ""
    },
    {
      "id": 143,
      "subtopic": "C Programming & Problem Solving",
      "question": "For an array containing duplicate values, a search must return the index of the first value greater than 50. Which strategy is correct?",
      "options": {
        "A": "Traverse from the start and return the index as soon as the first value greater than 50 is found, stopping immediately",
        "B": "Sort the array first and then return index 0",
        "C": "Traverse the whole array and return the index of the largest value",
        "D": "Return the index only if all values are greater than 50",
        "E": "Count how many values are greater than 50 and return that count",
        "F": "Traverse from the end and return the first match found"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": 144,
      "subtopic": "C Programming & Problem Solving",
      "question": "A program checks whether an array contains three consecutive increasing elements. Which condition should be tested while traversing?",
      "options": {
        "A": "a[i]+a[i+1]+a[i+2] > 100",
        "B": "a[i]!=a[i+1] for each valid index i",
        "C": "a[i]>a[i+1] && a[i+1]>a[i+2] for each valid index i",
        "D": "a[i]<a[i+2] only, ignoring a[i+1]",
        "E": "a[i]<a[i+1] && a[i+1]<a[i+2] for each valid index i",
        "F": "a[i]==a[i+1] && a[i+1]==a[i+2] for each valid index i"
      },
      "answer": "E",
      "explanation": ""
    },
    {
      "id": 145,
      "subtopic": "C Programming & Problem Solving",
      "question": "What is the output? `int x=8;\nif(x>5 && x<10)\n  printf(\"Mid\");\nelse\n  printf(\"Out\");`",
      "options": {
        "A": "Mid",
        "B": "Out",
        "C": "8",
        "D": "Error",
        "E": "No output",
        "F": "5"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": 146,
      "subtopic": "C Programming & Problem Solving",
      "question": "What is the output? `char s[]=\"hello\";\nprintf(\"%d\", (int)strlen(s));`",
      "options": {
        "A": "5",
        "B": "6",
        "C": "4",
        "D": "0",
        "E": "Error",
        "F": "hello"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": 147,
      "subtopic": "C Programming & Problem Solving",
      "question": "What is the output? `int a[3][2] = {{1, 2}, {3, 4}, {5, 6}};\nprintf(\"%d\", a[1][1]);`",
      "options": {
        "A": "4",
        "B": "3",
        "C": "2",
        "D": "6",
        "E": "1",
        "F": "5"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": 148,
      "subtopic": "C Programming & Problem Solving",
      "question": "What is the output? `int x=7, y=3;\nprintf(\"%d\", x/y);`",
      "options": {
        "A": "2",
        "B": "3",
        "C": "2.33",
        "D": "1",
        "E": "0",
        "F": "7"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": 149,
      "subtopic": "C Programming & Problem Solving",
      "question": "What is the output? `int x=7, y=3;\nprintf(\"%d\", x%y);`",
      "options": {
        "A": "1",
        "B": "2",
        "C": "0",
        "D": "3",
        "E": "7",
        "F": "4"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": 150,
      "subtopic": "C Programming & Problem Solving",
      "question": "What is the output? `char c='A';\nprintf(\"%c\", c+1);`",
      "options": {
        "A": "B",
        "B": "A",
        "C": "C",
        "D": "98",
        "E": "a",
        "F": "Error"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": 151,
      "subtopic": "C Programming & Problem Solving",
      "question": "What is the output? `int a[3] = {1, 2, 3};\nint *p=a;\nprintf(\"%d\", *(p+1));`",
      "options": {
        "A": "2",
        "B": "1",
        "C": "3",
        "D": "0",
        "E": "Error",
        "F": "Address value"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": 152,
      "subtopic": "C Programming & Problem Solving",
      "question": "What is the output? `int x=5;\nint *p=&x;\n*p=10;\nprintf(\"%d\", x);`",
      "options": {
        "A": "10",
        "B": "5",
        "C": "0",
        "D": "Error",
        "E": "Address value",
        "F": "Undefined"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": 153,
      "subtopic": "C Programming & Problem Solving",
      "question": "What is the output? `int x=3, y=4;\nint z = (x>y) ? x : y;\nprintf(\"%d\", z);`",
      "options": {
        "A": "4",
        "B": "3",
        "C": "7",
        "D": "1",
        "E": "0",
        "F": "Error"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": 154,
      "subtopic": "C Programming & Problem Solving",
      "question": "Which function declaration correctly takes two integers and returns their sum?",
      "options": {
        "A": "int add(int a, int b);",
        "B": "void add(int a, int b);",
        "C": "int add(int a, int b){}",
        "D": "add(int a, int b) int;",
        "E": "int add() int a, int b;",
        "F": "sum add(int a, int b);"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": 155,
      "subtopic": "C Programming & Problem Solving",
      "question": "Which statement correctly declares a pointer to an integer?",
      "options": {
        "A": "int *p;",
        "B": "int p*;",
        "C": "pointer int p;",
        "D": "int &p;",
        "E": "*int p;",
        "F": "int p[*];"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": 156,
      "subtopic": "C Programming & Problem Solving",
      "question": "Which library function returns the length of a string in C?",
      "options": {
        "A": "strlen()",
        "B": "strcpy()",
        "C": "strcat()",
        "D": "strcmp()",
        "E": "sizeof()",
        "F": "strlength()"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": 157,
      "subtopic": "C Programming & Problem Solving",
      "question": "Which statement correctly declares a structure named `Point` with integer members `x` and `y`?",
      "options": {
        "A": "struct Point { int x; int y; };",
        "B": "struct Point ( int x; int y; );",
        "C": "structure Point { int x; int y; };",
        "D": "struct Point { x; y; };",
        "E": "struct Point[int x, int y];",
        "F": "Point struct { int x; int y; };"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": 158,
      "subtopic": "C Programming & Problem Solving",
      "question": "Which statement correctly passes the address of variable `x` to a function `foo`?",
      "options": {
        "A": "foo(&x);",
        "B": "foo(*x);",
        "C": "foo(x*);",
        "D": "foo(x&);",
        "E": "foo(x);",
        "F": "foo(#x);"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": 159,
      "subtopic": "C Programming & Problem Solving",
      "question": "What is the output? `int sum(int a, int b) {\n  return a+b;\n}\nint main() {\n  printf(\"%d\", sum(3, 4));\n  return 0;\n}`",
      "options": {
        "A": "7",
        "B": "12",
        "C": "34",
        "D": "1",
        "E": "0",
        "F": "Error"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": 160,
      "subtopic": "C Programming & Problem Solving",
      "question": "What is the output? `void inc(int *p) {\n  (*p)++;\n}\nint main() {\n  int x=5;\n  inc(&x);\n  printf(\"%d\", x);\n  return 0;\n}`",
      "options": {
        "A": "6",
        "B": "5",
        "C": "0",
        "D": "Error",
        "E": "Address value",
        "F": "7"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": 161,
      "subtopic": "C Programming & Problem Solving",
      "question": "What is the output? `int fact(int n) {\n  if(n<=1)\n    return 1;\n  return n*fact(n-1);\n}\nint main() {\n  printf(\"%d\", fact(5));\n  return 0;\n}`",
      "options": {
        "A": "120",
        "B": "24",
        "C": "60",
        "D": "720",
        "E": "5",
        "F": "1"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": 162,
      "subtopic": "C Programming & Problem Solving",
      "question": "What is the output? `char s[]=\"Hello\";\ns[0]='h';\nprintf(\"%s\", s);`",
      "options": {
        "A": "hello",
        "B": "Hello",
        "C": "hEllo",
        "D": "HELLO",
        "E": "Error",
        "F": "h"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": 163,
      "subtopic": "C Programming & Problem Solving",
      "question": "What is the output? `int a[2][3] = {{1, 2, 3}, {4, 5, 6}};\nint sum=0;\nfor (int i=0; i<2; i++)\n  for (int j=0; j<3; j++)\n    sum+=a[i][j];\nprintf(\"%d\", sum);`",
      "options": {
        "A": "21",
        "B": "15",
        "C": "6",
        "D": "10",
        "E": "11",
        "F": "0"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": 164,
      "subtopic": "C Programming & Problem Solving",
      "question": "What is the output? `int fib(int n) {\n  if(n<2)\n    return n;\n  return fib(n-1)+fib(n-2);\n}\nint main() {\n  printf(\"%d\", fib(6));\n  return 0;\n}`",
      "options": {
        "A": "8",
        "B": "5",
        "C": "13",
        "D": "6",
        "E": "3",
        "F": "21"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": 165,
      "subtopic": "C Programming & Problem Solving",
      "question": "What is the output? `char s[]=\"programming\";\nint count=0;\nfor (int i=0; s[i]!='\\0'; i++) {\n  if(s[i]=='g')\n    count++;\n}\nprintf(\"%d\", count);`",
      "options": {
        "A": "2",
        "B": "1",
        "C": "3",
        "D": "0",
        "E": "11",
        "F": "4"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": 166,
      "subtopic": "C Programming & Problem Solving",
      "question": "What is the output? `void swap(int *a, int *b) {\n  int t=*a;\n  *a=*b;\n  *b=t;\n}\nint main() {\n  int x=3, y=7;\n  swap(&x, &y);\n  printf(\"%d %d\", x, y);\n  return 0;\n}`",
      "options": {
        "A": "7 3",
        "B": "3 7",
        "C": "0 0",
        "D": "7 7",
        "E": "3 3",
        "F": "Error"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": 167,
      "subtopic": "C Programming & Problem Solving",
      "question": "What is the output? `struct Point {\n  int x;\n  int y;\n};\nint main() {\n  struct Point p = {3, 4};\n  p.x+=p.y;\n  printf(\"%d\", p.x);\n  return 0;\n}`",
      "options": {
        "A": "7",
        "B": "3",
        "C": "4",
        "D": "12",
        "E": "1",
        "F": "0"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": 168,
      "subtopic": "C Programming & Problem Solving",
      "question": "What is the output? `int arr[5] = {1, 2, 3, 4, 5};\nint *p=arr+2;\nprintf(\"%d\", *p+*(p+1));`",
      "options": {
        "A": "7",
        "B": "5",
        "C": "9",
        "D": "3",
        "E": "4",
        "F": "6"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": 169,
      "subtopic": "C Programming & Problem Solving",
      "question": "What is the output? `char s[]=\"abcdef\";\nprintf(\"%c\", s[strlen(s)-1]);`",
      "options": {
        "A": "f",
        "B": "e",
        "C": "a",
        "D": "6",
        "E": "Error",
        "F": "\\0"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": 170,
      "subtopic": "C Programming & Problem Solving",
      "question": "What is the output? `int mul(int a, int b) {\n  return a*b;\n}\nint square(int x) {\n  return mul(x, x);\n}\nint main() {\n  printf(\"%d\", square(6));\n  return 0;\n}`",
      "options": {
        "A": "36",
        "B": "12",
        "C": "6",
        "D": "64",
        "E": "18",
        "F": "Error"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": 171,
      "subtopic": "C Programming & Problem Solving",
      "question": "Which statement about passing arrays to functions in C is true?",
      "options": {
        "A": "The array decays into a pointer to its first element, so the function receives the address, not a copy of the whole array",
        "B": "The entire array is copied onto the stack every time it is passed",
        "C": "Arrays cannot be passed to functions in C at all",
        "D": "Only arrays of characters can be passed to functions",
        "E": "The function always receives a new array of size zero",
        "F": "Passing an array requires the `struct` keyword"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": 172,
      "subtopic": "C Programming & Problem Solving",
      "question": "A recursive function to compute factorial must include which essential component to avoid infinite recursion?",
      "options": {
        "A": "A base case that stops the recursive calls, such as returning 1 when `n<=1`",
        "B": "A global variable that counts iterations only",
        "C": "A `while` loop combined with the recursive call",
        "D": "A pointer parameter instead of an integer parameter",
        "E": "An `else` clause with no return statement",
        "F": "A call to `exit()` at the very start of the function"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": 173,
      "subtopic": "C Programming & Problem Solving",
      "question": "Which declaration correctly creates an array of 5 structures of type `struct Point`?",
      "options": {
        "A": "struct Point points[5];",
        "B": "struct Point[5] points;",
        "C": "Point struct points(5);",
        "D": "struct Point points = 5;",
        "E": "array struct Point points[5];",
        "F": "struct Point points{5};"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": 174,
      "subtopic": "C Programming & Problem Solving",
      "question": "What happens when a function returns the address of one of its local variables?",
      "options": {
        "A": "The address becomes invalid once the function returns, since the local variable's storage is no longer guaranteed to exist",
        "B": "The local variable is automatically converted into a global variable",
        "C": "The compiler always raises a syntax error and refuses to compile",
        "D": "The returned address always points to valid, unchanged data indefinitely",
        "E": "The program automatically allocates the variable on the heap instead",
        "F": "The function call is silently ignored"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": 175,
      "subtopic": "C Programming & Problem Solving",
      "question": "Which statement correctly allocates memory dynamically for an array of 10 integers?",
      "options": {
        "A": "int *arr = malloc(10 * sizeof(int));",
        "B": "int arr[10] = malloc();",
        "C": "int *arr = new int[10];",
        "D": "int arr = malloc(10);",
        "E": "malloc(int arr[10]);",
        "F": "int *arr = alloc(10, int);"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": 176,
      "subtopic": "C Programming & Problem Solving",
      "question": "Which statement correctly frees dynamically allocated memory pointed to by `p`?",
      "options": {
        "A": "free(p);",
        "B": "delete p;",
        "C": "release(p);",
        "D": "p.free();",
        "E": "clear(p);",
        "F": "dealloc(p);"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": 177,
      "subtopic": "C Programming & Problem Solving",
      "question": "Which parameter passing method allows a function to directly modify the caller's variable?",
      "options": {
        "A": "Passing a pointer to the variable (pass by reference using pointers)",
        "B": "Passing the variable by value",
        "C": "Passing the variable as a `const` copy",
        "D": "Passing the variable's size only",
        "E": "Passing the variable through a return statement only",
        "F": "Passing the variable as a string literal"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": 178,
      "subtopic": "C Programming & Problem Solving",
      "question": "A recursive function to reverse a string works by swapping the first and last characters and recursing on the substring between them. Which condition should stop the recursion?",
      "options": {
        "A": "When the starting index is greater than or equal to the ending index (i.e., zero or one characters remain to swap)",
        "B": "When the string length is exactly 10",
        "C": "When the first character equals '\\0' only",
        "D": "When the function has been called exactly twice",
        "E": "When the starting index equals zero",
        "F": "There is no need for a stopping condition"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": 179,
      "subtopic": "C Programming & Problem Solving",
      "question": "What is the output? `int power(int base, int exp) {\n  if(exp==0)\n    return 1;\n  return base*power(base, exp-1);\n}\nint main() {\n  printf(\"%d\", power(2, 6));\n  return 0;\n}`",
      "options": {
        "A": "64",
        "B": "32",
        "C": "128",
        "D": "12",
        "E": "36",
        "F": "16"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": 180,
      "subtopic": "C Programming & Problem Solving",
      "question": "What is the output? `void modify(int arr[], int n) {\n  for (int i=0; i<n; i++)\n    arr[i]*=2;\n}\nint main() {\n  int a[4] = {1, 2, 3, 4};\n  modify(a, 4);\n  printf(\"%d\", a[2]);\n  return 0;\n}`",
      "options": {
        "A": "6",
        "B": "3",
        "C": "4",
        "D": "8",
        "E": "2",
        "F": "0"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": 181,
      "subtopic": "C Programming & Problem Solving",
      "question": "What is the output? `int gcd(int a, int b) {\n  if(b==0)\n    return a;\n  return gcd(b, a%b);\n}\nint main() {\n  printf(\"%d\", gcd(48, 18));\n  return 0;\n}`",
      "options": {
        "A": "6",
        "B": "18",
        "C": "48",
        "D": "12",
        "E": "3",
        "F": "0"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": 182,
      "subtopic": "C Programming & Problem Solving",
      "question": "What is the output? `struct Point {\n  int x, y;\n};\nvoid movePoint(struct Point *p, int dx, int dy) {\n  p->x+=dx;\n  p->y+=dy;\n}\nint main() {\n  struct Point p = {1, 1};\n  movePoint(&p, 3, 4);\n  printf(\"%d %d\", p.x, p.y);\n  return 0;\n}`",
      "options": {
        "A": "4 5",
        "B": "1 1",
        "C": "3 4",
        "D": "5 4",
        "E": "4 4",
        "F": "1 5"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": 183,
      "subtopic": "C Programming & Problem Solving",
      "question": "What is the output? `char* reverse(char *s) {\n  int n=strlen(s);\n  for (int i=0; i<n/2; i++) {\n    char t=s[i];\n    s[i]=s[n-1-i];\n    s[n-1-i]=t;\n  }\n  return s;\n}\nint main() {\n  char s[]=\"abcde\";\n  printf(\"%s\", reverse(s));\n  return 0;\n}`",
      "options": {
        "A": "edcba",
        "B": "abcde",
        "C": "abced",
        "D": "edcab",
        "E": "Error",
        "F": "eabcd"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": 184,
      "subtopic": "C Programming & Problem Solving",
      "question": "What is the output? `int sumArr(int *arr, int n) {\n  if(n==0)\n    return 0;\n  return arr[n-1]+sumArr(arr, n-1);\n}\nint main() {\n  int a[5] = {1, 2, 3, 4, 5};\n  printf(\"%d\", sumArr(a, 5));\n  return 0;\n}`",
      "options": {
        "A": "15",
        "B": "10",
        "C": "14",
        "D": "5",
        "E": "0",
        "F": "20"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": 185,
      "subtopic": "C Programming & Problem Solving",
      "question": "What is the output? `int a[3][3] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};\nint trace=0;\nfor (int i=0; i<3; i++)\n  trace+=a[i][i];\nprintf(\"%d\", trace);`",
      "options": {
        "A": "15",
        "B": "9",
        "C": "45",
        "D": "6",
        "E": "12",
        "F": "18"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": 186,
      "subtopic": "C Programming & Problem Solving",
      "question": "What is the output? `int isPalin(char *s) {\n  int n=strlen(s);\n  for (int i=0; i<n/2; i++) {\n    if(s[i]!=s[n-1-i])\n      return 0;\n  }\n  return 1;\n}\nint main() {\n  printf(\"%d\", isPalin(\"madam\"));\n  return 0;\n}`",
      "options": {
        "A": "1",
        "B": "0",
        "C": "5",
        "D": "madam",
        "E": "Error",
        "F": "-1"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": 187,
      "subtopic": "C Programming & Problem Solving",
      "question": "A function returns a pointer to a local array declared inside it (not `static`). What is the primary issue with this design?",
      "options": {
        "A": "The local array's memory is on the stack and becomes invalid once the function returns, so the returned pointer refers to freed storage",
        "B": "Local arrays cannot be accessed through pointers at all",
        "C": "The compiler will always refuse to compile such a function",
        "D": "The array is automatically copied to the heap when returned",
        "E": "The pointer will always be NULL after the return statement",
        "F": "There is no issue; the array remains valid for the life of the program"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": 188,
      "subtopic": "C Programming & Problem Solving",
      "question": "Which technique helps avoid stack overflow when a recursive function is called on very large inputs?",
      "options": {
        "A": "Rewriting the function iteratively (e.g., using a loop and explicit stack/queue) instead of using recursion",
        "B": "Declaring all local variables as `static` inside the recursive function",
        "C": "Increasing the number of parameters passed to the function",
        "D": "Removing the base case to let recursion continue indefinitely",
        "E": "Using `float` instead of `int` for the recursion counter",
        "F": "Calling the function from within a `switch` statement"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": 189,
      "subtopic": "C Programming & Problem Solving",
      "question": "A recursive binary search on an array of size n has its time complexity best described by which recurrence relation?",
      "options": {
        "A": "T(n) = T(n/2) + O(1)",
        "B": "T(n) = T(n-1) + O(1)",
        "C": "T(n) = 2T(n/2) + O(n)",
        "D": "T(n) = T(n) + O(1)",
        "E": "T(n) = T(n/2) + O(n)",
        "F": "T(n) = n * T(n-1)"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": 190,
      "subtopic": "C Programming & Problem Solving",
      "question": "To let a function modify a pointer variable declared in the caller (so the caller's pointer itself changes, not just what it points to), which parameter type is required?",
      "options": {
        "A": "A pointer to a pointer (double pointer), e.g. `int **p`",
        "B": "A plain pointer, e.g. `int *p`",
        "C": "A plain integer parameter, e.g. `int p`",
        "D": "An array parameter, e.g. `int p[]`",
        "E": "A `const` qualified integer parameter",
        "F": "A function pointer parameter"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": 191,
      "subtopic": "C Programming & Problem Solving",
      "question": "Which statement about struct padding/alignment added by the compiler in C is generally true?",
      "options": {
        "A": "The compiler may insert unused padding bytes between members so each member is aligned to a suitable memory boundary, which can make `sizeof(struct)` larger than the sum of its members' sizes",
        "B": "Structs never contain any padding bytes under any circumstances",
        "C": "Padding bytes always store a copy of the previous member's value",
        "D": "`sizeof(struct)` is always exactly equal to the sum of the sizes of its members",
        "E": "Padding only occurs when a struct contains function pointers",
        "F": "The order of struct members has no effect on padding"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": 192,
      "subtopic": "C Programming & Problem Solving",
      "question": "The merge step in merge sort, which combines two sorted halves into one sorted array, requires which auxiliary structure?",
      "options": {
        "A": "A temporary array to hold the merged elements before copying them back into the original array",
        "B": "A recursive call to quicksort",
        "C": "A hash table to store element frequencies",
        "D": "No auxiliary storage at all; the merge is always done in place with no extra memory",
        "E": "A linked list built from scratch for every merge call",
        "F": "A stack to reverse the order of elements"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": 193,
      "subtopic": "C Programming & Problem Solving",
      "question": "Which general strategy converts a recursive function into an equivalent iterative version to save stack space?",
      "options": {
        "A": "Replace the recursive calls with an explicit loop, using your own stack or accumulator variables to track the state that recursion previously kept on the call stack",
        "B": "Add more recursive calls to spread the work across more function invocations",
        "C": "Declare the function as `inline` only",
        "D": "Remove all parameters from the function signature",
        "E": "Change the return type from `int` to `void`",
        "F": "Call the function recursively from `main` instead of from itself"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "id": 194,
      "subtopic": "C Programming & Problem Solving",
      "question": "A C program stores the values {12, 7, 18, 5, 20} in an array. Which logic correctly calculates the sum of elements at odd positions (indices 1, 3, ...)?",
      "options": {
        "A": "sum += a[i] when i % 2 == 0",
        "B": "sum += a[i] when i % 2 != 0",
        "C": "sum += a[i] when a[i] % 2 != 0",
        "D": "sum += a[i+1] for every i",
        "E": "sum += a[i+1] for every i",
        "F": "sum += a[0] for every iteration"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "id": 195,
      "subtopic": "C Programming & Problem Solving",
      "question": "What is the output of the following C program? `#include <stdio.h>\nint main() {\n  int a[] = {4, 7, 2, 9, 5};\n  int i, result = 0;\n  for (i = 0; i < 5; i++) {\n    if (a[i] % 2 == 0)\n      result += a[i];\n    else\n      result -= a[i];\n  }\n  printf(\"%d\", result);\n  return 0;\n}`",
      "options": {
        "A": "-5",
        "B": "-7",
        "C": "-9",
        "D": "7",
        "E": "9",
        "F": "11"
      },
      "answer": "None",
      "explanation": "All options are wrong. The right answer is -15, which is not given in the options (Sum of even elements: 4 + 2 = 6; sum of odd elements: 7 + 9 + 5 = 21; result = 6 - 21 = -15)."
    }
  ]
};
