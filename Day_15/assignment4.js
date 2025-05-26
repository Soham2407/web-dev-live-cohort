// Largest of Three Numbers – Take three numbers as input and
// print the largest number among them without using
// Math.max().

const num1 = Number(prompt("Enter num1"));
const num2 = Number(prompt("Enter num2"));
const num3 = Number(prompt("Enter num3"));

if (num1 >= num2 && num1 >= num3) {
  console.log(`${num1} is greater`);
} else if (num2 >= num1 && num2 >= num3) {
  console.log(`${num2} is greater`);
} else {
  console.log(`${num3} is greater`);
}
