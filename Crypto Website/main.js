const priceBTC = document.getElementById('priceBTC');
const priceETH = document.getElementById('priceETH');
const priceDOGE = document.getElementById('priceDOGE');
const url = 'https://api.coinbase.com/v2/exchange-rates?currency=';
let coins = ['BTC', 'ETH', 'DOGE'] 


async function displayPrice (coin, element) {
    try {
        const response = await fetch(url + coin);

        if (!response) {
            throw new Error('Network response was not ok')
        }

        let data = await response.json();
        let priceCrypto = parseFloat(data.data.rates.USD).toFixed(2);


        element.innerHTML = '$ ' + priceCrypto;
    } catch (error) {
        console.error('Erro fetching data:', error.message);
    }
    
}

displayPrice(coins[0], priceBTC);
displayPrice(coins[1], priceETH);
displayPrice(coins[2], priceDOGE);