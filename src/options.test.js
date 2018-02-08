// Component.
import { onWindowLoad } from './options';

describe('options', () => {
    context('onWindowLoad()', () => {
        it('should return a Vue instance', () => {
            const vm = onWindowLoad();

            expect(vm._isVue).to.equal(true);
        });
    });
});
