var arr=[
    [1,2,1],
    [2,1,2]    
];
for(var i=0; i<arr[0].length; i++)
{
   var sum=0;
   for(var j=0; j<arr.length; j++)
   {
       sum += arr[j][i];
   }
   console.log(sum);
}