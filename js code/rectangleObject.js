var rectangle={
    length:12,
    breadth:8,
    area: function(){
        console.log(this.length*this.breadth)
    },
    perimeter(){
        console.log(2*(this.length + this.breadth))
    }
}

rectangle.area()

rectangle.perimeter()