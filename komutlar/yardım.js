const Discord = require("discord.js");
exports.run = (client, message) => {
  const motionEmbed = new Discord.MessageEmbed()

    .setAuthor(`${client.user.username} `, client.user.avatarURL)
    .setColor("RED")
    .setThumbnail(
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F779826491710031718%2F&psig=AOvVaw2xBkp1fh3SIroxGJNexkUt&ust=1619991227238000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLCjpt-3qfACFQAAAAAdAAAAABAD"
    )
    .setDescription(
      `Toplamda Botta **${client.commands.size}** Adet Komut Bulunuyor!` +
        "\n\n `m!botbilgi`= **Yazarak Botun İstatistiklerine Ulaşa Bilirsiniz.** \n `m!davet`= **Yazarak Botun Davet Linkini Alırsınız. \n `m!oyver`= Botumuza Oy verebilirsin**"
    )
    .addField(
      `:boom:➤ Komutlar`,
      `
 
:white_small_square: | **m!eğlence:** Eğlence Menüsüne Bakarsınız.
:white_small_square: | **m!moderasyon:** Botun Moderasyon Komutlarına Bakarsınız
:white_small_square: | **m!logomenü:** Botun Logo YAPMA Komutlarına Bakarsınız.


`)



    .addField(
      ` :boom: Bilgilendirme`,
      `
:white_small_square: | **mays Bot Her Gün Güncelleniyor!**.
:white_small_square: | **Botu Ekleyerek Bize Destek Çıkmış Olursunuz.** `
    )
  
  .addField(
      `**:boom:➤ Bağlantılar  **`,
      `>  » [Destek Sunucusu](https://discord.gg/74MZyfZ24d) \n >  » [Botun Davet Linki](https://discord.com/api/oauth2/authorize?client_id=791609110658547782&permissions=8&scope=bot) \n > » [Oy Verebilirsiniz](https://top.gg/bot/791609110658547782/vote) `
    )
    .setFooter(
      `
${message.author.username} Tarafından İstendi.`,
      message.author.avatarURL
    );
  return message.channel.send(motionEmbed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["h"],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: ".",
  usage: "yardım"
};
