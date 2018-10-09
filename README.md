# @allex/crc32

Provide pure JS CRC32 for nodejs & browser. Supports string, Buffer, ArrayBuffer, Uint8Array

## Usage

```sh
yarn add @allex/crc32 -D
```

```js
import { crc32 } from '@allex/crc32'

const testBinaryFile = path.resolve(__dirname, 'files', 'me.png')
const arrayBuffer = fs.readFileSync(testBinaryFile);

describe('use pure js crc32.js to test', () => {
  test('crc32() with string, arraybuffer', () => {
    expect(crc32('allex')).toBe('1419b5f3');
    expect(crc32(arrayBuffer)).toBe('79c38e61');
  });
});
```

## License

[MIT](http://opensource.org/licenses/MIT)

