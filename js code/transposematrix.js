var matrix=[
    [1,2,3],
    [4,5,6]
];
var Tmatrix=[];
for(var i=0; i<matrix[0].length; i++)
{
    var m=[];
  for(var j=0; j<matrix.length; j++)
  {
     m.push(matrix[j][i]);
  }
  Tmatrix.push(m);
}
for(var i=0; i<Tmatrix.length; i++)
{
    console.log(Tmatrix[i].join(" "));
}



// var matrix=[
//     [1,2,3],
//     [4,5,6],
//     [7,8,9],
//     [1,2,3]
// ];
// var Tmatrix=[];
// for(var i=0; i<matrix[0].length; i++)
// {
//     var m=[];
//   for(var j=0; j<matrix.length; j++)
//   {
//      m.push(matrix[j][i]);
//   }
//   Tmatrix.push(m);
// }
// for(var i=0; i<Tmatrix.length; i++)
// {
//     console.log(Tmatrix[i].join(" "));
// }