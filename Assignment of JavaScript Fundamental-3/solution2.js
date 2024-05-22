const student = {
    name: 'Nolan',
    age: 42,
    grade: 'A'
}

function updateGrade(newGrade){
    student.grade = newGrade
}
updateGrade('B')
console.log(student);