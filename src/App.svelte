<script>
    import GameBoard from "./GameBoard.svelte";
    import Header from "./Header.svelte";
    import Keyboard from "./Keyboard.svelte";
    import { gameState, answer, reset } from "./stores";
</script>

<main>
    <Header />
    {#if $gameState === "playing"}
        <GameBoard />
        <Keyboard />
    {:else if $gameState === "lost"}
        <div class="lost">
            <h1>You lost!</h1>
            <br/>
            The word was <b>{answer}</b>
            <br/>
            <button on:click={() => reset()}>Play again</button>
        </div>
    {:else if $gameState === "won"}
        <div class="won">
            <h1>You won!</h1>
            <br/>
            <button on:click={() => reset()}>Play again</button>
        </div>
    {/if}
    
</main>

<style>
    main {
        width: 100%;
        max-width: var(--game-max-width);
        margin: 0 auto;
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>