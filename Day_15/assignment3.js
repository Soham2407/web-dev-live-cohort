// Character Case Checker – Ask the user for a single character.
// Check if it's uppercase, lowercase, or neither (not a letter).

const char = prompt("Enter a character");

const asciiCode = char.charCodeAt(0);

if (asciiCode >= 65 && asciiCode <= 90) {
  console.log(`Character ${char} is uppercase`);
} else if (asciiCode >= 97 && asciiCode <= 122) {
  console.log(`Character ${char} is lowercase`);
} else {
  console.log(`Character ${char} is not a letter`);
}
