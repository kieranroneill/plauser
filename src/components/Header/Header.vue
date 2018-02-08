<template>
    <header class="header">
        <img
                :src="logo"
                class="header__logo"
                alt="Plauser logo."
                title="Plauser" />
        <div class="header__title">
            <h1>Plauser</h1>
            <p>A Chrome extension that allows you to play/pause your current playing track from any tab.</p>
        </div>
    </header>
</template>

<script>
    // Images.
    import logo from '../../images/logo.png';

    export default {
        name: 'Header',
        data: function () {
            return {
                logo
            }
        }
    };
</script>

<style lang="scss" scoped>
    .header {
        align-items: center;
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin: 1rem auto;
        max-width: 800px;

        &__logo {
            height: 4rem;
            padding: 0 1rem 0;
            width: 4rem;
        }

        &__title {
            h1 {
                margin: 0 0 0.7rem;
            }
        }
    }
</style>
