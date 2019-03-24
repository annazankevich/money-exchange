// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    let coins = {};
    const money = {
        H: 50,
        Q: 25,
        D: 10,
        N: 5,
        P: 1,
    };
    if (currency <= 0) {
        return coins;
    }
    if (currency >= 10000) {
        coins.error = "You are rich, my friend! We don't have so much coins for exchange";
        return coins;
    }
    for (let key in money) {
        if (currency >= money[key]) {
            coins[key] = currency / money[key] ^ 0;
            currency = currency % money[key];
        }
        if(currency === 0) {
            break;
        }
    }
    return coins;
};
