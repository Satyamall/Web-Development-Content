var marks={
    data:[
        {
           name:"Nurpul",
           marks:10
        },
        {
          name:"Prateek",
          marks:20
        },
        {
            name:"Aman",
            marks:30
        },
        {
            name:"Albert",
            marks:5
        },
        {
            name:"Yogesh",
            marks:15
        }
    ],
    average: function(){
        var sum=0;
        for(var i=0; i<this.data.length; i++)
        {
           sum += this.data[i].marks;
        }
        console.log(sum/this.data.length);
    },
    minimum: function(){
        var min=this.data[0].marks;
         for(var i=1; i<this.data.length; i++)
         {
            if(min>this.data[i].marks)
            {
                min=this.data[i].marks;
            }
         }
         console.log(min);
    },
    maximum: function(){
        var max=this.data[0].marks;
        for(var i=1; i<this.data.length; i++)
         {
            if(max<this.data[i].marks)
            {
                max=this.data[i].marks; 
            }
         }
         console.log(max);
    }
}

marks.average()
marks.minimum()
marks.maximum()