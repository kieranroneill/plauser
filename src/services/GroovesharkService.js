// Services.
import BaseService from './BaseService';

/**
 * A service to handle Grooveshark interactions.
 */
export default class GroovesharkService extends BaseService {
    constructor() {
        super();

        /* eslint-disable max-len */
        this._contentScript = `
            (function (document) {
                document.getElementById('play-pause').click();
            })(document);
        `;
        /* eslint-enable max-len */
    }
}
