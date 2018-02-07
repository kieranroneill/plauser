import { remove } from 'lodash/array';

// Constants.
import { KEY_COMBINATION_PRESSED_MESSAGE } from './constants/messages';

const keysPressedArray = [];

document.addEventListener('keydown', event => {
    // Add key to global array, if not present.
	if (keysPressedArray.indexOf(event.keyCode) < 0) {
        keysPressedArray.push(event.keyCode);
	}
});

document.addEventListener('keyup', () => {
    if (keysPressedArray.length > 0) {
        // Send a messsage to the background script.
        window.chrome.runtime.sendMessage({ name: KEY_COMBINATION_PRESSED_MESSAGE, keys: keysPressedArray });

        remove(keysPressedArray);
    }
});
