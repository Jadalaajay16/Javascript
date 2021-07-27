//object is collection of properties
//It is a common practice to declare objects with the const keyword.

let person = { //in props we can add strings,numbers and functions too

    firstName:'Tim',
    lastName : 'Joe',
        age : 24,
    fullName : function()
    {
        console.log(this.firstName+this.lastName)
    }

}
console.log(person.fullName()) //accessing function.If you access a method without the () parentheses, it will return the function definition
console.log(person.lastName) //this and below both ways we can access objects
console.log(person['lastName'])
person.firstName = 'Tim Dane' //we can assign property also
console.log(person.firstName)
person.gender = 'male' //this property is not there in obj,so it will create a new property
console.log(person)
delete person.gender
console.log(person)
console.log('gender' in person) //to check if property exists in obj
//print all the values of the javascript object
for(let key in person)
{
    console.log(person[key])
}











