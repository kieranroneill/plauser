/**
 * the base service.
 */
export default class BaseService {
    constructor() {
        this._contentScript = null;
    }

    plause(tabId) {
        if (window.chrome && tabId && this._contentScript) {
            window.chrome.tabs.executeScript(tabId, { code: this._contentScript });
        }
    }
}
