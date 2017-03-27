// Take the contents of the sonnet div and place it in a variable
var theSonnet = document.getElementById("sonnet").innerHTML;
console.log(theSonnet);

// Find and output the starting position of the word "orphans"
console.log(theSonnet.indexOf("orphans"));

// Output the number of characters in the sonnet
console.log(theSonnet.length);

// Replace the first occurance of the string "winter" with "yuletide"
console.log(theSonnet.replace("winter","yuletide"));

// Replace all occurances of the string "the" with "a large"

console.log(theSonnet.split(" the ").join(" a large ").split(" The ").join(" A large "));

// Set the content of the sonnet div with the new string
document.getElementById("sonnet").innerHTML = theSonnet.split(" the ").join(" a large ").split(" The ").join(" A large ");