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
    10
  );

  if (Number.isNaN(length)) {
    alert("Please provide a valid number");
    return null;
  }

  if (length < 8) {
    alert("Length must be 8-128");
    return null;
  }

  if (length > 128) {
    alert("Length must be 8-128");
    return null;
  }

  var specialcharinclude = confirm(
    "Click 'OK' to add special characters."
  );

  var numbersCharinclude = confirm(
    "Click 'OK' to add numbers."
  );

  var lowlettersCharinclude = confirm(
    "Click 'OK' to add lowercase letters."
  );

  var uplettersCharinclude = confirm(
    "Click 'OK' to add uppercase letters."
  );
  }