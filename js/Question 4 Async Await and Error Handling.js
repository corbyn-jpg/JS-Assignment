/* a)
Async/await simplifies asynchronous code by making it look and behave more like synchronous code. This improves readability, reduces complexity, and makes error handling and debugging easier.*/

async function getStockPrice(stockSymbol) {
    try {
        new Promise(resolve => setTimeout(resolve, 1500));

        if (typeof stockSymbol !== 'string' || stockSymbol === '') {
            throw new Error('Invalid stock symbol');
        }

        // Simulate fetching the stock price
        return stockPrice;

    } catch (error) {
        console.error(`Error: ${error.message}`);

    }
}
