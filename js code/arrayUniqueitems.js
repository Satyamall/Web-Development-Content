var items = ['a', 'b', 'c', 'd', 'a', 'c'];
var res=[];
for(var i=0; i<items.length; i++)
{
   var count=0;
   for(var j=0; j<items.length; j++)
   {
       if(items[i]===items[j])
       {
           count++;
       }
   }
   if(count>=2)
   {
       res.push(items[i]);
   }
}
for(var i=0; i<res.length-1; i++)
{
    for(var j=1; j<res.length; j++)
    {
       if(res[i]===res[j])
       {
           res.pop(res[j]);
       }
    }
}
console.log(res);