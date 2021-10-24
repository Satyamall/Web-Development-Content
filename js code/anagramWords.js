var a1= "den";
var b1="end";
var a=a1.split("");
var b=b1.split("");
a.sort();
b.sort();
var f=0;
if(a.length!==b.length)
{
    f=1;
}
else{
    for(var i=0; i<a.length; i++)
    {
        if(a[i]!==b[i])
        {
            f=1;
            break;
        }
    }
}
if(f===1)
{
    console.log("FALSE");
}
else{
    console.log("TRUE");
}