export class Letter {
    constructor(letter) {
        this.letter = letter ?? null;
        this.state = "pending";
    }
}