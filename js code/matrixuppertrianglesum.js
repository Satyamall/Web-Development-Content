var matrix=[
    [1,2,1],
    [2,1,2],
    [1,2,1]
];

var sum=0;
for(var i=0;i<matrix.length;i++)
{
    for(var j=i;j<matrix.length; j++)
    {
        sum += matrix[i][j];    
    }
}
console.log(sum);