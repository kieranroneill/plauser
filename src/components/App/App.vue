<template>
    <div class="app">
        <Header />
        <main class="main">
            <h2>Options</h2>
            <Divider />
        </main>
        <Footer />
    </div>
</template>

<script>
    // Components.
    import Divider from '../Divider/Divider';
    import Footer from '../Footer/Footer';
    import Header from '../Header/Header';

    export default {
        name: 'App',
        components: {
            Divider,
            Footer,
            Header
        }
    };
</script>

<style lang="scss" scoped>
    @import "../../styles/modules/mixins";

    .app {
        @include fullSize();
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .main {
        align-items: flex-start;
        display: flex;
        flex: 1 0 auto;
        flex-direction: column;
        justify-content: flex-start;
        padding: 2rem;
        width: 75%;
    }
</style>
