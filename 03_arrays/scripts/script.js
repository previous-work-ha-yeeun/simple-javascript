const $studentCount = document.getElementById("numberOfStudents");
const $studentNames = document.getElementById("names");
const $studentOptions = document.querySelector('#targetOptions');
const $studentResult = document.getElementById("result");

const $numberOptions = document.getElementById('numberOptions');
const $numbers = document.getElementById('numbers')
const $even = document.getElementById('even')
const $odd = document.getElementById('odd')
const $sum = document.getElementById('sum')

const students = ["Jane", "Joe", "Jack"];
let targetName = "";
let wasFound = false;

const arrayOfNumbers = [4, 0, -4, 9, 4]
const NUMBER_SELECTS = 5;
const NUMBER_MIN = -5;
const NUMBER_MAX = 10;


document.getElementById("javascript_message").innerHTML = "YeEun Ha"


/* ------------------- Part 1 ------------------- */ 

// initial page load
students.push("YeEun", "Eric", "Kimberly"); 
students.sort(); 

$studentCount.textContent = `There are ${students.length} student(s) in this list`;

targetName = $studentOptions.querySelector('input[name="target"]:checked').value;
$studentNames.innerHTML = makeStudentsList();
renderFoundResult();

// On change
$studentOptions.addEventListener('change', (e) => {
    console.log(e.target);  // the element that actually triggered the event
    targetName = e.target.value;
    $studentNames.innerHTML = makeStudentsList();
    renderFoundResult();
})

function makeStudentsList() {
    let html = "";

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
        $studentResult.innerHTML 
            = `<div class="resultContainer"> YES! Target name was found in the list. </div>`;
    } else {
        $studentResult.textContent
            = `👎 NO, target name was NOT found in the list.`;
    }
    wasFound = false;
}


/* ------------------- Part 2, 3 ------------------- */ 

/* --- Initial page load --- Will create: 
<select>
  <option value="-5">-5</option>
  <option value="-4">-4</option>
  ...
  <option value="9">9</option>
  <option value="10">10</option>
</select>                       ... x 5 times
*/
for (let i = 0; i < NUMBER_SELECTS; i++) {
    const selectElement = document.createElement('select');
    selectElement.className = 'numberMenu' // OR  .classList.add('number-select', 'numberMenu');

    for (let num = NUMBER_MIN; num <= NUMBER_MAX; num++) {
        const optionElement = document.createElement('option');
        optionElement.value = num;
        optionElement.textContent = num;
        
        // initial value selection
        if (num === arrayOfNumbers[i]) {
            optionElement.selected = true;
        }
        selectElement.appendChild(optionElement);
    }  
    $numberOptions.appendChild(selectElement);
}

renderResult(arrayOfNumbers);


/* --- On click --- */ 
function updateResult() {
    /* get new user inputs */ 
    const $selectElements = document.querySelectorAll('.numberMenu'); // $selectElements.forEach(element => console.log(element));
    const arrayOfSelectedValues 
        = [...$selectElements].map(eachElement => Number(eachElement.value)); /* select.value: the currently selected option's value, select.options: all of the options inside the <select> */ 
    
    /* update the array */ 
    arrayOfNumbers.splice(0, arrayOfNumbers.length, ...arrayOfSelectedValues);

    renderResult(arrayOfNumbers);
}

function renderResult(newArray) {
    createNumbersList(newArray)
    tallyEvenOdd(newArray)
}

function createNumbersList(array) {
    $numbers.innerHTML='';

    array.forEach(el => {
        const liElement = document.createElement('li');
        liElement.textContent = el;
        $numbers.appendChild(liElement); 
    });
}

function tallyEvenOdd(array) {
    let sum = 0, even = 0, odd = 0;

    array.forEach(el => {
        if (el === 0) return 

        if (el % 2 == 0) {
            ++even;
        } else {
            ++odd;
        }
        sum += el       
    });

    $even.textContent = `There are ${even} even number(s) in the array`
    $odd.textContent = `There are ${odd} odd number(s) in the array`
    $sum.textContent = `The sum of all array numbers is: ${sum}`
}




