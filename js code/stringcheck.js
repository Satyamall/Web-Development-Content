function runProgram(input){
    var a = input.split("\n");
    var n = Number(a[0]);
    var str=a[1];
     var code, i;
  var isNumeric = false, ischar=false;
  var f=true;

  for (i = 0; i < n; i++) {
    code = str.charCodeAt(i);
    switch (f) {
      case code > 47 && code < 58: 
        isNumeric = true;
        break;

      case (code > 64 && code < 91) || (code > 96 && code < 123): 
        ischar = true;
        break;
        
      default:
        f=false;
    }
  }
    if(isNumeric && ischar)
    {
      console.log("alphanumeric");
    }
    else
    {
      var numeric=false, char=false;
       for (i = 0; i < n; i++) {
    code = str.charCodeAt(i);
     
      if( code > 47 && code < 58)
      {
        numeric = true;
        break;
      }

      else if((code > 64 && code < 91) || (code > 96 && code < 123))
      {
        char= true;
        break;
      }
    }
      if(numeric===true)
      {
        console.log("numbers");
      }
      else if(char===true)
      {
        console.log("chars");
      }
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