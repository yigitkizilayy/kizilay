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
        "\n\n `k.botbilgi`= **Yazarak Botun İstatistiklerine Ulaşa Bilirsiniz.** \n `k.davet`= **Yazarak Botun Davet Linkini Alırsınız. \n `k.oyver`= Botumuza Oy verebilirsin**"
    )
    .addField(
      `:boom:➤ Komutlar`,
      `
 
:gear: | **k.eğlence:** Eğlence Menüsüne Bakarsınız.
:gear: | **k.moderasyon:** Botun Moderasyon Komutlarına Bakarsınız
:gear: | **k.logomenü:** Botun Logo YAPMA Komutlarına Bakarsınız.


`)



    .addField(
      ` :white_check_mark: Bilgilendirme`,
      `
:repeat: | **Kızılay Bot Her Gün Güncelleniyor!**.
:customs: | **Botu Ekleyerek Bize Destek Çıkmış Olursunuz.** `
    )
  
  .addField(
      `** :paperclips:➤ Bağlantılar  **`,
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
