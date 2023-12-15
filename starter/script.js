// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

let passwordLength = 0;
let charOptions = [];
const generatedPassword = '';

// Function to prompt user for password options
function getPasswordOptions() {
  passwordLength = parseInt(prompt("Enter password's length."));
  if(passwordLength < 8 || passwordLength > 128) {
    getPasswordOptions();
  };
  const hasSpecialChars = prompt("Use special characters?").toLowerCase();
  if(hasSpecialChars === "yes" || hasSpecialChars === "y") {
    charOptions = charOptions.concat(specialCharacters);
  } else if(hasSpecialChars === "no" || hasSpecialChars === "n") {
    charOptions;
  };
  const hasNumbers = prompt("Use numbers?").toLowerCase();
  if (hasNumbers === "yes" || hasNumbers === "n") {
    charOptions = charOptions.concat(numericCharacters);
  } else if(hasSpecialChars === "no" || hasSpecialChars === "n") {
    charOptions;
  };
  const hasLowerCase = prompt("Include lower case letters?").toLowerCase();
  if(hasLowerCase === "yes" || hasLowerCase === "y"){
    charOptions = charOptions.concat(lowerCasedCharacters);
  } else if(hasSpecialChars === "no" || hasSpecialChars === "n") {
    charOptions;
  };
  const hasUpperCase = prompt("Incluse upper case letters?").toLowerCase();
  if(hasUpperCase === "yes" || hasUpperCase === "y"){
    charOptions = charOptions.concat(upperCasedCharacters)
  } else if (hasUpperCase === "no" || hasUpperCase === "n"){
    charOptions;
  }
}

getPasswordOptions();


// Function for getting a random element from an array
// function getRandom(arr) {

// }

// Function to generate password with user input
// function generatePassword() {

// }

// Get references to the #generate element
// var generateBtn = document.querySelector('#generate');

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector('#password');

  // passwordText.value = password;
// }

// Add event listener to generate button
// generateBtn.addEventListener('click', writePassword);