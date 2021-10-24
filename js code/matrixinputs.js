//Enter code here
function runProgram(input){
    var a = input.split("\n");
    var a1=a[0].split(" ").map(Number);
    var n=a1[0];
    var m=a1[1];
    var mt= a.slice(1,n+1);
    var matrix1=[];
    for(var i=0; i<mt.length; i++)
    {
       matrix1.push(mt[i].split(" ").map(Number));
    }
    var a2=a[n+1].split(" ").map(Number);
    var n1=a2[0];
    var m1=a2[1];
    var mt1=a.slice(n+2);
    var matrix2=[];
    for(var i=0; i<mt1.length; i++)
    {
      matrix2.push(mt1[i].split(" ").map(Number));
    }
    var sum=0;
    var sum1=0;
    for(var i=0; i<n; i++)
    {
      for(var j=0; j<m; j++)
      {
        sum += matrix1[i][j];
      }
    }
    for(var i=0; i<n1; i++)
    {
      for(var j=0; j<m1; j++)
      {
        sum1 += matrix2[i][j];
      }
    }
    if(sum >sum1)
    {
      console.log(sum);
    }
    else
    {
      console.log(sum1);
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