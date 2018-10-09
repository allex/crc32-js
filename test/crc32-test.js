const path = require('path');
const fs = require('fs');
const crc32 = require('../').crc32;

const testBinaryFile = path.resolve(__dirname, 'files', 'me.png')
const arrayBuffer = fs.readFileSync(testBinaryFile);

describe('use pure js crc32.js to test', () => {
  test('crc32() with string, arraybuffer', () => {
    expect(crc32('allex')).toBe(337229299);
    expect(crc32(arrayBuffer, 'hex')).toBe('79c38e61');
  });
});
