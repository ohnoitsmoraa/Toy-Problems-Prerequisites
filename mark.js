// Grading of student marks
function studMark (marks){
  if (marks < 0 || marks > 100 || isNaN(marks)){
    return 'Invalid Entry';
  }else if (marks > 79) {
    return "A";
  } else if (marks > 60) {
    return "B";
  } else if (marks > 49) {
    return "C";
  } else if (marks > 40) {
    return "D";
  } else {
    return "E";
  }
};

console.log(studMark(80));

// Prompt of user input
// let marks = prompt ("Enter students marks");
