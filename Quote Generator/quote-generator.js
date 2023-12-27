document.addEventListener('DOMContentLoaded', async () => {
    const quote = document.querySelector('.quote');
    const author = document.querySelector('.author');
    const newQuoteBtn = document.querySelector('.new-quote');
    const tweetBtn = document.querySelector('.tweet');

    async function generateQuote () {
        try {
            const response = await fetch('https://api.quotable.io/random');  
            if (response.ok) {
                const data = await response.json();
                quote.textContent = data.content;
                author.textContent = data.author;
            } else {
                quote.textContent = 'An error occured';
            }
        } catch(error) {
            console.log('Error fetching quote', error);
            quote.textContent = 'An error occured';
        }
    }

    function tweet () {
        window.open('https://twitter.com/intent/tweet?text=' + quote.innerHTML + ' ---- by ' + author.innerHTML, 'Tweet Window', 'width=600, height: 300');
    }

    await generateQuote();

    newQuoteBtn.addEventListener('click', generateQuote);
    tweetBtn.addEventListener('click', tweet);
});