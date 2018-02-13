// Services.
import BaseService from './BaseService';

/**
 * A service to handle Vimeo interactions.
 */
export default class VimeoService extends BaseService {
    static url = 'vimeo.com';

    constructor() {
        super();

        /* eslint-disable max-len */
        this._contentScript = `
            (function (document) {
                document.querySelectorAll('button.play')[0].click();
            })(document);
        `;
        /* eslint-enable max-len */
    }
}
