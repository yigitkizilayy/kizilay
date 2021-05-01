const Discord = require("discord.js");
exports.run = (client, message) => {
  const motionEmbed = new Discord.MessageEmbed()

    .setAuthor(`${client.user.username} `, client.user.avatarURL)
    .setColor("RED")
    .setThumbnail(
      "https://im7.ezgif.com/tmp/ezgif-7-2484e616a2d9.gif"
    )
    .setDescription(
      `Toplamda Botta **${client.commands.size}** Adet Komut Bulunuyor!` +
        "\n\n `m!botbilgi`= **Yazarak Botun İstatistiklerine Ulaşa Bilirsiniz.** \n `m!davet`= **Yazarak Botun Davet Linkini Alırsınız. \n `m!oyver`= Botumuza Oy verebilirsin**"
    )
    .addField(
      `:boom:➤ Komutlar`,
      `
 
:gear: | **m!eğlence:** Eğlence Menüsüne Bakarsınız.
:gear: | **m!moderasyon:** Botun Moderasyon Komutlarına Bakarsınız
:gear: | **m!logomenü:** Botun Logo YAPMA Komutlarına Bakarsınız.


`)



    .addField(
      ` :boom: Bilgilendirme`,
      `
:gear: | **Kızılay Bot Her Gün Güncelleniyor!**.
:gear: | **Botu Ekleyerek Bize Destek Çıkmış Olursunuz.** `
    )
  
  .addField(
      `**:boom:➤ Bağlantılar  **`,
      `>  » [Destek Sunucusu](https://discord.gg/TbByFaEp) \n >  » [Botun Davet Linki](https://discord.com/api/oauth2/authorize?client_id=837858580799422485&permissions=0&scope=bot) \n > » [Oy Verebilirsiniz](https://top.gg/bot/791609110658547782/vote) `
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
