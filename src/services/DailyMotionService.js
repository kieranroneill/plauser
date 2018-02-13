// Services.
import BaseService from './BaseService';

/**
 * A service to handle DailyMotion interactions.
 */
export default class DailyMotionService extends BaseService {
    static url = 'dailymotion.com/video';

    constructor() {
        super();

        /* eslint-disable max-len */
        this._contentScript = `
            (function (document) {
                var player = document.getElementById('dmp_Video');
                
                if (player) {
                    if (player.paused) {
                        return player.play();
                    }
                    
                    return player.pause();
                }
            })(document);
        `;
        /* eslint-enable max-len */
    }
}
