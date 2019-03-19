// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    const coins={};
    let money= {
        H:50,
        Q:25,
        D:10,
        N:5,
        P:1,
    };
    if(currency<=0){
        return coins;
    }
    if(currency>=10000){
        coins.error= "You are rich, my friend! We don't have so much coins for exchange";
        return coins;
    }
    for (let key in money) {
        if (currency >= money[key]) {
            const sum = Math.floor(currency/money[key]);
            currency -= sum * money[key];
            coins[key] = sum
        }
    }
    return coins;
}
