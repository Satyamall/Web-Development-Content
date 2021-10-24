function charCount(str) 
{ 
   freq={}; 
   for (let c of str) 
      freq[c]=-~freq[c]; 
   return freq;
}

var str=prompt("enter the string");
charCount(str);