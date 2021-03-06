// Services.
import BaseService from './BaseService';

/**
 * A service to handle Google Music interactions.
 */
export default class GoogleMusic extends BaseService {
    static url = 'play.google.com/music/listen';

    constructor() {
        super();

        /* eslint-disable max-len */
        this._contentScript = `
            (function (document) {
                document.querySelector('[data-id="play-pause"]').click();
            })(document);
        `;
        /* eslint-enable max-len */
    }
}
