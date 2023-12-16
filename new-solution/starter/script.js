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

// SET THE VARIABLES
var initialPassword = '';
var finalPassword = '';
var passwordLength = 0;
var charOptions = [];
let newCharOptions = [];

// #1 GET THE PASSWORD OPTIONS AND GENERATE BEGINNING OF PASSWORD, CREATE MEGA-ARRAY
getPasswordOptions();

// #2 RANDOMIZE THE MEGA-ARRAY
newCharOptions = randomizeArray(charOptions);

// #3 FINISH THE PASSWORD GENERATION
finalPassword = finishPassword();

// SHUFFLE THE PASSWORD AGAIN
// shuffledPassword = randomizeArray(initialPassword);


// Function to prompt user for password options
function getPasswordOptions() {
  // get the password length
  passwordLength = parseInt(prompt("What is the password length? Enter a number between 8 and 128."));  
  if(passwordLength < 8 || passwordLength > 128) {
    getPasswordOptions();
  };
  // Loop if all answers are No, i.e. generated password length = 0
  // The process for each character type has 2 steps:
  // 1. check whether to include the character type in the password 
  // 2. if yes, generate 1 character from this type, add to the password, then add the character set to the mega-array
    do {
      // check if include special characters
      let hasSpecialChars = askForCharOptions("Include special characters? Yes or No");
      addChar(hasSpecialChars, specialCharacters);
      // check if include numbers
      let hasNumbers = askForCharOptions("Include numbers? Yes or No");
      addChar(hasNumbers, numericCharacters);
      // check if include lower case letters
      let hasLowerCase = askForCharOptions("Include lower case letters? Yes or No");
      addChar(hasLowerCase, lowerCasedCharacters);
      // check if include upper case letters
      let hasUpperCase = askForCharOptions("Include upper case letters? Yes or No");
      addChar(hasUpperCase, upperCasedCharacters);
      if (initialPassword.length === 0) {
        alert("Please provide at least one character type!")
      }; 
    } while (initialPassword.length === 0);
};

// Function to ask user whether to include character type (step 1)
function askForCharOptions (question) {
  do {
    var answer = prompt(question).toLowerCase();
  } while (answer !== "yes" && answer !== "y" && answer !== "no" && answer !== "n");
  return answer;
};

// Function to generate a character from a set, add to password, add the character set to the mega-array (step 2)
function addChar (answer, arr) {
  if (answer === "yes" || answer === "y") {
    initialPassword += arr[Math.floor(Math.random() * arr.length)];
    charOptions = charOptions.concat(arr);
  } else if (answer === "no" || answer === "n") {
    charOptions;
  } 
  // else alert("Use only 'Yes/Y' or 'No/N' to answer!");
};

// Function to shuffle (randomize) an array 
// (based on the code snippet 446 from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array)
function randomizeArray(unshuffledArray) {
  let shuffledArray = unshuffledArray
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
  return shuffledArray;
}

// Function to randomly pick additional characters from the shuffled mega-array, add to password and shuffle it again
function finishPassword() {
  let newPassword = initialPassword;
  while (passwordLength > newPassword.length) {
    newPassword += newCharOptions[Math.floor(Math.random() * newCharOptions.length)];
    // randomizeArray(password);
    console.log(`The password after adding additional characters from mega-array is ${initialPassword}`)
    return newPassword;
  };
};

// VALIDATION CHECKS
console.log(`The password length is ${passwordLength}`);
console.log(`Initial password length is ${initialPassword.length}`);
console.log(`The initial password is ${initialPassword}`);
console.log(`The unshuffled characters for the password are: ${charOptions}`)
console.log(`The shuffled characters for the password are: ${newCharOptions}`)
console.log(`The final password is ${finalPassword}`);