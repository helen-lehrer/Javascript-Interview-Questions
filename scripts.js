//#1: Explain Hoisting in Javascript
//hoisting is the default behaviour in javascript where variable and function declarations are moved on top of the scope. 

//ex#1
hoistedVariable = "declared after initialized";
console.log(hoistedVariable);
var hoistedVariable;

//ex#2
hoistedFunction();
function hoistedFunction(){
  console.log("declared after calling")
}

//ex#3
//takes place in the local scope as well
function localScope(){
  x=33;
  console.log(x);
  var x;
}

//Only variable declarations are hoisted. Variable initializations are not hoisted.
//ex#4
var x;
console.log(x);
x=23;
//undefined


console.log(y);
var y=23;
//undefined

//to avoid hoisting, you can run javascript in strict mode by using "use strict" on top of the code

//#2: What is the difference between var and let keywords in javascript?
//var has used since the very beginning of Javascript, whereas 'let' was introduced in 2015.
//Var has a function scope. 'Let' scope is limited to the block in which it was declared. 
//let and const are hoisted but not initialized.Referencing the variable in the block before the variable declaration results in a ReferenceError because the variable is in a "temporal dead zone" from the start of the block until the declaration is processed.

//ex#1 Temporal Dead Zone
// console.log(let1);
// let let1 = 5;
//Reference Error

//ex#2
let let2;
console.log(let2)
let2 = 5;
//undefined

//#3: Explain Implicit Type Coercion in javascript.
//Implicit type coercion is when there an automatic conversion of value from one data type to another. This takes place when the operands of an expressions are of different data types. 

let stringCoercionX = 3;
let stringCoercionY = "3";
console.log(stringCoercionX + stringCoercionY);
//33

//#4: Explain passed by value and passed by reference.

let primitiveTypeX = 234;
let primitiveTypeY = primitiveTypeX;
console.log("New memory allocated: " + primitiveTypeY);
primitiveTypeY = 300;
console.log("primitive type Y after Y is reassigned: " + primitiveTypeY);
console.log("primitive type X after Y is reassigned (It doesn't change): " + primitiveTypeX);

//when the value of primitiveTypeY is assigned to primtiveTypeX, new space in the memory is allocated. primitiveTypeY is not pointing to the location of primitiveTypeX, it is pointing to a new location.
//primitive data types are passed by value.

let obj = { name: "Vivek", surname: "Bisht" };
let  obj2 = obj;
obj2.name = "Sarah";
console.log(obj2);
console.log(obj);

//both objects have the value of "Sarah" for the key "name".
//non-primitive data types are always passed by reference



