function calculateGrade(){
    let input =
    prompt("Please enter your marks between 0 and 100");
    const studentMarks = parseFloat(input);

    if(studentMarks > 79){
        return `A`;
    }
    else if (studentMarks >= 60 && studentMarks < 79){
        return `B`;
    }
    else if (studentMarks >=50 && studentMarks < 59){
        return `C`;
    }
    else if (studentMarks >=40 && studentMarks < 49){
        return `D`;
    }
    else {
        return `E`;
    }
}
let gradeButton = document.querySelector("#gradeButton");
gradeButton.addEventListener("click", function() {
    const grade = calculateGrade();
    alert(`Your grade is: ${grade}`);
  });