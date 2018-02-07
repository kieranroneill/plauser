// Services.
import BaseService from './BaseService';

/**
 * A service to handle Spotify interactions.
 */
export default class SpotifyService extends BaseService {
    static url = 'play.spotify.com';

    constructor() {
        super();

        /* eslint-disable max-len */
        this._contentScript = `
            (function (document) {
                document.getElementById('app-player').contentWindow.document.getElementById('play-pause').click();
            })(document);
        `;
        /* eslint-enable max-len */
    }
}
