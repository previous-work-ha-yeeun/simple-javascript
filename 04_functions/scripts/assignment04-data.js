/*
IMPORTANT NOTE: ensure each and all variables declared here 
are later used as arguments 
when demonstrating the invocation of your functions
eg: invoke each function several times, each time with different sample data
*/

/*
-----------------------------------------
Part 1
-----------------------------------------
some test data to use as arguments 
for the list images function tests
*/
//use this when pathing the src="" to the images folder
const pathToImages  = "images/";

//an array with some valid images and some junk
const arrayOfSomeImages      = ["jane.jpg", 23,"joe.jpg","jana.jpg", true,"jim.jpg"];

//not a arrays of images
const notAnArrayOfImages     = "just a string";
const alsoNotAnArrayOfImages = 4321;
const anArrayOfNumbers       = [54, 54, 2345, -45];
const anArrayOfBooleans      = [true, false, false, true, true];

/*
-----------------------------------------
Part 2
-----------------------------------------
some test data to use as arguments 
for the list links function tests
*/
//bad examples of array of link urls
const notAnArrayOfLinks     = [true, false, true];
const alsoNotAnArrayOfLinks = 45;
//a valid array of link urls
const arrayOfLinks = ["https://bcit.ca","https://learn.bcit.ca","https://www.bcit.ca/programs/computer-systems-technology-diploma-full-time-5500dipma/"]; 
//contains valid (strings) and invaild (non-string) data
const anotherArrayOfLinks = ["https://stackoverflow.com/",true,"https://developer.mozilla.org/en-US/","https://www.w3.org/","https://validator.w3.org/",345,-34,"https://jigsaw.w3.org/css-validator/"];

/*
-----------------------------------------
Part 3
-----------------------------------------
some test data to use as arguments 
for the list of names function tests
*/
//not valid examples
const notAnArrayOfNames     = 23;
const arrayOfNamesTooSmall  = ["Shania"];
//a valid array of names
const arrayOfNames          = ["Shania", "Joe", "Jane", "Sandy", "Susan"];
