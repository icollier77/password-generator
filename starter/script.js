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

// Variables to be used in functions
let passwordLength = 0;
let charOptions = [];
let generatedPassword = '';

// Function to prompt user for password options
function getPasswordOptions() {
  // get the password length
  passwordLength = parseInt(prompt("Enter password's length."));
  if(passwordLength < 8 || passwordLength > 128) {
    getPasswordOptions();
  };
  // check if to include special characters
  const hasSpecialChars = prompt("Use special characters?").toLowerCase()
    if (hasSpecialChars === "yes" || hasSpecialChars === "y") {
      charOptions = charOptions.concat(specialCharacters);
    } else if (hasSpecialChars === "no" || hasSpecialChars === "n") {
      charOptions;
    } else alert('Use only "Yes" or "No" to answer!');
  // check if to include numbers
  const hasNumbers = prompt("Use numbers?").toLowerCase();
    if (hasNumbers === "yes" || hasNumbers === "y") {
      charOptions = charOptions.concat(numericCharacters);
    } else if (hasSpecialChars === "no" || hasSpecialChars === "n") {
      charOptions;
    } else alert('Use only "Yes" or "No" to answer!');
  // check if to include lower case letters
  const hasLowerCase = prompt("Include lower case letters?").toLowerCase();
  if (hasLowerCase === "yes" || hasLowerCase === "y"){
    charOptions = charOptions.concat(lowerCasedCharacters);
  } else if (hasSpecialChars === "no" || hasSpecialChars === "n") {
    charOptions;
  } else alert('Use only "Yes" or "No" to answer!');
  // check if to include upper case letters
  const hasUpperCase = prompt("Include upper case letters?").toLowerCase();
  if (hasUpperCase === "yes" || hasUpperCase === "y"){
    charOptions = charOptions.concat(upperCasedCharacters)
  } else if (hasUpperCase === "no" || hasUpperCase === "n"){
    charOptions;
  } else alert('Use only "Yes" or "No" to answer!');
}

// Ask user for the password options
getPasswordOptions();

// Function for getting a random element from an array
function getRandom(arr) {
  return Math.floor(Math.random() * arr.length + 1);
}

// Function to generate password with user input
function generatePassword() {
  for (let i = 0; i < passwordLength; i++) {
    let indexToChoose = getRandom(charOptions);
    generatedPassword = generatedPassword.concat(charOptions[indexToChoose]);
  }
  return generatedPassword;
}

// generate a new password
generatePassword();
alert(`Your password is ${generatedPassword}`);

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