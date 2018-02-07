// Constants.
import { OSX_OS, UNIX_OS, WINDOWS_OS } from '../constants/os';

// Utilities.
import { getCurrentOS, getService } from './ApplicationUtil';

// Services.
import GoogleMusicService from '../services/GoogleMusicService';
import GroovesharkService from '../services/GroovesharkService';
import SoundCloudService from '../services/SoundCloudService';
import SpotifyService from '../services/SpotifyService';
import YouTubeService from '../services/YouTubeService';

describe('utilities/ApplicationUtil', () => {
    /* eslint-disable max-len */
    context('getCurrentOS()', () => {
        it('should return "unix" by default', () => {
            const os = getCurrentOS();

            expect(os).to.equal(UNIX_OS);
        });

        it('should return "osx" if it is OSX', () => {
            const os = getCurrentOS('5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36');

            expect(os).to.equal(OSX_OS);
        });

        it('should return "windows" if it is Windows', () => {
            const os = getCurrentOS('Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)');

            expect(os).to.equal(WINDOWS_OS);
        });
    });
    /* eslint-enable max-len */

    context('getService()', () => {
        it('should not call any services when the does not match any patterns', () => {
            const service = getService();

            expect(service).to.be.null;
        });

        it('should return a service for the Google Music url', () => {
            const service = getService('https://play.google.com/music/listen/');

            expect(service).to.be.an.instanceOf(GoogleMusicService);
        });

        it('should return a service for the Grooveshark url', () => {
            const service = getService('https://grooveshark.com/');

            expect(service).to.be.an.instanceOf(GroovesharkService);
        });

        it('should return a service for the SoundCloud url', () => {
            const service = getService('https://soundcloud.com/');

            expect(service).to.be.an.instanceOf(SoundCloudService);
        });

        it('should return a service for the Spotify url', () => {
            const service = getService('https://play.spotify.com');

            expect(service).to.be.an.instanceOf(SpotifyService);
        });

        it('should return a service for the YouTube url', () => {
            const service = getService('https://www.youtube.com/watch/');

            expect(service).to.be.an.instanceOf(YouTubeService);
        });
    });
});
