const $studentCount = document.getElementById("numberOfStudents");
const $studentNames = document.getElementById("names");
const $options = document.querySelector('#targetOptions');
const $found = document.getElementById("result");

const students = ["Jane", "Joe", "Jack"];
let targetName = "";
let html = "";
let wasFound = false;

document.getElementById("javascript_message").innerHTML = "YeEun Ha"


/* ------------------- Part 1 ------------------- */ 

students.push("YeEun", "Eric", "Kimberly"); 
students.sort(); 

$studentCount.textContent = `There are ${students.length} student(s) in this list`;

targetName = $options.querySelector('input[name="target"]:checked').value;
$studentNames.innerHTML = makeStudentsList();
renderFoundResult();


$options.addEventListener('change', (e) => {
    console.log(e.target);  // the element that actually triggered the event
    targetName = e.target.value;
    $studentNames.innerHTML = makeStudentsList();
    renderFoundResult();
})

function makeStudentsList() {
    html='';
    students.forEach(e => {
        if (e.toLowerCase() === targetName.toLowerCase()) {
            wasFound = true;
            html += `<li class="resultContainer">${e} <-- target name found!</li>`
        } else {
            html += `<li>${e}</li>`
        }
    })
    return html;
}

function renderFoundResult() {
    if (wasFound) {
        $found.innerHTML 
            = `<div class="resultContainer"> YES! Target name was found in the list. </div>`;
    } else {
        $found.textContent
            = `👎 NO, target name was NOT found in the list.`;
    }
    wasFound = false;
}


/* ------------------- Part 2 ------------------- */ 
