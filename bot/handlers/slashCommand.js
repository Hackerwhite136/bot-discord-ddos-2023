const { readdirSync } = require('fs');
const slashCommands = [];
const ayarlar = require('../ayarlar.json');
var guildID = ayarlar.guildID;

module.exports = (client) => {
    let count = 0;
    readdirSync('./slashCommands').forEach(dir => {
        const commands = readdirSync(`./slashCommands/${dir}/`).filter(file => file.endsWith('.js'));
        for (const file of commands) {
            const pull = require(`../slashCommands/${dir}/${file}`);
            if (pull.name) {
                client.interactions.set(pull.name, pull);
                slashCommands.push(pull);
                count++;
            } else {
                continue;
            }
        }
    });

    client.once('ready', async () =>{
        await client.guilds.cache.get(guildID).commands.set(slashCommands);
        // await client.application.commands.set(slashCommands);
    });
    
    console.log(`Đã tải ${count} lệnh Slash!`);
}