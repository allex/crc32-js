/**
 * Provide pure JS CRC32
 *
 * @author Allex Wang (allex.wxn@gmail.com) <http://fedor.io/>
 * MIT Licensed
 */

const crc32b = (function() {
  const table = new Uint32Array(256);

  for (let i = 256; i--;) {
    let c = i;

    for (let k = 8; k--;) {
      c = c & 1 ? 0xEDB88320 ^ c >>> 1 : c >>> 1;
    }

    table[i] = c;
  }

  // crc32b
  return (data: any): number => {
    let crc = -1;
    if (typeof data === 'string') {
      data = (function(d) {
        const l = d.length, data = new Array(l)
        for (var i = -1; ++i < l; ) data[i] = d.charCodeAt(i)
        return data
      })(data)
    }
    for (let i = 0, l = data.length; i < l; i++) {
      crc = crc >>> 8 ^ table[(crc & 0xFF ^ data[i])];
    }
    return (crc ^ -1) >>> 0; // Apply binary NOT
  };

})();

const hex = (what: number): string => {
  if (what < 0)
    what = 0xFFFFFFFF + what + 1;
  return ('0000000' + what.toString(16)).slice(-8);
}

const crc32 = (data: string | ArrayBuffer): string => hex(crc32b(data))

export { crc32, hex }
