var _0xd9f9 = ["discord.js", "./ayarlar.json", "token", "mongodb", "GUILDS", "FLAGS", "GUILD_MESSAGES", "colors", "mongoose", "commands", "aliases", "categories", "interactions", "cooldowns", "./handlers/", "", "forEach", "command", "event", "slashCommand", "ready", "blue", " ███▄ ▄███▓ ██▓ ███▄    █  ██▓  █████▒██▓    ▓█████ ▒██   ██▒▄▄▄██▀▀▀▄▄▄    ██▒   █▓", "log", "▓██▒▀█▀ ██▒▓██▒ ██ ▀█   █ ▓██▒▓██   ▒▓██▒    ▓█   ▀ ▒▒ █ █ ▒░  ▒██  ▒████▄ ▓██░   █▒", "▓██    ▓██░▒██▒▓██  ▀█ ██▒▒██▒▒████ ░▒██░    ▒███   ░░  █   ░  ░██  ▒██  ▀█▄▓██  █▒░", "▒██    ▒██ ░██░▓██▒  ▐▌██▒░██░░▓█▒  ░▒██░    ▒▓█  ▄  ░ █ █ ▒▓██▄██▓ ░██▄▄▄▄██▒██ █░░", "▒██▒   ░██▒░██░▒██░   ▓██░░██░░▒█░   ░██████▒░▒████▒▒██▒ ▒██▒▓███▒   ▓█   ▓██▒▒▀█░  ", "░ ▒░   ░  ░░▓  ░ ▒░   ▒ ▒ ░▓   ▒ ░   ░ ▒░▓  ░░░ ▒░ ░▒▒ ░ ░▓ ░▒▓▒▒░   ▒▒   ▓▒█░░ ▐░  ", "░  ░      ░ ▒ ░░ ░░   ░ ▒░ ▒ ░ ░     ░ ░ ▒  ░ ░ ░  ░░░   ░▒ ░▒ ░▒░    ▒   ▒▒ ░░ ░░  ", "░      ░    ▒ ░   ░   ░ ░  ▒ ░ ░ ░     ░ ░      ░    ░    ░  ░ ░ ░    ░   ▒     ░░  ", "       ░    ░           ░  ░             ░  ░   ░  ░ ░    ░  ░   ░        ░  ░   ░  ", "                                                                                ░   ", "on", "connect", "then", "login"];
const {
    Client,
    Intents,
    Collection
} = require(_0xd9f9[0]);
const ayarlar = require(_0xd9f9[1]);
var token = ayarlar[_0xd9f9[2]];
var mongodb = ayarlar[_0xd9f9[3]];
const client = new Client({
    intents: [Intents[_0xd9f9[5]][_0xd9f9[4]], Intents[_0xd9f9[5]][_0xd9f9[6]]]
});
var colors = require(_0xd9f9[7]);
const mongoose = require(_0xd9f9[8]);
client[_0xd9f9[9]] = new Collection();
client[_0xd9f9[10]] = new Collection();
client[_0xd9f9[11]] = new Collection();
client[_0xd9f9[12]] = new Collection();
client[_0xd9f9[13]] = new Collection();
[_0xd9f9[17], _0xd9f9[18], _0xd9f9[19]][_0xd9f9[16]]((_0x4272x7) => {
    return require(`${_0xd9f9[14]}${_0x4272x7}${_0xd9f9[15]}`)(client)
});
client[_0xd9f9[33]](_0xd9f9[20], (_0x4272x8) => {
    console[_0xd9f9[23]](_0xd9f9[22][_0xd9f9[21]]);
    console[_0xd9f9[23]](_0xd9f9[24][_0xd9f9[21]]);
    console[_0xd9f9[23]](_0xd9f9[25][_0xd9f9[21]]);
    console[_0xd9f9[23]](_0xd9f9[26][_0xd9f9[21]]);
    console[_0xd9f9[23]](_0xd9f9[27][_0xd9f9[21]]);
    console[_0xd9f9[23]](_0xd9f9[28][_0xd9f9[21]]);
    console[_0xd9f9[23]](_0xd9f9[29][_0xd9f9[21]]);
    console[_0xd9f9[23]](_0xd9f9[30][_0xd9f9[21]]);
    console[_0xd9f9[23]](_0xd9f9[31][_0xd9f9[21]]);
    console[_0xd9f9[23]](_0xd9f9[32][_0xd9f9[21]])
});
client[_0xd9f9[36]](token)[_0xd9f9[35]](() => {
    return mongoose[_0xd9f9[34]](mongodb)
})