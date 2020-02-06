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

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// STUDENT CODE

// Var arrays

// array of all special characters
var character = ["!" , "#" , "$" , "%" , "&" , "(" , ")" , "*" , "+" , "-" , "." , "/" , ":" , ";" , "<" , "=" , ">" , "?" , "@" , "[" , "]" , "^" , "_" , "`" , "{" , "|" , "}" , "~"];

// array of all UPPERCASE letters
var upper =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];  

// array of all lowercase letters
var lower =  ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];

//array of all
var possible = []


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
var random = [];



// Password Generation

// Button press activates the function 

function generatePassword(){

  //User Preference Alerts

  // Asks if you want to use numbers and produces a Boolean 

  var usenum = confirm("Would you like to include numbers?")

  // Asks if you want to use Symbols and produces a Boolean 

  var usesym = confirm("Would you like to include special characters?")

  // Asks if you want to use Uppercase and produces a Boolean 

  var useupp = confirm("Would you like to include Uppercase Letters?")

  // Asks if you want to use lowercase and produces a Boolean

  var uselow = confirm("Would you like to include lowercase letters?")

  // Asks how long you want the password to be and produces a string of a number

  var long = prompt("How many characters would you like to include in your password? (8-128)")

  


  //Length Loop
  // MUST BE BETWEEN 8 and 128 Characters

  if(long<129 &&long>7){

    for(i = 0; i < parseInt(long); i++){

      // Decides a random if/else to select this time

      var selector = Math.floor((Math.random() * 4) + 1)

      //User preference loops

      // If Numbers are wanted
      if(usenum === true && selector === 1){
        var randnum = Math.floor(Math.random() * (max - min + 1)) + min;
        possible.push(randnum);
      }
      // If Symbols are wanted
      else if(usesym === true && selector === 2){
        var randsymbol = character[Math.floor(Math.random() * character.length)];
        possible.push(randsymbol);
      }
      // If Uppercase letters are wanted
      else if(useupp === true && selector === 3){
        var randupper = upper[Math.floor(Math.random() * upper.length)];
        possible.push(randupper);
      }
      // If lowercase letters are wanted
      else if(uselow === true && selector === 4){
        var randlower = lower[Math.floor(Math.random() * lower.length)];
        possible.push(randlower);
      }

      random.push(possible[Math.floor(Math.random() * possible.length)])
      }

      // Joins the array of characters together
      random = random.join('');

      // Logs into the console for saved passwords (DEVELOPER ONLY)
      console.log(random)

      // Displays new password on screen 
      var Display = document.querySelectorAll("p")

      Display[0].textContent= random
      Display[0].setAttribute("value", random)

      // Resets back to empty to facilitate rerolling passwords

      possible = []
      random = []
  }
  // Error message for improper length

  else{
    alert("Please try again, must be between 8 and 128 characters.")
  }
}

