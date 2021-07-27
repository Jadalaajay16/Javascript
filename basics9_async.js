//A callback is a function passed as an argument to another function.

//Using a callback, you could call the calculator function (myCalculator) with a callback, 
//and let the calculator function run the callback after the calculation is finished:
function myDisplayer(some) {
    console.log(some)
  }
  
  function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
  }
  
  myCalculator(5, 5, myDisplayer);
  /*In the example above, myDisplayer is the name of a function.

It is passed to myCalculator() as an argument.

When you pass a function as an argument, remember not to use parenthesis.

Right: myCalculator(5, 5, myDisplayer);

Wrong: myCalculator(5, 5, myDisplayer());

When to Use a Callback?
Where callbacks really shine are in asynchronous functions, 
where one function has to wait for another function (like waiting for a file to load).

*/

/*
ASYNCHRONOUS
Functions running in parallel with other functions are called asynchronous.


*/
//Instead of passing the name of a function as an argument to another function, 
//you can always pass a whole function instead:
setTimeout(function() { myFunction("I love You !!!"); }, 3000);

function myFunction(value) {
  console.log(value)
}

/*

Practical usage Waiting for Files:
If you create a function to load an external resource (like a script or a file), you cannot use the content before it is fully loaded.

This is the perfect time to use a callback.

*/