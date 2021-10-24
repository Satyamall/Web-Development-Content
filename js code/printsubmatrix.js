var matrix=[
    [1,2,3],
    [5,6,7],
    [7,8,9]
];

for(var i=0;i<=1;i++)
{
    var op="";
    for(var j=0;j<=1; j++)
    {
      op+=" " + matrix[i][j];
    }
    console.log(op);
}