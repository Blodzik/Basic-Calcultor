document.addEventListener('DOMContentLoaded', () => {

    const data = {
        'EN':
        {
            'market': 'Market',
            'features': 'Features',
            'whitePapers': 'White Papers',
            'aboutUs': 'About Us',
            'title': 'BUY & ',
            'br': 'SELL',
            'crypto': ' Crypto',
            'paragraph': 'World\'s bigger Cryptocurrency exchange available on web as well as mobile phone.',
            'exploreMore': 'EXPLORE MORE',
            'bitcoin': 'Bitcoin',
            'ethereum': 'Ethereum',
            'dodgecoin': 'Dodgecoin'
        },
        'UA':
        {
            'market': 'Ринок',
            'features': 'Особливості',
            'whitePapers': 'Білі Бумаги',
            'aboutUs': 'Про Нас',
            'title': 'Купуй &',
            'br': 'Продавай',
            'crypto': ' Крипту',
            'paragraph': 'Найбільша у світі біржа криптовалют також доступна в Інтернеті як мобільний телефон.',
            'exploreMore': 'Дізнатися Більше',
            'bitcoin': 'Біткойн',
            'ethereum': 'Ефіріум',
            'dodgecoin': 'Доджкойн'
        }
    }

    const priceBTC = document.getElementById('priceBTC');
    const priceETH = document.getElementById('priceETH');
    const priceDOGE = document.getElementById('priceDOGE');
    const select = document.getElementById('select');
    const url = 'https://api.coinbase.com/v2/exchange-rates?currency=';

    const market = document.getElementById('market');
    const features = document.getElementById('features');
    const whitePapers = document.getElementById('whitePapers');
    const aboutUs = document.getElementById('aboutUs');
    const title = document.getElementById('title');
    const br =  document.getElementById('br');
    const cryptoD = document.getElementById('crypto');
    const paragraph = document.getElementById('paragraph');
    const exploreMore = document.getElementById('exploreMore');
    const bitcoin = document.getElementById('bitcoin');
    const ethereum = document.getElementById('ethereum');
    const dodgecoin = document.getElementById('dodgecoin');

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

    function changeLanguage () {
        const selectedValue = select.value;

        if (data[selectedValue]) {
            const currentLanguage = data[selectedValue];

            market.innerHTML = currentLanguage['market'];
            features.innerHTML = currentLanguage['features'];
            whitePapers.innerHTML = currentLanguage['whitePapers'];
            aboutUs.innerHTML = currentLanguage['aboutUs'];
            title.innerHTML = currentLanguage['title'] + '<br>' + currentLanguage['br'] + currentLanguage['crypto'];
            paragraph.innerHTML = currentLanguage['paragraph'];
            exploreMore.innerHTML = currentLanguage['exploreMore'];
            bitcoin.innerHTML = currentLanguage['bitcoin'];
            ethereum.innerHTML = currentLanguage['ethereum'];
            dodgecoin.innerHTML = currentLanguage['dodgecoin'];

            cryptoD.style.color = '#ff960b';
        }
    }

    select.addEventListener('change', changeLanguage);

});