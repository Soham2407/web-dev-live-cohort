// Age Category Message – Ask the user for their age. If they are
// under 18, print “You are a minor.” If they are between 18 and 60,
// print “You are an adult.” If they are above 60, print “You are a
// senior citizen.”

const age = 17;

if (age < 18) {
  console.log("You are a minor");
} else if (age >= 18 && age <= 60) {
  console.log("You are an adult");
} else {
  console.log("You are a senior citizen");
}
