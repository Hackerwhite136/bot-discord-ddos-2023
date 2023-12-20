const db = require('../../database');
module.exports = {
    name: 'prefix', 
    category: 'Info',
    run: async (client, message, args, serverData) => {
        if (!interaction.member.permissions.has('ADMINISTRATOR')) return interaction.reply('Bạn không có quyền để dùng lệnh này!');
        if (!args[0]) return message.channel.send(`Prefix hiện tại của bot là: ${serverData.prefix}`);
        await db.set(message.guildId, {...serverData, prefix: args[0].toLowerCase() });
        message.reply(`✅ | Đã đổi prefix thành công!`);
    }
}