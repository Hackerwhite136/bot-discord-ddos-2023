const { MessageEmbed } = require('discord.js');
const ayarlar = require('../../ayarlar.json');
var version = ayarlar.versionbot;
var img = ayarlar.img;
var roleID = ayarlar.roleID;

module.exports = {
    name: 'stop',
    description: 'Dừng cuộc tấn công',
    type: 'CHAT_INPUT',
    options: [
        {
            type: 'SUB_COMMAND',
            name: 'all',
            description: 'Dừng tất cả cuộc tấn công',
        },
    ],

  run: async (client, interaction) => {

    if (!interaction.member.permissions.has("ADMINISTRATOR"))
      return interaction.reply({
        embeds: [
          new MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`Bạn không có quyền để dùng lệnh này.`)
            .setFooter({ text: "© Developer: NguyenTuan", iconURL: img })
            .setTimestamp(),
        ],
      });

    if (interaction.options.getSubcommand() === 'all') {
        var exec = require('child_process').exec
                exec(`taskkill /f /im node.exe`, (error, stdout, stderr) => {
            });
            console.log('Dừng lại tất cả cuộc tấn công:' +  interaction.guild.id)
            const embed = new MessageEmbed()
                .setColor('RANDOM')
                .setTitle(version)
                .setDescription("```css\n[ ĐÃ DỪNG TẤT CẢ CUỘC TẤN CÔNG ]\n\```")
                .setFooter('© Developer: NguyenTuan', img)
                .setTimestamp()
            interaction.reply({ embeds: [embed] });
        }
    }
}