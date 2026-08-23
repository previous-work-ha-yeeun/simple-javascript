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
const anArrayOfBooleans      = [true, false, true];

/*
-----------------------------------------
Part 2
-----------------------------------------
some test data to use as arguments 
for the list links function tests
*/
//bad examples of array of link urls
const arrayOfLinksTooSmall  = ["https://bcit.ca"];

//contains valid (strings) and invaild (non-string) data
const arrayOfLinks = ["https://stackoverflow.com/", 345, "https://developer.mozilla.org/en-US/", "https://validator.w3.org/", false];
const anotherArrayOfLinks = ["https://bcit.ca", "https://learn.bcit.ca"];
