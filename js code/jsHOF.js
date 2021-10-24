var numbers= [11,12,13,14,15,16];
numbers.forEach(function(el){
    console.log(el * el);
})


var num=[1,2];
var double = function(el){
    return el * 2;
}
var num_doubles = num.map(double);
console.log(num_doubles);


var num1=[1,2,3];
var isodd = function(el){
    return (el % 2 === 1);
}
var num_odd= num1.filter(isodd);
console.log(num_odd);


var num2=[2,3,4];
var product= function(ac,el){
    return ac * el;
}
var num_prod= num2.reduce(product);
console.log(num_prod);


var num3=[1,2,3,4];
var sum = function(ac,el){
    return ac + el;
}
var num_odd_sum= num3.filter(isodd).reduce(sum);
console.log(num_odd_sum);


var num4= [1,2,3,4,5,6];
var divBy3 = function(el){
    return el % 3 === 0;
}
var cubes = function(el){
    return el**3;
}
var num_3cube_sum = num4.filter(divBy3).map(cubes).reduce(sum);
console.log(num_3cube_sum);