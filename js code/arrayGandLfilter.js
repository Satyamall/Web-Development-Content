var array={
    data:[1,2,6,7,3,4,9,0],
    lessThanItems:function(){
        var less=4;
        var val="";
        for(var i=0; i<this.data.length; i++)
        {
            if(this.data[i]<less)
            {
               val += this.data[i] + " ";
            }
        }
        console.log(val);
    },
    greaterThanItems:function(){
        var greater=6;
        var val="";
        for(var i=0; i<this.data.length; i++)
        {
            if(this.data[i]>greater)
            {
               val += this.data[i] + " ";
            }
        }
        console.log(val);
    }
}

array.lessThanItems()
array.greaterThanItems()