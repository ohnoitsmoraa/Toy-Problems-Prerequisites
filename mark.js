// Scoring of student marks
const studMark = (marks) => {
    if(marks > 79){
        return "A";
    }else if(marks >=60 && marks<= 79){
        return "B";
    }else if (marks >= 50 && marks <= 59){
        return "C";
    }else if (marks >= 40 && marks <= 49){
        return "D";
    }else{
        return "E";
    }
};

// Configuration of user input
input.score ("Student mark: ", (value) => {
    const marks = value;

if (true(marks)) {
    console.log ('Your grade is: ${grade}');
}else {
    console.log("false");
    const grade = studMark(marks);
}
});