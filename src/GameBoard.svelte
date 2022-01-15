<script>
    import Row from "./Row.svelte";
    import { board } from "./stores.js";
</script>

<div class="board-container">
    <div class="game-board">
        {#each $board as row}
            <Row {row}/>
        {/each}
    </div>
</div>

<style>
    .board-container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-grow: 1;
        overflow: hidden;
    }

    .game-board {
        width: 350px;
        height: 420px;
        display: grid;
        grid-template-rows: repeat(6, 1fr);
        grid-gap: 5px;
        padding: 10px;
        box-sizing: border-box;
    }
</style>