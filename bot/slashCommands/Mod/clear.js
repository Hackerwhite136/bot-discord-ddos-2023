const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'clear',
    description: 'Xóa tin nhắn',
    type: 'CHAT_INPUT',
    options: [
        {
            name: 'amount',
            description: 'Số lượng tin nhắn cần xóa',
            type: 'NUMBER',
            required: false,
        }
    ],
    run: async (client, interaction, args) => {
        if (!interaction.member.permissions.has('MANAGE_MESSAGES')) return interaction.reply('Bạn không có quyền để xóa tin nhắn!');
        const Amount = interaction.options.getNumber("amount");

        const Messages = await interaction.channel.messages.fetch();

        const Response = new MessageEmbed()
        .setColor('RANDOM')

            await interaction.channel.bulkDelete(Amount, true).then(messages =>{
                Response.setDescription(`🧹 Đã xóa \`${messages.size}\` tin nhắn!`);
                interaction.reply({ embeds: [Response] });
            })
        }
    }