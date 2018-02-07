# Plauser

A Chrome extension that allows you to play/pause your current playing track from any tab.

Plauser supports the following music services:

* Google Music
* Spotify
* YouTube
* Grooveshark
* SoundCloud
* ...more coming soon!

## Table Of Contents

* [Installation](#installation)
* [Development](#development)
* [Testing](#testing)
* [Credits](#credits)

## Installation

In order to get started, you will need: 

* Install [Yarn](https://yarnpkg.com).

## Development

1. Install the dependencies using `yarn install`
2. Run `yarn start`
3. Navigate to [chrome://extensions](chrome://extensions)
4. Press **Load unpacked extension...** and point to the `/dist` directory.

The develop build supports hot reloading, so any changes will automatically reload the extension.

## Testing

### Unit testing

Unit testing is performed using:

* [Mocha](https://mochajs.org/) for running the tests.
* [Chai](http://chaijs.com/) for assertions.
* [Sinon](http://sinonjs.org/) for spys, stubs and mocking.
* [Istanbul](https://istanbul.js.org/) for test coverage.

To run the unit tests simply run:
```bash
yarn test
```
Once the tests have been completed, coverage reports will be added to a `/coverage` directory.

## Credits

* Some due credit to Suan-Aik Yeo and his [jquery-keycombinator][keycombinator].
* For an excellent jQuery plugin, thanks to CodeSeven's [toastr][toastr]

[keycombinator]: https://github.com/suan/jquery-keycombinator
[toastr]: https://github.com/CodeSeven/toastr
