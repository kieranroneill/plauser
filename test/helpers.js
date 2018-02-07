import { JSDOM } from 'jsdom';

/**
 * Creates a JSDOM object.
 * @returns {JSDOM} a mocked DOM object.
 */
export function createDom() {
    const html = `
        <!DOCTYPE html>
        <html>
            <head></head>
            <body>
                <div id="app"></div>
            </body>
        </html>
    `;

    return new JSDOM(html);
}
