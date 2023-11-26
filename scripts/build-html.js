'use strict';
const upath = require('upath');
const sh = require('shelljs');
const renderHtml = require('./render-html');

const srcPath = upath.resolve(upath.dirname(__filename), '../src');

sh.find(srcPath).forEach(_processFile);

function _processFile(filePath) {
    if (
        filePath.match(/\.html$/)
        && !filePath.match(/include/)
        && !filePath.match(/mixin/)
        && !filePath.match(/\/html\/layouts\//)
    ) {
        renderHtml(filePath);
    }
}