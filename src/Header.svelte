<div class="header">
    <div class="title">
        <h1>Svordle</h1>
        <h5>(Made with Svelte)</h5>
    </div>
</div>

<style>
    .header {
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-bottom: 1px solid var(--border-color);
    }

    .title {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 0;
        margin-bottom: 0;
    }


    .title>* {
        margin-top: 0;
        margin-bottom: .1rem;
    }
</style>