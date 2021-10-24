// Create a copy

//* HOSTING
var ar;
function ar(x){
   return x*x;
}
console.log(ar(2));


//*Stack
function a(){
    function b(){
      function c(){
        x=100;
      }
      c();
    }
    b();
}
a();
console.log(x);


// *function declaration 
function copy(arr){  // function for copied the value of original array.
    var ar=new Array(); // creating new array
    function value(val){
        ar=val;
    }
    value(arr);
    return ar; // return the array ar.
}

var arr=["Albert","Aman","Nurpul","Ankush","Venu"]; // original array.
var res=copy(arr); // calling the function copy for copying the value or arr.

console.log(arr); //printing the value of arr.
console.log(res); // printing the value of copied function.


// *Reassignment value
var a=100;
console.log(a);
a=200
console.log(a);


// *Mutability
var a = {
    foo: 'bar'
};
var b = a;
b.foo =  'test2'
console.log(b.foo); // test2
console.log(a.foo);
console.log(a === b) // true

