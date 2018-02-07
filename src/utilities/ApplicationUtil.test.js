// Constants.
import { OSX_OS, UNIX_OS, WINDOWS_OS } from '../constants/os';

// Utilities.
import { getCurrentOS, getKeyCodeCombinationArray, getKeyCodeCombinationString, getService } from './ApplicationUtil';

// Services.
import GoogleMusicService from '../services/GoogleMusicService';
import GroovesharkService from '../services/GroovesharkService';
import SoundCloudService from '../services/SoundCloudService';
import SpotifyService from '../services/SpotifyService';
import YouTubeService from '../services/YouTubeService';

describe('utilities/ApplicationUtil', () => {
    const scope = {
        keys: null
    };

    beforeEach(() => {
        scope.keys = {
            mac: [],
            unix: [],
            windows: []
        };
    });

    afterEach(() => {
        scope.keys = null;
    });

    /* eslint-disable max-len */
    context('getCurrentOS()', () => {
        it('should return "unix" by default', () => {
            const result = getCurrentOS();

            expect(result).to.equal(UNIX_OS);
        });

        it('should return "osx" if it is OSX', () => {
            const result = getCurrentOS('5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36');

            expect(result).to.equal(OSX_OS);
        });

        it('should return "windows" if it is Windows', () => {
            const result = getCurrentOS('Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)');

            expect(result).to.equal(WINDOWS_OS);
        });
    });
    /* eslint-enable max-len */

    context('getKeyCodeCombinationArray()', () => {
        it('should return an empty array if an invalid OS is provided', () => {
            const result = getKeyCodeCombinationArray();

            expect(result).to.an('array');
            expect(result).to.be.empty;
        });

        it('should return an empty array if the keys are not defined', () => {
            const result = getKeyCodeCombinationArray(UNIX_OS);

            expect(result).to.an('array');
            expect(result).to.be.empty;
        });

        it('should return the mac keyCode array', () => {
            let result;

            scope.keys.mac = [
                {
                    keyCode: 34,
                    keyChar: 'k'
                }
            ];

            result = getKeyCodeCombinationArray(OSX_OS, scope.keys);

            expect(result).to.an('array');
            expect(result).to.deep.equal(scope.keys.mac.map(item => item.keyCode));
        });

        it('should return the unix keyCode array', () => {
            let result;

            scope.keys.unix = [
                {
                    keyCode: 34,
                    keyChar: 'k'
                }
            ];

            result = getKeyCodeCombinationArray(UNIX_OS, scope.keys);

            expect(result).to.an('array');
            expect(result).to.deep.equal(scope.keys.unix.map(item => item.keyCode));
        });

        it('should return the windows keyCode array', () => {
            let result;

            scope.keys.windows = [
                {
                    keyCode: 34,
                    keyChar: 'k'
                }
            ];

            result = getKeyCodeCombinationArray(WINDOWS_OS, scope.keys);

            expect(result).to.an('array');
            expect(result).to.deep.equal(scope.keys.windows.map(item => item.keyCode));
        });
    });

    context('getKeyCodeCombinationString()', () => {
        it('should return an empty array if an invalid OS is provided', () => {
            const result = getKeyCodeCombinationString();

            expect(result).to.an('string');
            expect(result).to.be.empty;
        });

        it('should return an empty array if the keys are not defined', () => {
            const result = getKeyCodeCombinationString(UNIX_OS);

            expect(result).to.an('string');
            expect(result).to.be.empty;
        });

        it('should return the mac keyCode array', () => {
            let result;

            scope.keys.mac = [
                {
                    keyCode: 34,
                    keyChar: 'k'
                }
            ];

            result = getKeyCodeCombinationString(OSX_OS, scope.keys);

            expect(result).to.an('string');
            expect(result).to.include(scope.keys.mac.map(item => item.keyChar));
        });

        it('should return the unix keyCode array', () => {
            let result;

            scope.keys.unix = [
                {
                    keyCode: 34,
                    keyChar: 'k'
                }
            ];

            result = getKeyCodeCombinationString(UNIX_OS, scope.keys);

            expect(result).to.an('string');
            expect(result).to.include(scope.keys.unix.map(item => item.keyChar));
        });

        it('should return the windows keyCode array', () => {
            let result;

            scope.keys.windows = [
                {
                    keyCode: 34,
                    keyChar: 'k'
                }
            ];

            result = getKeyCodeCombinationString(WINDOWS_OS, scope.keys);

            expect(result).to.an('string');
            expect(result).to.include(scope.keys.windows.map(item => item.keyChar));
        });
    });

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
