/**
 * Mock Chrome SDK.
 */
export default {
    browserAction: {
        onClicked: {
            addEventListener: stub()
        }
    },

    runtime: {
        onMessage: {
            addEventListener: stub()
        },

        sendMessage: stub()
    },

    tabs: {
        executeScript: stub(),
        query: stub()
    }
};
