var _0x9c59 = ["../database", "moment", "discord.js", "exports", "[", "YYYY-MM-DD HH:mm:ss", "format", "\x5D\x20\x42\x4F\x54\x3A\x20\x4B\xED\x63\x68\x20\x48\x6F\u1EA1\x74\x2C\x20\x4C\u1EC7\x6E\x68\x20\u0111\xE3\x20\x74\u1EA3\x69\x20\x74\x68\xE0\x6E\x68\x20\x63\xF4\x6E\x67\x21", "log", "\x5D\x20\x42\x4F\x54\x3A\x20\u0110\xE3\x20\x6B\u1EBF\x74\x20\x6E\u1ED1\x69\x20\x76\u1EDB\x69\x20\x74\xEA\x6E\x20", "username", "user", "!", "guildId", "get", ".", "prefix", "/help", "", "DREAMXV", "DREAMXV", "DREAMXV", "random", "length", "floor", "online", "PLAYING", "setPresence"];
const db = require(_0x9c59[0]);
const moment = require(_0x9c59[1]);
const {
    Collection
} = require(_0x9c59[2]);
module[_0x9c59[3]] = async (_0xa965x3, _0xa965x4) => {
    console[_0x9c59[8]](`${_0x9c59[4]}${moment()[_0x9c59[6]](_0x9c59[5])}${_0x9c59[7]}`);
    console[_0x9c59[8]](`${_0x9c59[4]}${moment()[_0x9c59[6]](_0x9c59[5])}${_0x9c59[9]}${_0xa965x3[_0x9c59[11]][_0x9c59[10]]}${_0x9c59[12]}`);
    const _0xa965x5 = await db[_0x9c59[14]](_0xa965x4[_0x9c59[13]]) || {
        prefix: _0x9c59[15]
    };
    const _0xa965x6 = _0xa965x5[_0x9c59[16]];
    let _0xa965x7 = [`${_0x9c59[17]}`, `${_0x9c59[18]}${_0xa965x6}${_0x9c59[19]}`, `${_0x9c59[20]}`, `${_0x9c59[21]}`];
    setInterval(function () {
        let _0xa965x8 = _0xa965x7[Math[_0x9c59[24]](Math[_0x9c59[22]]() * _0xa965x7[_0x9c59[23]])];
        _0xa965x3[_0x9c59[11]][_0x9c59[27]]({
            status: _0x9c59[25],
            activities: [{
                name: _0xa965x8,
                type: _0x9c59[26]
            }]
        })
    }, 10000)
}