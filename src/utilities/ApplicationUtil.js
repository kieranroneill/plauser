// Constants.
import { OSX_OS, UNIX_OS, WINDOWS_OS } from '../constants/os';

// Services.
import GoogleMusicService from '../services/GoogleMusicService';
import GroovesharkService from '../services/GroovesharkService';
import SoundCloudService from '../services/SoundCloudService';
import SpotifyService from '../services/SpotifyService';
import YouTubeService from '../services/YouTubeService';

export const defaultKeys = {
    mac: [],
    unix: [],
    windows: []
};

/**
 * Gets the OS the browser is running on.
 * @param userAgent the userAgent of the browser.
 * @return {String} the string constant of the OS, defaults to unix.
 */
export function getCurrentOS(userAgent = '') {
    if (userAgent.indexOf('Win') > -1) {
        return WINDOWS_OS;
    }

    if (userAgent.indexOf('Mac') > -1) {
        return OSX_OS;
    }

    return UNIX_OS;
}

/**
 * Gets the key code combination that matches the keys.
 * @param os the OS to use.
 * @param keys the key combination.
 * @return {Array} an array of keyCodes.
 */
export function getKeyCodeCombinationArray(os, keys = defaultKeys) {
    let keyMapArray = [];

    switch (os) {
        case OSX_OS:
            keyMapArray = keys.mac;

            break;
        case UNIX_OS:
            keyMapArray = keys.unix;

            break;
        case WINDOWS_OS:
            keyMapArray = keys.windows;

            break;
        default:
            break;
    }

    return keyMapArray.map(item => item.keyCode);
}

/**
 * Gets the key code combination that matches the keys as a "+" separated string.
 * @param os the OS to use.
 * @param keys the key combination.
 * @return {String} keys as a "+" separated string, or an empty string.
 */
export function getKeyCodeCombinationString(os, keys = defaultKeys) {
    let keyMapArray = [];

    switch (os) {
        case OSX_OS:
            keyMapArray = keys.mac;

            break;
        case UNIX_OS:
            keyMapArray = keys.unix;

            break;
        case WINDOWS_OS:
            keyMapArray = keys.windows;

            break;
        default:
            break;
    }

    return keyMapArray.map(item => item.keyChar)
        .join('+');
}

/**
 * Gets the service that matches the url of a service.
 * @param url the url to test.
 * @return {Object} a service or null if the url does not match a service.
 */
export function getService(url = '') {
    let service = null;

    if (url.indexOf(GoogleMusicService.url) > -1) {
        service = new GoogleMusicService();
    }

    if (url.indexOf(GroovesharkService.url) > -1) {
        service = new GroovesharkService();
    }

    if (url.indexOf(SoundCloudService.url) > -1) {
        service = new SoundCloudService();
    }

    if (url.indexOf(SpotifyService.url) > -1) {
        service = new SpotifyService();
    }

    if (url.indexOf(YouTubeService.url) > -1) {
        service = new YouTubeService();
    }

    return service;
}
