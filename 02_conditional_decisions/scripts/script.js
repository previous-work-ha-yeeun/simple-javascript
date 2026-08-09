/*
these data points represent different aspects of the show...
(do not change these values)
*/
const ticketCostDollarsCDN      = 30;
const minimumAgeToAttend        = 21;
/* tax rate is 10%, defined here as 0.10 */
const taxRate                   = 0.10;

let inputName, inputAge, inputTickets, inputCash;
let processAge = "";


// Initial page load 
document.getElementById("javascript_message").innerHTML = "YeEun Ha";
saveValue()


// First Box
function saveValue() {
    inputName = document.getElementById("userName").value;
    inputAge = Number(document.getElementById("userAge").value);
    inputAge = Math.min(inputAge, 130);     // returns the smallest value

    inputTickets = Number(document.getElementById("ticketQuantity").value);
    inputTickets = Math.min(inputTickets, 100);     
    
    inputCash = Number(document.getElementById("cashOnHand").value);
    inputCash = Math.min(inputCash, 10000);    

    Introduce(inputName)
    console.log(inputName, inputAge, inputTickets, inputCash)
}

function Introduce(name) {
    document.getElementById("nameOfUser").innerHTML = `${name}`;
    document.getElementById("userSays").innerHTML = `${name} says: "It's my first time to go to a concert in Vancouver!"`;
}







