//Enter code here
function runProgram(input){
  var S = input;
  var op = "";
  var c = 1;
  for(var i=1; i<S.length; i++)
  {
    var curr=S[i];
    var prev = S[i-1];
    if(curr===prev)
    {
      c++;
    }
    else
    {
      op += prev + c;
      c=1;
    }
    if(i===S.length-1)
    {
      op += curr + c;
    }
  }
  var res="";
  for(var i=1; i<op.length; i+=2)
  {
    if(op[i]%2!==0)
    {
      res += op[i-1];
    }
  }
  if(res.length===0)
  {
    console.log("Empty String");
  }
  else
  {
    console.log(res);
  }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
 read += input;
});
process.stdin.on("end", function () {
 read = read.replace(/\n$/,"")
runProgram(read);
});

process.on("SIGINT", function () {
 read = read.replace(/\n$/,"")
 runProgram(read);
 process.exit(0);
});