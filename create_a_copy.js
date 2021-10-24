// Create a copy

function copy(arr){  // function for copied the value of original array.
    var ar=new Array(); // creating new array
    // for(var i=0; i<arr.length; i++)
    // {
    //     ar.push(arr[i]);
    // }
    ar=arr.slice(); // copy the all value of arr into ar.
    ar[0]="Swanand"; // changing the value of index 0 in ar by Swanand. 
    return ar; // return the array ar.
}

var arr=["Albert","Aman","Nurpul","Ankush","Venu"]; // original array.
var res=copy(arr); // calling the function copy for copying the value or arr.

console.log(arr); //printing the value of arr.
console.log(res); // printing the value of copied function.