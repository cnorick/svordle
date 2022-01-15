<script>
    import { typeLetter, makeGuess, deleteLetter, usedLetters } from "./stores";

    const firstRow = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
    const secondRow = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
    const thirdRow = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
</script>

<div class="keyboard-container">
    <div class="keyboard">
        <div class="row">
            {#each firstRow as key}
                <button
                    on:click={() => typeLetter(key)}
                    class="{'key ' + $usedLetters.get(key)?.state ?? ''}"
                >{key}</button>
            {/each}
        </div>

        <div class="row">
            <div class="spacer-half"></div>
            {#each secondRow as key}
                <button
                    on:click={() => typeLetter(key)}
                    class="{'key ' + $usedLetters.get(key)?.state ?? ''}"
                >{key}</button>
            {/each}
            <div class="spacer-half"></div>
        </div>

        <div class="row">
            <button on:click={makeGuess} class="key one-and-a-half">Enter</button>

            {#each thirdRow as key}
                <button
                    on:click={() => typeLetter(key)}
                    class="{'key ' + $usedLetters.get(key)?.state ?? ''}"
                >{key}</button>
            {/each}

            <button on:click={deleteLetter} class="key one-and-a-half">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                    <path fill="var(--text-color)" d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"></path>
                </svg>
            </button>
        </div>
    </div>
</div>

<style>
    .keyboard-container {
        height: var(--keyboard-height);
    }

    .keyboard {
        margin: 0 8px;
        user-select: none;
    }

    .row {
        display: flex;
        width: 100%;
        margin: 0 auto 8px;
        touch-action: manipulation;
    }

    .key {
        font-family: inherit;
        font-weight: bold;
        border: 0;
        padding: 0;
        margin: 0 6px 0 0;
        height: 58px;
        border-radius: 4px;
        cursor: pointer;
        user-select: none;
        background-color: var(--key-bg);
        color: var(--text-color);
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        text-transform: uppercase;
        -webkit-tap-highlight-color: rgba(0,0,0,0.3);
    }

    .spacer-half {
        flex: 0.5;
    }

    .one-and-a-half {
        flex: 1.5;
        font-size: 12px;
    }

    .incorrect, .misplaced, .correct {
        color: var(--guessed-letter-color);
        border: none;
    }

    .incorrect {
        background-color: var(--incorrect-bg);
    }

    .misplaced {
        background-color: var(--misplaced-bg);
    }

    .correct {
        background-color: var(--correct-bg);
    }
</style>