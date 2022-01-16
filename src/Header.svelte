<div class="header">
    <a href="https://nathanorick.com"><img alt="home" src="home_button.png"/></a>
    <div class="title">
        <h1>Svordle</h1>
        <h5>(Made with Svelte)</h5>
    </div>
    <div class="spacer"></div>
</div>

<style>
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid var(--border-color);
    }
    .header img, .header > .spacer {
        height: 20px;
        width: 20px;
        margin: 1rem;
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