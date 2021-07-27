//Inheritance is the Main Pillar in Object oriented Programming
//one class can inherit/acquire the properties,Methods of another class
//The class which inherits the properties of other is known as subclass (derived class, child class) and 
//the class whose properties are inherited is known as superclass
const Person = require("./basics7")
class Pet extends Person

{

    get location()
    {
        return "BlueCross"
    }
    constructor(firstName,lastName)
    {
        //call parent class constructor
        super(firstName,lastName)
    }

}
let pet =new Pet("sam","san")
pet.fullName()
console.log(pet.location)

//Another inheritance example of Car and Model which coveres getters,setters,static method

class Car {
    constructor(brand) {
      this.carname = brand;
    }
        get cnam() {
        return this.carname;
      }
      set cnam(x) {
        this.carname = x;
      }

      static hello() {
        return "Hello!!";
      }

      static hey(y) {
        return "Hey " + y.carname;
      }

    present() {
      return 'I have a ' + this.carname;
    }

  }
  
  class Model extends Car {
    constructor(brand, mod) {
      super(brand);
      this.model = mod;
    }
    show() {
      return this.present() + ', it is a ' + this.model;
    }
  }
  
  let myCar = new Model("Ford", "Mustang");
  console.log(myCar.show())
  console.log(myCar.cnam) //accessing getter here.you do not use parentheses when you want to get the property value.
 myCar.cnam="volvo" //Using a setter to change the carname to "Volvo":
 console.log(myCar.cnam) 
 console.log(Car.hello()) //You can calll 'hello()' on the Car Class since it is a static method
 //console.log(myCar.hello()) this will raise a error 
 console.log(Car.hey(myCar)) //If you want to use the myCar object inside the static method, you can send it as a parameter:


  /*It can be smart to use getters and setters for your properties, especially if you want to do something 
  special with the value before returning them, or before you set them.

To add getters and setters in the class, use the "get" and "set" keywords.

The name of the getter/setter method cannot be the same as the name of the property, in this case carname.

Many programmers use an underscore character _ before the property name to separate the getter/setter from the actual property:
*/

/*For other declarations, like functions, you will NOT get an error when you try to use it before it is declared, 
because the default behavior of JavaScript declarations are hoisting (moving the declaration to the top).
But in case of class you must declare it first before you create an object.
*/
