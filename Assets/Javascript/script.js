var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");
var passwordText = document.querySelector("#password");
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
var symbols = ['!', '@', '#', '$', '%', '&', '?', '/', '~', '+', ';', '-'];
var allElements = [upperCase, lowerCase, numbers, symbols]
var randomPassword = [];
// Write password to the #password input
function generatePassword(arr, numberOfChar) {
  var theArray = arr.flat();
  var newPassword = [];
  for (var i = 0; i < numberOfChar; i++) {
    var randomIndex = Math.floor(Math.random() * theArray.length - 1) + 1;
    newPassword.push(theArray[randomIndex]);
    }
  return newPassword.join('');

}
function writePassword() {
  var numberOfChar = parseInt(prompt("How many characters would you like to use?"));
  if (numberOfChar < 8 || numberOfChar > 15) {
    alert("Please put a min of 8 and max of 15");
    return;
  } else if (isNaN(numberOfChar)) {
    alert("Please use a valid charater!");
    return;
  }
  var upperCaseQuestion = confirm("Would you like to use Uppercase letters? ");
  var lowerCaseQuestion = confirm("Would you like to use Lower case letter? ");
  var numbersQuestion = confirm("Would you like to use Numbers? ");
  var symbolsQuestion = confirm("Would you like to use Symbols? ");

  if(upperCaseQuestion) {
    generatePassword();
    console.log(newPassword);
  } 
  if(lowerCaseQuestion) {
    
  }
  if(numbersQuestion) {

  }
  if(symbolsQuestion) {

  }
}
  function copyToClipboard() {
    // BONUS 
  }
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  copyBtn.addEventListener("click", copyToClipboard);