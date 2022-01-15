<script>
    import Letter from './Letter.svelte';
    export let row;
</script>

<div class="row">
    {#each row as letter}
        <Letter {letter}/>        
    {/each}
</div>

<style>
    .row {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-gap: 5px;
    }
</style>