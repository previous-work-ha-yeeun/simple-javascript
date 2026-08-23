/* This page invokes functions defined externally */

const $time = document.getElementById('time');
const $nonArrayOptions = document.getElementById('nonArrayOptions'); 
const $nonArrayOption1 = document.getElementById('nonArrayOption1');
const $nonArrayOption2 = document.getElementById('nonArrayOption2');
const $nonArrayResult = document.getElementById('nonArrayResult');
const $imagesResult = document.getElementById('imagesResult');

const $wrongParameterResult = document.getElementById('wrongParameterResult'); 
const $urlOptions = document.getElementById('urlOptions'); 
const $urlOption1 = document.getElementById('urlOption1'); 
const $urlOption2 = document.getElementById('urlOption2'); 
const $urlOption3 = document.getElementById('urlOption3'); 
const $urlResult = document.getElementById('urlResult'); 

const currentHour = new Date().getHours();
const MORNING_CUTOFF_HOUR = 12;


document.getElementById("javascript_message").innerHTML = "YeEun Ha";

/* --- Render the time info --- */
$time.innerHTML = (currentHour <= MORNING_CUTOFF_HOUR) ?
    `Good morning, the current hour is ${currentHour}, and the sun is shining. 
    <img src="./images/sun.png" alt="sun" class="floatToRight" width="100px"></img>` 
    : `Good evening, the current hour is ${currentHour}, and the moon is full. 
    <img src="./images/moon.png" alt="moon" class="floatToRight" width="100px"></img>`;
    

console.log("-----------Part One----------")
/* --- initial page load --- */
$nonArrayOption1.value = notAnArrayOfImages;
$nonArrayOption1.textContent = notAnArrayOfImages;
$nonArrayOption2.value = alsoNotAnArrayOfImages;
$nonArrayOption2.textContent = alsoNotAnArrayOfImages;
$nonArrayResult.innerHTML = listImages($nonArrayOptions.value);

document.getElementById('forNumbers').innerHTML = `Invoking with an array of numbers 
    <span class="parameters">[${anArrayOfNumbers}]</span>, not string image names 
    <br>(See Console for function error messages).`;
listImages(anArrayOfNumbers);

document.getElementById('forBooleans').innerHTML = `Invoking with an array of booleans 
    <span class="parameters">[${anArrayOfBooleans}]</span>, not string image names 
    <br>(See Console for function error messages).`;
listImages(anArrayOfBooleans);

$imagesResult.innerHTML = listImages(arrayOfSomeImages);

/* --- on change --- */
$nonArrayOptions.addEventListener('change', (event) => {
    /* get a new value*/
    $nonArrayResult.innerHTML = listImages(event.target.value);
})


console.log("-----------Part Two----------")
/* --- initial page load --- */
listURLs(anArrayOfBooleans);
$wrongParameterResult.innerHTML = listURLs(arrayOfLinks, "Hayes");

$urlOption1.value = arrayOfLinks;
$urlOption1.textContent = `[${arrayOfLinks}]`;
$urlOption2.value = arrayOfLinksTooSmall;
$urlOption2.textContent = `[${arrayOfLinksTooSmall}]`;
$urlOption3.value = anotherArrayOfLinks;
$urlOption3.textContent = `[${anotherArrayOfLinks}]`;
$urlResult.innerHTML = listURLs(arrayOfLinks, "ol");

/* --- on change --- */
$urlOptions.addEventListener('change', (event) => {
    /* get a new value*/
    $urlResult.innerHTML = listURLs(event.target.value.split(",")); // split() returns an Array
})
