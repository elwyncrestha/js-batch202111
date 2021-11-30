# JavaScript Training

## Pre-requisites

* HTML
* CSS

## What is JavaScript?

* High-level, interpreted programming language.
* Conforms to the ECMAScript specification.
* Multi-paradigm.
* Client-side as well as Server-side.

## Contents

### Day 1 (1.5hrs)

#### Fundamentals

* HTML and Scripts
* Console Output
* Variables
  * var
  * let (ES6)
    * Variables defined with let cannot be Redeclared.
    * Variables defined with let must be Declared before use.
    * Variables defined with let have Block Scope.
  * const (ES6)
    * Variables defined with const cannot be Redeclared.
    * Variables defined with const cannot be Reassigned.
    * Variables defined with const have Block Scope.
* Data Types
  * JavaScript has dynamic types.
  * number
  * string
  * boolean
  * array
  * object
  * undefined
  * null
* Type Conversion
  * Converting Strings to Numbers
    * `Number()`
    * `parseFloat()`
    * `parseInt()`
    * unary + operator
  * Converting Numbers to Strings
    * `String()`
    * `x.toString()`
  * Converting Dates to Numbers
    * `Number(new Date())`
    * `new Date().getTime()`
  * Converting Dates to String
    * `String(Date())`
    * `Date().toString()`
  * Converting Booleans to Numbers
    * `Number(false)`
    * `Number(true)`
  * Converting Booleans to Strings
    * `String(false)`
    * `String(true)`
    * `false.toString()`
    * `true.toString()`
* Functions
* Strings and String methods
  * String literal
  * String object
  * Using comparator operator `==` and `===`
  * `slice(start, end)`
  * `substring(start, end)`
  * `substr(start, length)`
  * `replace()`
  * `toUpperCase()`
  * `toLowerCase()`
  * `concat()`
  * `trim()`
  * `charAt(position)`
  * `charCodeAt(position)`
  * Property access [ ]
  * `split()`
* Numbers and Math object
  * Numbers are Always 64-bit Floating Point
  * JavaScript uses the + operator for both addition and concatenation.
  * Numbers are added. Strings are concatenated.

  ```JS
  let x = 10;
  let y = 20;
  let z = x + y;
  ---
  let x = "10";
  let y = "20";
  let z = x + y;
  ---
  let x = 10;
  let y = "20";
  let z = x + y;
  ---
  let x = "10";
  let y = 20;
  let z = x + y;
  ---
  let x = 10;
  let y = 20;
  let z = "The result is: " + x + y;
  ---
  let x = 10;
  let y = 20;
  let z = "30";
  let result = x + y + z;
  ---
  ```

  * NaN
    * `isNaN(x)`

  ```JS
  let x = 100 / "Apple";
  ```

  * Infinity
  * Hexadecimal
  * JavaScript Numbers as Objects

* Arrays and Array methods
  * Arrays are a special kind of objects, with numbered indexes.
  * `push()`
  * `pop()`
  * `shift()`
  * `unshift()`
  * `splice()`
* Object literals
  * Destructuring
* JSON
* Conditionals
* Loops
  * for
  * while
  * do while
  * for of
  * for in
* High Order Array Methods
* Arrow functions
* Constructor Functions & Prototypes Intro
* ES6 Classes Intro

---

### Day 2 (1.5hrs)

#### DOM Manipulation

* Window Object
* DOM
* DOM Selection
  * Single element selection
  * Multiple elements selection
* Manipulating The DOM
* Creating elements
* Removing the elements
* Events
* Event bubbling and delegation

---

### Day 3 (1.5hrs)

* Prototypes
* Prototypal Inheritance
* ES6 Classes and Sub Classes
* Asynchronous programming
* Ajax and XHR
* Callbacks
* Fetch API
* ES6 Promises
* Async/Await

---

### Day 4 (1.5hrs)

* Module
* Local storage
* Session storage
* Try/catch error handling

---