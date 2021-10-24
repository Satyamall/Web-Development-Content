function function_name(argument1, argument2, argument3){
    // perform the task
}

function_name(1, 2, 3);

// example
function addition(a,b){
    console.log(a+b);
}

function subtraction(a,b){
    console.log(a-b);
}

addition(1,2); // 3
subtraction(2,3) // -1

// return
function addition(a,b){
    return a+b;
}

var result = addition(1,2);
console.log(result);

// important
function foo(){
    console.log(a)
 }
 function boo(){
     var a = 3;
     foo()
 }
 var a = 2;
 boo();


 
 // lexical scope
 var name = "Abhishek";

function init(){
    var age = 25;
    console.log(name); // Abhishek
    console.log(age);  // 25
}

console.log(name); // Abhishek
console.log(age); // ReferenceError: age is not defined