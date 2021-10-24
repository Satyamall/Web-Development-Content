var string={
    item: "FireFox",
    vowelsCount:function(){
        var count=0;
        for(var i=0; i<this.item.length; i++)
        {
           switch(this.item[i])
           {
               case "a":
               case "A":
               case "e":
               case "E":
               case "i":
               case "I":
               case "o":
               case "O":
               case "u":
               case "U":
                   count++; 
           }
        }
        console.log(count);
    },
    reverse:function(){
        var rev="";
        for(var i=this.item.length-1; i>=0; i--)
        {
            rev += this.item[i];
        }
        console.log(rev);
    },
    changeCase:function(){
        var res="";
        for(var i=0; i<this.item.length; i++)
        {
            var c=this.item[i];
            if(c===c.toUpperCase())
            {
                res += c.toLowerCase();
            }
            else if(c===c.toLowerCase())
            {
                res += c.toUpperCase();
            }
        }
        console.log(res);
    }
}

string.vowelsCount()
string.reverse()
string.changeCase()