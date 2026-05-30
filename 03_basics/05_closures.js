// ============================================================================
// CLOSURES IN JAVASCRIPT
// ============================================================================
// A closure is a function that has access to variables from its outer (enclosing)
// scope, even after the outer function has returned.

// ----------------------------------------------------------------------------
// 1. BASIC CLOSURE EXAMPLE
// ----------------------------------------------------------------------------

function outerFunction(x) {
  // This inner function forms a closure
  return function innerFunction(y) {
    return x + y; // x is from outer function's scope
  };
}

const addFive = outerFunction(5);
console.log(addFive(3)); // 8 - still has access to x=5 even after outerFunction returned

// ----------------------------------------------------------------------------
// 2. CLOSURE WITH COUNTER (PRIVATE VARIABLES)
// ----------------------------------------------------------------------------

function createCounter() {
  let count = 0; // Private variable - not accessible from outside
  
  return {
    increment: function() {
      count++;
      return count;
    },
    decrement: function() {
      count--;
      return count;
    },
    getValue: function() {
      return count;
    }
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getValue()); // 2
console.log(counter.decrement()); // 1

// count is encapsulated - cannot be accessed directly

// ----------------------------------------------------------------------------
// 3. CLOSURE IN LOOP (COMMON PITFALL)
// ----------------------------------------------------------------------------

// Problem: All closures share the same variable reference
for (var i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 100); 
}
// Output: 4, 4, 4 (var is function-scoped, i becomes 4 after loop)

// Solution 1: Use let (block-scoped)
for (let i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// Output: 1, 2, 3

// Solution 2: Create closure with IIFE
for (var i = 1; i <= 3; i++) {
  ((num) => {
    setTimeout(() => console.log(num), 100);
  })(i);
}
// Output: 1, 2, 3

// ----------------------------------------------------------------------------
// 4. CLOSURE FOR DATA PRIVACY
// ----------------------------------------------------------------------------

function createPerson(name) {
  let _name = name; // Private variable
  
  return {
    getName: function() {
      return _name;
    },
    setName: function(newName) {
      if (typeof newName === 'string' && newName.trim()) {
        _name = newName;
      }
    }
  };
}

const person = createPerson("John");
console.log(person.getName()); // John
person.setName("Jane");
console.log(person.getName()); // Jane
// person._name is not accessible directly

// ----------------------------------------------------------------------------
// 5. CLOSURE WITH MULTIPLE OUTER VARIABLES
// ----------------------------------------------------------------------------

function calculator(base) {
  return {
    add: function(n) { return base + n; },
    subtract: function(n) { return base - n; },
    multiply: function(n) { return base * n; },
    divide: function(n) { return base / n; }
  };
}

const calc10 = calculator(10);
console.log(calc10.add(5));    // 15
console.log(calc10.subtract(3)); // 7
console.log(calc10.multiply(2)); // 20
console.log(calc10.divide(2));   // 5

// ----------------------------------------------------------------------------
// 6. MODULE PATTERN USING CLOSURES
// ----------------------------------------------------------------------------

const MathUtils = (function() {
  // Private variables
  let _precision = 2;
  
  // Private functions
  function roundTo(num, decimals) {
    return Math.round(num * Math.pow(10, decimals)) / Math.pow(10, decimals);
  }
  
  // Public API
  return {
    add: function(a, b) { return roundTo(a + b, _precision); },
    subtract: function(a, b) { return roundTo(a - b, _precision); },
    multiply: function(a, b) { return roundTo(a * b, _precision); },
    divide: function(a, b) { return b !== 0 ? roundTo(a / b, _precision) : 'Error'; },
    setPrecision: function(p) { _precision = p; }
  };
})();

console.log(MathUtils.add(0.1, 0.2)); // 0.3
MathUtils.setPrecision(4);
console.log(MathUtils.add(0.1, 0.2)); // 0.3

// ----------------------------------------------------------------------------
// 7. CURRYING WITH CLOSURES
// ----------------------------------------------------------------------------

function multiply(a) {
  return function(b) {
    return function(c) {
      return a * b * c;
    };
  };
}

const mul2 = multiply(2);
const mul2x3 = mul2(3);
console.log(mul2x3(4)); // 24

// Or more concisely
console.log(multiply(2)(3)(4)); // 24

// ----------------------------------------------------------------------------
// KEY TAKEAWAYS:
// ----------------------------------------------------------------------------
// 1. A closure gives access to an outer function's scope
// 2. Closures are created every time a function is created
// 3. Closures can capture variables from the outer scope
// 4. Useful for data privacy, function factories, and callbacks
// 5. Be careful with var in loops - use let or create explicit closures
// ----------------------------------------------------------------------------