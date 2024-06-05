
// hoisting is process of moving variable and function declarations to top of the file

var a;
console.log(a); // returns undefined
a = 10;
console.log(a); // returns 10

// even if not declared before, no problem, as declaration (but not assignment) is hoisted
console.log(b); // returns undefined
var b = 20;
console.log(b); // returns 20

// what is also happens to hoisted variable in this case, is initialization of variable with undefined
var c = undefined;
console.log(c); // returns undefined
c = 30;
console.log(c); // returns 30

// declared variable is initialized with undefined
let p;
console.log(p); // returns undefined
p = 3.14
console.log(p); // returns 3.14

// cannot declare a constant without initilization
const e = 2.71;
console.log(e); // returns 2.71

// for variables declared as let and const, hoisting also happens, but without initialization with undefined
console.log(d); // throws ReferenceError: can't access lexical declaration 'd' before initialization
let d = 40;
console.log(d); // returns 40

console.log(z); // throws ReferenceError: z is not defined, as no declaration exist and therefore not hoisted
