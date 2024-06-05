let global_variable = 42;

function global_function(){
  console.log("Running  in global scope")
  console.log("I can see global variables");

  // everything declared outside function scope is visible inside a function
  console.log(global_variable);

  // trying to get this variable outside a function will fail, as nothing can leak outside function scope
  var global_variable_leaked = false;
  
  return true;
}

global_function();

// ask console for global_variable_leaked and see if it works

function other_global_function(){

  // this variable 'shadows' global variable
  var global_variable = 3.14;

  console.log(global_variable);
}

other_global_function(); // returns 3.14

function another_global_function(){

  // this variable 'shadows' global variable...
  var global_variable = 2.71;

  // ...but this function call doesn't care, as global_variable is 'lexically scoped' to other_global_function
  // it means declared scope is enforced, call-time scope has no power here
  global_function();
}

another_global_function(); // returns 42
