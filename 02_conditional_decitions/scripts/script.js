/*
these data points represent different aspects of the show...
(do not change these values)
*/
const ticketCostDollarsCDN      = 30;
const minimumAgeToAttend        = 21;
/* tax rate is 10%, defined here as 0.10 */
const taxRate                   = 0.10;

let inputName, inputAge, inputTickets, inputCash;

function saveValue() {
    inputName = document.getElementById("userName").value;
    inputAge = Number(document.getElementById("userAge").value);
    inputTickets = Number(document.getElementById("ticketQuantity").value);
    inputCash = Number(document.getElementById("cashOnHand").value);
    // console.log(inputName, inputAge, inputTickets, inputCash)
}

inputAge = Math.min(inputAge, 130);     // returns the smallest value
inputTickets = Math.min(inputTickets, 100);     
inputCash = Math.min(inputCash, 10000);     



