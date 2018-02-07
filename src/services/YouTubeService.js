// Services.
import BaseService from './BaseService';

/**
 * A service to handle YouTube interactions.
 */
export default class YouTubeService extends BaseService {
    constructor() {
        super();

        /* eslint-disable max-len */
        this._contentScript = `
            (function () {
                location.href="javascript:player = document.getElementById('movie_player');if(player.getPlayerState() == 1){player.pauseVideo();}else{player.playVideo();}void(0)";
            })();
        `;
        /* eslint-enable max-len */
    }
}
