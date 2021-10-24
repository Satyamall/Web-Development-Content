//Enter code here
function runProgram(input){
    var a = input.split("\n");
    var n=Number(a[0]);
    var arr=a[1].split(" ").map(Number);
    var c=1;
    var count={};
    var ar=[];
    for(var i=0; i<arr.length-1; i++)
    {
      if(arr[i]===arr[i+1])
      {
        ar.push(arr[i])
      }
      else
      {
        count[arr[i]]=ar.length+1;
        ar.splice(0,ar.length);
      }
    }
    count[ar]=ar.length+1;
    var max=0;
    for(var i in count)
    {
      if(i%2!==0)
      {
        if(max<count[i])
        {
          max=count[i];
        }
      }
    }
    console.log(max);
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