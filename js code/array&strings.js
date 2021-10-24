// * Arrays

var arr_name = [item_1, item_2, item_3, ....];

// examples
var arr = [17, 21, 1, 13, 19];

var arr1 = ["banana", "oranges", "papaya", "apple"];

var arr2 = [true, false, false, true];

var a = 12;
var b = 23;
var c = 324;
var d = 3424;
var e = 1729;

var arr = [12, 23, 324, 3424, 1729];


var arr = [12, 23, 324, 3424, 1729];

console.log(ar[0]) // 12
console.log(ar[1]) // 23
console.log(ar[2]) // 324
console.log(ar[3]) // 3424
console.log(ar[4]) // 1729


var arr = ["Abhishek", 26, true];

// * Methods in array
var arr = [1, 2342, 43];
arr.push(1729);
console.log(arr)
// [1, 2342, 43, 1729]

var arr = [1, 23, 432, 4324];
arr.pop();
console.log(arr);
// [1, 23, 432]

// * property in arrays
var arr = [2134, 4134 ,3241, 213];
console.log(arr.length);

// * some inbuilt functions
Math.ceil(1.7) // 2
Math.ceil(2.1) // 3
Math.ceil(-2.5) // -2

Math.floor(1.7) // 1
Math.floor(2.1) // 2
Math.floor(-2.5) // -3

// split methods
var input = `21 321 3213 3213 321`;
var data = input.split(" ");

console.log(data);
// [ '21', '321', '3213', '3213', '321' ]




// * Strings

var name = "Abhishek Jain";
var bootcamp = "Masai School";
var num = "1232";
var temp = "true";

var name = "Masai School";
console.log(name[0])  // M
console.log(name[1])  // a
console.log(name[2])  // s
console.log(name[3])  // a
console.log(name[4])  // i
console.log(name[5])  // 
console.log(name[6])  // S
console.log(name[7])  // c
console.log(name[8])  // h
console.log(name[9])  // o
console.log(name[10]) // o
console.log(name[11]) // l

var name = "Rutwik";
var n = name.length;

for(var i=0;i<n;i++){
    console.log(name[i]);
}

// R
// u
// t
// w
// i
// k

// * substrings
var name = "Abhishek"
// Abhi is a substring
// she is a substring
// he is a subtring
// ke is not a subtring
// Abish is not substring

// * subsequences
var name = "Abhishek"
// Abhi is a subsequence
// Abish is a subsequence
// biek is a subsequence
// hAb is not a subsequence
// sik is not a subsequence