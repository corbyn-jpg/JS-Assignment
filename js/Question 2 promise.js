/* a)
The main differences between callbacks and promises is:
Syntax: Callbacks are function-based, whereas promises have methods like .then() and .catch()

Promises solve:
Callback hell: Promises provide a flat chainable structure that prevents nesting.
Error handling: Promises has .catch() that automates error handling.*/


function fetchOrderStatus(orderId) {
    return new Promise((resolve, reject) => {
            if (orderId >= 1000 && orderId <= 5000) {
                resolve("Processed");
            } else {
                reject("Error: Invalid orderId. Please provide an orderId between 1000 and 5000.");
            }
    });
}