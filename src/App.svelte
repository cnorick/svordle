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
            <h1 class="title">You lost!</h1>
            <br/>
            The word was <b>{answer}</b>
            <br/>
            <button class="clay" on:click={() => reset()}>Play again</button>
        </div>
    {:else if $gameState === "won"}
        <div class="won">
            <h1 class="title">You won!</h1>
            <br/>
            <button class="clay" on:click={() => reset()}>Play again</button>
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

    .won, .lost {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        color: white;
    }

    .won > button, .lost > button {
        padding: 18px;
        --clay-background: rgb(184, 247, 255);
        --clay-border-radius: 11px;
        --clay-border-radius: 1rem;
        --clay-shadow-outset: 4px 4px 8px 0 rgba(0,0,0,.25);
        --clay-shadow-inset-primary: -8px -8px 12px 0 rgba(0,0,0,.2);
        --clay-shadow-inset-secondary: 8px 8px 12px 0 hsla(0,0%,100%,.3);
        align-items: center;
        cursor: pointer;
        display: inline-flex;
        font-size: 24px;
        justify-content: center;
        line-height: 1;
        padding: 1.5rem 2rem;
        text-decoration: none;
        text-transform: uppercase;
        transition: all .15s ease;
        opacity: .8;
    }

    .won > button:hover, .lost > button:hover {
        opacity: 1;
    }

    .lost {
        background-color: #f76d6d;
    }

    .won {
        background-color: #24315e;
    }

    .title {
        color: var(--color-white);
        font-size: 88px;
        line-height: 1;
        margin-bottom: 4rem;
        text-shadow: 0 0.075em rgb(0 0 0 / 25%);
    }
</style>