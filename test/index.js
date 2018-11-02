import Demo from './demo';
import {App} from 'kpc';

function render() {
    const Demo = require('./demo').default;
    if (!window.$app) {
        window.$app = new App({container: document.getElementById('app')});
    }
    window.$app.load(Demo);
}

render();

if (module.hot) {
    module.hot.accept(() => {
        render();
    });
}

