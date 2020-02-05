// ASSIGNMENT CODE

var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// STUDENT CODE

// Var arrays

// array of all special characters
var character = ["!" , "#" , "$" , "%" , "&" , "(" , ")" , "*" , "+" , "-" , "." , "/" , ":" , ";" , "<" , "=" , ">" , "?" , "@" , "[" , "]" , "^" , "_" , "`" , "{" , "|" , "}" , "~"];

// array of all UPPERCASE letters
var upper =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];  

// array of all lowercase letters
var lower =  ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];

//array of all
var possible = [randlower, randnum, randsymbol, randupper]


// Randomizers

// Numbers
// create minimum and maximum values
var min = Math.floor(0);
var max = Math.ceil(9);

// Generate a random number between 0 and 9
var randnum = Math.floor(Math.random() * (max - min + 1)) + min;

// Uppercase Letters
var randupper = upper[Math.floor(Math.random() * upper.length)];

// lowercase letters
var randlower = lower[Math.floor(Math.random() * lower.length)];

// special characters
var randsymbol = character[Math.floor(Math.random() * character.length)];

//Random of Random elements for Final Display
var random = possible[Math.floor(Math.random() * possible.length)];

// Password Generation


//Password Display
 var password = document.getElementbbyId(password);
password.innerHTML = 