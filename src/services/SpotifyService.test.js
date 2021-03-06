// Mocks.
import mockChromeSDK from '../../test/mockChromeSDK';

// Services.
import SpotifyService from './SpotifyService';

describe('SpotifyService', () => {
    const scope = {
        service: null
    };
    const tabId = 'some meaningful tab';

    beforeEach(() => {
        window.chrome = mockChromeSDK;

        scope.service = new SpotifyService();
    });

    afterEach(() => {
        window.chrome = null;

        scope.service = null;
    });

    describe('initialisation', () => {
        it('should set a content script to the "_contentScript" property', () => {
            expect(scope.service._contentScript).to.be.a('string');
        });
    });

    context('plause()', () => {
        it('should execute script', () => {
            scope.service.plause(tabId);

            assert.calledWith(window.chrome.tabs.executeScript, tabId, { code: scope.service._contentScript });
        });
    });
});
