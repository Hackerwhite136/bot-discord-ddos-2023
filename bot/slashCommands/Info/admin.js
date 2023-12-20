const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'admin',
    description: 'Xem Info Admin',
    type: 'CHAT_INPUT',
    run: async (client, interaction) => {
        const embed = new MessageEmbed()
            .setTitle(`\`${client.user.username}'s admin\``)
            .setDescription(`\`\`\`ini\n[ 🔽 Name : Nguyễn Hùng Tuấn ]\n\`\`\`
                             \`\`\`ini\n[ 💍 Age : 15 ]\n\`\`\`                                               
                             \`\`\`ini\n[ 📱 Phone : update ]\n\`\`\`
                             \`\`\`ini\n[ 💒 City : Vĩnh Phúc ]\n\`\`\`
                             \`\`\`ini\n[ 👉 Hobbies : Listen to Music.. ]\n\`\`\`
                             \`\`\`ini\n[ ❤️ Baby Name : MY (XUAN) ]\n\`\`\`
                             \`\`\`ini\n[ 🔗 Facebook  : update ]\n\`\`\`
                             \`\`\`ini\n[ 🎧 Music  : [ Quen Voi Co Don ft De Cho Em Khoc ]\n\`\`\`



`)
            .setColor("RANDOM")
            .setFooter({ text: "© » MY XINK" })
            .setTimestamp()
        interaction.reply({ embeds: [embed] });
    },
};