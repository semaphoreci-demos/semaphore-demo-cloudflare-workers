const assert = require('assert');
const Cloudworker = require('@dollarshaveclub/cloudworker');
const workerScript = (require('fs').readFileSync('hello.js','utf8'));

describe('Worker Test', function() {
    it('Response with a body that says hello', async function() {
        var req = new Cloudworker.Request('https://example.com');
        var ws = new Cloudworker(workerScript);
        var res = await ws.dispatch(req);
        var body = await res.text();
        assert.equal(body,'Hello World!');
    });
});
