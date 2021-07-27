let text1 = "What a very ";
text1 += "nice day"; //The += assignment operator can also be used to add (concatenate) strings:
console.log(text1);
console.log(5+5) //op: 10
console.log("5"+5) //oop: 55
console.log("hello"+5) //op: hello5
console.log(5+5+"hello") //op: 10hello JavaScript evaluates expressions from left to right. Different sequences can produce different results:
console.log("hello"+5+5) //op: hello55
//Note: ===	equal value and equal type also called as strict equal
// Note: !==	not equal value or not equal type also called as Strict unequal


const Person = require('./basics7')
let day = 'tuesday '
console.log(day.length)  //8
let subDay = day.slice(0,4) //tues

console.log(subDay)
console.log(day[1]) //u
//tue   day 
let splitDay =day.split("s")
console.log(splitDay[1].length)
console.log(splitDay[1].trim().length)

/*There are 3 methods for extracting a part of a string:

slice(start, end) //can accept negative indexing 
substring(start, end) //cannot accept negative indexing
substr(start, length) //can accept negative indexing //second parameter specifies the length of the extracted part.
*/


let date = '23'
let nextDate = '27'
let diff = parseInt(nextDate) - parseInt(date)
console.log(diff)
diff.toString()

let newQuote =day+ "is Funday day"
console.log(newQuote)
let val =newQuote.indexOf("day",5) //starts search from 5th index
console.log(val)
//tuesday is Funday 

//to count how many times "day" is occured in string
let count = 0
let value =newQuote.indexOf("day")
while(value!== -1) //it value is not found it will return -1
{
    count++ //2
    value =newQuote.indexOf("day",value+1)

}
console.log(count) 

let person =new Person("Chris","Edward")
console.log(person.fullName())



// typeof x will return string
// typeof y will return object
//Don't create strings as objects. It slows down execution speed.
//The new keyword complicates the code. This can produce some unexpected results
let x = "John";
let y = new String("John");
let z= new String("bremmers")
// (x === y) is false because x and y have different types (string and object)
// (x == y) is true because x and y have equal values
// (y == z) is false because x and y are objects."Objects cannot be compared"


//The replace() method does not change the string it is called on. It returns a new string.
//By default, the replace() method replaces only the first match
let text = "Please visit Microsoft! and Microsoft";
let newText = text.replace("Microsoft", "W3Schools");
console.log(newText)  //Please visit W3Schools! and Microsoft
console.log(text.toUpperCase())
console.log(text.toLocaleLowerCase())

//concat() joins two or more strings:
let text3 = "Hello";
let text4 = "World";
let text5 = text3.concat(" ", text4);
console.log(text5) //Hello World

//The concat() method can be used instead of the plus operator. These two lines do the same:
text = "Hello" + " " + "World!";
text = "Hello".concat(" ", "World!");

/*Note:All string methods return a new string. They don't modify the original string.
Formally said: Strings are immutable: Strings cannot be changed, only replaced*/




/*There are 3 methods for extracting string characters:

1.charAt(position)
2.charCodeAt(position) //returns the unicode of the character at a specified index in a string:returns a UTF-16 code (an integer between 0 and 65535)
3.Property access [ ] 

Property access might be a little unpredictable:

It makes strings look like arrays (but they are not)
If no character is found, [ ] returns undefined, while charAt() returns an empty string.
It is read only. str[0] = "A" gives no error (but does not work!)*/
let text6 = "HELLO WORLD";
text6[0] = "A"             // Gives no error, but does not work
text6[0]                   // returns H
console.log(text6.split("")) //If the separator is "", the returned array will be an array of single characters
/*Op: 
[
    'H', 'E', 'L', 'L',
    'O', ' ', 'W', 'O',
    'R', 'L', 'D'
  ]*/


  /*JavaScript methods for searching strings:

String.indexOf()
String.lastindexOf()
String.startsWith()
String.endsWith()

The search() method cannot take a second start position argument.
The indexOf() method cannot take powerful search values (regular expressions).

String.match() searches a string for a match against a regular expression, and returns the matches, as an Array object.
String.includes() returns true if a string contains a specified value.
syntax:string.includes(searchvalue, start)

String.startsWith(searchvalue, start) returns true if a string begins with a specified value, otherwise false
string.endswith(searchvalue, length)

*/
let text = "The rain in SPAIN stays mainly in the plain";
text.match(/ain/g)    // Returns an array [ain,ain,ain]

let text = "Hello world, welcome to the universe.";
text.includes("world")    // Returns true








