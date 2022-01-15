export class Letter {
    constructor(letter, state="pending") {
        this.letter = letter ?? null;
        this.state = state;
    }
}