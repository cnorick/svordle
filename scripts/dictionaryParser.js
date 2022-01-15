const fs = require('fs');
const readline = require('readline');

get5LetterWords();
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