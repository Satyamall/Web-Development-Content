//top to bottom
function runProgram(input){
    var a = input.split("\n");
    var t=Number(a[0]);
    var pos=1;
   while(t--)
   {
    var r=a[pos].split(" ").map(Number);
    var n=r[0];
    var m=r[1];
    var arr=[];
    for(var i=0; i<n; i++)
    {
      pos++;
      arr[i]=a[pos].split(" ").map(Number);
    }
    var res=[];
   var top=0;
     var b=n-1;
     var l=0;
     var rt=m-1;
     var size=n*m;
   var k=0;
   while(k<size)
   {
    for(var i=top; i<=b; i++)
    {
      res.push(arr[i][l]);
      k++;
    }
     l++;
    for(var i=l; i<=rt; i++)
    {
      res.push(arr[b][i]);
      k++;
    }
     b--;
    for(var i=b; i>=top; i--)
    {
      res.push(arr[i][rt]);
      k++;
    }
     rt--;
    for(var i=rt; i>=l; i--)
    {
      res.push(arr[top][i]);
      k++;
    }
     top++;
   }
    if(n<=m)
     {
       console.log(res.join(" "));
     }
     else
     {
       res.pop();
       console.log(res.join(" "));
     }
     pos+=1;
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




// bottom to top

//Enter code here
function runProgram(input){
    var a = input.split("\n");
    var t=Number(a[0]);
    var pos=1;
   while(t--)
   {
    var r=a[pos].split(" ").map(Number);
    var n=r[0];
    var m=r[1];
    var arr=[];
    for(var i=0; i<n; i++)
    {
      pos++;
      arr[i]=a[pos].split(" ").map(Number);
    }
    var res=[];
   var top=0;
     var b=n-1;
     var l=0;
     var rt=m-1;
     var size=n*m;
   var k=0;
   while(k<size)
   {
    for(var i=b; i>=top; i--)
    {
      res.push(arr[i][l]);
      k++;
    }
     l++;
    for(var i=l; i<=rt; i++)
    {
      res.push(arr[top][i]);
      k++;
    }
     top++;
    for(var i=top; i<=b; i++)
    {
      res.push(arr[i][rt]);
      k++;
    }
     rt--;
    for(var i=rt; i>=l; i--)
    {
      res.push(arr[b][i]);
      k++;
    }
     b--;
   }
   if(n<=m)
     {
       console.log(res.join(" "));
     }
     else
     {
       res.pop();
       console.log(res.join(" "));
     }
     pos+=1;
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