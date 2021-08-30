function getRandomNumber(number) {

    var max = (number + 1); 
    return Math.floor(Math.random() * Math.floor(max));
}


// Listen for messages
chrome.runtime.onMessage.addListener((msg, sender, response) => {

    if(msg.name == "fetchWords"){

        const apiKey = 'OUR-API-KEY';
        const dateStr = new Date().toISOString().slice(0, 10);
        const apiCall = 'https://api.wordnik.com/v4/words.json/wordOfTheDay?date='+dateStr+'&api_key='+apiKey;
        // We call api...
        // wait for repsonse...
        // send the reponse...

        // fetch()

        const wordsObj = [
            "surimono",
            "flanconade",
            "perihelion",
            "brailler",
            "needfire"
        ];

        const wordDescObj = [
            "A kind of Japanese woodblock print, privately commissioned for special occasions such as the New Year.",
            "In <em>fencing</em>, the ninth and last thrust, usually aimed at the side.",
            "The point in a solar orbit where the orbiting body is closest to the sun.",
            "A typewriter used to emboss paper with braille cells to be read by the visual",
            "A fire produces by the friction of one piece of wood upon another"
        ];

        var number = getRandomNumber(4);

        // Send response
        response({word: wordsObj[number], desc: wordDescObj[number]});
    }

});