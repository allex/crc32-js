const path = require('path');
const fs = require('fs');
const crc32 = require('../').crc32;

const testBinaryFile = path.resolve(__dirname, 'files', 'me.png')
const arrayBuffer = fs.readFileSync(testBinaryFile);

describe('use pure js crc32.js to test', () => {
  test('crc32() with string, arraybuffer', () => {
    expect(crc32('allex')).toBe('1419b5f3');
    expect(crc32(arrayBuffer)).toBe('79c38e61');
  });
});
