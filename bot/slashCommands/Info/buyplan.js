const { MessageEmbed } = require('discord.js');
module['exports'] = {
    name: 'buyplan',
    description: 'Mua Plan DDoS',
    type: 'CHAT_INPUT',
    run: async (client, interaction) => {
        const embed = new MessageEmbed()
            .setTitle(`\`MUA PLAN DDOS DISCORD\``)
            .setDescription(`\n**[ 🔰 PLAN 🔰 ]**\n
                            \n📩 SMS : 30K/VINH VIEN\n
                            \n💮 SUPER : 90K/VINH VIEN\n
                            \n💠 MASTER : 119K/VINH VIEN\n
                            \n❄ VIP : 139K/VINH VIEN\n



`)
.setColor("RANDOM")
            .setFooter({ text: "© » My Xinkk" })
            .setTimestamp()
        interaction.reply({ embeds: [embed] });
    },
};
