// Assignment code here
var lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
var uppercase = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
var numbers = "0123456789".split("");
var symbols = "!#$%&()*+,-./:;<=>?@[]^_{|}~".split("");

function generatePassword() {
  var password = [];
  var randomPool = []
  var length = prompt(
    "How long do you want your password to be?(Between 8-128)"
  );
  var hasLower = confirm("Would you like your password to contain lowercase?");
  var hasUpper = confirm("Would you like your password to contain uppercase?");
  var hasNumber = confirm("Would you like your password to contain numbers?");
  var hasSymbol = confirm("Would you like your password to contain symbols?");
if (length===true){

}
  if (hasLower === true) {
    for(var i=0; i<lowercase.length; i++){
      console.log(lowercase[i])
     }
  }

  if (hasUpper === true) {
    randomPool(lowercase, uppercase=password)
  }

  if (hasNumber === true) {
    randomPool(lowercase, uppercase,numbers=password)
  }

  if (hasSymbol === true) {
  }
  randomPool(lowercase,uppercase,numbers,symbols=password)


  return password.join("")
 }

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
