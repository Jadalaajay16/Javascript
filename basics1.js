
console.log("Hello World")
//JavaScript accepts both double and single quotes:
  let a=4
  console.log(a)
  console.log(typeof(a))

  //JavaScript has only one type of numbers.
//Numbers can be written with, or without decimals:
  let b = 234.6
  console.log(typeof(b))

  var c = "Rahul Shetty"
  console.log(typeof(c))


  let required = true
  console.log(typeof(required))
  //null and undefined
// let c = a+b ( it did not work //we cannot redeclare variable with let keyword but possible with var)
   c = a+b // reassigning is allowed with let 
   //var c=a+b )this is also allowed)
  console.log(c)
 
 console.log(!required)

//var:both redeclaring and reassigning works
//let: redeclaring not allowed,reassigning is allowed
//const: both redeclaring and reassigning does not work

//instanceof:Returns true if an object is an instance of an object type

//JavaScript has dynamic types. This means that the same variable can be used to hold different data types:
let x;           // Now x is undefined
x = 5;           // Now x is a Number
x = "John";      // Now x is a String
console.log(x) //op: John


/*
JavaScript Objects
JavaScript objects are written with curly braces {}.

Object properties are written as name:value pairs, separated by commas.*/

const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

let car;    // Value is undefined, type is undefined
//Any variable can be emptied, by setting the value to undefined. The type will also be undefined.
car = undefined;    // Value is undefined, type is undefined


//An empty value has nothing to do with undefined.An empty string has both a legal value and a type.
let car = "";    // The value is "", the typeof is "string"

//these are comments
/*
dsds
dss
dss
*/