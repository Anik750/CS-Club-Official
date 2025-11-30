import Layout from "@/components/Layout";
import { Code2, Zap, Brain, CheckCircle, XCircle } from "lucide-react";
import { useState } from "react";

interface MCQuestion {
  id: number;
  language: string;
  difficulty: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export default function Problems() {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number | null>>({});
  const [showFeedback, setShowFeedback] = useState<Record<number, boolean>>({});

  const mcQuestions: MCQuestion[] = [
    {
      id: 1,
      language: "JavaScript",
      difficulty: "Easy",
      question: "What will be the output of console.log(typeof 'hello')?",
      options: ["'string'", "string", "'object'", "undefined"],
      correctAnswer: 1,
      explanation: "The typeof operator returns a string indicating the type of the operand. For a string value, it returns 'string' (without quotes in the output).",
    },
    {
      id: 2,
      language: "JavaScript",
      difficulty: "Easy",
      question: "Which method removes the last element from an array?",
      options: ["remove()", "pop()", "shift()", "delete()"],
      correctAnswer: 1,
      explanation: "The pop() method removes the last element from an array and returns that element. It modifies the original array.",
    },
    {
      id: 3,
      language: "JavaScript",
      difficulty: "Easy",
      question: "What does 'let' keyword do in JavaScript?",
      options: ["Declares a global variable", "Declares a block-scoped variable", "Declares a function", "All of the above"],
      correctAnswer: 1,
      explanation: "'let' declares a block-scoped variable, meaning it's only accessible within the block it's declared in, unlike 'var' which is function-scoped.",
    },
    {
      id: 4,
      language: "JavaScript",
      difficulty: "Easy",
      question: "What is the output of 5 + '5' in JavaScript?",
      options: ["10", "'55'", "Error", "'10'"],
      correctAnswer: 1,
      explanation: "When adding a number to a string, JavaScript coerces the number to a string and concatenates them, resulting in '55'.",
    },
    {
      id: 5,
      language: "JavaScript",
      difficulty: "Easy",
      question: "How do you create an arrow function in JavaScript?",
      options: ["function => {}", "=> () {}", "() => {}", "def () => {}"],
      correctAnswer: 2,
      explanation: "Arrow functions use the syntax () => {} or (params) => {} syntax, introduced in ES6.",
    },
    {
      id: 6,
      language: "JavaScript",
      difficulty: "Easy",
      question: "What does the 'const' keyword prevent?",
      options: ["Reassignment of the variable", "Mutation of objects", "Type changes", "Both A and B"],
      correctAnswer: 0,
      explanation: "'const' prevents reassignment but does not prevent mutation of objects. You can modify properties of a const object, but can't reassign the variable itself.",
    },
    {
      id: 7,
      language: "JavaScript",
      difficulty: "Easy",
      question: "Which method converts a string to uppercase?",
      options: ["toUpper()", "uppercase()", "toUpperCase()", "UPPER()"],
      correctAnswer: 2,
      explanation: "The toUpperCase() method returns a new string with all characters converted to uppercase.",
    },
    {
      id: 8,
      language: "JavaScript",
      difficulty: "Easy",
      question: "What is the default return value of a function with no return statement?",
      options: ["null", "0", "undefined", "false"],
      correctAnswer: 2,
      explanation: "If a function doesn't explicitly return a value, JavaScript returns 'undefined' by default.",
    },
    {
      id: 9,
      language: "JavaScript",
      difficulty: "Easy",
      question: "How do you check if a value is NaN?",
      options: ["value === NaN", "isNaN(value)", "value == NaN", "NaN.isValue(value)"],
      correctAnswer: 1,
      explanation: "Use isNaN() function to check if a value is NaN. You cannot use === because NaN === NaN returns false.",
    },
    {
      id: 10,
      language: "JavaScript",
      difficulty: "Medium",
      question: "What is a closure in JavaScript?",
      options: [
        "A function that closes other functions",
        "A function that has access to variables from its outer scope",
        "A function that returns another function",
        "A function that closes its scope",
      ],
      correctAnswer: 1,
      explanation: "A closure is a function that has access to variables from its outer (enclosing) function's scope, even after that function has finished executing.",
    },
    {
      id: 11,
      language: "JavaScript",
      difficulty: "Medium",
      question: "What is the purpose of Promise.all()?",
      options: [
        "Execute all promises sequentially",
        "Wait for all promises to resolve or reject",
        "Execute one promise at a time",
        "Cancel all pending promises",
      ],
      correctAnswer: 1,
      explanation: "Promise.all() returns a single promise that resolves when all promises in the iterable have resolved, or rejects if any promise rejects.",
    },
    {
      id: 12,
      language: "JavaScript",
      difficulty: "Medium",
      question: "What is hoisting in JavaScript?",
      options: [
        "Moving code to the top of the file",
        "Moving variable and function declarations to the top of their scope before code execution",
        "Removing unnecessary code",
        "Optimizing code performance",
      ],
      correctAnswer: 1,
      explanation: "Hoisting is JavaScript's behavior of moving variable (var) and function declarations to the top of their scope before code execution.",
    },
    {
      id: 13,
      language: "JavaScript",
      difficulty: "Medium",
      question: "What is the difference between == and === in JavaScript?",
      options: [
        "No difference",
        "== checks value, === checks value and type",
        "== is faster than ===",
        "=== only works with objects",
      ],
      correctAnswer: 1,
      explanation: "== performs type coercion before comparing, while === checks both value and type without any coercion. '5' == 5 is true, but '5' === 5 is false.",
    },
    {
      id: 14,
      language: "JavaScript",
      difficulty: "Medium",
      question: "What does the 'this' keyword refer to?",
      options: [
        "The global object always",
        "The object that the method is called on",
        "The parent function",
        "Depends on how the function is called",
      ],
      correctAnswer: 3,
      explanation: "'this' refers to the object on which the method is called, but its value can change depending on how and where the function is invoked.",
    },
    {
      id: 15,
      language: "JavaScript",
      difficulty: "Medium",
      question: "What is destructuring in JavaScript?",
      options: [
        "Removing properties from objects",
        "Unpacking values from arrays or properties from objects into distinct variables",
        "Deleting array elements",
        "Breaking down functions into smaller pieces",
      ],
      correctAnswer: 1,
      explanation: "Destructuring is a convenient way to unpack values from arrays or properties from objects into separate variables, using syntax like const { a, b } = obj.",
    },
    {
      id: 16,
      language: "JavaScript",
      difficulty: "Medium",
      question: "What is the spread operator (...) used for?",
      options: [
        "To comment code",
        "To spread array elements or object properties",
        "To create loops",
        "To declare variables",
      ],
      correctAnswer: 1,
      explanation: "The spread operator (...) expands an iterable (array or string) in places where zero or more elements are expected, useful for copying arrays/objects and function arguments.",
    },
    {
      id: 17,
      language: "JavaScript",
      difficulty: "Medium",
      question: "What does Array.map() return?",
      options: [
        "The same array",
        "A new array with elements transformed by the callback function",
        "A single accumulated value",
        "An object with mapped properties",
      ],
      correctAnswer: 1,
      explanation: "Array.map() creates a new array by applying a callback function to each element of the original array. The original array is not modified.",
    },
    {
      id: 18,
      language: "JavaScript",
      difficulty: "Hard",
      question: "What is the output of [1,2,3].map(parseInt)?",
      options: ["[1, 2, 3]", "[1, NaN, NaN]", "[1, 0, 0]", "Error"],
      correctAnswer: 1,
      explanation: "parseInt() has multiple parameters. map() passes (value, index, array), so it calls parseInt(1,0), parseInt(2,1), parseInt(3,2). The second parameter is the radix, causing unexpected results.",
    },
    {
      id: 19,
      language: "JavaScript",
      difficulty: "Hard",
      question: "What is a Symbol in JavaScript?",
      options: [
        "A string that represents a concept",
        "A unique and immutable identifier often used as object keys",
        "A mathematical symbol",
        "A decorator for functions",
      ],
      correctAnswer: 1,
      explanation: "A Symbol is a primitive data type introduced in ES6 that is unique and immutable. It's often used to create unique object keys to avoid conflicts.",
    },
    {
      id: 20,
      language: "JavaScript",
      difficulty: "Hard",
      question: "What is the difference between var and let in hoisting?",
      options: [
        "var and let are hoisted the same way",
        "var is hoisted and initialized; let is hoisted but not initialized (Temporal Dead Zone)",
        "let is hoisted before var",
        "var is not hoisted",
      ],
      correctAnswer: 1,
      explanation: "Both are hoisted, but var is hoisted and initialized with undefined, while let is hoisted but not initialized, creating a Temporal Dead Zone until the declaration is reached.",
    },
    {
      id: 21,
      language: "JavaScript",
      difficulty: "Hard",
      question: "What is event delegation?",
      options: [
        "Delegating event handling to parent elements",
        "Attaching event listeners to child elements only",
        "Removing event listeners from elements",
        "Creating new event types",
      ],
      correctAnswer: 0,
      explanation: "Event delegation is a technique where you attach an event listener to a parent element to handle events from its child elements, using event bubbling.",
    },
    {
      id: 22,
      language: "JavaScript",
      difficulty: "Hard",
      question: "What is the call stack in JavaScript?",
      options: [
        "A list of all variables in memory",
        "A mechanism that tracks function calls and their execution contexts",
        "A method for storing data",
        "A way to optimize code",
      ],
      correctAnswer: 1,
      explanation: "The call stack is a data structure that keeps track of function calls. When a function is called, it's pushed onto the stack; when it returns, it's popped off.",
    },
    {
      id: 23,
      language: "JavaScript",
      difficulty: "Hard",
      question: "What is a WeakMap in JavaScript?",
      options: [
        "A regular map with weak performance",
        "A map that holds weak references to keys, allowing garbage collection",
        "A map for weak typing",
        "A deprecated version of Map",
      ],
      correctAnswer: 1,
      explanation: "WeakMap holds weak references to its keys, meaning keys can be garbage collected. Keys must be objects, and WeakMap is not enumerable.",
    },
    {
      id: 24,
      language: "JavaScript",
      difficulty: "Hard",
      question: "What does Object.freeze() do?",
      options: [
        "Makes an object immutable (cannot add, remove, or modify properties)",
        "Stops object creation",
        "Deletes all properties",
        "Converts object to a string",
      ],
      correctAnswer: 0,
      explanation: "Object.freeze() makes an object immutable. You cannot add new properties, remove existing ones, or modify values of existing properties.",
    },
    {
      id: 25,
      language: "JavaScript",
      difficulty: "Hard",
      question: "What is the event loop in JavaScript?",
      options: [
        "A loop that creates events",
        "A mechanism that checks the call stack and callback queue, executing callbacks when the stack is empty",
        "A loop for event listeners",
        "A way to prevent infinite loops",
      ],
      correctAnswer: 1,
      explanation: "The event loop continuously checks if the call stack is empty, and if so, moves callbacks from the callback queue to the call stack for execution.",
    },

    {
      id: 26,
      language: "Java",
      difficulty: "Easy",
      question: "What is the correct syntax to declare a variable in Java?",
      options: ["var name;", "int name;", "variable name;", "declare name;"],
      correctAnswer: 1,
      explanation: "In Java, you must specify the data type when declaring a variable. 'int name;' declares an integer variable named 'name'.",
    },
    {
      id: 27,
      language: "Java",
      difficulty: "Easy",
      question: "Which keyword is used to create an object in Java?",
      options: ["create", "new", "object", "init"],
      correctAnswer: 1,
      explanation: "The 'new' keyword is used to create a new instance of a class and allocate memory for it.",
    },
    {
      id: 28,
      language: "Java",
      difficulty: "Easy",
      question: "What is the entry point of a Java application?",
      options: ["main() method", "start() method", "run() method", "init() method"],
      correctAnswer: 0,
      explanation: "The main() method is the entry point where the Java Virtual Machine starts executing your program. The signature is: public static void main(String[] args)",
    },
    {
      id: 29,
      language: "Java",
      difficulty: "Easy",
      question: "Which of these is NOT a primitive data type in Java?",
      options: ["int", "String", "boolean", "double"],
      correctAnswer: 1,
      explanation: "String is a reference type (a class), not a primitive type. Primitive types are: byte, short, int, long, float, double, boolean, and char.",
    },
    {
      id: 30,
      language: "Java",
      difficulty: "Easy",
      question: "What does the 'static' keyword mean in Java?",
      options: [
        "The variable/method cannot change",
        "The variable/method belongs to the class, not to instances",
        "The variable must be immutable",
        "The variable is private",
      ],
      correctAnswer: 1,
      explanation: "'static' means the variable or method belongs to the class itself, not to individual instances. You can access static members without creating an object.",
    },
    {
      id: 31,
      language: "Java",
      difficulty: "Easy",
      question: "What is the output of System.out.println(5 + 3 * 2);?",
      options: ["16", "11", "13", "24"],
      correctAnswer: 2,
      explanation: "Following operator precedence, multiplication is performed before addition: 3 * 2 = 6, then 5 + 6 = 11.",
    },
    {
      id: 32,
      language: "Java",
      difficulty: "Easy",
      question: "How do you create a comment in Java?",
      options: ["// comment", "# comment", "-- comment", "/* comment */"],
      correctAnswer: 0,
      explanation: "Java supports single-line comments with // and multi-line comments with /* */. Both are valid.",
    },
    {
      id: 33,
      language: "Java",
      difficulty: "Easy",
      question: "What does the 'final' keyword do when applied to a class?",
      options: [
        "The class becomes private",
        "The class cannot be subclassed",
        "The class is executed last",
        "The class is immutable",
      ],
      correctAnswer: 1,
      explanation: "'final' applied to a class prevents it from being extended or subclassed. Examples: String, Integer classes are final.",
    },
    {
      id: 34,
      language: "Java",
      difficulty: "Easy",
      question: "What is the purpose of the 'super' keyword?",
      options: [
        "To create a new object",
        "To refer to the parent class",
        "To mark a method as superior",
        "To indicate high priority",
      ],
      correctAnswer: 1,
      explanation: "'super' is used to call parent class methods or constructors. It's useful when you want to access overridden methods or constructor chaining.",
    },
    {
      id: 35,
      language: "Java",
      difficulty: "Medium",
      question: "What is an interface in Java?",
      options: [
        "A class that implements other classes",
        "A contract that defines methods a class must implement",
        "A way to store data",
        "A type of loop",
      ],
      correctAnswer: 1,
      explanation: "An interface is an abstract type that contains a collection of abstract methods. Classes that implement an interface must provide implementations for all interface methods.",
    },
    {
      id: 36,
      language: "Java",
      difficulty: "Medium",
      question: "What is the difference between abstract class and interface?",
      options: [
        "They are the same",
        "Abstract classes can have state (fields); interfaces cannot (before Java 8)",
        "Interfaces can extend classes",
        "Abstract classes cannot have methods",
      ],
      correctAnswer: 1,
      explanation: "Abstract classes can have instance variables with state, constructors, and methods with bodies. Interfaces are purely contracts (though Java 8+ allows default methods).",
    },
    {
      id: 37,
      language: "Java",
      difficulty: "Medium",
      question: "What is method overloading?",
      options: [
        "Calling a method multiple times",
        "Using the same method name with different parameters",
        "Creating a method inside another method",
        "Modifying a parent class method",
      ],
      correctAnswer: 1,
      explanation: "Method overloading allows multiple methods with the same name but different parameter lists (different number, type, or order of parameters).",
    },
    {
      id: 38,
      language: "Java",
      difficulty: "Medium",
      question: "What is the output of System.out.println('a' + 'b')?",
      options: ["ab", "195", "Error", "null"],
      correctAnswer: 1,
      explanation: "When you add two char values, they are converted to their ASCII integer values and added together. 'a' (97) + 'b' (98) = 195.",
    },
    {
      id: 39,
      language: "Java",
      difficulty: "Medium",
      question: "What is a constructor in Java?",
      options: [
        "A method that destroys objects",
        "A special method used to initialize objects",
        "A method that creates classes",
        "A method that returns a value",
      ],
      correctAnswer: 1,
      explanation: "A constructor is a special method with the same name as the class that initializes objects. It's called when an object is created with 'new'.",
    },
    {
      id: 40,
      language: "Java",
      difficulty: "Medium",
      question: "What is the purpose of the 'throw' keyword?",
      options: [
        "To catch exceptions",
        "To throw an exception",
        "To handle errors",
        "To prevent exceptions",
      ],
      correctAnswer: 1,
      explanation: "'throw' is used to explicitly throw an exception. You specify an exception object to throw when an abnormal condition occurs.",
    },
    {
      id: 41,
      language: "Java",
      difficulty: "Medium",
      question: "What does 'try-catch' block do?",
      options: [
        "Tries to run code and throws exceptions",
        "Catches all errors automatically",
        "Allows you to handle exceptions that may occur",
        "Prevents all errors",
      ],
      correctAnswer: 2,
      explanation: "A try-catch block allows you to attempt execution of code that might throw an exception, and handle any exceptions that occur gracefully.",
    },
    {
      id: 42,
      language: "Java",
      difficulty: "Medium",
      question: "What is polymorphism in Java?",
      options: [
        "Having multiple variables",
        "The ability of objects to take multiple forms",
        "Creating multiple classes",
        "Inheriting from multiple sources",
      ],
      correctAnswer: 1,
      explanation: "Polymorphism allows objects to take multiple forms. In Java, it's achieved through inheritance and interfaces, allowing you to use parent class references for child objects.",
    },
    {
      id: 43,
      language: "Java",
      difficulty: "Hard",
      question: "What is reflection in Java?",
      options: [
        "Mirroring objects",
        "The ability to inspect and modify classes, methods, and fields at runtime",
        "Creating mirrors of classes",
        "Reflecting light in code",
      ],
      correctAnswer: 1,
      explanation: "Reflection is a feature that allows you to examine or modify the structure of classes, methods, and fields at runtime using the reflection API.",
    },
    {
      id: 44,
      language: "Java",
      difficulty: "Hard",
      question: "What is the difference between '==' and equals() in Java?",
      options: [
        "They are the same",
        "== compares object references; equals() compares content",
        "equals() only works with strings",
        "== is slower than equals()",
      ],
      correctAnswer: 1,
      explanation: "'==' compares object references (memory addresses), while equals() compares the actual content/values of objects. Most classes override equals() to compare content.",
    },
    {
      id: 45,
      language: "Java",
      difficulty: "Hard",
      question: "What is a singleton pattern in Java?",
      options: [
        "A pattern with only one method",
        "A design pattern ensuring a class has only one instance and providing global access to it",
        "A pattern for single-threaded applications",
        "A pattern for single variables",
      ],
      correctAnswer: 1,
      explanation: "The singleton pattern restricts instantiation to a single object. Common implementations use private constructors and static getInstance() methods.",
    },
    {
      id: 46,
      language: "Java",
      difficulty: "Hard",
      question: "What is the purpose of the 'volatile' keyword?",
      options: [
        "To make variables unstable",
        "To ensure a variable is always read from main memory in multi-threaded environments",
        "To prevent variable changes",
        "To speed up variable access",
      ],
      correctAnswer: 1,
      explanation: "'volatile' tells the JVM that a variable may be accessed by multiple threads and should always be read from and written to main memory, not cached.",
    },
    {
      id: 47,
      language: "Java",
      difficulty: "Hard",
      question: "What is a lambda expression in Java?",
      options: [
        "An expression that always returns a value",
        "A concise way to represent anonymous functions",
        "An expression inside a loop",
        "A mathematical expression",
      ],
      correctAnswer: 1,
      explanation: "A lambda expression is a concise syntax for implementing functional interfaces. Introduced in Java 8, it simplifies anonymous class implementations.",
    },
    {
      id: 48,
      language: "Java",
      difficulty: "Hard",
      question: "What is the purpose of 'synchronized' keyword?",
      options: [
        "To synchronize computer clocks",
        "To prevent multiple threads from accessing a method/block simultaneously",
        "To speed up execution",
        "To make code readable",
      ],
      correctAnswer: 1,
      explanation: "'synchronized' is used to create thread-safe code by ensuring only one thread can execute a method or code block at a time, preventing race conditions.",
    },
    {
      id: 49,
      language: "Java",
      difficulty: "Hard",
      question: "What is a stream in Java (Java 8+)?",
      options: [
        "Input/output operations",
        "A sequence of elements supporting functional-style operations",
        "A file reading mechanism",
        "A way to serialize objects",
      ],
      correctAnswer: 1,
      explanation: "A stream is a sequence of elements from a source that supports aggregate operations. Streams enable functional programming style with map, filter, reduce operations.",
    },
    {
      id: 50,
      language: "Java",
      difficulty: "Hard",
      question: "What is the difference between ArrayList and LinkedList?",
      options: [
        "They are the same",
        "ArrayList is indexed; LinkedList uses nodes for dynamic linking",
        "LinkedList is faster for all operations",
        "ArrayList can only store integers",
      ],
      correctAnswer: 1,
      explanation: "ArrayList uses dynamic arrays (indexed access is O(1)); LinkedList uses doubly-linked nodes (indexed access is O(n)). Choose based on access patterns.",
    },

    {
      id: 51,
      language: "Python",
      difficulty: "Easy",
      question: "How do you create a list in Python?",
      options: ["list = {1, 2, 3}", "list = [1, 2, 3]", "list = (1, 2, 3)", "list = 1, 2, 3"],
      correctAnswer: 1,
      explanation: "In Python, lists are created using square brackets []. Curly braces {} create sets, and parentheses () create tuples.",
    },
    {
      id: 52,
      language: "Python",
      difficulty: "Easy",
      question: "What is the output of print(len('hello'))?",
      options: ["4", "5", "hello", "Error"],
      correctAnswer: 1,
      explanation: "The len() function returns the number of characters in a string. 'hello' has 5 characters.",
    },
    {
      id: 53,
      language: "Python",
      difficulty: "Easy",
      question: "How do you define a function in Python?",
      options: ["def function():", "function():", "define function():", "func function():"],
      correctAnswer: 0,
      explanation: "Python functions are defined using the 'def' keyword followed by the function name and parentheses. The body is indented.",
    },
    {
      id: 54,
      language: "Python",
      difficulty: "Easy",
      question: "What is the difference between a list and a tuple in Python?",
      options: [
        "They are the same",
        "Lists are mutable; tuples are immutable",
        "Tuples are faster",
        "Lists can only hold integers",
      ],
      correctAnswer: 1,
      explanation: "Lists (created with []) are mutable and can be modified. Tuples (created with ()) are immutable and cannot be changed after creation.",
    },
    {
      id: 55,
      language: "Python",
      difficulty: "Easy",
      question: "What does the 'in' operator do in Python?",
      options: [
        "Declares a variable",
        "Checks if a value exists in a sequence",
        "Creates a loop",
        "Imports a module",
      ],
      correctAnswer: 1,
      explanation: "The 'in' operator checks if a value exists in a sequence like a list, tuple, or string. Returns True or False.",
    },
    {
      id: 56,
      language: "Python",
      difficulty: "Easy",
      question: "How do you access the first element of a list in Python?",
      options: ["list[1]", "list[0]", "list.first()", "list.get(0)"],
      correctAnswer: 1,
      explanation: "Python uses zero-based indexing. The first element is at index 0. list[0] gives you the first element.",
    },
    {
      id: 57,
      language: "Python",
      difficulty: "Easy",
      question: "What is the purpose of 'None' in Python?",
      options: [
        "It means nothing",
        "It represents the absence of a value",
        "It's similar to null in other languages",
        "Both B and C",
      ],
      correctAnswer: 3,
      explanation: "'None' is Python's representation of a null or empty value. It's used as a placeholder when no value is needed, similar to 'null' in other languages.",
    },
    {
      id: 58,
      language: "Python",
      difficulty: "Easy",
      question: "How do you check if a key exists in a dictionary?",
      options: ["key in dict", "dict.contains(key)", "dict.hasKey(key)", "key.exists()"],
      correctAnswer: 0,
      explanation: "Use the 'in' operator to check if a key exists in a dictionary: 'key in dictionary' returns True or False.",
    },
    {
      id: 59,
      language: "Python",
      difficulty: "Easy",
      question: "What is a dictionary in Python?",
      options: [
        "An ordered list",
        "A collection of key-value pairs",
        "A type of string",
        "A function that returns values",
      ],
      correctAnswer: 1,
      explanation: "A dictionary is an unordered collection of key-value pairs, created with curly braces {}. You access values using their keys.",
    },
    {
      id: 60,
      language: "Python",
      difficulty: "Medium",
      question: "What is list comprehension in Python?",
      options: [
        "Understanding how lists work",
        "A concise way to create lists using a single line of code",
        "A method to find elements in a list",
        "A way to sort lists",
      ],
      correctAnswer: 1,
      explanation: "List comprehension is a concise and efficient way to create lists. Example: [x*2 for x in range(5)] creates [0, 2, 4, 6, 8].",
    },
    {
      id: 61,
      language: "Python",
      difficulty: "Medium",
      question: "What does the 'lambda' function do?",
      options: [
        "Creates a named function",
        "Creates an anonymous (unnamed) function",
        "Loops through items",
        "Handles exceptions",
      ],
      correctAnswer: 1,
      explanation: "'lambda' creates small anonymous functions. Example: lambda x: x*2 is a function that multiplies its input by 2.",
    },
    {
      id: 62,
      language: "Python",
      difficulty: "Medium",
      question: "What does the 'map()' function do?",
      options: [
        "Creates a dictionary",
        "Applies a function to each item in an iterable",
        "Sorts an iterable",
        "Filters items from an iterable",
      ],
      correctAnswer: 1,
      explanation: "map() applies a given function to all items in an iterable and returns an iterator of results. Example: list(map(lambda x: x*2, [1,2,3]))",
    },
    {
      id: 63,
      language: "Python",
      difficulty: "Medium",
      question: "What is the purpose of 'self' in Python classes?",
      options: [
        "A keyword for the class name",
        "A reference to the instance of the class",
        "A global variable",
        "A built-in function",
      ],
      correctAnswer: 1,
      explanation: "'self' refers to the instance of the class. It's used to access instance variables and methods. The first parameter of instance methods is always 'self'.",
    },
    {
      id: 64,
      language: "Python",
      difficulty: "Medium",
      question: "What is the output of 'Hello'.split('l')?",
      options: ["['Hello']", "['He', '', 'o']", "['He', 'lo']", "Error"],
      correctAnswer: 1,
      explanation: "The split() method divides a string by the specified separator. 'Hello'.split('l') gives ['He', '', 'o'] because there are two 'l's.",
    },
    {
      id: 65,
      language: "Python",
      difficulty: "Medium",
      question: "What is a decorator in Python?",
      options: [
        "A way to decorate objects",
        "A function that modifies another function or class",
        "A type of comment",
        "A string formatting tool",
      ],
      correctAnswer: 1,
      explanation: "A decorator is a function that takes another function or class and extends its behavior without modifying its source code. Uses the '@' symbol.",
    },
    {
      id: 66,
      language: "Python",
      difficulty: "Medium",
      question: "What does the 'enumerate()' function do?",
      options: [
        "Counts items in a list",
        "Returns index and value pairs from an iterable",
        "Lists all enumerated types",
        "Removes duplicates",
      ],
      correctAnswer: 1,
      explanation: "enumerate() returns pairs of (index, value) for each item in an iterable. Useful in loops: for i, val in enumerate(list):",
    },
    {
      id: 67,
      language: "Python",
      difficulty: "Medium",
      question: "What is the difference between 'extend' and 'append' for lists?",
      options: [
        "They do the same thing",
        "append() adds one element; extend() adds multiple elements",
        "extend() is faster",
        "append() works with strings only",
      ],
      correctAnswer: 1,
      explanation: "append() adds a single item to the end of a list. extend() adds all items from an iterable to the list. Example: [1,2].extend([3,4]) gives [1,2,3,4].",
    },
    // Python - Hard (68-75)
    {
      id: 68,
      language: "Python",
      difficulty: "Hard",
      question: "What is a generator in Python?",
      options: [
        "A tool that generates random numbers",
        "A function that yields values one at a time using 'yield'",
        "A type of loop",
        "A way to create classes",
      ],
      correctAnswer: 1,
      explanation: "A generator is a special function that uses 'yield' to return values one at a time, creating an iterator. It's memory-efficient for large datasets.",
    },
    {
      id: 69,
      language: "Python",
      difficulty: "Hard",
      question: "What is the Global Interpreter Lock (GIL) in Python?",
      options: [
        "A way to lock objects",
        "A mechanism that allows only one thread to execute at a time",
        "A security feature",
        "A garbage collection tool",
      ],
      correctAnswer: 1,
      explanation: "The GIL ensures that only one thread executes Python bytecode at a time, even on multi-core systems. This can limit multi-threaded performance.",
    },
    {
      id: 70,
      language: "Python",
      difficulty: "Hard",
      question: "What is a metaclass in Python?",
      options: [
        "A class inside another class",
        "A class whose instances are classes",
        "A special method",
        "A type of inheritance",
      ],
      correctAnswer: 1,
      explanation: "A metaclass is a 'class of a class'. It defines how classes behave. Most classes have 'type' as their metaclass. Custom metaclasses inherit from 'type'.",
    },
    {
      id: 71,
      language: "Python",
      difficulty: "Hard",
      question: "What does the '*args' parameter do?",
      options: [
        "Multiplies arguments",
        "Allows a function to accept any number of positional arguments",
        "Creates a list of arguments",
        "Marks required arguments",
      ],
      correctAnswer: 1,
      explanation: "'*args' allows a function to accept a variable number of positional arguments as a tuple. Example: def func(*args) can be called with any number of arguments.",
    },
    {
      id: 72,
      language: "Python",
      difficulty: "Hard",
      question: "What does '**kwargs' do?",
      options: [
        "Multiplies keyword arguments",
        "Allows a function to accept any number of keyword arguments as a dictionary",
        "Creates a list of keywords",
        "Marks required keywords",
      ],
      correctAnswer: 1,
      explanation: "'**kwargs' allows a function to accept any number of keyword arguments as a dictionary. Example: def func(**kwargs) can receive keyword arguments like func(a=1, b=2).",
    },
    {
      id: 73,
      language: "Python",
      difficulty: "Hard",
      question: "What is the purpose of '__init__' in Python?",
      options: [
        "To initialize the module",
        "A constructor that initializes class instances",
        "To start a program",
        "To import modules",
      ],
      correctAnswer: 1,
      explanation: "'__init__' is the constructor method in Python classes. It initializes instance variables and is called automatically when creating an object.",
    },
    {
      id: 74,
      language: "Python",
      difficulty: "Hard",
      question: "What is the difference between shallow and deep copy?",
      options: [
        "They are the same",
        "Shallow copy copies only the top-level; deep copy copies recursively",
        "Shallow copy is faster",
        "Deep copy only works with lists",
      ],
      correctAnswer: 1,
      explanation: "Shallow copy creates a new object but references the same nested objects. Deep copy recursively copies all nested objects, creating independent copies.",
    },
    {
      id: 75,
      language: "Python",
      difficulty: "Hard",
      question: "What is context manager (with statement) in Python?",
      options: [
        "A way to manage variables",
        "A protocol for resource management (setup/cleanup)",
        "A type of loop",
        "A function decorator",
      ],
      correctAnswer: 1,
      explanation: "A context manager (used with 'with') ensures proper setup and cleanup. Example: 'with open(file) as f:' automatically closes the file when done.",
    },

    {
      id: 76,
      language: "C++",
      difficulty: "Easy",
      question: "What is the correct syntax to include a header file in C++?",
      options: ["include <iostream>;", "#include <iostream>", "import iostream;", "#import iostream"],
      correctAnswer: 1,
      explanation: "#include <iostream> is the correct syntax. The # indicates a preprocessor directive, and <> is used for standard library headers.",
    },
    {
      id: 77,
      language: "C++",
      difficulty: "Easy",
      question: "What is the main() function in C++?",
      options: [
        "A function that runs secondary code",
        "The entry point where program execution begins",
        "A function for main operations",
        "A deprecated function",
      ],
      correctAnswer: 1,
      explanation: "main() is the entry point of a C++ program. The operating system calls main() to start execution. Return type is typically int.",
    },
    {
      id: 78,
      language: "C++",
      difficulty: "Easy",
      question: "How do you declare a variable in C++?",
      options: ["var x = 5;", "int x = 5;", "x: int = 5;", "declare x as 5;"],
      correctAnswer: 1,
      explanation: "In C++, you declare a variable by specifying its type: 'int x = 5;' creates an integer variable named x with value 5.",
    },
    {
      id: 79,
      language: "C++",
      difficulty: "Easy",
      question: "What does 'cout' do in C++?",
      options: [
        "Counts output",
        "Provides output to the console",
        "Creates objects",
        "Defines constants",
      ],
      correctAnswer: 1,
      explanation: "'cout' is the standard output stream. You use it with the << operator to print to the console: cout << 'Hello World';",
    },
    {
      id: 80,
      language: "C++",
      difficulty: "Easy",
      question: "What is the output of cout << 5 + 3;?",
      options: ["53", "8", "Error", "5 + 3"],
      correctAnswer: 1,
      explanation: "C++ evaluates the expression first: 5 + 3 = 8, then outputs 8 to the console.",
    },
    {
      id: 81,
      language: "C++",
      difficulty: "Easy",
      question: "What is a pointer in C++?",
      options: [
        "An arrow in the code",
        "A variable that stores a memory address",
        "A type of reference",
        "A function parameter",
      ],
      correctAnswer: 1,
      explanation: "A pointer is a variable that holds a memory address. You declare a pointer with * symbol: int* ptr; To get an address, use &: int* ptr = &x;",
    },
    {
      id: 82,
      language: "C++",
      difficulty: "Easy",
      question: "What does the '&' operator do?",
      options: [
        "Bitwise AND",
        "Gets the address of a variable (address-of operator)",
        "Reference operator",
        "All of the above",
      ],
      correctAnswer: 3,
      explanation: "The & operator has multiple meanings: as address-of operator (&x gives address), in references, and as bitwise AND in expressions.",
    },
    {
      id: 83,
      language: "C++",
      difficulty: "Easy",
      question: "What is the purpose of '#include' directive?",
      options: [
        "To comment code",
        "To include header files with declarations",
        "To import libraries",
        "To define constants",
      ],
      correctAnswer: 1,
      explanation: "'#include' is a preprocessor directive that includes header files. <iostream> is for input/output, 'string' for strings, etc.",
    },
    {
      id: 84,
      language: "C++",
      difficulty: "Easy",
      question: "How do you declare a constant in C++?",
      options: ["const int x = 5;", "constant x = 5;", "int const x = 5;", "Both A and C"],
      correctAnswer: 3,
      explanation: "Both 'const int x = 5;' and 'int const x = 5;' declare constants. You can also use #define for compile-time constants.",
    },
    {
      id: 85,
      language: "C++",
      difficulty: "Medium",
      question: "What is the difference between a pointer and a reference?",
      options: [
        "They are the same",
        "Pointers can be null and reassigned; references cannot",
        "References are faster",
        "Pointers are safer",
      ],
      correctAnswer: 1,
      explanation: "Pointers can be null and can be reassigned to different variables. References must be initialized and cannot be changed once assigned.",
    },
    {
      id: 86,
      language: "C++",
      difficulty: "Medium",
      question: "What is a class in C++?",
      options: [
        "A group of functions",
        "A blueprint for objects with data members and member functions",
        "A type of variable",
        "A loop structure",
      ],
      correctAnswer: 1,
      explanation: "A class is a template for creating objects. It contains data members (variables) and member functions (methods) that define the object's behavior.",
    },
    {
      id: 87,
      language: "C++",
      difficulty: "Medium",
      question: "What is a constructor in C++?",
      options: [
        "A method that builds objects",
        "A special method with the same name as the class that initializes objects",
        "A method that constructs classes",
        "A type of function",
      ],
      correctAnswer: 1,
      explanation: "A constructor is a special member function called when an object is created. It initializes the object's data members.",
    },
    {
      id: 88,
      language: "C++",
      difficulty: "Medium",
      question: "What is the output of cout << 'a' + 0;?",
      options: ["a", "97", "0", "Error"],
      correctAnswer: 1,
      explanation: "The character 'a' is implicitly converted to its ASCII value (97), then 97 + 0 = 97 is printed.",
    },
    {
      id: 89,
      language: "C++",
      difficulty: "Medium",
      question: "What does 'this' pointer do in C++?",
      options: [
        "Points to the class",
        "Points to the current object instance",
        "Points to the parent class",
        "Points to the first member",
      ],
      correctAnswer: 1,
      explanation: "'this' is a pointer to the current object. It allows you to access the object's members and return the object itself.",
    },
    {
      id: 90,
      language: "C++",
      difficulty: "Medium",
      question: "What is operator overloading?",
      options: [
        "Assigning too many operators",
        "Redefining built-in operators for custom classes",
        "Overloading function calls",
        "Creating new operators",
      ],
      correctAnswer: 1,
      explanation: "Operator overloading allows you to redefine how operators like +, -, ==, etc., work with custom classes. Example: class Vector { Vector operator+(const Vector& v) { ... } }",
    },
    {
      id: 91,
      language: "C++",
      difficulty: "Medium",
      question: "What is inheritance in C++?",
      options: [
        "Inheriting money",
        "A derived class inheriting properties from a base class",
        "Creating multiple classes",
        "Passing values to functions",
      ],
      correctAnswer: 1,
      explanation: "Inheritance allows a derived (child) class to inherit data members and member functions from a base (parent) class. Uses ':' syntax.",
    },
    {
      id: 92,
      language: "C++",
      difficulty: "Medium",
      question: "What does 'virtual' keyword do?",
      options: [
        "Makes a function temporary",
        "Allows a function to be overridden in derived classes",
        "Makes a function final",
        "Speeds up function calls",
      ],
      correctAnswer: 1,
      explanation: "'virtual' enables dynamic (runtime) polymorphism. A virtual function can be overridden in derived classes for different implementations.",
    },
    {
      id: 93,
      language: "C++",
      difficulty: "Hard",
      question: "What is RAII (Resource Acquisition Is Initialization)?",
      options: [
        "A way to initialize resources",
        "A programming idiom where resources are tied to object lifetime",
        "A memory allocation technique",
        "A type of constructor",
      ],
      correctAnswer: 1,
      explanation: "RAII is a C++ idiom where resource acquisition (opening file, allocating memory) happens in constructor and release happens in destructor.",
    },
    {
      id: 94,
      language: "C++",
      difficulty: "Hard",
      question: "What is the difference between stack and heap memory?",
      options: [
        "They are the same",
        "Stack is automatic; heap is manual (requires delete)",
        "Heap is faster",
        "Stack can store pointers only",
      ],
      correctAnswer: 1,
      explanation: "Stack memory is automatically managed and fast but limited size. Heap is manually managed (you must delete), larger, but slower.",
    },
    {
      id: 95,
      language: "C++",
      difficulty: "Hard",
      question: "What is a template in C++?",
      options: [
        "A design template",
        "A generic blueprint for classes/functions supporting multiple data types",
        "A type of class",
        "A way to organize code",
      ],
      correctAnswer: 1,
      explanation: "Templates allow you to write generic code. Example: template<typename T> void function(T value) works with any data type.",
    },
    {
      id: 96,
      language: "C++",
      difficulty: "Hard",
      question: "What is a smart pointer in C++?",
      options: [
        "A pointer that is intelligent",
        "A pointer wrapper that automatically manages memory",
        "A fast pointer",
        "A pointer with error checking",
      ],
      correctAnswer: 1,
      explanation: "Smart pointers (unique_ptr, shared_ptr) automatically manage memory cleanup. They prevent memory leaks by deleting memory when the pointer is destroyed.",
    },
    {
      id: 97,
      language: "C++",
      difficulty: "Hard",
      question: "What is the difference between unique_ptr and shared_ptr?",
      options: [
        "They are the same",
        "unique_ptr is owned by one; shared_ptr can be owned by multiple",
        "shared_ptr is unique",
        "unique_ptr is faster",
      ],
      correctAnswer: 1,
      explanation: "unique_ptr has exclusive ownership - only one pointer can own the resource. shared_ptr allows multiple pointers to own the resource.",
    },
    {
      id: 98,
      language: "C++",
      difficulty: "Hard",
      question: "What is const-correctness?",
      options: [
        "Using const correctly",
        "The practice of marking methods/parameters as const to prevent modifications",
        "A correct way to use constants",
        "Making constants constant",
      ],
      correctAnswer: 1,
      explanation: "Const-correctness means using const keyword appropriately: const objects can't call non-const methods, const references/parameters can't be modified.",
    },
    {
      id: 99,
      language: "C++",
      difficulty: "Hard",
      question: "What is the STL (Standard Template Library)?",
      options: [
        "A way to create templates",
        "A collection of generic data structures and algorithms",
        "A library for strings",
        "A tool for templates",
      ],
      correctAnswer: 1,
      explanation: "The STL provides containers (vector, list, map), iterators, and algorithms. It's a powerful part of C++ for data structure management.",
    },
    {
      id: 100,
      language: "C++",
      difficulty: "Hard",
      question: "What is move semantics in C++?",
      options: [
        "Moving objects to different memory locations",
        "Transferring ownership of resources to avoid unnecessary copying",
        "A way to optimize loops",
        "A type of pointer",
      ],
      correctAnswer: 1,
      explanation: "Move semantics (using && and std::move) transfers resource ownership instead of copying. This avoids expensive copy operations and improves performance.",
    },
  ];

  const handleAnswerSelect = (questionId: number, optionIndex: number) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: optionIndex,
    }));
    setShowFeedback((prev) => ({
      ...prev,
      [questionId]: true,
    }));
  };

  const getLanguageQuestions = (language: string) => {
    return mcQuestions.filter((q) => q.language === language);
  };

  const getQuestionsByDifficulty = (language: string, difficulty: string) => {
    return getLanguageQuestions(language).filter((q) => q.difficulty === difficulty);
  };

  const MCQuestionCard = ({ question }: { question: MCQuestion }) => {
    const isAnswered = selectedAnswers[question.id] !== undefined;
    const selectedOption = selectedAnswers[question.id];
    const isCorrect = selectedOption === question.correctAnswer;

    return (
      <div className="bg-dark-bg border border-gold/20 rounded-xl p-6 hover:border-gold/50 hover:shadow-lg hover:shadow-gold/20 transition-all duration-300">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-base font-semibold text-gold flex-1 pr-4">{question.question}</h3>
          <span
            className={`px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap ${
              question.difficulty === "Easy"
                ? "bg-green-500/20 text-green-300"
                : question.difficulty === "Medium"
                  ? "bg-yellow-500/20 text-yellow-300"
                  : "bg-red-500/20 text-red-300"
            }`}
          >
            {question.difficulty}
          </span>
        </div>

        <div className="space-y-2 mb-4">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(question.id, index)}
              className={`w-full text-left p-3 rounded-lg border transition-all duration-200 ${
                selectedOption === index
                  ? isCorrect
                    ? "bg-green-500/20 border-green-500 text-green-300"
                    : "bg-red-500/20 border-red-500 text-red-300"
                  : "bg-dark-surface/50 border-gold/20 text-gold/70 hover:border-gold/50 hover:bg-dark-surface"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="font-semibold min-w-[24px]">{String.fromCharCode(65 + index)}</span>
                <span>{option}</span>
                {isAnswered && selectedOption === index && (
                  <span className="ml-auto">
                    {isCorrect ? <CheckCircle size={20} /> : <XCircle size={20} />}
                  </span>
                )}
              </div>
            </button>
          ))}
        </div>

        {showFeedback[question.id] && (
          <div className={`p-4 rounded-lg ${isCorrect ? "bg-green-500/10 border border-green-500/30" : "bg-red-500/10 border border-red-500/30"}`}>
            <p className={`text-sm ${isCorrect ? "text-green-300" : "text-red-300"}`}>
              <span className="font-semibold">{isCorrect ? "✓ Correct!" : "✗ Incorrect"}</span>
            </p>
            <p className="text-gold/70 text-sm mt-2">{question.explanation}</p>
          </div>
        )}
      </div>
    );
  };

  const languages = ["JavaScript", "Java", "Python", "C++"];

  return (
    <Layout>
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden py-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/34804022/pexels-photo-34804022.jpeg"
            alt="Programming and coding"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-mystical/20 via-transparent to-gold/5"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">
              Practice Questions
            </span>
          </h1>
          <p className="text-xl text-gold/70">
            Test your knowledge with multiple-choice questions across JavaScript, Java, Python, and C++
          </p>
        </div>
      </section>
      <div className="relative h-24 bg-gradient-to-r from-dark-bg via-dark-surface/30 to-dark-bg overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex items-center gap-16">
            <svg className="w-4 h-12 opacity-50" viewBox="0 0 20 48" fill="none" stroke="rgba(212, 175, 55, 0.6)" strokeWidth="2">
              <path d="M 15 0 L 5 24 L 15 48" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-gold/60 rounded-full"></div>
              <div className="w-1 h-1 bg-gold/40 rounded-full"></div>
              <div className="w-24 h-0.5 bg-gradient-to-r from-gold/40 via-gold/60 to-gold/40"></div>
              <div className="w-1 h-1 bg-gold/40 rounded-full"></div>
              <div className="w-1 h-1 bg-gold/60 rounded-full"></div>
            </div>
            <svg className="w-4 h-12 opacity-50" viewBox="0 0 20 48" fill="none" stroke="rgba(212, 175, 55, 0.6)" strokeWidth="2">
              <path d="M 5 0 L 15 24 L 5 48" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="absolute inset-x-0 top-1 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"></div>
          <div className="absolute inset-x-0 bottom-1 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"></div>
        </div>
      </div>

      <section className="py-16 bg-dark-bg border-b border-gold/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {languages.map((lang) => {
              const langQuestions = getLanguageQuestions(lang);
              return (
                <div key={lang} className="bg-dark-surface border border-gold/20 rounded-xl p-6 text-center">
                  <Code2 className="text-gold mx-auto mb-3" size={32} />
                  <p className="text-gold/60 text-sm mb-2">{lang}</p>
                  <p className="text-4xl font-bold text-gold">{langQuestions.length}</p>
                  <p className="text-gold/50 text-xs mt-2">Questions</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {languages.map((language) => (
        <section key={language} className="py-20 bg-dark-bg border-b border-gold/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-8">
                <Code2 className="text-gold" size={32} />
                <h2 className="text-3xl md:text-4xl font-bold text-gold">{language}</h2>
              </div>

              {getQuestionsByDifficulty(language, "Easy").length > 0 && (
                <div className="mb-12">
                  <h3 className="text-xl font-bold text-green-400 mb-6 flex items-center gap-2">
                    <span className="inline-block w-1 h-6 bg-green-400 rounded-full"></span>
                    Easy
                  </h3>
                  <div className="grid grid-cols-1 gap-6">
                    {getQuestionsByDifficulty(language, "Easy").map((question) => (
                      <MCQuestionCard key={question.id} question={question} />
                    ))}
                  </div>
                </div>
              )}
              <div className="relative h-16 bg-gradient-to-r from-transparent via-gold to-transparent opacity-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-dark-bg via-gold/20 to-dark-bg"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
        </div>
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"></div>
      </div>
              {getQuestionsByDifficulty(language, "Medium").length > 0 && (
                <div className="mb-12">
                  <h3 className="text-xl font-bold text-yellow-400 mb-6 flex items-center gap-2">
                    <span className="inline-block w-1 h-6 bg-yellow-400 rounded-full"></span>
                    Medium
                  </h3>
                  <div className="grid grid-cols-1 gap-6">
                    {getQuestionsByDifficulty(language, "Medium").map((question) => (
                      <MCQuestionCard key={question.id} question={question} />
                    ))}
                  </div>
                </div>
              )}

              <div className="relative h-16 bg-gradient-to-r from-transparent via-gold to-transparent opacity-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-dark-bg via-gold/20 to-dark-bg"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
        </div>
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"></div>
      </div>
              {getQuestionsByDifficulty(language, "Hard").length > 0 && (
                <div className="mb-12">
                  <h3 className="text-xl font-bold text-red-400 mb-6 flex items-center gap-2">
                    <span className="inline-block w-1 h-6 bg-red-400 rounded-full"></span>
                    Hard
                  </h3>
                  <div className="grid grid-cols-1 gap-6">
                    {getQuestionsByDifficulty(language, "Hard").map((question) => (
                      <MCQuestionCard key={question.id} question={question} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      ))}
    </Layout>
  );
}

