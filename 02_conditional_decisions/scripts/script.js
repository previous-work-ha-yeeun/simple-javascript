/*
these data points represent different aspects of the show...
(do not change these values)
*/
const ticketCostDollarsCDN      = 30;
const minimumAgeToAttend        = 21;
/* tax rate is 10%, defined here as 0.10 */
const taxRate                   = 0.10;


/* Object? When variables belong to one unit - group them into an object */
const orderState = {
    inputName: "",
    inputAge: 0,
    ticketQuantity: 0,
    inputCash: 0, 

    beforeTax: 0,
    afterTax: 0,
    oldEnough: false,
    canAfford: false,
} 


/*  Initial page load   */
document.getElementById("javascript_message").innerHTML = "YeEun Ha";
updateValues()


/*  Functions   */
function updateValues() {
    saveValue();
    introduce(orderState.inputName);
    calculateTax(); 
    renderProcess()
}

function saveValue() {
    orderState.inputName = document.getElementById("userName").value;
    orderState.inputAge = Number(document.getElementById("userAge").value);
    orderState.inputAge = Math.min(orderState.inputAge, 130);     // returns the smallest value

    orderState.ticketQuantity = Math.min(Number(document.getElementById("ticketQuantity").value), 100);     
    orderState.inputCash =  Math.min(Number(document.getElementById("cashOnHand").value), 10000);    
    console.log(orderState);
}

function introduce(name) {
    document.getElementById("nameOfUser").innerHTML = name;
    document.getElementById("userSays").innerHTML = `${name} says: "It's my first time to go to a concert in Vancouver!"`;
}

function calculateTax() {
    orderState.beforeTax = orderState.ticketQuantity * ticketCostDollarsCDN;
    orderState.afterTax = orderState.beforeTax * (1 + taxRate);
}

function renderProcess() {
    document.getElementById("process").innerHTML 
        = processCost() + processAge() + processAffordability()
}

function processCost() {
    let html 
        = `<p>Purchasing ${orderState.ticketQuantity} tickets at $${ticketCostDollarsCDN}: $${orderState.beforeTax}</p>
            <p>After tax total cost: $${orderState.afterTax.toFixed(2)}</p>` ;
    // toFixed(2): Rounds the number and returns a STRING with 2 digits after the decimal point.
    return html;
}

function processAge() {
    if (orderState.inputAge > minimumAgeToAttend) {
        orderState.oldEnough = true;
        return `<p>User is old enough to attend the show by ${orderState.inputAge - minimumAgeToAttend} year(s).</p>`;
    } else if (orderState.inputAge == minimumAgeToAttend) {
        orderState.oldEnough = true;
        return `<p>User is exactly old enough to attend the show!</p>`;
    } else {
        orderState.oldEnough = false;
        return ``
    }
}

function processAffordability() {
    orderState.canAfford = orderState.inputCash >= orderState.afterTax;
    return orderState.canAfford ? `<p>User can afford this.</p>` : "" ;
}


/*  Second Box - static info   */
document.getElementById("ageRestriction").innerHTML = `Minimum age to attend: ${minimumAgeToAttend}`;
document.getElementById("ticketPrice").innerHTML = `Cost Per Ticket: $${ticketCostDollarsCDN}`;
document.getElementById("tax").innerHTML = `Tax Rate: ${100 * taxRate}%`;








