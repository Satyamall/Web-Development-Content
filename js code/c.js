var N=12;
var f=0;
for(var i=2; i<=N/2; i++)
{
  if(N%i===0)
  {
    f=1;
  }
}
if(f===1)
{
  console.log("No");
}
else
{
  console.log("Yes");
}