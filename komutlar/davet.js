const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  const embed = new Discord.MessageEmbed()
    .setTitle("Davet Linkim Bu.")
  
    .setImage(
      "https://cdn.discordapp.com/attachments/838192890898677763/838404558576287764/350kb.gif"
    )
    .setColor(0xff0000)
    .setDescription(
      `https://discord.com/api/oauth2/authorize?client_id=837858580799422485&permissions=0&scope=bot`
    )
    .setFooter("2021 Kızılay Müzik Botu ®");
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
  description: "Botu davet edersin",
  usage: "davet"
};
