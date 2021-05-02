const Discord = require("discord.js");

exports.run = (client, message) => {
  const lembed = new Discord.MessageEmbed().then;
  const mhelp = new Discord.MessageEmbed()
    .setColor("BLACK")
    .setAuthor(`${client.user.username} `, client.user.avatarURL)
    .setTitle("Kızılay Beta V12 MODERASYON")
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/838192890898677763/838404558576287764/350kb.gif"
    )
    .setDescription(
      `


╔═════════════════════════════════════╗
║       ** MODERASYON KOMUTLARI **
║   <a:ok2:838449685697134592> k.ban   Sunucudan bir üyeyi yasaklar.
║   <a:ok2:838449685697134592> k.unban İstediğiniz kişinin banını kaldırır.
║   <a:ok2:838449685697134592> k.kick  Sunucudan bir üye kickler.
║   <a:ok2:838449685697134592> k.jail  Kişiyi jaile yollar.
║   <a:ok2:838449685697134592> k.yetkilerim  Yetkilerini gösterir.
║   <a:ok2:838449685697134592> k.çağır  Bot sahibini çağrır.
║══════════════════════════════════════
║        ** SOHBET KOMUTLARI **
║   <a:ok2:838449685697134592>  k.afk            AFK kalırsınız etiketlendiğinizde sebebi yazar.
║   <a:ok2:838449685697134592>  k.sil            Belirli bir kanaldaki mesajları siler.
║   <a:ok2:838449685697134592> k.sohbet-kapat   Sohbeti Kapatır ve yazı yazılamaz.
║    k.sohbet-aç      Sohbeti Açar ve yazı yazılabilir.
║    k.nuke           Kanalı kapatır,mesajları siler ve tekrardan açar.
║    k.mute           Kişiye chat/voice mute atılır.
║══════════════════════════════════════
║              ** SESLİ KOMUTLARI **
║   k.git          Kişi onay verirse odasına gidersiniz.
║   k.çek          Kişi onay verirse odanıza gelir.
║   k.mute         Kişiye chat/voice mute atılır.
╚═════════════════════════════════════╝
`
    )
    .addField(
      `» Kızılay Beta V12 MODERASYON`,
      `**[Destek Sunucusu](https://discord.gg/8S5Em5dUXY)**`
    )
    .setFooter(
      `${message.author.username} Tarafından İstendi.`,
      message.author.avatarURL
    );
  message.channel.send(mhelp).then;
  const sembed = new Discord.MessageEmbed();
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yardım"],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: "",
  usage: ""
};
