
var dict={
    "Yogesh":915678,
    "Nrupul":512345,
    "Prateek":213456,
    "Aman":120987,
    "Madhukar":009871
}
var user="Aman";
var f="";
for(var key in dict)
{
    if(user===key)
    {
        f+=dict[key];
        break;
    }
}
if(f.length===0)
{
    console.log("No user found");
}
else{
    console.log(f);
}