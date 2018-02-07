// Mocks.
import mockChromeSDK from '../../test/mockChromeSDK';

// Services.
import BaseService from './BaseService';

describe('BaseService', () => {
    const scope = {
        service: null
    };

    beforeEach(() => {
        window.chrome = mockChromeSDK;

        scope.service = new BaseService();
    });

    afterEach(() => {
        window.chrome = null;

        scope.service = null;
    });

    context('plause()', () => {
        it('should not execute script if the tab id has not been defined', () => {
            scope.service.plause();

            assert.notCalled(window.chrome.tabs.executeScript);
        });

        it('should not execute script if the content script is not defined', () => {
            scope.service.plause('some id');

            assert.notCalled(window.chrome.tabs.executeScript);
        });
    });
});
