import { writable, derived, get } from "svelte/store"
import { getRandomWord, isWordInDictionary } from "./wordCreator"
import { Letter } from "./letter";

export let answer = getRandomWord();
const numRows = 6;
const getEmptyRow = () => Array.from({ length: answer.length }, () => new Letter());

const guesses = writable([]);
export const usedLetters = writable(new Map());
const currentRow = writable(getEmptyRow());

export const reset = () => {
    answer = getRandomWord();
    guesses.set([]);
    usedLetters.set(new Map());
    currentRow.set(getEmptyRow());
}

export const board = derived(
  [guesses, currentRow],
  ([$guesses, $currentRow]) => [
    ...$guesses,
    $currentRow,
    ...Array.from({ length: numRows - $guesses.length - 1 }, () =>
      getEmptyRow()
    ),
  ]
);

const getWordFromGuess = (guess) => guess?.map(l => l.letter).join("") ?? "";

export const gameState = derived(guesses, $guesses => {
    const lastGuessAsWord = getWordFromGuess($guesses[$guesses.length - 1]);
    if (lastGuessAsWord === answer) {
        return "won";
    }
    if ($guesses.length === numRows) {
        return "lost";
    }
    return "playing";
});

const getNextIndexInRow = (row) => {
    const index = row.findIndex(l => l.letter === null);
    return index === -1 ? row.length : index;
}

export const typeLetter = (letter) => {
  if (get(guesses).length === numRows) return;
  currentRow.update((row) => {
    const index = getNextIndexInRow(row);
    return index < answer.length
      ? [...row.slice(0, index), new Letter(letter), ...row.slice(index + 1)]
      : row;
  });
}

export const deleteLetter = () =>
  currentRow.update((row) => {
    const index = getNextIndexInRow(row);
    return index === 0
      ? row
      : [...row.slice(0, index - 1), new Letter(), ...row.slice(index)];
  });

export const makeGuess = () => {
  const guess = get(currentRow);
  if (getNextIndexInRow(guess) < answer.length) return;
  const word = getWordFromGuess(guess);
  if (!isWordInDictionary(word)) return;
  guess.forEach((letter, idx) => {
    if (answer.includes(letter.letter)) {
      if (answer[idx] === letter.letter) {
        letter.state = "correct";
      } else {
        letter.state = "misplaced";
      }
    } else {
      letter.state = "incorrect";
    }
  });

  guesses.update((guesses) => guesses.length < numRows ? [...guesses, guess] : guesses);

  if (get(guesses).length === numRows) {
    currentRow.set([]);
  }
  else {
    currentRow.set(getEmptyRow());
  }

  usedLetters.update((lettersMap) => new Map([
    ...lettersMap,
    ...guess.reduce((acc, letter) => acc.set(letter.letter, letter), new Map()),
  ]));
};