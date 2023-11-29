// Assignment code here
var lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
var uppercase = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
var numbers = "0123456789".split("");
var symbols = "!#$%&()*+,-./:;<=>?@[]^_{|}~".split("");

function generatePassword() {
  var password = [];
  var randomPool = [];
  var length = prompt("How long do you want your password to be? (Between 8-128)");

  // Validate the length input
  while (length < 8 || length > 128 || isNaN(length)) {
    length = prompt("Please enter a valid length between 8 and 128:");
  }

  var hasLower = confirm("Include lowercase characters?");
  var hasUpper = confirm("Include uppercase characters?");
  var hasNumber = confirm("Include numeric characters?");
  var hasSymbol = confirm("Include special characters?");

  // Validate at least one character type is selected
  while (!(hasLower || hasUpper || hasNumber || hasSymbol)) {
    alert("You must select at least one character type.");
    hasLower = confirm("Include lowercase characters?");
    hasUpper = confirm("Include uppercase characters?");
    hasNumber = confirm("Include numeric characters?");
    hasSymbol = confirm("Include special characters?");
  }

  // Build the randomPool based on selected character types
  if (hasLower) {
    randomPool = randomPool.concat(lowercase);
  }

  if (hasUpper) {
    randomPool = randomPool.concat(uppercase);
  }

  if (hasNumber) {
    randomPool = randomPool.concat(numbers);
  }

  if (hasSymbol) {
    randomPool = randomPool.concat(symbols);
  }

  // Generate the password
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * randomPool.length);
    password.push(randomPool[randomIndex]);
  }

  return password.join("");
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

