// Utilities.
import { getService } from './utilities/ApplicationUtil';

/**
 * Listener for when the user clicks the plauser browser button.
 */
window.chrome.browserAction.onClicked.addListener(() => {
    window.chrome.tabs.query({}, tabs => {
        tabs.forEach(tab => {
            const service = getService(tab.url);

            if (service) {
                service.plause(tab.id);
            }
        });
    });
});

/**
 * This is called when a key combination is detected matching the
 * key combination stored
 */
window.chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    // Get the current OS.
    OS.detectCurrentOS();

    if(request.name == "plauseWithKeys")
    {
        chrome.storage.sync.get(
            {
                keys: {}
            },
            function (items)
            {
                var storedKeyCodeArray = getKeyCodeCombinationArray(OS.current, items.keys);

                // If the stored key combination matches the key combination
                // pressed, then plause.
                if(storedKeyCodeArray.equals(request.keys))
                {
                    plause();
                }
            });
    }
});
