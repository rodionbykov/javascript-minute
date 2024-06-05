const global_constant = "this is global";

let global_variable = 42;

// var makes a variable in a global object, which is 'window'
var global_object_variable = "hey";

// ask console for window.global_object_variable to see a value returned

function global_function(){
  console.log("Running  in global scope")
  console.log("I can see global variables");

  // everything declared outside function scope is visible inside a function
  console.log(global_constant);
  console.log(global_variable);
  console.log(global_object_variable);

  // trying to get this variable outside a function will fail, as nothing can leak outside
  var global_variable_leaked = false;
  
  return true;
}

// also ask console for window.global_function() and see if it works
