// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Three options for character selection

//Lowercase Letters, Uppercase Letters, numbers 0-9, special characters
var lowlettersChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var uplettersChar=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var numbersChar = ["0","1","2","3","4","5","6","7","8","9"]
var specialChar =  [ "@","%","+","/","'","!","#","$","^","?",":",",",")","(","}","{","]","[","~","-","_",".",]
// Write password to the #password input

function getPasswordOptions() {
  var length = parseInt(
    prompt("Choose your character count! (8-128)"),
    
  );
  if (Number.isNaN(length)) {
    alert("Please provide a valid number");
    return
  }
  if (length < 8) {
    alert("Length must be 8-128");
    return
  }
  if (length > 128) {
    alert("Length must be 8-128");
    return
  }
  var specialcharinclude = confirm("Click 'OK' to add special characters.");
  var numbersCharinclude = confirm("Click 'OK' to add numbers.");
  var lowlettersCharinclude = confirm("Click 'OK' to add lowercase letters." );
  var uplettersCharinclude = confirm("Click 'OK' to add uppercase letters.");
  if (
    specialcharinclude === false &
    numbersCharinclude === false &
    lowlettersCharinclude === false &
    uplettersCharinclude === false
  ) {
    alert("Select at least one character type");
    return ;
  }
  var passwordOptions = {
    length: length,
    specialcharinclude: specialcharinclude,
    numbersCharinclude: numbersCharinclude,
    lowlettersCharinclude: lowlettersCharinclude,
    uplettersCharinclude: uplettersCharinclude,
  };
  return passwordOptions;
}
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

function generatePassword() {
  var options = getPasswordOptions();
  var result = [];
  var possibleCharacters = [];
  var guaranteedCharacters = [];

  if (!options) return "";


  if (options.specialcharinclude) {
    possibleCharacters = possibleCharacters.concat(specialChar);
    guaranteedCharacters.push(getRandom(specialChar));
  }
  if (options.numbersCharinclude) {
    possibleCharacters = possibleCharacters.concat(numbersChar);
    guaranteedCharacters.push(getRandom(numbersChar));
  }
  if (options.lowlettersCharinclude) {
    possibleCharacters = possibleCharacters.concat(lowlettersChar);
    guaranteedCharacters.push(getRandom(lowlettersChar));
  }
  if (options.uplettersCharinclude) {
    possibleCharacters = possibleCharacters.concat(uplettersChar);
    guaranteedCharacters.push(getRandom(uplettersChar));
  }

 for (var i = 0; i < options.length; i++) {
    var possibleCharacter = getRandom(possibleCharacters);

    result.push(possibleCharacter);
  }
  for (var i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }
  return result.join("");
}

var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
