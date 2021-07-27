module.exports = class Person
{

    age = 25 //this is a class property
   // location ="canada"
    get location()
    {
        return "canada"
    }
    //constructor is method which executes by default when you create object of the class
    constructor(firstName,lastName)
    {
        
        this.firstName =firstName
        this.lastName = lastName
    }

/*The constructor method is a special method:

It has to have the exact name "constructor"
It is executed automatically when a new object is created
It is used to initialize object properties
If you do not define a constructor method, JavaScript will add an empty constructor method.

*/

    //methods
    fullName()
    {
        console.log(this.firstName+this.lastName)
    }






}

// let person =new Person("Tim","Joseph")
//let person1 =new Person("CHris","JOnes")
//console.log(person.age)
//console.log(person.location)
//console.log(person.fullName())
//console.log(person1.fullName())
