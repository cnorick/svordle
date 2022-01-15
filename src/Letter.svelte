<script>
    export let letter
</script>

<div class="letter"
  class:empty={!letter.letter}
  class:incorrect={letter.state === "incorrect"}
  class:misplaced={letter.state === "misplaced"}
  class:correct={letter.state === "correct"}>
    {#if letter.letter}
        {letter.letter}
    {/if}
</div>

<style>
    .letter {
        font-size: 2rem;
        display: inline-flex;
        font-weight: bold;
        vertical-align: middle;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        width: 100%;
        user-select: none;
        line-height: 2rem;
        color: var(--text-color);
        border: 2px solid var(--border-color);
        text-transform: uppercase;
    }

    .empty {
        border: 2px solid var(--empty-border-color);
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