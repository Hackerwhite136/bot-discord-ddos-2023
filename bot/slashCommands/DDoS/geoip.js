const { MessageEmbed } = require('discord.js');
const axios = require("axios");

module.exports = {
    name: 'geoip',
    description: 'Xem thông tin trang Web',
    type: 'CHAT_INPUT',
    options: [
    {
      name: "host",
      description: "Địa chỉ Web",
      required: true,
      type: "STRING",
    },
  ],

  run: async (client, interaction) => {
      const host = interaction.options.getString("host")

        // good IP
        axios
          .get(`http://ip-api.com/json/${host}`)
          .then((response) => {
            const data = response.data;
            interaction.reply(
              "```" +
                `IP: ${data.query}\nQuốc gia: ${data.country}, ${data.countryCode}\nVùng: ${data.regionName}, ${data.region}\nThành phố: ${data.city}\nISP: ${data.isp}\nTổ chức: ${data.org}\nASN: ${data.as}` +
                "```"
            );
          })
          .catch((error) => {
            console.log(error);
            interaction.reply("Đã sảy ra lỗi!");
          });
      } 
}