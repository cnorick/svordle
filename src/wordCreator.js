import * as dictionaryModule from './dictionary.json';
const dictionary = dictionaryModule.default;
export function getRandomWord (){
    return dictionary[Math.floor(Math.random() * dictionary.length)];
}
export function isWordInDictionary(word) {
    return dictionary.includes(word);
}