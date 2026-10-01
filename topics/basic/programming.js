// ==========================================
window.TOPICS = window.TOPICS || {};
window.TOPICS["basic_programming"] = {
  "id": "basic_programming",
  "level": "basic",
  "title": "Programming",
  "icon": "💻",
  "description": "200 fundamental C programming multiple choice questions covering syntax, data types, operators, control flow, functions, arrays, strings, pointers, dynamic memory, and structures.",
  "questions": [
    {
      "id": 1,
      "subtopic": "Introduction & Toolchain",
      "question": "What is the correct file extension for a C source file?",
      "options": {
        "A": ".py",
        "B": ".cpp",
        "C": ".java",
        "D": ".cs",
        "E": ".c",
        "F": ".h"
      },
      "answer": "E",
      "explanation": "C source code files use the .c file extension, whereas header files use .h, C++ uses .cpp, and Python uses .py."
    },
    {
      "id": 2,
      "subtopic": "Introduction & Toolchain",
      "question": "Which command is commonly used to compile a C program using GCC?",
      "options": {
        "A": "node file.js",
        "B": "gcc file.c -o out",
        "C": "python file.py",
        "D": "run file.c",
        "E": "compile file.c",
        "F": "javac file.java"
      },
      "answer": "B",
      "explanation": "'gcc file.c -o out' invokes the GNU Compiler Collection to compile file.c into an executable binary named 'out'."
    },
    {
      "id": 3,
      "subtopic": "Introduction & Toolchain",
      "question": "What is the entry point of every C program?",
      "options": {
        "A": "begin()",
        "B": "start()",
        "C": "init()",
        "D": "main()",
        "E": "run()",
        "F": "execute()"
      },
      "answer": "D",
      "explanation": "Execution in every conforming C program begins at the 'main()' function."
    },
    {
      "id": 4,
      "subtopic": "Introduction & Toolchain",
      "question": "Which symbol is used to include a header file in C?",
      "options": {
        "A": "$",
        "B": "&",
        "C": "@",
        "D": "%",
        "E": "!",
        "F": "#"
      },
      "answer": "F",
      "explanation": "Preprocessor directives in C begin with the '#' character, as in '#include <stdio.h>'."
    },
    {
      "id": 5,
      "subtopic": "Introduction & Toolchain",
      "question": "Which of these is a valid single-line comment in C?",
      "options": {
        "A": "** comment **",
        "B": "# comment",
        "C": "<!-- comment -->",
        "D": "// comment",
        "E": "\" comment",
        "F": "comment"
      },
      "answer": "D",
      "explanation": "Single-line comments in modern C (C99 onwards) start with '//', while multi-line comments use '/* ... */'."
    },
    {
      "id": 6,
      "subtopic": "Introduction & Toolchain",
      "question": "What does printf functionally stand for?",
      "options": {
        "A": "print fast",
        "B": "print file",
        "C": "print formatted",
        "D": "print function",
        "E": "print form",
        "F": "print final"
      },
      "answer": "C",
      "explanation": "printf stands for 'print formatted', as it formats strings and values according to conversion specifiers."
    },
    {
      "id": 7,
      "subtopic": "Introduction & Toolchain",
      "question": "Which function reads formatted input from the user in C?",
      "options": {
        "A": "Console.ReadLine()",
        "B": "getline()",
        "C": "input()",
        "D": "scanf()",
        "E": "readline()",
        "F": "cin>>"
      },
      "answer": "D",
      "explanation": "scanf() (scan formatted) is the standard C library function for reading formatted input from standard input."
    },
    {
      "id": 8,
      "subtopic": "Introduction & Toolchain",
      "question": "On Linux, what is the default name of a compiled C executable if not specified with -o?",
      "options": {
        "A": "file.class",
        "B": "file.bin",
        "C": "a.out",
        "D": "file.exe",
        "E": "file.obj",
        "F": "file.out.c"
      },
      "answer": "C",
      "explanation": "By default, GCC on Unix-like operating systems outputs the compiled executable as 'a.out' (assembler output)."
    },
    {
      "id": 9,
      "subtopic": "Introduction & Toolchain",
      "question": "Which of the following is NOT a C compiler?",
      "options": {
        "A": "Clang",
        "B": "GCC",
        "C": "Turbo C",
        "D": "MSVC",
        "E": "Tiny C",
        "F": "JVM"
      },
      "answer": "F",
      "explanation": "JVM (Java Virtual Machine) is a runtime environment that executes Java bytecode, not a C compiler."
    },
    {
      "id": 10,
      "subtopic": "Introduction & Toolchain",
      "question": "What does #include<stdio.h> do?",
      "options": {
        "A": "Defines a macro named stdio",
        "B": "Declares the main function",
        "C": "Includes the standard I/O library",
        "D": "Links only printf",
        "E": "Creates a header file",
        "F": "Compiles the program"
      },
      "answer": "C",
      "explanation": "#include <stdio.h> tells the preprocessor to include the standard input/output library declarations (such as printf and scanf)."
    },
    {
      "id": 11,
      "subtopic": "Introduction & Toolchain",
      "question": "In C, every statement must end with:",
      "options": {
        "A": ".",
        "B": ":",
        "C": "->",
        "D": ",",
        "E": ";",
        "F": "!"
      },
      "answer": "E",
      "explanation": "In C syntax, every statement must terminate with a semicolon (;)."
    },
    {
      "id": 12,
      "subtopic": "Introduction & Toolchain",
      "question": "Which brace marks the start of a function body in standard C style?",
      "options": {
        "A": "[",
        "B": "{",
        "C": "<",
        "D": "(",
        "E": "|",
        "F": "#"
      },
      "answer": "B",
      "explanation": "Compound statements and function bodies in C are enclosed in curly braces '{' and '}'."
    },
    {
      "id": 13,
      "subtopic": "Introduction & Toolchain",
      "question": "Which symbol denotes the beginning of a preprocessor directive?",
      "options": {
        "A": "@",
        "B": "&",
        "C": "$",
        "D": "%",
        "E": "#",
        "F": "~"
      },
      "answer": "E",
      "explanation": "All preprocessor directives in C (like #define, #include, #ifdef) begin with the '#' symbol."
    },
    {
      "id": 14,
      "subtopic": "Introduction & Toolchain",
      "question": "Which of these is the correct signature for main taking no command-line arguments?",
      "options": {
        "A": "def main():",
        "B": "int Main()",
        "C": "public int main()",
        "D": "void main(void)",
        "E": "int main(void)",
        "F": "main() void"
      },
      "answer": "E",
      "explanation": "According to the ISO C standard, 'int main(void)' is the standard conforming signature for main without parameters."
    },
    {
      "id": 15,
      "subtopic": "Introduction & Toolchain",
      "question": "Which of these best describes the C programming language?",
      "options": {
        "A": "A functional language",
        "B": "An object-oriented scripting language",
        "C": "A high-level structured procedural language",
        "D": "An assembly language",
        "E": "A query language",
        "F": "A markup language"
      },
      "answer": "C",
      "explanation": "C is a statically typed, structured, procedural language designed for efficiency and systems programming."
    },
    {
      "id": 16,
      "subtopic": "Introduction & Toolchain",
      "question": "Who is credited with developing the C programming language?",
      "options": {
        "A": "Brendan Eich",
        "B": "Dennis Ritchie",
        "C": "Bjarne Stroustrup",
        "D": "Anders Hejlsberg",
        "E": "James Gosling",
        "F": "Guido van Rossum"
      },
      "answer": "B",
      "explanation": "Dennis Ritchie developed the C programming language in the early 1970s at Bell Laboratories."
    },
    {
      "id": 17,
      "subtopic": "Introduction & Toolchain",
      "question": "At which organization was C originally developed?",
      "options": {
        "A": "Google",
        "B": "IBM",
        "C": "Bell Labs",
        "D": "Oracle",
        "E": "Microsoft",
        "F": "Apple"
      },
      "answer": "C",
      "explanation": "C was originally developed at AT&T Bell Laboratories to re-implement the Unix operating system."
    },
    {
      "id": 18,
      "subtopic": "Introduction & Toolchain",
      "question": "Which step comes right after writing C source code, before it can run?",
      "options": {
        "A": "Compilation",
        "B": "Encryption",
        "C": "Virtualization",
        "D": "Direct interpretation",
        "E": "Packaging",
        "F": "Deployment"
      },
      "answer": "A",
      "explanation": "C is a compiled language; source code must first be compiled (and linked) into machine code before execution."
    },
    {
      "id": 19,
      "subtopic": "Introduction & Toolchain",
      "question": "What is the main role of a linker in the C build process?",
      "options": {
        "A": "It checks syntax only",
        "B": "It only formats source code",
        "C": "It manages memory at runtime",
        "D": "It executes the program",
        "E": "It converts C directly to machine code without compiling",
        "F": "It combines object files and libraries into a single executable"
      },
      "answer": "F",
      "explanation": "The linker bundles together compiled object modules (.o/.obj) and external library routines into a final runnable executable."
    },
    {
      "id": 20,
      "subtopic": "Introduction & Toolchain",
      "question": "Which return value from main() conventionally signals successful execution to the OS?",
      "options": {
        "A": "NULL",
        "B": "100",
        "C": "void",
        "D": "1",
        "E": "0",
        "F": "-1"
      },
      "answer": "E",
      "explanation": "Returning 0 (or EXIT_SUCCESS) from main() indicates to the operating system that the program terminated successfully."
    },
    {
      "id": 21,
      "subtopic": "Data Types & Variables",
      "question": "Which data type is used to store a single character in C?",
      "options": {
        "A": "char",
        "B": "bool",
        "C": "float",
        "D": "string",
        "E": "double",
        "F": "int"
      },
      "answer": "A",
      "explanation": "The 'char' keyword is used to store a single character and occupies 1 byte of memory."
    },
    {
      "id": 22,
      "subtopic": "Data Types & Variables",
      "question": "What is the size of a float in C on most modern systems?",
      "options": {
        "A": "16 bytes",
        "B": "1 byte",
        "C": "4 bytes",
        "D": "It varies with the variable name",
        "E": "8 bytes",
        "F": "2 bytes"
      },
      "answer": "C",
      "explanation": "On standard IEEE 754 modern architectures, a single-precision 'float' occupies 4 bytes (32 bits)."
    },
    {
      "id": 23,
      "subtopic": "Data Types & Variables",
      "question": "What is the size of a double in C on most modern systems?",
      "options": {
        "A": "8 bytes",
        "B": "4 bytes",
        "C": "2 bytes",
        "D": "1 byte",
        "E": "16 bytes",
        "F": "12 bytes"
      },
      "answer": "A",
      "explanation": "A standard double-precision floating-point number ('double') occupies 8 bytes (64 bits)."
    },
    {
      "id": 24,
      "subtopic": "Data Types & Variables",
      "question": "Which type qualifier makes a variable's value unmodifiable after initialization?",
      "options": {
        "A": "const",
        "B": "register",
        "C": "auto",
        "D": "extern",
        "E": "static",
        "F": "volatile"
      },
      "answer": "A",
      "explanation": "The 'const' qualifier specifies that a variable's value is read-only and cannot be altered after initialization."
    },
    {
      "id": 25,
      "subtopic": "Data Types & Variables",
      "question": "What does sizeof(int) typically return on most 32-bit/64-bit systems?",
      "options": {
        "A": "2",
        "B": "8",
        "C": "1",
        "D": "16",
        "E": "It depends on the OS name",
        "F": "4"
      },
      "answer": "F",
      "explanation": "On modern 32-bit and 64-bit systems (ILP32 and LP64 / LLP64 data models), standard 'int' is 4 bytes."
    },
    {
      "id": 26,
      "subtopic": "Data Types & Variables",
      "question": "Which type represents boolean values in C when stdbool.h is included?",
      "options": {
        "A": "Flag",
        "B": "boolean",
        "C": "bool only, natively",
        "D": "_Bool",
        "E": "Bit",
        "F": "Logic"
      },
      "answer": "D",
      "explanation": "C99 introduced the native unsigned integer type '_Bool'. Including <stdbool.h> defines 'bool' as an alias for '_Bool'."
    },
    {
      "id": 27,
      "subtopic": "Data Types & Variables",
      "question": "What is implicit (automatic) type conversion in C also known as?",
      "options": {
        "A": "Type casting",
        "B": "Type coercion",
        "C": "Type mutation",
        "D": "Type overloading",
        "E": "Type binding",
        "F": "Type inference"
      },
      "answer": "B",
      "explanation": "Implicit automatic type conversion done by the compiler according to type promotion rules is called type coercion."
    },
    {
      "id": 28,
      "subtopic": "Data Types & Variables",
      "question": "Which of these correctly declares and initializes a float variable?",
      "options": {
        "A": "3.14 = float f;",
        "B": "float f = \"3.14\";",
        "C": "float(f) = 3.14;",
        "D": "f float = 3.14;",
        "E": "float f = 3.14;",
        "F": "float f == 3.14;"
      },
      "answer": "E",
      "explanation": "'float f = 3.14;' uses the correct syntax: data type, followed by variable identifier, assignment operator, and numeric literal."
    },
    {
      "id": 29,
      "subtopic": "Data Types & Variables",
      "question": "What is the effect of declaring a variable as unsigned int?",
      "options": {
        "A": "It always changes the variable's size to 8 bytes",
        "B": "It prevents integer overflow entirely",
        "C": "It disables arithmetic operations",
        "D": "It removes the need for casting",
        "E": "It automatically converts the variable to float",
        "F": "It restricts the variable to non-negative values, extending the positive range"
      },
      "answer": "F",
      "explanation": "An unsigned int cannot store negative numbers, which frees the sign bit and approximately doubles the maximum positive range."
    },
    {
      "id": 30,
      "subtopic": "Data Types & Variables",
      "question": "Which type modifier increases the storage size of an int (system dependent)?",
      "options": {
        "A": "static",
        "B": "register",
        "C": "signed",
        "D": "short",
        "E": "const",
        "F": "long"
      },
      "answer": "F",
      "explanation": "The 'long' modifier increases the range and storage size of integer types (e.g. 'long int' or 'long long int')."
    },
    {
      "id": 31,
      "subtopic": "Data Types & Variables",
      "question": "What is explicit type conversion performed manually by the programmer called?",
      "options": {
        "A": "Type widening",
        "B": "Type promotion",
        "C": "Type casting",
        "D": "Type coercion",
        "E": "Auto conversion",
        "F": "Type folding"
      },
      "answer": "C",
      "explanation": "Explicitly converting a value from one data type to another using the (type) syntax is called type casting."
    },
    {
      "id": 32,
      "subtopic": "Data Types & Variables",
      "question": "Which is the correct syntax to explicitly cast a float variable x to int?",
      "options": {
        "A": "cast<int>(x)",
        "B": "to_int(x)",
        "C": "x.toInt()",
        "D": "(int)x",
        "E": "int x()",
        "F": "int(x)"
      },
      "answer": "D",
      "explanation": "In C, explicit casting is achieved by prefixing the expression with the desired type in parentheses: '(int)x'."
    },
    {
      "id": 33,
      "subtopic": "Data Types & Variables",
      "question": "What value does an uninitialized local variable hold in C?",
      "options": {
        "A": "A compilation error occurs",
        "B": "Always NULL",
        "C": "Always 0",
        "D": "The previous program's value",
        "E": "An indeterminate/garbage value",
        "F": "Always -1"
      },
      "answer": "E",
      "explanation": "Automatic local variables in C are allocated on the stack and contain whatever garbage bit pattern previously resided in that memory."
    },
    {
      "id": 34,
      "subtopic": "Data Types & Variables",
      "question": "Which keyword makes a local variable retain its value between successive function calls?",
      "options": {
        "A": "const",
        "B": "register",
        "C": "extern",
        "D": "volatile",
        "E": "static",
        "F": "auto"
      },
      "answer": "E",
      "explanation": "A 'static' local variable is allocated in static storage and preserves its value across multiple invocations of the enclosing function."
    },
    {
      "id": 35,
      "subtopic": "Data Types & Variables",
      "question": "Which of the following is a valid variable name in C?",
      "options": {
        "A": "2value",
        "B": "value-1",
        "C": "value#",
        "D": "value 1",
        "E": "int",
        "F": "_value"
      },
      "answer": "F",
      "explanation": "Identifiers in C can begin with an underscore or letter, and contain letters, digits, and underscores. Hyphens, spaces, leading digits, and keywords are invalid."
    },
    {
      "id": 36,
      "subtopic": "Data Types & Variables",
      "question": "What effect does the 'unsigned' modifier have on an int variable?",
      "options": {
        "A": "It restricts it to storing only non-negative values",
        "B": "It increases decimal precision",
        "C": "It doubles its byte size",
        "D": "It makes it a constant",
        "E": "It converts it to a char",
        "F": "It converts it to a floating-point type"
      },
      "answer": "A",
      "explanation": "The 'unsigned' specifier restricts values to non-negative integers (0 to 2^n - 1)."
    },
    {
      "id": 37,
      "subtopic": "Data Types & Variables",
      "question": "Which data type would you choose to store an integer larger than a normal int can hold?",
      "options": {
        "A": "long long",
        "B": "float",
        "C": "char",
        "D": "void",
        "E": "_Bool",
        "F": "short"
      },
      "answer": "A",
      "explanation": "'long long' (or 'long long int') provides at least 64 bits of integer precision, much larger than standard 32-bit 'int'."
    },
    {
      "id": 38,
      "subtopic": "Data Types & Variables",
      "question": "Which format specifier does scanf require to correctly read a double value?",
      "options": {
        "A": "%lf",
        "B": "%d",
        "C": "%s",
        "D": "%ld",
        "E": "%f",
        "F": "%c"
      },
      "answer": "A",
      "explanation": "scanf requires '%lf' (long float) to store into a double, whereas printf can use '%f' due to default argument promotions."
    },
    {
      "id": 39,
      "subtopic": "Data Types & Variables",
      "question": "Which format specifier is used to print a single character with printf?",
      "options": {
        "A": "%s",
        "B": "%f",
        "C": "%x",
        "D": "%u",
        "E": "%d",
        "F": "%c"
      },
      "answer": "F",
      "explanation": "'%c' formats and outputs a single character in printf and scanf."
    },
    {
      "id": 40,
      "subtopic": "Data Types & Variables",
      "question": "Which of these correctly declares multiple int variables on one line?",
      "options": {
        "A": "int (a, b, c);",
        "B": "int a b c;",
        "C": "int a & b & c;",
        "D": "int a; b; c;",
        "E": "int a, int b, int c;",
        "F": "int a, b, c;"
      },
      "answer": "F",
      "explanation": "Multiple variables of the same type are declared in a comma-separated list: 'int a, b, c;'."
    },
    {
      "id": 41,
      "subtopic": "Operators & Expressions",
      "question": "Which operator is used for the modulus (remainder) operation in C?",
      "options": {
        "A": "/",
        "B": "//",
        "C": "mod",
        "D": "rem",
        "E": "\\",
        "F": "%"
      },
      "answer": "F",
      "explanation": "The '%' operator computes the remainder of integer division in C."
    },
    {
      "id": 42,
      "subtopic": "Operators & Expressions",
      "question": "What does the operator && represent?",
      "options": {
        "A": "Bitwise AND",
        "B": "Bitwise OR",
        "C": "Assignment",
        "D": "Equality",
        "E": "Logical OR",
        "F": "Logical AND"
      },
      "answer": "F",
      "explanation": "'&&' is the short-circuiting Logical AND operator, returning 1 if both operands evaluate to non-zero, else 0."
    },
    {
      "id": 43,
      "subtopic": "Operators & Expressions",
      "question": "What does the operator == represent?",
      "options": {
        "A": "Bitwise XOR",
        "B": "Equality comparison",
        "C": "Greater than",
        "D": "Assignment",
        "E": "Not equal",
        "F": "Logical AND"
      },
      "answer": "B",
      "explanation": "'==' checks whether the left and right operands are equal, returning 1 if true and 0 if false."
    },
    {
      "id": 44,
      "subtopic": "Operators & Expressions",
      "question": "What is the result of the integer division 7 / 2 in C?",
      "options": {
        "A": "4",
        "B": "3.5",
        "C": "3",
        "D": "3.0",
        "E": "0",
        "F": "Error"
      },
      "answer": "C",
      "explanation": "When both operands of '/' are integers, C performs integer division and truncates any fractional portion toward zero, yielding 3."
    },
    {
      "id": 45,
      "subtopic": "Operators & Expressions",
      "question": "What is the result of the expression 7 % 2 in C?",
      "options": {
        "A": "0",
        "B": "2",
        "C": "Error",
        "D": "1",
        "E": "3",
        "F": "3.5"
      },
      "answer": "D",
      "explanation": "7 divided by 2 is 3 with a remainder of 1. Therefore, 7 % 2 yields 1."
    },
    {
      "id": 46,
      "subtopic": "Operators & Expressions",
      "question": "Which operator increases a variable's value by 1?",
      "options": {
        "A": "<>",
        "B": "++",
        "C": "--",
        "D": "**",
        "E": "+1",
        "F": "+="
      },
      "answer": "B",
      "explanation": "The unary increment operator '++' increments the operand variable's value by 1."
    },
    {
      "id": 47,
      "subtopic": "Operators & Expressions",
      "question": "What does the ternary operator ?: do in C?",
      "options": {
        "A": "Declares a pointer",
        "B": "Performs modulus",
        "C": "Performs multiplication",
        "D": "Performs a loop",
        "E": "Provides a shorthand for an if-else expression",
        "F": "Compares two strings"
      },
      "answer": "E",
      "explanation": "The conditional ternary operator (condition ? expr1 : expr2) evaluates expr1 if condition is true, else expr2."
    },
    {
      "id": 48,
      "subtopic": "Operators & Expressions",
      "question": "Among these, which operator has the highest precedence?",
      "options": {
        "A": "Equality (==)",
        "B": "&& logical AND",
        "C": "|| logical OR",
        "D": "Assignment (=)",
        "E": "=+ addition",
        "F": "() parentheses"
      },
      "answer": "F",
      "explanation": "Parentheses '()' have the highest precedence, overriding any default operator precedence."
    },
    {
      "id": 49,
      "subtopic": "Operators & Expressions",
      "question": "What does the bitwise operator | perform?",
      "options": {
        "A": "Bitwise OR",
        "B": "Bitwise NOT",
        "C": "Bitwise XOR",
        "D": "Left shift",
        "E": "Logical OR",
        "F": "Bitwise AND"
      },
      "answer": "A",
      "explanation": "The single vertical bar '|' performs a bitwise inclusive OR on each corresponding bit pair."
    },
    {
      "id": 50,
      "subtopic": "Operators & Expressions",
      "question": "What does the bitwise operator ^ perform?",
      "options": {
        "A": "Exponentiation",
        "B": "Right shift",
        "C": "Bitwise OR",
        "D": "Bitwise NOT",
        "E": "Bitwise XOR",
        "F": "Bitwise AND"
      },
      "answer": "E",
      "explanation": "In C, '^' is the bitwise exclusive OR (XOR) operator, not exponentiation."
    },
    {
      "id": 51,
      "subtopic": "Operators & Expressions",
      "question": "Which operator performs a left bit-shift in C?",
      "options": {
        "A": ">>",
        "B": "<",
        "C": ">",
        "D": "~",
        "E": "<=",
        "F": "<<"
      },
      "answer": "F",
      "explanation": "'<<' shifts bits to the left, effectively multiplying an integer by 2 for each shifted position (without overflow)."
    },
    {
      "id": 52,
      "subtopic": "Operators & Expressions",
      "question": "What does the ! operator do in C?",
      "options": {
        "A": "Factorial",
        "B": "Logical NOT",
        "C": "Address-of",
        "D": "Decrement",
        "E": "Not equal",
        "F": "Bitwise NOT"
      },
      "answer": "B",
      "explanation": "The unary '!' operator is Logical NOT, inverting truth values: non-zero becomes 0, and 0 becomes 1."
    },
    {
      "id": 53,
      "subtopic": "Operators & Expressions",
      "question": "What is the output of the expression 5 == 5 in C?",
      "options": {
        "A": "TRUE.",
        "B": "5",
        "C": "Error",
        "D": "0",
        "E": "1",
        "F": "FALSE."
      },
      "answer": "E",
      "explanation": "Relational and equality operators in C evaluate to the integer value 1 for true and 0 for false."
    },
    {
      "id": 54,
      "subtopic": "Operators & Expressions",
      "question": "Which operator combines addition and assignment into one step?",
      "options": {
        "A": "+=",
        "B": "Arrow syntax (=>)",
        "C": "Reordered plus (=+)",
        "D": "++",
        "E": "+==",
        "F": "=++"
      },
      "answer": "A",
      "explanation": "The compound assignment operator '+=' adds the right operand to the left variable and stores the result back into that variable."
    },
    {
      "id": 55,
      "subtopic": "Operators & Expressions",
      "question": "What does the ~ operator do in C?",
      "options": {
        "A": "Performs a logical NOT",
        "B": "Performs modulus",
        "C": "Performs a bitwise complement (NOT)",
        "D": "Performs XOR",
        "E": "Returns the address-of a variable",
        "F": "Dereferences a pointer"
      },
      "answer": "C",
      "explanation": "The tilde '~' operator performs a bitwise NOT (one's complement), inverting every bit of its operand."
    },
    {
      "id": 56,
      "subtopic": "Operators & Expressions",
      "question": "What is operator precedence?",
      "options": {
        "A": "A memory address",
        "B": "A type of loop construct",
        "C": "A data type",
        "D": "The order in which operators are evaluated in an expression",
        "E": "The size of an operator in bytes",
        "F": "The number of operands an operator has"
      },
      "answer": "D",
      "explanation": "Operator precedence defines the evaluation priority of different operators when they appear together in an expression."
    },
    {
      "id": 57,
      "subtopic": "Operators & Expressions",
      "question": "In the expression a = b = 5, what determines that it is evaluated right-to-left?",
      "options": {
        "A": "Memory allocation order",
        "B": "Operator precedence",
        "C": "The compiler version",
        "D": "Operator associativity",
        "E": "Type casting rules",
        "F": "Loop direction"
      },
      "answer": "D",
      "explanation": "Associativity determines the grouping order of operators that have identical precedence. Assignment operators (=) associate right-to-left."
    },
    {
      "id": 58,
      "subtopic": "Operators & Expressions",
      "question": "How does x-- differ from --x when used in an expression?",
      "options": {
        "A": "x-- only works with float variables",
        "B": "They behave identically in every context",
        "C": "Both decrement x, but x-- returns the old value while --x returns the new value",
        "D": "x-- increases the value while --x decreases it",
        "E": "x-- is not valid C syntax",
        "F": "--x is not valid C syntax"
      },
      "answer": "C",
      "explanation": "Postfix x-- yields the current value before decrementing, whereas prefix --x decrements first and returns the updated value."
    },
    {
      "id": 59,
      "subtopic": "Operators & Expressions",
      "question": "Which operator is used to check for inequality between two values in C?",
      "options": {
        "A": "<=>",
        "B": "!==",
        "C": "<>",
        "D": "~=",
        "E": "!=",
        "F": "Equality (==)"
      },
      "answer": "E",
      "explanation": "The '!=' operator tests whether two values are not equal, returning 1 if distinct and 0 if equal."
    },
    {
      "id": 60,
      "subtopic": "Operators & Expressions",
      "question": "What is the result of the expression (10 > 5) && (3 < 1)?",
      "options": {
        "A": "3",
        "B": "Error",
        "C": "-1",
        "D": "1",
        "E": "0",
        "F": "15"
      },
      "answer": "E",
      "explanation": "(10 > 5) is 1 (true), but (3 < 1) is 0 (false). 1 && 0 evaluates to 0."
    },
    {
      "id": 61,
      "subtopic": "Control Flow & Loops",
      "question": "Which construct is used to choose between two blocks of code based on a condition?",
      "options": {
        "A": "return",
        "B": "for",
        "C": "while",
        "D": "switch",
        "E": "if-else",
        "F": "goto"
      },
      "answer": "E",
      "explanation": "The if-else statement conditionally chooses to execute one block when a condition is true, or the alternate block when false."
    },
    {
      "id": 62,
      "subtopic": "Control Flow & Loops",
      "question": "Which statement is best suited for multi-way branching based on a single variable's value?",
      "options": {
        "A": "while",
        "B": "do-while",
        "C": "switch",
        "D": "goto",
        "E": "if",
        "F": "for"
      },
      "answer": "C",
      "explanation": "The switch statement provides clean multi-way selection based on matching the value of an integer or character expression."
    },
    {
      "id": 63,
      "subtopic": "Control Flow & Loops",
      "question": "Which keyword immediately exits a loop in C?",
      "options": {
        "A": "break",
        "B": "halt",
        "C": "stop",
        "D": "exit",
        "E": "continue",
        "F": "return"
      },
      "answer": "A",
      "explanation": "The 'break' statement terminates the innermost enclosing loop or switch immediately."
    },
    {
      "id": 64,
      "subtopic": "Control Flow & Loops",
      "question": "Which keyword skips the rest of the current iteration and moves to the next one?",
      "options": {
        "A": "break",
        "B": "pass",
        "C": "skip",
        "D": "next",
        "E": "return",
        "F": "continue"
      },
      "answer": "F",
      "explanation": "The 'continue' statement bypasses any remaining code in the loop body for the current iteration and jumps to the update/test step."
    },
    {
      "id": 65,
      "subtopic": "Control Flow & Loops",
      "question": "Which loop structure is guaranteed to execute its body at least once, checking its condition afterward?",
      "options": {
        "A": "nested for",
        "B": "if",
        "C": "for",
        "D": "while",
        "E": "switch",
        "F": "do-while"
      },
      "answer": "F",
      "explanation": "A do-while loop is an exit-controlled loop; the body executes first before evaluating the condition at the bottom."
    },
    {
      "id": 66,
      "subtopic": "Control Flow & Loops",
      "question": "Which statement is typically placed at the end of each case to prevent fall-through in a switch?",
      "options": {
        "A": "stop;",
        "B": "end;",
        "C": "exit;",
        "D": "break;",
        "E": "return;",
        "F": "continue;"
      },
      "answer": "D",
      "explanation": "A 'break;' statement at the end of a case breaks out of the switch block, preventing fall-through into subsequent cases."
    },
    {
      "id": 67,
      "subtopic": "Control Flow & Loops",
      "question": "What happens by default if a switch case has no break statement?",
      "options": {
        "A": "Execution falls through into the next case",
        "B": "Nothing happens at all",
        "C": "The case repeats indefinitely",
        "D": "The program restarts",
        "E": "Execution stops automatically",
        "F": "A compile-time error occurs"
      },
      "answer": "A",
      "explanation": "Without a break statement, control flows directly into the following case's statements regardless of its match (fall-through)."
    },
    {
      "id": 68,
      "subtopic": "Control Flow & Loops",
      "question": "Which loop is generally best suited when the number of iterations is known in advance?",
      "options": {
        "A": "if-else",
        "B": "while loop",
        "C": "do-while loop",
        "D": "for loop",
        "E": "goto",
        "F": "switch"
      },
      "answer": "D",
      "explanation": "The for loop groups initialization, condition checking, and step updating in a concise single line, ideal for known iteration counts."
    },
    {
      "id": 69,
      "subtopic": "Control Flow & Loops",
      "question": "What does the goto statement do in C?",
      "options": {
        "A": "It exits the program immediately",
        "B": "It declares a new variable",
        "C": "It calls a function",
        "D": "It repeats the current loop",
        "E": "It jumps unconditionally to a labeled statement",
        "F": "It compares two values"
      },
      "answer": "E",
      "explanation": "'goto <label>;' causes an unconditional branch to the statement labeled by '<label>:' within the same function."
    },
    {
      "id": 70,
      "subtopic": "Control Flow & Loops",
      "question": "In for(init; condition; update), when is the 'update' expression executed?",
      "options": {
        "A": "Before init runs",
        "B": "Only once, at the very end",
        "C": "Before the condition is checked the first time",
        "D": "Before the loop starts",
        "E": "Never, unless called manually",
        "F": "After each execution of the loop body"
      },
      "answer": "F",
      "explanation": "The update expression runs after the loop body finishes each iteration, right before re-evaluating the test condition."
    },
    {
      "id": 71,
      "subtopic": "Control Flow & Loops",
      "question": "What happens if the condition of a while loop is false the very first time it is checked?",
      "options": {
        "A": "A compilation error occurs",
        "B": "The loop body executes twice",
        "C": "The loop body never executes",
        "D": "The loop runs infinitely",
        "E": "The loop body executes once",
        "F": "The program crashes"
      },
      "answer": "C",
      "explanation": "A while loop is entry-controlled. If the condition is false initially, the body is skipped entirely."
    },
    {
      "id": 72,
      "subtopic": "Control Flow & Loops",
      "question": "Which loop is ideal when the body must run at least once before checking a condition, such as input validation?",
      "options": {
        "A": "while",
        "B": "goto",
        "C": "do-while",
        "D": "for",
        "E": "if",
        "F": "switch"
      },
      "answer": "C",
      "explanation": "The do-while loop executes its body once before checking the condition, making it the canonical choice for menu prompts and input validation."
    },
    {
      "id": 73,
      "subtopic": "Control Flow & Loops",
      "question": "What best describes an infinite loop?",
      "options": {
        "A": "A loop that runs exactly once",
        "B": "A loop only usable with arrays",
        "C": "A loop whose condition never becomes false",
        "D": "A loop with an empty body",
        "E": "A loop that causes a compile error",
        "F": "A recursive function call"
      },
      "answer": "C",
      "explanation": "An infinite loop repeats indefinitely because its terminating condition is never satisfied or remains continuously true."
    },
    {
      "id": 74,
      "subtopic": "Control Flow & Loops",
      "question": "Which of these creates an infinite loop using the for statement?",
      "options": {
        "A": "for(true)",
        "B": "for(loop)",
        "C": "for(;;)",
        "D": "for(x=x)",
        "E": "for(0;0;0)",
        "F": "for(all)"
      },
      "answer": "C",
      "explanation": "Omitting the condition in a for loop, written as 'for(;;)', defaults to a non-zero (true) test and loops indefinitely."
    },
    {
      "id": 75,
      "subtopic": "Control Flow & Loops",
      "question": "What data type is typically required for the expression inside a switch statement?",
      "options": {
        "A": "A floating-point type",
        "B": "A string",
        "C": "A double",
        "D": "An integer or character type",
        "E": "A pointer",
        "F": "A structure"
      },
      "answer": "D",
      "explanation": "Standard C switch statements require the controlling expression to evaluate to an integer or enumeration type (including char)."
    },
    {
      "id": 76,
      "subtopic": "Control Flow & Loops",
      "question": "What is the main purpose of nested if-else statements?",
      "options": {
        "A": "To declare multiple variables at once",
        "B": "To exit a function early",
        "C": "To skip a loop iteration",
        "D": "To check multiple conditions in sequence",
        "E": "To repeat a block of code",
        "F": "To include header files"
      },
      "answer": "D",
      "explanation": "Nested or chained if-else blocks allow evaluating multiple distinct or dependent conditions sequentially."
    },
    {
      "id": 77,
      "subtopic": "Control Flow & Loops",
      "question": "Which of these correctly checks whether variable x equals 10?",
      "options": {
        "A": "when (x == 10)",
        "B": "if x == 10",
        "C": "if [x == 10]",
        "D": "if (x == 10)",
        "E": "if (x = 10)",
        "F": "if (x === 10)"
      },
      "answer": "D",
      "explanation": "'if (x == 10)' uses parentheses around the condition and the equality comparison operator '=='."
    },
    {
      "id": 78,
      "subtopic": "Control Flow & Loops",
      "question": "What is the danger of writing if (x = 10) instead of if (x == 10)?",
      "options": {
        "A": "It always evaluates to false",
        "B": "It behaves identically to ==",
        "C": "It declares a brand new variable",
        "D": "It always causes a syntax error",
        "E": "It compares the values correctly anyway",
        "F": "It assigns 10 to x instead of comparing, silently causing a logic bug"
      },
      "answer": "F",
      "explanation": "'x = 10' performs assignment, modifying x and evaluating to 10 (truthy), so the if-body always executes regardless of previous value."
    },
    {
      "id": 79,
      "subtopic": "Control Flow & Loops",
      "question": "Which control-flow statement is often avoided in structured programming because overuse can create unreadable 'spaghetti code'?",
      "options": {
        "A": "switch",
        "B": "for",
        "C": "do-while",
        "D": "while",
        "E": "goto",
        "F": "if-else"
      },
      "answer": "E",
      "explanation": "Unrestricted jumps using 'goto' make program logic hard to trace and debug, leading to spaghetti code."
    },
    {
      "id": 80,
      "subtopic": "Control Flow & Loops",
      "question": "What does a break statement do specifically inside a switch block?",
      "options": {
        "A": "It repeats the current case",
        "B": "It skips to the next case",
        "C": "It exits the switch block",
        "D": "It always causes a compile error",
        "E": "It exits the entire program",
        "F": "It only works inside loops, not switch"
      },
      "answer": "C",
      "explanation": "Inside a switch block, 'break;' halts execution of statements and jumps past the closing brace of the switch."
    },
    {
      "id": 81,
      "subtopic": "Functions & Scope",
      "question": "What is a function in C?",
      "options": {
        "A": "A header file",
        "B": "A comment",
        "C": "A variable declaration",
        "D": "A type of loop",
        "E": "A reusable block of code that performs a specific task",
        "F": "A data type"
      },
      "answer": "E",
      "explanation": "A function is a self-contained, reusable block of statements that performs a designated task and may return a value."
    },
    {
      "id": 82,
      "subtopic": "Functions & Scope",
      "question": "What is required for a function to return a value matching its declared type?",
      "options": {
        "A": "A continue statement",
        "B": "Nothing extra is required",
        "C": "A return statement with a matching value",
        "D": "A break statement",
        "E": "A print statement",
        "F": "A goto statement"
      },
      "answer": "C",
      "explanation": "A non-void function must execute a 'return <expression>;' statement whose value matches or is convertible to the return type."
    },
    {
      "id": 83,
      "subtopic": "Functions & Scope",
      "question": "Which keyword indicates that a function returns no value?",
      "options": {
        "A": "null",
        "B": "none",
        "C": "zero",
        "D": "undefined",
        "E": "void",
        "F": "empty"
      },
      "answer": "E",
      "explanation": "The 'void' return type explicitly denotes that a function does not return any value to the caller."
    },
    {
      "id": 84,
      "subtopic": "Functions & Scope",
      "question": "What is recursion in the context of C functions?",
      "options": {
        "A": "A function calling another function",
        "B": "A syntax error",
        "C": "A function calling itself",
        "D": "A function returning multiple values",
        "E": "A loop placed inside a function",
        "F": "A function with no parameters"
      },
      "answer": "C",
      "explanation": "Recursion occurs when a function calls itself directly or indirectly to solve a problem by dividing it into smaller subproblems."
    },
    {
      "id": 85,
      "subtopic": "Functions & Scope",
      "question": "What are the parameters listed in a function's own definition called?",
      "options": {
        "A": "Global variables",
        "B": "Arguments",
        "C": "Local variables",
        "D": "Return values",
        "E": "Actual parameters",
        "F": "Formal parameters"
      },
      "answer": "F",
      "explanation": "The variable declarations appearing in a function's header definition are known as formal parameters."
    },
    {
      "id": 86,
      "subtopic": "Functions & Scope",
      "question": "What are the values supplied when a function is called referred to as?",
      "options": {
        "A": "Constants",
        "B": "Formal parameters",
        "C": "Local declarations",
        "D": "Static variables",
        "E": "Return values",
        "F": "Actual parameters (arguments)"
      },
      "answer": "F",
      "explanation": "The real expressions or values passed into a function call at invocation time are called actual parameters or arguments."
    },
    {
      "id": 87,
      "subtopic": "Functions & Scope",
      "question": "What is the scope of a variable declared inside a function body?",
      "options": {
        "A": "Global to the entire program",
        "B": "Accessible only inside main",
        "C": "Local to that function",
        "D": "Accessible from every file",
        "E": "Accessible from the header file",
        "F": "Undefined"
      },
      "answer": "C",
      "explanation": "Variables declared within a function block possess block/local scope and are only visible inside that function."
    },
    {
      "id": 88,
      "subtopic": "Functions & Scope",
      "question": "What is the scope of a variable declared outside of all functions?",
      "options": {
        "A": "Deleted immediately after compilation",
        "B": "Accessible only inside loops",
        "C": "Global to the entire program",
        "D": "Undefined",
        "E": "Local to main only",
        "F": "Local to the nearest function"
      },
      "answer": "C",
      "explanation": "Variables declared at file scope outside all functions are global variables accessible throughout the file (and external files via extern)."
    },
    {
      "id": 89,
      "subtopic": "Functions & Scope",
      "question": "What must every recursive function include to avoid infinite recursion?",
      "options": {
        "A": "A base case that stops further recursive calls",
        "B": "A loop",
        "C": "A static variable",
        "D": "A void return type",
        "E": "A global variable",
        "F": "A pointer parameter"
      },
      "answer": "A",
      "explanation": "Every correct recursive function requires a base condition that terminates further recursive calls, preventing stack overflow."
    },
    {
      "id": 90,
      "subtopic": "Functions & Scope",
      "question": "By default, how are arguments passed to functions in C?",
      "options": {
        "A": "By pointer, always automatically",
        "B": "By copy of the address only",
        "C": "By reference",
        "D": "By value",
        "E": "By name",
        "F": "By address, always"
      },
      "answer": "D",
      "explanation": "In C, all function arguments are passed strictly by value: a copy of each argument is placed on the call stack."
    },
    {
      "id": 91,
      "subtopic": "Functions & Scope",
      "question": "What does passing an argument 'by value' mean?",
      "options": {
        "A": "The original variable is modified directly",
        "B": "It behaves exactly like passing by reference",
        "C": "Arguments are passed only by their variable name",
        "D": "The function shares memory directly with the caller",
        "E": "A copy of the argument is passed, so changes inside the function do not affect the original",
        "F": "Only pointers can ever be passed"
      },
      "answer": "E",
      "explanation": "Passing by value creates an isolated copy of the caller's data; mutating the parameter inside the function has no effect on the caller's variable."
    },
    {
      "id": 92,
      "subtopic": "Functions & Scope",
      "question": "How can a C function modify the caller's original variable?",
      "options": {
        "A": "It cannot be done in C",
        "B": "By passing the value directly",
        "C": "By declaring the parameter static",
        "D": "By receiving and using a pointer to that variable",
        "E": "By using a global loop",
        "F": "By using recursion instead"
      },
      "answer": "D",
      "explanation": "To alter the caller's variable, the caller passes its memory address (&var), and the function dereferences the received pointer."
    },
    {
      "id": 93,
      "subtopic": "Functions & Scope",
      "question": "What is the purpose of a function prototype (declaration)?",
      "options": {
        "A": "To allocate memory for the function",
        "B": "To define the function's body",
        "C": "To include a header file",
        "D": "To inform the compiler of a function's signature before its full definition appears",
        "E": "To call the function immediately",
        "F": "To create a loop construct"
      },
      "answer": "D",
      "explanation": "A prototype informs the compiler of the function's name, return type, and parameter types so calls can be validated before the full implementation is encountered."
    },
    {
      "id": 94,
      "subtopic": "Functions & Scope",
      "question": "Which of the following is a valid function declaration (prototype)?",
      "options": {
        "A": "int add(int a, int b);",
        "B": "a b add int()",
        "C": "add int(a, b);",
        "D": "int add(a, b) int;",
        "E": "function add(int a, int b);",
        "F": "declare int add(a,b);"
      },
      "answer": "A",
      "explanation": "'int add(int a, int b);' specifies return type, function name, typed parameter list, and terminates with a semicolon."
    },
    {
      "id": 95,
      "subtopic": "Functions & Scope",
      "question": "What happens if a function declared to return int reaches its end without a return statement?",
      "options": {
        "A": "It always crashes at runtime",
        "B": "It automatically returns void",
        "C": "The behavior is undefined",
        "D": "It always causes a compile-time error",
        "E": "It automatically returns 0",
        "F": "It loops back to the start of the function"
      },
      "answer": "C",
      "explanation": "Flowing off the end of a value-returning function (other than main in C99+) leads to undefined behavior if the caller attempts to use the returned value."
    },
    {
      "id": 96,
      "subtopic": "Functions & Scope",
      "question": "What is the purpose of the value returned by main() to the operating system?",
      "options": {
        "A": "It indicates the program's exit status",
        "B": "It ends all active loops",
        "C": "It calls other functions automatically",
        "D": "It prints output to the console",
        "E": "It declares global variables",
        "F": "It frees allocated memory"
      },
      "answer": "A",
      "explanation": "The value returned by main() serves as the process exit code, signaling success (0) or specific error codes to the operating environment."
    },
    {
      "id": 97,
      "subtopic": "Functions & Scope",
      "question": "Can a single C function contain more than one return statement?",
      "options": {
        "A": "No, only void functions may have multiple returns",
        "B": "Yes, but only inside loops",
        "C": "No, only one return statement is allowed per function",
        "D": "Yes, execution stops at whichever return is reached first",
        "E": "Yes, but they must all return the same literal value",
        "F": "No, it causes a compile-time error"
      },
      "answer": "D",
      "explanation": "Functions can have multiple return statements (e.g. guard clauses or branches); execution ends immediately upon hitting the first one."
    },
    {
      "id": 98,
      "subtopic": "Functions & Scope",
      "question": "Does standard C support function overloading (same name, different parameters), like C++?",
      "options": {
        "A": "No, standard C does not support function overloading",
        "B": "Only supported for void functions",
        "C": "Only supported if structs are used",
        "D": "Only supported when using macros",
        "E": "Only supported for the main function",
        "F": "Yes, it is fully supported like in C++"
      },
      "answer": "A",
      "explanation": "Standard C does not support function overloading; every function in the same namespace must have a unique identifier."
    },
    {
      "id": 99,
      "subtopic": "Functions & Scope",
      "question": "What is the key behavior of a variable declared as 'static' inside a function?",
      "options": {
        "A": "It is deleted after its first use",
        "B": "It retains its value between successive calls to the function",
        "C": "It automatically becomes a global variable",
        "D": "It behaves exactly like a macro",
        "E": "It resets to its initial value on every call",
        "F": "It cannot be modified inside the function"
      },
      "answer": "B",
      "explanation": "A static local variable is initialized once at startup and preserves its value across repeated invocations throughout program execution."
    },
    {
      "id": 100,
      "subtopic": "Functions & Scope",
      "question": "What is the 'base case' in a recursive function?",
      "options": {
        "A": "The function's return type",
        "B": "The very first call made to the function",
        "C": "A global variable declaration",
        "D": "A loop placed inside the function",
        "E": "A condition that stops further recursive calls",
        "F": "A pointer declaration"
      },
      "answer": "E",
      "explanation": "The base case is the termination condition that directly returns an answer without making further recursive calls."
    },
    {
      "id": 101,
      "subtopic": "Arrays",
      "question": "What is an array in C?",
      "options": {
        "A": "A file on disk",
        "B": "A type of loop",
        "C": "A structure with mixed data types",
        "D": "A pointer to a function",
        "E": "A single variable holding one value",
        "F": "A collection of elements of the same data type stored in contiguous memory"
      },
      "answer": "F",
      "explanation": "An array is a fixed-size contiguous sequence of elements that all share the exact same data type."
    },
    {
      "id": 102,
      "subtopic": "Arrays",
      "question": "What is the index of the first element in a C array?",
      "options": {
        "A": "-1",
        "B": "Arrays are not indexed",
        "C": "It depends on the declaration",
        "D": "2",
        "E": "0",
        "F": "1"
      },
      "answer": "E",
      "explanation": "Arrays in C use zero-based indexing; the first element is located at index 0."
    },
    {
      "id": 103,
      "subtopic": "Arrays",
      "question": "How do you declare an integer array of size 5 in C?",
      "options": {
        "A": "array int arr[5];",
        "B": "arr int[5];",
        "C": "int arr(5);",
        "D": "int[5] arr;",
        "E": "int arr[5];",
        "F": "int arr{5};"
      },
      "answer": "E",
      "explanation": "'int arr[5];' declares an array named arr containing 5 integer elements."
    },
    {
      "id": 104,
      "subtopic": "Arrays",
      "question": "What happens when you access an array element outside its declared bounds in C?",
      "options": {
        "A": "A runtime exception is always thrown",
        "B": "The behavior is undefined, since C performs no automatic bounds checking",
        "C": "A compile-time error is raised",
        "D": "The array automatically resizes",
        "E": "It automatically returns 0",
        "F": "It wraps around back to index 0"
      },
      "answer": "B",
      "explanation": "C does not perform runtime array bounds checking. Accessing out-of-bounds indices leads to undefined behavior."
    },
    {
      "id": 105,
      "subtopic": "Arrays",
      "question": "How many dimensions does the array declared as int arr[3][4] have?",
      "options": {
        "A": "3",
        "B": "4",
        "C": "7",
        "D": "12",
        "E": "2",
        "F": "1"
      },
      "answer": "E",
      "explanation": "The declaration 'arr[3][4]' specifies 2 bracket pairs, making it a 2-dimensional array (3 rows, 4 columns)."
    },
    {
      "id": 106,
      "subtopic": "Arrays",
      "question": "What is the relationship between an array name and pointers in C?",
      "options": {
        "A": "Pointers are a specialized type of array",
        "B": "Pointers can never point to array elements",
        "C": "An array name decays to a pointer to its first element in most expressions",
        "D": "Arrays are internally stored as linked lists",
        "E": "Arrays automatically convert into structs",
        "F": "Arrays and pointers are completely unrelated concepts"
      },
      "answer": "C",
      "explanation": "In most expressions (except when operand of sizeof or &), an array name decays into a pointer to its first element (&arr[0])."
    },
    {
      "id": 107,
      "subtopic": "Arrays",
      "question": "Assuming int is 4 bytes, what is the total size in bytes of int arr[10]?",
      "options": {
        "A": "100",
        "B": "4",
        "C": "20",
        "D": "10",
        "E": "14",
        "F": "40"
      },
      "answer": "F",
      "explanation": "Total size = 10 elements * 4 bytes/element = 40 bytes."
    },
    {
      "id": 108,
      "subtopic": "Arrays",
      "question": "Which loop is most commonly used to traverse an array of a known fixed size?",
      "options": {
        "A": "for loop",
        "B": "do-while loop only",
        "C": "switch statement",
        "D": "recursion only",
        "E": "if-else chain",
        "F": "goto statement"
      },
      "answer": "A",
      "explanation": "A standard 'for (int i = 0; i < N; i++)' loop is the canonical idiom for traversing arrays in C."
    },
    {
      "id": 109,
      "subtopic": "Arrays",
      "question": "In pointer notation, what does arr[i] correspond to?",
      "options": {
        "A": "*arr + i",
        "B": "*(arr + i)",
        "C": "It has no pointer equivalent",
        "D": "&(arr[i]) + 1",
        "E": "arr * i",
        "F": "&arr + i"
      },
      "answer": "B",
      "explanation": "By definition in C, array subscripting 'arr[i]' is identically evaluated as '*(arr + i)'."
    },
    {
      "id": 110,
      "subtopic": "Arrays",
      "question": "Can a statically declared array's size be changed at runtime in C?",
      "options": {
        "A": "Yes, using a built-in resize() function",
        "B": "No, its size is fixed at compile time",
        "C": "Yes, simply by reassignment",
        "D": "Yes, by calling realloc() directly on it",
        "E": "Yes, it resizes automatically as needed",
        "F": "Yes, using the array keyword"
      },
      "answer": "B",
      "explanation": "Fixed-size static arrays have memory allocated with a fixed capacity that cannot be modified at runtime."
    },
    {
      "id": 111,
      "subtopic": "Arrays",
      "question": "How many total elements does the 2D array int arr[3][4] hold?",
      "options": {
        "A": "34",
        "B": "7",
        "C": "43",
        "D": "12",
        "E": "4",
        "F": "3"
      },
      "answer": "D",
      "explanation": "The total number of elements in a 2D array is rows * columns: 3 * 4 = 12 elements."
    },
    {
      "id": 112,
      "subtopic": "Arrays",
      "question": "What is a common issue when arrays are passed as arguments to functions in C?",
      "options": {
        "A": "Only the first element is ever passed",
        "B": "The array decays to a pointer, so sizeof inside the function no longer gives the original array size",
        "C": "Function parameters must always be declared as arrays",
        "D": "It always causes a compile-time type mismatch",
        "E": "The entire array is always deep-copied automatically",
        "F": "Arrays cannot be passed to functions at all"
      },
      "answer": "B",
      "explanation": "Because the array decays to a pointer when passed, 'sizeof' inside the callee returns the pointer size (4 or 8 bytes), not array length."
    },
    {
      "id": 113,
      "subtopic": "Arrays",
      "question": "Which of the following correctly initializes an array with the values 1, 2, and 3?",
      "options": {
        "A": "int arr = {1,2,3}[3];",
        "B": "int arr[3] = {1,2,3};",
        "C": "int arr[3] = [1,2,3];",
        "D": "int arr(3) = {1,2,3};",
        "E": "arr[3] int = {1,2,3};",
        "F": "int arr[3] = (1,2,3);"
      },
      "answer": "B",
      "explanation": "'int arr[3] = {1,2,3};' uses curly brace initializer syntax to assign initial values to array elements."
    },
    {
      "id": 114,
      "subtopic": "Arrays",
      "question": "How is a jagged (ragged) 2D array typically implemented in C?",
      "options": {
        "A": "As a linked list only",
        "B": "As a single one-dimensional array only",
        "C": "As a union",
        "D": "As an array of pointers, each pointing to a row of different length",
        "E": "As a fixed-size 2D array only",
        "F": "As an array of structs only"
      },
      "answer": "D",
      "explanation": "A ragged array is formed by allocating an array of pointers where each pointer references an independently sized dynamic block."
    },
    {
      "id": 115,
      "subtopic": "Arrays",
      "question": "Within the same scope where a static array 'arr' was declared, which expression gives its element count?",
      "options": {
        "A": "count(arr)",
        "B": "sizeof(arr) / sizeof(arr[0])",
        "C": "arr.length",
        "D": "len(arr)",
        "E": "arr.size()",
        "F": "sizeof(int)"
      },
      "answer": "B",
      "explanation": "Dividing total array bytes 'sizeof(arr)' by single element bytes 'sizeof(arr[0])' calculates the number of elements."
    },
    {
      "id": 116,
      "subtopic": "Arrays",
      "question": "What is actually passed to a function when an array is used as an argument in C?",
      "options": {
        "A": "A reference to a brand-new array",
        "B": "A pointer to the array's first element",
        "C": "A copy of only the last element",
        "D": "Only the array's size",
        "E": "Nothing, arrays cannot be passed as arguments",
        "F": "A complete copy of the entire array"
      },
      "answer": "B",
      "explanation": "Arrays decay into a pointer to their initial element (&arr[0]) when passed as function arguments."
    },
    {
      "id": 117,
      "subtopic": "Arrays",
      "question": "How are array elements stored in memory in C?",
      "options": {
        "A": "In a linked structure",
        "B": "Scattered randomly throughout memory",
        "C": "In contiguous memory locations",
        "D": "Always stored in reverse order",
        "E": "Each element in a separate memory segment",
        "F": "Depends entirely on compiler mood"
      },
      "answer": "C",
      "explanation": "Array elements are strictly laid out in consecutive, contiguous memory addresses in sequential order."
    },
    {
      "id": 118,
      "subtopic": "Arrays",
      "question": "What is the term for accessing an array element using syntax like arr[2]?",
      "options": {
        "A": "Array dereferencing only",
        "B": "Array subscripting",
        "C": "Array mapping",
        "D": "Array hashing",
        "E": "Array slicing",
        "F": "Pointer casting"
      },
      "answer": "B",
      "explanation": "Accessing elements using brackets '[]' is formally known as array subscripting or indexing."
    },
    {
      "id": 119,
      "subtopic": "Arrays",
      "question": "Which declaration correctly creates a partially initialized array of size 5, with remaining elements defaulting to 0?",
      "options": {
        "A": "int arr[5] = {1, 2};",
        "B": "int arr[5]{1,2};",
        "C": "int arr = {1,2}[5];",
        "D": "int arr[5] = (1, 2);",
        "E": "int arr[5] = {1, 2, , , };",
        "F": "int arr[5] = {1, 2}[5];"
      },
      "answer": "A",
      "explanation": "In C, if an initializer list provides fewer elements than declared size, all unsupplied elements are zero-initialized."
    },
    {
      "id": 120,
      "subtopic": "Arrays",
      "question": "What is a key advantage of using arrays over declaring many individual variables?",
      "options": {
        "A": "They can store elements of mixed data types",
        "B": "They always use less memory than any other structure",
        "C": "They eliminate the need for loops entirely",
        "D": "They are always faster than pointers",
        "E": "They automatically keep their contents sorted",
        "F": "They allow storing and accessing multiple related values efficiently through a single name and index"
      },
      "answer": "F",
      "explanation": "Arrays organize homogeneous values under a common identifier, enabling fast constant-time indexed access and iterative processing."
    },
    {
      "id": 121,
      "subtopic": "Strings",
      "question": "How are strings represented in standard C?",
      "options": {
        "A": "As structures",
        "B": "As linked lists of characters",
        "C": "As null-terminated arrays of characters",
        "D": "As arrays of integers",
        "E": "As a dedicated built-in string data type",
        "F": "As unions"
      },
      "answer": "C",
      "explanation": "C has no primitive 'string' data type; strings are stored as character arrays terminated by a null character ('\\0')."
    },
    {
      "id": 122,
      "subtopic": "Strings",
      "question": "Which character marks the end of a string in C?",
      "options": {
        "A": "' ' (a space)",
        "B": "\\n' (newline)",
        "C": "EOF",
        "D": "\\0' (the null character)",
        "E": "\\e'",
        "F": "The keyword end"
      },
      "answer": "D",
      "explanation": "The null character '\\0' (ASCII 0) explicitly terminates C strings."
    },
    {
      "id": 123,
      "subtopic": "Strings",
      "question": "Which function returns the length of a string, excluding the null terminator?",
      "options": {
        "A": "length()",
        "B": "strcount()",
        "C": "strlen()",
        "D": "strsize()",
        "E": "sizeof()",
        "F": "strlength()"
      },
      "answer": "C",
      "explanation": "strlen() counts characters in a string up to, but not including, the terminating null byte."
    },
    {
      "id": 124,
      "subtopic": "Strings",
      "question": "Which function is used to copy the contents of one string into another?",
      "options": {
        "A": "strcpy()",
        "B": "strdup() exclusively",
        "C": "memcopy()",
        "D": "strcopy()",
        "E": "copy()",
        "F": "strclone()"
      },
      "answer": "A",
      "explanation": "strcpy(dest, src) copies the null-terminated string from src into dest."
    },
    {
      "id": 125,
      "subtopic": "Strings",
      "question": "Which function concatenates (joins) two strings together?",
      "options": {
        "A": "strcat()",
        "B": "strplus()",
        "C": "strjoin()",
        "D": "strmerge()",
        "E": "strappend()",
        "F": "strconcat()"
      },
      "answer": "A",
      "explanation": "strcat(dest, src) appends a copy of src to the end of dest, overwriting dest's initial null terminator."
    },
    {
      "id": 126,
      "subtopic": "Strings",
      "question": "Which function compares two strings lexicographically?",
      "options": {
        "A": "strcompare()",
        "B": "compare()",
        "C": "strequal()",
        "D": "strcheck()",
        "E": "streq()",
        "F": "strcmp()"
      },
      "answer": "F",
      "explanation": "strcmp(s1, s2) lexicographically compares two strings and returns 0 if equal, negative if s1 < s2, or positive if s1 > s2."
    },
    {
      "id": 127,
      "subtopic": "Strings",
      "question": "Which header file declares standard string functions like strlen, strcpy, and strcmp?",
      "options": {
        "A": "stringutils.h",
        "B": "ctype.h",
        "C": "str.h",
        "D": "string.h",
        "E": "stdio.h",
        "F": "stdlib.h"
      },
      "answer": "D",
      "explanation": "<string.h> defines prototypes for C standard library string manipulation routines."
    },
    {
      "id": 128,
      "subtopic": "Strings",
      "question": "What value does strcmp(s1, s2) return when the two strings are exactly equal?",
      "options": {
        "A": "TRUE.",
        "B": "-1",
        "C": "NULL",
        "D": "\"equal\"",
        "E": "1",
        "F": "0"
      },
      "answer": "F",
      "explanation": "When both strings contain identical characters, strcmp() returns 0."
    },
    {
      "id": 129,
      "subtopic": "Strings",
      "question": "Which of these is a valid way to declare and initialize a string in C?",
      "options": {
        "A": "char str = \"Hello\";",
        "B": "char str[] = \"Hello\";",
        "C": "str str[] = \"Hello\";",
        "D": "String str = \"Hello\";",
        "E": "str = char[\"Hello\"];",
        "F": "string str = \"Hello\";"
      },
      "answer": "B",
      "explanation": "'char str[] = \"Hello\";' creates an array of 6 characters initialized with 'H', 'e', 'l', 'l', 'o', '\\0'."
    },
    {
      "id": 130,
      "subtopic": "Strings",
      "question": "What array size (in bytes) is required to store the string \"Hi\" including its null terminator?",
      "options": {
        "A": "3",
        "B": "0",
        "C": "4",
        "D": "1",
        "E": "2",
        "F": "5"
      },
      "answer": "A",
      "explanation": "'H' (1 byte) + 'i' (1 byte) + '\\0' (1 byte) = 3 bytes total."
    },
    {
      "id": 131,
      "subtopic": "Strings",
      "question": "Which function converts a numeric string into an integer in C?",
      "options": {
        "A": "parseint()",
        "B": "toint()",
        "C": "itoa_reverse()",
        "D": "atoi()",
        "E": "strtoi()",
        "F": "stringtoint()"
      },
      "answer": "D",
      "explanation": "atoi() (ASCII to Integer), declared in <stdlib.h>, parses a string into an int."
    },
    {
      "id": 132,
      "subtopic": "Strings",
      "question": "Which ctype.h function converts a single character to its uppercase equivalent?",
      "options": {
        "A": "touppercase()",
        "B": "upper()",
        "C": "strupper()",
        "D": "uppercase()",
        "E": "capitalize()",
        "F": "toupper()"
      },
      "answer": "F",
      "explanation": "toupper() from <ctype.h> converts lowercase letters to uppercase and leaves other characters unchanged."
    },
    {
      "id": 133,
      "subtopic": "Strings",
      "question": "What can happen if a manually built character array is missing its null terminator?",
      "options": {
        "A": "The string becomes empty automatically",
        "B": "Nothing happens; the terminator is optional",
        "C": "The program simply prints an empty line",
        "D": "Functions like strlen or printf may read out of bounds, causing undefined behavior",
        "E": "The compiler automatically appends one at compile time",
        "F": "It always causes a compile-time error"
      },
      "answer": "D",
      "explanation": "Without '\\0', string functions continue scanning adjacent memory indefinitely until an arbitrary 0 byte or memory fault occurs."
    },
    {
      "id": 134,
      "subtopic": "Strings",
      "question": "Which format specifier is used with printf/scanf for string values?",
      "options": {
        "A": "%c",
        "B": "%f",
        "C": "%str",
        "D": "%v",
        "E": "%d",
        "F": "%s"
      },
      "answer": "F",
      "explanation": "'%s' is the format specifier for reading and writing null-terminated character strings."
    },
    {
      "id": 135,
      "subtopic": "Strings",
      "question": "What is the risk of calling scanf(\"%s\", str) without restricting the input length?",
      "options": {
        "A": "A buffer overflow if the input exceeds the array's declared size",
        "B": "It always crashes immediately regardless of input",
        "C": "It silently converts input to lowercase",
        "D": "It safely truncates the input every time",
        "E": "It is completely safe under all inputs",
        "F": "It automatically resizes the destination array"
      },
      "answer": "A",
      "explanation": "Unbounded '%s' does not enforce a maximum input length, leading to potential buffer overflow security vulnerabilities."
    },
    {
      "id": 136,
      "subtopic": "Strings",
      "question": "Which function is used to locate the first occurrence of a character within a string?",
      "options": {
        "A": "strlocate()",
        "B": "strfind()",
        "C": "strsearch()",
        "D": "charat()",
        "E": "findchar()",
        "F": "strchr()"
      },
      "answer": "F",
      "explanation": "strchr(s, c) returns a pointer to the first occurrence of character c in string s, or NULL if not found."
    },
    {
      "id": 137,
      "subtopic": "Strings",
      "question": "Which function is used to locate a substring within a larger string?",
      "options": {
        "A": "findstr()",
        "B": "strfind()",
        "C": "substr()",
        "D": "strindex()",
        "E": "strstr()",
        "F": "strsub()"
      },
      "answer": "E",
      "explanation": "strstr(haystack, needle) locates the first occurrence of substring needle within haystack."
    },
    {
      "id": 138,
      "subtopic": "Strings",
      "question": "How does strncpy() behave differently from strcpy()?",
      "options": {
        "A": "It compares the two strings instead of copying",
        "B": "It concatenates two strings instead of copying",
        "C": "It copies at most n characters, which helps avoid buffer overflows",
        "D": "It converts the string's case",
        "E": "It reverses the string during the copy",
        "F": "It behaves exactly like strcpy() in every case"
      },
      "answer": "C",
      "explanation": "strncpy(dest, src, n) caps the copy operation at n characters, offering safer copying into bounded buffers."
    },
    {
      "id": 139,
      "subtopic": "Strings",
      "question": "Given char str[] = \"Cat\";, what does the expression str[0] evaluate to?",
      "options": {
        "A": "'C'",
        "B": "'a'",
        "C": "\"Cat\"",
        "D": "'t'",
        "E": "3",
        "F": "'\\0'"
      },
      "answer": "A",
      "explanation": "The first element at index 0 of the string \"Cat\" is the character literal 'C'."
    },
    {
      "id": 140,
      "subtopic": "Strings",
      "question": "Is there a standard ISO C library function that reverses a string in place?",
      "options": {
        "A": "Yes, strinvert() is standard",
        "B": "No, reversing a string is typically implemented manually since there is no standard function",
        "C": "Yes, strrev() is part of standard ISO C",
        "D": "Yes, reverse() is part of standard ISO C",
        "E": "Yes, flip() is standard",
        "F": "Yes, strreverse() is guaranteed portable"
      },
      "answer": "B",
      "explanation": "ISO C does not define a standard string-reversal function (functions like strrev were non-standard extensions in MS-DOS/Windows)."
    },
    {
      "id": 141,
      "subtopic": "Pointers",
      "question": "What is a pointer in C?",
      "options": {
        "A": "A loop control variable",
        "B": "A variable that stores only text strings",
        "C": "A constant numeric value",
        "D": "The name of a function",
        "E": "A special type of array",
        "F": "A variable that stores the memory address of another variable"
      },
      "answer": "F",
      "explanation": "A pointer is a variable whose value is the memory address of another variable or resource."
    },
    {
      "id": 142,
      "subtopic": "Pointers",
      "question": "Which symbol is used when declaring a pointer variable?",
      "options": {
        "A": "%",
        "B": "*",
        "C": "&",
        "D": "#",
        "E": "^",
        "F": "@"
      },
      "answer": "B",
      "explanation": "The asterisk '*' is used in declarations (e.g. 'int *p;') to indicate that the variable is a pointer."
    },
    {
      "id": 143,
      "subtopic": "Pointers",
      "question": "Which operator retrieves the memory address of a variable?",
      "options": {
        "A": "@",
        "B": "&",
        "C": "~",
        "D": "*",
        "E": "%",
        "F": "#"
      },
      "answer": "B",
      "explanation": "The unary '&' (address-of) operator evaluates to the memory address of its operand."
    },
    {
      "id": 144,
      "subtopic": "Pointers",
      "question": "Which operator is used to dereference a pointer and access the value it points to?",
      "options": {
        "A": "*",
        "B": "#",
        "C": "&",
        "D": "@",
        "E": "!",
        "F": "%"
      },
      "answer": "A",
      "explanation": "The unary '*' (dereference or indirection) operator accesses or assigns the value stored at the address contained in the pointer."
    },
    {
      "id": 145,
      "subtopic": "Pointers",
      "question": "What does a NULL pointer represent?",
      "options": {
        "A": "A pointer to a variable that was deleted",
        "B": "A pointer with a zero-length value stored",
        "C": "A pointer to a constant value",
        "D": "A pointer to the first element of every array",
        "E": "A pointer that does not point to any valid memory location",
        "F": "A pointer to the main() function"
      },
      "answer": "E",
      "explanation": "A NULL pointer is a sentinel pointer value that points to no valid memory address or object."
    },
    {
      "id": 146,
      "subtopic": "Pointers",
      "question": "What determines the step size used in pointer arithmetic?",
      "options": {
        "A": "Always exactly 1 byte, regardless of type",
        "B": "The size (in bytes) of the data type the pointer points to",
        "C": "The length of the pointer's variable name",
        "D": "A random offset chosen by the compiler",
        "E": "The pointer's declared name itself",
        "F": "The compiler version only"
      },
      "answer": "B",
      "explanation": "Pointer arithmetic automatically increments/decrements in units of sizeof(*ptr) bytes corresponding to the underlying pointee type."
    },
    {
      "id": 147,
      "subtopic": "Pointers",
      "question": "If int *p points into an int array, what does the expression p + 1 refer to?",
      "options": {
        "A": "The value at index 1, always",
        "B": "The address of the next int element (p's address plus sizeof(int))",
        "C": "The address exactly 1 byte after p",
        "D": "The address of the previous element",
        "E": "An invalid operation in C",
        "F": "The exact same address as p"
      },
      "answer": "B",
      "explanation": "p + 1 advances the pointer forward by one element size (4 bytes for standard int) to the address of the next element."
    },
    {
      "id": 148,
      "subtopic": "Pointers",
      "question": "What is a pointer to a pointer?",
      "options": {
        "A": "Another name for a NULL pointer",
        "B": "A special type reserved for function pointers",
        "C": "A pointer type restricted to arrays only",
        "D": "An invalid concept that does not exist in C",
        "E": "A pointer that can never be dereferenced",
        "F": "A variable that stores the address of another pointer variable"
      },
      "answer": "F",
      "explanation": "A pointer-to-pointer (e.g. 'int **pp;') stores the memory address of another pointer variable."
    },
    {
      "id": 149,
      "subtopic": "Pointers",
      "question": "How would you declare a pointer to a pointer to an int?",
      "options": {
        "A": "int **pp;",
        "B": "pointer int pp;",
        "C": "int *pp;",
        "D": "**int pp;",
        "E": "int pp[*];",
        "F": "int pp**;"
      },
      "answer": "A",
      "explanation": "'int **pp;' declares pp as a pointer to a pointer to an int."
    },
    {
      "id": 150,
      "subtopic": "Pointers",
      "question": "What is a dangling pointer?",
      "options": {
        "A": "A pointer that references memory that has already been freed or is no longer valid",
        "B": "A pointer that can only be used with arrays",
        "C": "A pointer declared with no data type at all",
        "D": "A pointer initialized to zero",
        "E": "A pointer to a constant value",
        "F": "A pointer that stores the address of a function"
      },
      "answer": "A",
      "explanation": "A dangling pointer still points to a storage location that has been deallocated or gone out of scope."
    },
    {
      "id": 151,
      "subtopic": "Pointers",
      "question": "Why are pointers frequently used as function parameters in C?",
      "options": {
        "A": "To make functions run faster in every case",
        "B": "To remove the need for a return type",
        "C": "To let the function modify the caller's original variables (simulating pass by reference)",
        "D": "To disable recursion",
        "E": "To automatically convert data types",
        "F": "To avoid ever needing arrays"
      },
      "answer": "C",
      "explanation": "Passing pointers allows functions to simulate call-by-reference and modify data in the caller's stack frame."
    },
    {
      "id": 152,
      "subtopic": "Pointers",
      "question": "How does an array name relate to a pointer in C?",
      "options": {
        "A": "An array name is always equal to NULL",
        "B": "A pointer can never point into an array",
        "C": "An array name acts like a constant pointer to its first element",
        "D": "Arrays can never be accessed through pointers",
        "E": "They are identical types in absolutely every context",
        "F": "Pointers can point only to single variables, never arrays"
      },
      "answer": "C",
      "explanation": "An array identifier behaves similarly to a non-modifiable (constant) pointer evaluating to &arr[0]."
    },
    {
      "id": 153,
      "subtopic": "Pointers",
      "question": "What does a function pointer store?",
      "options": {
        "A": "The address of a function, allowing it to be called indirectly",
        "B": "The function's name stored as text",
        "C": "A full copy of the function's compiled code",
        "D": "The number of parameters a function accepts",
        "E": "The size of the function's code in bytes",
        "F": "The return value produced by a function"
      },
      "answer": "A",
      "explanation": "A function pointer holds the entry memory address of executable code for a function, enabling callbacks and dynamic dispatch."
    },
    {
      "id": 154,
      "subtopic": "Pointers",
      "question": "What is the void pointer (void*) used for in C?",
      "options": {
        "A": "A pointer that can never be dereferenced under any circumstances",
        "B": "A pointer restricted only to characters",
        "C": "A deprecated, unused pointer type",
        "D": "A pointer used exclusively with functions",
        "E": "A pointer that is always equal to NULL",
        "F": "A generic pointer type that can point to any kind of data"
      },
      "answer": "F",
      "explanation": "'void*' is C's generic pointer type that can hold the address of any data type without explicit casting."
    },
    {
      "id": 155,
      "subtopic": "Pointers",
      "question": "What must be done before dereferencing a void pointer to use its value?",
      "options": {
        "A": "It must be declared with the static keyword",
        "B": "It must be converted into an array",
        "C": "It must be freed before use",
        "D": "It must first be cast to an appropriate concrete data type",
        "E": "It must be explicitly set to NULL first",
        "F": "Nothing; it can be dereferenced directly as-is"
      },
      "answer": "D",
      "explanation": "Because void has an incomplete type with no size, a void* must be cast to a concrete type (e.g. int*) before dereferencing."
    },
    {
      "id": 156,
      "subtopic": "Pointers",
      "question": "What typically happens when you dereference a NULL pointer in a C program?",
      "options": {
        "A": "It always returns a safe garbage integer",
        "B": "The program safely returns 0",
        "C": "Nothing happens at all",
        "D": "NULL is automatically converted into a valid address",
        "E": "Undefined behavior occurs, often crashing the program with a segmentation fault",
        "F": "The compiler automatically prevents it at build time"
      },
      "answer": "E",
      "explanation": "Dereferencing NULL triggers undefined behavior; on most virtual memory OSes, it raises a page fault / segmentation fault."
    },
    {
      "id": 157,
      "subtopic": "Pointers",
      "question": "What is the difference between const int *p and int * const p?",
      "options": {
        "A": "const int *p prevents the pointer's own address from changing",
        "B": "Neither declaration can ever be modified in any way",
        "C": "const int *p means the pointed-to value can't change; int * const p means the pointer itself can't change",
        "D": "Both allow the pointer itself to be freely reassigned",
        "E": "They are exactly equivalent in meaning",
        "F": "int * const p means the pointed-to value cannot change"
      },
      "answer": "C",
      "explanation": "'const int *p' is a pointer to constant integer (data is read-only); 'int * const p' is a constant pointer to integer (address is fixed)."
    },
    {
      "id": 158,
      "subtopic": "Pointers",
      "question": "Which of these correctly declares a pointer p and initializes it to the address of int variable x?",
      "options": {
        "A": "int *p = &x;",
        "B": "*int p = &x;",
        "C": "int p = *x;",
        "D": "p int = &x;",
        "E": "int *p = x;",
        "F": "int &p = x;"
      },
      "answer": "A",
      "explanation": "'int *p = &x;' declares an int pointer p and assigns the memory address of x to it."
    },
    {
      "id": 159,
      "subtopic": "Pointers",
      "question": "What does subtracting two pointers that point into the same array yield?",
      "options": {
        "A": "It is always undefined behavior",
        "B": "It always causes a compile-time error",
        "C": "A brand-new pointer to another location",
        "D": "The number of elements between them",
        "E": "Always the value 0",
        "F": "The raw byte difference regardless of element type"
      },
      "answer": "D",
      "explanation": "Subtracting two pointers of the same type within an array yields ptrdiff_t: the count of elements separating them."
    },
    {
      "id": 160,
      "subtopic": "Pointers",
      "question": "Why are pointers considered essential to understand in C programming?",
      "options": {
        "A": "They completely replace the need for ordinary variables",
        "B": "They matter only for simple beginner print statements",
        "C": "They are used only for printing text to the console",
        "D": "They are optional and rarely appear in real C code",
        "E": "They are relevant only when working with strings",
        "F": "They enable dynamic memory management and efficient handling of arrays, strings, and pass-by-reference"
      },
      "answer": "F",
      "explanation": "Pointers underpin fundamental C mechanisms including manual dynamic memory, buffer traversal, hardware manipulation, and reference passing."
    },
    {
      "id": 161,
      "subtopic": "Dynamic Memory Allocation",
      "question": "Which function dynamically allocates a block of memory without initializing its contents?",
      "options": {
        "A": "realloc()",
        "B": "free()",
        "C": "new()",
        "D": "calloc()",
        "E": "malloc()",
        "F": "alloc()"
      },
      "answer": "E",
      "explanation": "malloc(size_t size) allocates a contiguous chunk of uninitialized heap memory containing indeterminate values."
    },
    {
      "id": 162,
      "subtopic": "Dynamic Memory Allocation",
      "question": "Which function dynamically allocates memory and initializes all bytes to zero?",
      "options": {
        "A": "free()",
        "B": "zalloc()",
        "C": "realloc()",
        "D": "memset() alone",
        "E": "malloc()",
        "F": "calloc()"
      },
      "answer": "F",
      "explanation": "calloc(num, size) allocates memory for an array of num elements of size bytes and clears all allocated bytes to zero."
    },
    {
      "id": 163,
      "subtopic": "Dynamic Memory Allocation",
      "question": "Which function is used to resize a previously allocated block of dynamic memory?",
      "options": {
        "A": "realloc()",
        "B": "calloc()",
        "C": "Calling malloc() again on the same pointer",
        "D": "resize()",
        "E": "extend()",
        "F": "Freeing then reusing the same address"
      },
      "answer": "A",
      "explanation": "realloc(ptr, new_size) reallocates or expands/shrinks a dynamic heap buffer while preserving existing data up to minimum size."
    },
    {
      "id": 164,
      "subtopic": "Dynamic Memory Allocation",
      "question": "Which function releases dynamically allocated memory back to the system?",
      "options": {
        "A": "free()",
        "B": "delete()",
        "C": "destroy()",
        "D": "release()",
        "E": "clear()",
        "F": "dealloc()"
      },
      "answer": "A",
      "explanation": "free(ptr) deallocates memory blocks previously allocated by malloc, calloc, or realloc."
    },
    {
      "id": 165,
      "subtopic": "Dynamic Memory Allocation",
      "question": "Which header file must be included to use malloc, calloc, realloc, and free?",
      "options": {
        "A": "stdio.h",
        "B": "memory.h",
        "C": "malloc.h",
        "D": "stdlib.h",
        "E": "alloc.h",
        "F": "string.h"
      },
      "answer": "D",
      "explanation": "<stdlib.h> provides prototypes and declarations for memory management functions in standard C."
    },
    {
      "id": 166,
      "subtopic": "Dynamic Memory Allocation",
      "question": "What does malloc() return if it fails to allocate the requested memory?",
      "options": {
        "A": "A garbage, unusable pointer",
        "B": "NULL",
        "C": "An empty string",
        "D": "-1",
        "E": "It throws a C++-style exception",
        "F": "0 as a plain integer"
      },
      "answer": "B",
      "explanation": "When heap memory is exhausted or allocation fails, malloc() returns a NULL pointer."
    },
    {
      "id": 167,
      "subtopic": "Dynamic Memory Allocation",
      "question": "What is a memory leak?",
      "options": {
        "A": "Memory allocated on the stack instead of the heap",
        "B": "Memory that is allocated but never freed, remaining unusable for the rest of the program's run",
        "C": "A pointer that has been set to NULL",
        "D": "An array declared with too many elements",
        "E": "A pointer that points to itself",
        "F": "Memory that has been freed twice"
      },
      "answer": "B",
      "explanation": "A memory leak happens when allocated heap memory is no longer referenced but never released via free()."
    },
    {
      "id": 168,
      "subtopic": "Dynamic Memory Allocation",
      "question": "What danger is associated with calling free() twice on the same pointer?",
      "options": {
        "A": "It has no effect the second time it is called",
        "B": "It automatically reallocates fresh memory",
        "C": "It automatically converts the pointer to NULL",
        "D": "It reassigns the pointer to a new valid address",
        "E": "It causes undefined behavior, known as a double-free error",
        "F": "It safely frees the memory a second time with no issue"
      },
      "answer": "E",
      "explanation": "Calling free() on an already-freed pointer results in a double-free bug, potentially corrupting heap metadata or enabling exploits."
    },
    {
      "id": 169,
      "subtopic": "Dynamic Memory Allocation",
      "question": "As a best practice, what should be done to a pointer immediately after calling free() on it?",
      "options": {
        "A": "Leave it completely unchanged",
        "B": "Convert it to a plain integer",
        "C": "Reassign it to itself",
        "D": "Increment it by one",
        "E": "Set it to NULL",
        "F": "Cast it to void"
      },
      "answer": "E",
      "explanation": "Assigning 'ptr = NULL;' after free prevents inadvertent dangling pointer dereferences and protects against double-free errors (free(NULL) is a safe no-op)."
    },
    {
      "id": 170,
      "subtopic": "Dynamic Memory Allocation",
      "question": "In which region of memory is data allocated by malloc()/calloc() typically stored?",
      "options": {
        "A": "The stack",
        "B": "The code segment",
        "C": "CPU registers",
        "D": "The heap",
        "E": "Read-only memory",
        "F": "Cache memory only"
      },
      "answer": "D",
      "explanation": "Dynamic memory allocated through malloc family functions is managed on the runtime heap."
    },
    {
      "id": 171,
      "subtopic": "Dynamic Memory Allocation",
      "question": "Where are ordinary local variables typically stored during a function's execution?",
      "options": {
        "A": "Cache memory only",
        "B": "The stack",
        "C": "Read-only memory",
        "D": "The heap",
        "E": "The code segment",
        "F": "CPU registers only"
      },
      "answer": "B",
      "explanation": "Automatic local variables are pushed onto the call stack within the active function's stack frame."
    },
    {
      "id": 172,
      "subtopic": "Dynamic Memory Allocation",
      "question": "What does the sizeof operator commonly help determine when calling malloc?",
      "options": {
        "A": "The value already stored at a pointer",
        "B": "The number of bytes needed to allocate for a given data type or structure",
        "C": "The name of the variable being allocated",
        "D": "The initial value stored in the memory",
        "E": "The address that malloc will return",
        "F": "The lifetime of the allocated variable"
      },
      "answer": "B",
      "explanation": "Using 'sizeof(type)' guarantees portability by supplying the exact byte requirement of the target data structure to malloc."
    },
    {
      "id": 173,
      "subtopic": "Dynamic Memory Allocation",
      "question": "Which call correctly allocates memory for an array of 10 integers using malloc?",
      "options": {
        "A": "malloc(int, 10)",
        "B": "malloc(sizeof(int))",
        "C": "calloc(sizeof(int))",
        "D": "malloc(10)",
        "E": "new int[10]",
        "F": "malloc(10 * sizeof(int))"
      },
      "answer": "F",
      "explanation": "'malloc(10 * sizeof(int))' calculates the total required memory for 10 elements of type int."
    },
    {
      "id": 174,
      "subtopic": "Dynamic Memory Allocation",
      "question": "What is a 'use-after-free' bug?",
      "options": {
        "A": "A syntax error caught during compilation",
        "B": "Freeing memory before it has ever been used",
        "C": "Allocating memory that is never subsequently used",
        "D": "Reusing the same variable name elsewhere in the program",
        "E": "Accessing memory after it has already been freed, resulting in undefined behavior",
        "F": "Simply using malloc() instead of calloc()"
      },
      "answer": "E",
      "explanation": "A use-after-free defect occurs when an application reads or writes to a memory location after that block has been returned to the heap via free()."
    },
    {
      "id": 175,
      "subtopic": "Dynamic Memory Allocation",
      "question": "How does calloc() differ from malloc() in terms of the parameters each function takes?",
      "options": {
        "A": "calloc() takes two parameters (element count and element size); malloc() takes one (total bytes)",
        "B": "They take exactly the same parameters",
        "C": "malloc() also zeroes out memory automatically, just like calloc()",
        "D": "malloc() takes two parameters while calloc() takes only one",
        "E": "calloc() requires no parameters at all",
        "F": "calloc() cannot be used to allocate arrays"
      },
      "answer": "A",
      "explanation": "calloc(num_elements, element_size) takes 2 arguments, whereas malloc(total_bytes) takes 1 argument."
    },
    {
      "id": 176,
      "subtopic": "Dynamic Memory Allocation",
      "question": "What generally happens to dynamically allocated memory if a program exits without calling free() on it?",
      "options": {
        "A": "The memory is automatically written to disk permanently",
        "B": "The compiler automatically frees it right before the program exits",
        "C": "The memory remains allocated permanently, even after the OS itself shuts down",
        "D": "The memory becomes permanently corrupted data",
        "E": "The operating system typically reclaims it when the process ends, though it was still a leak during execution",
        "F": "It always causes a hard, immediate crash"
      },
      "answer": "E",
      "explanation": "Modern operating systems reclaim all virtual memory when the process terminates, though failing to free memory during execution wastes system resources."
    },
    {
      "id": 177,
      "subtopic": "Dynamic Memory Allocation",
      "question": "Which widely used tool is commonly used to detect memory leaks in C programs?",
      "options": {
        "A": "Compiler warnings alone",
        "B": "The linker",
        "C": "The standard C runtime, automatically",
        "D": "Valgrind",
        "E": "printf-based debugging alone",
        "F": "sizeof(), checked at runtime"
      },
      "answer": "D",
      "explanation": "Valgrind (specifically the Memcheck tool) is widely utilized on Unix/Linux systems to diagnose memory leaks, buffer overruns, and use-after-free bugs."
    },
    {
      "id": 178,
      "subtopic": "Dynamic Memory Allocation",
      "question": "What does calling realloc(ptr, 0) typically behave similarly to?",
      "options": {
        "A": "Guaranteed to crash the program immediately",
        "B": "Doubling the size of the allocated memory",
        "C": "Having no effect on the memory at all",
        "D": "Freeing the memory that ptr points to",
        "E": "Always returning the exact same unchanged pointer",
        "F": "Initializing the existing memory to zero"
      },
      "answer": "D",
      "explanation": "Historically and in many standard C implementations, passing 0 as size to realloc(ptr, 0) frees the memory pointed to by ptr and returns NULL."
    },
    {
      "id": 179,
      "subtopic": "Dynamic Memory Allocation",
      "question": "Why is dynamic memory allocation often preferred over fixed-size static arrays?",
      "options": {
        "A": "It works only when handling strings",
        "B": "It removes the need to ever use pointers",
        "C": "It automatically prevents all possible memory errors",
        "D": "It is always faster than static allocation in every case",
        "E": "It lets the required memory size be decided and adjusted at runtime rather than fixed at compile time",
        "F": "It eliminates any use of the heap"
      },
      "answer": "E",
      "explanation": "Dynamic allocation allows programs to request exactly the necessary memory based on runtime conditions and user input."
    },
    {
      "id": 180,
      "subtopic": "Dynamic Memory Allocation",
      "question": "What kind of value does a successful call to malloc() return?",
      "options": {
        "A": "A void pointer to the start of the newly allocated memory block",
        "B": "A brand-new array object",
        "C": "A struct that describes the allocated block",
        "D": "The literal value 1",
        "E": "An integer representing the size of memory allocated",
        "F": "A string describing the memory location"
      },
      "answer": "A",
      "explanation": "malloc() returns a generic void pointer (void*) referencing the starting byte of the allocated memory block."
    },
    {
      "id": 181,
      "subtopic": "Structures & Unions",
      "question": "What is a structure (struct) in C primarily used for?",
      "options": {
        "A": "Comparing strings",
        "B": "Managing memory automatically",
        "C": "Storing only integer values",
        "D": "Creating loops",
        "E": "Declaring functions",
        "F": "Grouping variables of different data types under a single name"
      },
      "answer": "F",
      "explanation": "A struct is a user-defined composite data type that bundles multiple logically related variables of differing types together."
    },
    {
      "id": 182,
      "subtopic": "Structures & Unions",
      "question": "Which operator is used to access a member of a structure variable directly (not through a pointer)?",
      "options": {
        "A": "The * operator",
        "B": "The # operator",
        "C": "The & operator",
        "D": "The arrow (->) operator",
        "E": "The dot (.) operator",
        "F": "Square brackets []"
      },
      "answer": "E",
      "explanation": "The direct member access operator is the period or dot (.), as in 's1.age'."
    },
    {
      "id": 183,
      "subtopic": "Structures & Unions",
      "question": "Which operator is used to access a structure's member through a pointer to that structure?",
      "options": {
        "A": "The arrow (->) operator",
        "B": "The dot (.) operator",
        "C": "The ~ operator",
        "D": "Square brackets []",
        "E": "The % operator",
        "F": "Double dot (..)"
      },
      "answer": "A",
      "explanation": "The indirect member selection operator '->' (arrow) accesses fields through a structure pointer ('ptr->member', equivalent to '(*ptr).member')."
    },
    {
      "id": 184,
      "subtopic": "Structures & Unions",
      "question": "Which keyword is used to define a structure type in C?",
      "options": {
        "A": "record",
        "B": "class",
        "C": "object",
        "D": "group",
        "E": "struct",
        "F": "type"
      },
      "answer": "E",
      "explanation": "The 'struct' keyword defines user-defined structure types in C."
    },
    {
      "id": 185,
      "subtopic": "Structures & Unions",
      "question": "What is the key difference in memory allocation between a struct and a union?",
      "options": {
        "A": "They are functionally identical in terms of memory usage",
        "B": "A union allocates separate memory for every individual member",
        "C": "They allocate memory in exactly the same way",
        "D": "A union allocates memory equal to its largest member, shared by all members; a struct allocates separate memory for each member",
        "E": "Unions always consume more total memory than structs",
        "F": "A struct shares memory between members just like a union"
      },
      "answer": "D",
      "explanation": "In a struct, each member has its own separate memory address. In a union, all members overlap and share the same memory location, whose size equals the largest member (plus alignment)."
    },
    {
      "id": 186,
      "subtopic": "Structures & Unions",
      "question": "What does using typedef with a structure typically accomplish?",
      "options": {
        "A": "It converts a struct definition into a union",
        "B": "It creates an alias so the struct type can be referenced without repeating the 'struct' keyword",
        "C": "It deletes any unused structure members",
        "D": "It dynamically allocates memory for the struct",
        "E": "It compares two structure instances",
        "F": "It automatically initializes all members to zero"
      },
      "answer": "B",
      "explanation": "Using typedef creates a concise type alias, permitting declarations like 'Point p;' instead of 'struct Point p;'."
    },
    {
      "id": 187,
      "subtopic": "Structures & Unions",
      "question": "Can one structure contain another structure as one of its members?",
      "options": {
        "A": "Yes, this is known as a nested structure",
        "B": "No, doing so causes a compile-time error",
        "C": "Only arrays can be nested inside structs, not other structs",
        "D": "Only unions support this kind of nesting",
        "E": "Yes, but only when using pointers exclusively",
        "F": "No, structures can never be nested inside each other"
      },
      "answer": "A",
      "explanation": "C supports nested structures, allowing complex hierarchical domain data models to be composed."
    },
    {
      "id": 188,
      "subtopic": "Structures & Unions",
      "question": "What is an array of structures typically used for?",
      "options": {
        "A": "Creating a union from a struct",
        "B": "Storing a single structure containing multiple unrelated types",
        "C": "Replacing the need for pointers entirely",
        "D": "Storing multiple records that all share the same structure type",
        "E": "Declaring several unrelated variables at once",
        "F": "Storing only string data"
      },
      "answer": "D",
      "explanation": "An array of structures is used to store tables or collections of records, like a list of students or inventory products."
    },
    {
      "id": 189,
      "subtopic": "Structures & Unions",
      "question": "In a union, what happens if you write to one member and then read a different member?",
      "options": {
        "A": "The result is implementation-defined/undefined, since all members share the same memory",
        "B": "It always causes an immediate program crash",
        "C": "It is guaranteed to always produce zero",
        "D": "The compiler automatically converts the value correctly for you",
        "E": "Both members always retain their own correct, independent values",
        "F": "It always causes a compile-time error"
      },
      "answer": "A",
      "explanation": "Since union fields share identical storage, writing to one overwrites the common memory, resulting in reinterpretation of the bits (type punning)."
    },
    {
      "id": 190,
      "subtopic": "Structures & Unions",
      "question": "Why might a programmer choose a union instead of a struct for certain data?",
      "options": {
        "A": "To simplify pointer arithmetic in general",
        "B": "To allow inheritance similar to object-oriented programming",
        "C": "Because unions always execute faster than structs",
        "D": "To store all fields' values simultaneously and independently",
        "E": "To automatically generate constructors",
        "F": "To save memory when only one of several possible fields is needed at any given time"
      },
      "answer": "F",
      "explanation": "Unions conserve memory in embedded devices or protocols where multiple data formats are mutually exclusive at any single moment."
    },
    {
      "id": 191,
      "subtopic": "Structures & Unions",
      "question": "Which statement correctly declares a variable p1 of type 'struct Point'?",
      "options": {
        "A": "p1 struct Point;",
        "B": "Point p1;",
        "C": "Point p1 = struct();",
        "D": "struct Point p1;",
        "E": "new struct Point p1;",
        "F": "struct p1 Point;"
      },
      "answer": "D",
      "explanation": "Without a typedef, the struct tag must be prefixed with the keyword 'struct', as in 'struct Point p1;'."
    },
    {
      "id": 192,
      "subtopic": "Structures & Unions",
      "question": "What does the declaration 'struct Point { int x; int y; };' define?",
      "options": {
        "A": "A union definition",
        "B": "An array declaration",
        "C": "A pointer declaration",
        "D": "A macro definition",
        "E": "A function definition",
        "F": "A structure type with two integer members, x and y"
      },
      "answer": "F",
      "explanation": "It defines a struct type blueprint named 'struct Point' containing two member variables x and y of type int."
    },
    {
      "id": 193,
      "subtopic": "Structures & Unions",
      "question": "Can structures be passed as arguments to functions in C?",
      "options": {
        "A": "Yes, either by value (as a copy) or by pointer (by reference)",
        "B": "No, structures cannot be used with functions at all",
        "C": "Only indirectly, through global variables",
        "D": "Only as return values, never as input parameters",
        "E": "No, only individual members can ever be passed",
        "F": "Yes, but only by first converting them to a union"
      },
      "answer": "A",
      "explanation": "Structures can be passed by value (entire struct copied onto the stack) or by address using a pointer (struct Point *p)."
    },
    {
      "id": 194,
      "subtopic": "Structures & Unions",
      "question": "What is the main purpose of a self-referential structure (one containing a pointer to its own type)?",
      "options": {
        "A": "To build linked data structures such as linked lists and trees",
        "B": "To make copying the struct faster",
        "C": "To create simple arrays of structures",
        "D": "To force the structure into static memory only",
        "E": "To define a union instead of a struct",
        "F": "To avoid ever using pointers"
      },
      "answer": "A",
      "explanation": "Self-referential structures containing pointers to their own type (e.g. 'struct Node *next;') form linked lists, binary trees, and graphs."
    },
    {
      "id": 195,
      "subtopic": "Structures & Unions",
      "question": "Which of these correctly initializes a structure variable at the point of declaration?",
      "options": {
        "A": "struct Point p1 = [10, 20];",
        "B": "struct Point p1 = {10, 20};",
        "C": "struct Point p1 = new(10, 20);",
        "D": "struct Point p1: 10, 20;",
        "E": "struct Point p1 -> {10, 20};",
        "F": "struct Point p1(10, 20);"
      },
      "answer": "B",
      "explanation": "C uses curly brace syntax '{10, 20}' to assign initial values to members in declaration order."
    },
    {
      "id": 196,
      "subtopic": "Structures & Unions",
      "question": "What generally determines the total size of a struct in memory?",
      "options": {
        "A": "The size of its single largest member only, exactly like a union",
        "B": "It always equals the number of members declared",
        "C": "The sum of its members' sizes, often increased by compiler-added padding for alignment",
        "D": "It is always exactly 4 bytes regardless of members",
        "E": "It is always left completely undefined",
        "F": "Only the size of the very first member"
      },
      "answer": "C",
      "explanation": "A structure's size is the total of all its member sizes plus internal and trailing padding bytes inserted by the compiler for memory alignment."
    },
    {
      "id": 197,
      "subtopic": "Structures & Unions",
      "question": "What is structure padding?",
      "options": {
        "A": "A deprecated, no-longer-used feature of C",
        "B": "A manual technique used to compress a structure's overall size",
        "C": "Extra bytes inserted by the compiler between members to satisfy memory alignment requirements",
        "D": "A technique for hiding certain structure members",
        "E": "A step that must always be performed explicitly by the programmer",
        "F": "A concept that applies only to unions, not structs"
      },
      "answer": "C",
      "explanation": "CPUs access memory faster when data is aligned to natural word boundaries; compilers insert unused padding bytes between struct fields to satisfy this."
    },
    {
      "id": 198,
      "subtopic": "Structures & Unions",
      "question": "Which guideline best describes when to prefer struct over union, or vice versa?",
      "options": {
        "A": "Union should be used only for storing strings",
        "B": "Always prefer union for better performance in every situation",
        "C": "Use struct when all fields are needed at once; use union when only one field is needed at a time, to save memory",
        "D": "They are fully interchangeable with no practical differences",
        "E": "Always prefer struct purely for memory savings",
        "F": "Struct should be used only for storing numeric types"
      },
      "answer": "C",
      "explanation": "Use a struct when you need to store and access multiple fields simultaneously. Use a union when only one variant value is active at a time to minimize memory footprint."
    },
    {
      "id": 199,
      "subtopic": "Structures & Unions",
      "question": "What is the correct syntax to create a typedef alias named 'Point' for 'struct Point'?",
      "options": {
        "A": "typedef struct Point Point;",
        "B": "Point = typedef struct;",
        "C": "alias struct Point as Point;",
        "D": "typedef Point struct Point;",
        "E": "define struct Point as Point;",
        "F": "struct Point typedef Point;"
      },
      "answer": "A",
      "explanation": "'typedef struct Point Point;' aliases the type name 'struct Point' to 'Point'."
    },
    {
      "id": 200,
      "subtopic": "Structures & Unions",
      "question": "Can a plain C struct or union contain member functions, the way a C++ class can?",
      "options": {
        "A": "No, but macros can fully simulate them",
        "B": "No, C structs and unions cannot contain member functions since C is not object-oriented",
        "C": "Yes, using function pointers as members achieves exactly the same thing",
        "D": "Yes, unions natively support member functions",
        "E": "Only structs support member functions, but not unions",
        "F": "Yes, but only if declared static"
      },
      "answer": "B",
      "explanation": "C is a procedural language and does not support member methods inside structs or unions; member functions are a feature of C++."
    }
  ]
};
