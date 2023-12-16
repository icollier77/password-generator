// Array of special characters to be included in password
const specialCharacters = [
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
const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
const lowerCasedCharacters = [
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
const upperCasedCharacters = [
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

// code from https://www.youtube.com/watch?v=Xrsb9SiF3a8 
const passwordBox = document.getElementById('password');

var newPassword = '';

var passwordLength = 0;

var charOptions = [];

// RUN THE FUNCTION
getPasswordOptions();

// DELETE LATER
console.log(`The new password is ${newPassword}`);
console.log(`The list of characters for the new password is: ${charOptions}`)


// Function to prompt user for password options
function getPasswordOptions() {
  passwordLength = parseInt(prompt("What is the password length? Enter numbers only. Hint: password must be between 8 and 128 characters."));  
  if(passwordLength < 8 || passwordLength > 128) {
    getPasswordOptions();
  };
  // DELETE LATER
  console.log(`New password length is ${newPassword.length}`);

  // loop the questions about special char if all answers are invalid
    while (newPassword.length = 0) {
      // 1. check whether to include various character options in the password 
      // 2. run the function to generate 1 character from each selected set and add the set to the list of permissible characters
      let hasSpecialChars = prompt("Include special numbers?").toLowerCase();
      addChar(hasSpecialChars, specialCharacters);
      let hasNumbers = prompt("Include numbers?").toLowerCase();
      addChar(hasNumbers, numericCharacters);
      let hasLowerCase = prompt("Include lower case letters?").toLowerCase();
      addChar(hasLowerCase, lowerCasedCharacters);
      let hasUpperCase = prompt("Include upper case letters?").toLowerCase();
      addChar(hasUpperCase, upperCasedCharacters);
      // if user provided invalid inputs to all questions, tell that the password is not generated, try again
      if (passwordLength = 0) {
        alert("The password is not generated, please provide valid answers to the questions.");
      }
    }
  // function to DRY repetitions for character options
  function addChar (check, arr) {
    if (check === "yes" || check === "y") {
      newPassword += arr[Math.floor(Math.random() * arr.length)];
      charOptions = charOptions.concat(arr);
    } else if (check === "no" || check === "n") {
      charOptions;
    } else alert("Use only 'Yes/Y' or 'No/N' to answer!");
  };
}






// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);