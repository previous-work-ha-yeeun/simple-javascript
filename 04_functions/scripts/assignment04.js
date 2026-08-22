/* This page invokes functions defined externally */

const $time = document.getElementById('time')

const dateObject = new Date();
let currentHour = dateObject.getHours();


document.getElementById("javascript_message").innerHTML = "YeEun Ha";

/* --- Render the time info --- */
$time.innerHTML = (currentHour <= 12) ?
    `Good morning, the current hour is ${currentHour}, and the sun is shining. 
    <img src="./images/sun.png" alt="sun" class="floatToRight" width="100px"></img>` 
    : `Good evening, the current hour is ${currentHour}, and the moon is full. 
    <img src="./images/moon.png" alt="mun" class="floatToRight" width="100px"></img>`;
    

console.log("-----------Part One----------")



