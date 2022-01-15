import * as dictionaryModule from './dictionary.json';
import { rbeta } from './betaDistribution';

const dictionary = dictionaryModule.default;
export function getRandomWord (){
    const randomNum = rbeta(2, 5);
    return dictionary[Math.floor(randomNum * dictionary.length)];
}
export function isWordInDictionary(word) {
    return dictionary.includes(word);
}