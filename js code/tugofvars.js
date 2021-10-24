var a = "Masai";
var b = 21331;
var c = true;

// * "string" == "number"
// * false
console.log(typeof a == typeof Number(b));

// * "number" == " number"
// * typeof NaN == typesof 21331
// Number(a)
// true
console.log(typeof Number(a) == typeof Number(b));

// "true" == ""
// false
console.log(typeof String(c) == String(""));
