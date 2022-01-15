const fs = require('fs');
const readline = require('readline');

get5LetterWords();
// getRanked5LetterWords();
// getMostCommon5LetterWords();


async function get5LetterWords() {
    const fiveLetterWords = [];
    const fileStream = fs.createReadStream(`${__dirname}/allWords.txt`);
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });
    for await (const line of rl ) {
        line.trim().length === 5 && fiveLetterWords.push(line.trim());
    }

    fs.writeFileSync(`${__dirname}/fiveLetterWords.json`, JSON.stringify(fiveLetterWords));
}

async function getRanked5LetterWords() {
    const fiveLetterWords = [];
    const fileStream = fs.createReadStream(`${__dirname}/wordsByUsage.txt`);
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });
    for await (const line of rl ) {
        const commaPos = line.indexOf(',');
        word = line.substring(1, commaPos);
        word.length === 5 && fiveLetterWords.push(word);
    }

    fs.writeFileSync(`${__dirname}/rankedFiveLetterWords.json`, JSON.stringify(fiveLetterWords));
}

async function getMostCommon5LetterWords() {
    const fiveLetterWords = [];
    const fileStream = fs.createReadStream(`${__dirname}/wordsByUsage.txt`);
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });
    for await (const line of rl ) {
        const commaPos = line.indexOf(',');
        word = line.substring(1, commaPos);
        word.length === 5 && fiveLetterWords.push(word);
    }

    console.log(fiveLetterWords.length);
    console.log(fiveLetterWords[4000])

    fs.writeFileSync(`${__dirname}/rankedFiveLetterWords.json`, JSON.stringify(fiveLetterWords.slice(0, 4000)));
}
