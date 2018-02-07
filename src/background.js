import { xor } from 'lodash/array';

// Constants.
import { KEY_COMBINATION_PRESSED_MESSAGE } from './constants/messages';

// Utilities.
import { getCurrentOS, getKeyCodeCombinationArray, getService } from './utilities/ApplicationUtil';

/**
 * Iterates through the tabs and plauses the tab if it the url is valid.
 */
function queryTabsAndPlause() {
    window.chrome.tabs.query({}, tabs => {
        tabs.forEach(tab => {
            const service = getService(tab.url);

            if (service) {
                service.plause(tab.id);
            }
        });
    });
}

/**
 * Listener for when the user clicks the plauser browser button.
 */
window.chrome.browserAction.onClicked.addListener(queryTabsAndPlause);

/**
 * This is called when a key combination is detected matching the
 * key combination stored
 */
window.chrome.runtime.onMessage.addListener(request => {
    let keyCodeArray;

    if (request.name === KEY_COMBINATION_PRESSED_MESSAGE) {
        chrome.storage.sync.get({ keys: {} }, items => {
            keyCodeArray = getKeyCodeCombinationArray(getCurrentOS(), items.keys);

            // If the stored key combination matches the key combination
            // pressed, then plause.
            if (xor(keyCodeArray, request.keys).length > 0) {
                queryTabsAndPlause();
            }
        });
    }
});
