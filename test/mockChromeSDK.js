/**
 * Mock Chrome SDK.
 */
export default {
    browserAction: {
        onClicked: {
            addEventListener: stub()
        }
    },

    tabs: {
        executeScript: stub(),
        query: stub()
    }
};
