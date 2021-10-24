var matrix1=[
    [1,2,3],
    [5,6,7],
    [7,8,9]
];
var matrix2=[
    [2,1,2],
    [1,2,1],
    [2,1,2]
];

var op="";
for(var i=0;i<matrix1.length;i++)
{
    for(var j=0;j<matrix1.length; j++)
    {
        op += " " +(matrix1[i][j] +matrix2[i][j]);    
    }
}
console.log(op);