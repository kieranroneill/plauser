// Services.
import BaseService from './BaseService';

/**
 * A service to handle SoundCloud interactions.
 */
export default class SoundCloudService extends BaseService {
    constructor() {
        super();

        /* eslint-disable max-len */
        this._contentScript = `
            (function (document) {
                document.getElementsByClassName('playControl')[0].click();
            })(document);
        `;
        /* eslint-enable max-len */
    }
}
