import Vue from 'vue';

// General styles.
import './styles/index.scss';

// Components.
import App from './components/App/App';

export function onWindowLoad() {
    return new Vue({
        el: '#app',
        components: { App },
        template: '<App />'
    });
}

window.addEventListener('load', onWindowLoad);
