



const quotes = [
        {quote: 'lapar jek',
        author:'cookie punya mak'
    },
    {
        quote: 'masak cookie goreng',
        author:'cookie punya bapak'
    },{
        quote: 'kau serious ah nak goreng?',
        author:'cookie punya abang'
    },{
        quote: 'tanak fried ke?',
        author:'cookie punya kakak'
    },{
        quote: 'sama la bod!',
        author:'cookie punya mak'
    },
    {
        quote: 'mana nak cari cookie',
        author:'cookie punya bapak'
    },
    {
        quote: 'Top Right la mana lagi',
        author:'cookie '
    }
]

    function getRandomQuote() {

        let randomIndex = Math.floor((Math.random() * quotes.length));
    document.getElementById('quote').innerHTML=quotes[randomIndex].quote;
    document.getElementById('author').innerHTML=quotes[randomIndex].author;
        
    
    }
    