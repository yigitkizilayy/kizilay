const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  const embed = new Discord.MessageEmbed()
    .setTitle("Senin İçin Hazırladım Buyur Davet Linkim!")
    .setImage(
      "https://static6.depositphotos.com/1001599/647/i/600/depositphotos_6477792-stock-photo-fire-letters-a-z.jpg"
    )
    .setColor(0xff0000)
    .setDescription(
      `https://discord.com/api/oauth2/authorize?client_id=837858580799422485&permissions=0&scope=bot`
    )
    .setFooter("2021 Kızılay Beta Eğlence ve Moderasyon Botu ®");
  message.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ping"],
  permLevel: 0
};

exports.help = {
  name: "davet",
  description: "Botun Pingine Bakarsın",
  usage: "davet"
};
