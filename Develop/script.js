// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Var arrays
// array of all special characters
var character = ["!" , "#" , "$" , "%" , "&" , "(" , ")" , "*" , "+" , "-" , "." , "/" , ":" , ";" , "<" , "=" , ">" , "?" , "@" , "[" , "]" , "^" , "_" , "`" , "{" , "|" , "}" , "~"];
// array of all numbers
var number = [1,2,3,4,5,6,7,8,9,0];
// array of all UPPERCASE letters
var upper =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
// array of all lowercase letters
var lower = upper.toLowercase();

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
