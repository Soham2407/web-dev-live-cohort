// Leap Year Checker – Ask the user for a year and determine if
// it's a leap year or not.

// rule
// Leap year wo hai jo 4 se divide ho, lekin 100 se nahi — aur agar 100 se ho, to fir 400 se bhi hona chahiye.

const year = 2023;

if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
  console.log("its a leap year");
} else {
  console.log("its not a leap year");
}
