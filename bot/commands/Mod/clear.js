const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'clear',
    category: 'Mod',
    run: async (client, message, args) => {

        if (!message.member.permissions.has('MANAGE_MESSAGES')) return message.reply('Bạn không có quyền xóa tin nhắn!');
        if(!args[0]) return message.reply("Vui lòng nhập số tin nhắn cần xóa!");
        if(isNaN(args[0])) return message.reply("Số không hợp lệ!");

        if(args[0] > 100) return message.reply("Bạn không thể xóa hơn 100 tin nhắn!")
        if(args[0] <1) return message.reply("Bạn cần phải xóa ít nhất 1 tin nhắn!")

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages, true).then(messages =>{
                const embed1 = new MessageEmbed()
                    .setDescription(`🧹 Đã xóa \`${messages.size}\` tin nhắn!`);
                message.channel.send({ embeds: [embed1] });
            })
        });
    }
}