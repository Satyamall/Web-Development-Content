var matrix =[
    [1,2,3],
    [4,5,6],
    [0,8,9]
];
var sum1=0;
var sum2=0;
for(var i=0; i<matrix.length; i++)
{
    sum1 += matrix[i][i];
}
for(var i=0; i<matrix.length; i++)
{
    sum2 += matrix[i][matrix.length-1-i];
}
console.log(sum1-sum2);


// var matrix =[
//     [1,2,3,4],
//     [5,6,7,6],
//     [7,8,9,9],
//     [2,4,1,3]
// ];
// var sum1=0;
// var sum2=0;
// for(var i=0; i<matrix.length; i++)
// {
//     sum1 += matrix[i][i];
// }
// for(var i=0; i<matrix.length; i++)
// {
//     sum2 += matrix[i][matrix.length-1-i];
// }
// console.log(sum1-sum2);