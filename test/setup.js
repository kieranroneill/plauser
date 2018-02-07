import { expect } from 'chai';
import { assert, match, mock, spy, stub } from 'sinon';


// Helpers.
import { createDom } from './helpers';

const { window } = createDom();

// General globals.
global.assert = assert;
global.expect = expect;
global.match = match;
global.mock = mock;
global.spy = spy;
global.stub = stub;

// Client globals.
global.document = window.document;
global.navigator = {
    appName: 'Netscape',
    language: 'en',
    userAgent: 'node.js'
};
global.window = window;
