// Terminal input
const userInput = require("node:readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Scoring of student marks
const studMark = (marks) => {
  if (marks > 79) {
    return "A";
  } else if (marks >= 60 && marks <= 79) {
    return "B";
  } else if (marks >= 50 && marks <= 59) {
    return "C";
  } else if (marks >= 40 && marks <= 49) {
    return "D";
  } else {
    return "E";
  }
};

// Configuration of user input
userInput.question("Student mark: ", (input) => {
  const marks = Number(input);

  if (marks) {
    const grade = studMark(marks);
    console.log(`Your grade is: ${grade}`);
  } else {
    console.log("false");
    userInput.close();
  }
});
