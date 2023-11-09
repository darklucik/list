const myBtn = document.querySelector('[name="addStudentBtn"]');

myBtn.addEventListener("click", addStudentInfo)

let studentInfo = []

let nameInput = document.getElementById('name');
let surnameInput = document.getElementById('secondName');
let ageInput = document.getElementById('age');

function addStudentInfo() {
    const studentName = nameInput.value
    const studentSurname = surnameInput.value
    const studentAge = ageInput.value

    const eachStudent = `${studentSurname} ${studentName} ${studentAge}`
    
    studentInfo.push(eachStudent)
    
    console.log(studentInfo);

    showStudents()
}
function showStudents() {
     
    let studentsInfoGroup = document.getElementById('studentInfoList')
    studentsInfoGroup.innerHTML = ""

    for(let i=0; i < studentInfo.length; i++) {
        let groupList = `
    <div class="studentInfoList">
        ${i+1.}. ${studentInfo[i]}
    </div>`

    studentsInfoGroup.innerHTML = studentsInfoGroup.innerHTML + groupList
    }
}
