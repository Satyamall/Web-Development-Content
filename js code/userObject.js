var person={
    name: "Ironman",
    year_of_birth:1974,
    printAge: function(){
        var currentYear= new Date().getFullYear();
        console.log(currentYear-this.year_of_birth);
    }
}

person.printAge()