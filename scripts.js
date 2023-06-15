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
function doSomething(){
  x=33;
  console.log(x);
  var x;
}

//Only variable declarations are hoisted. Variable initializations are not hoisted.
//ex#4
var x;
console.log(x);
x=23;
//to avoid hoisting, you can run javascript in strict mode by using "use strict" on top of the code

