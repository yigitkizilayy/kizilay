const Discord = require("discord.js");

exports.run = (client, message) => {
  const lembed = new Discord.MessageEmbed().then;
  const mhelp = new Discord.MessageEmbed()
    .setColor("BLACK")
    .setAuthor(`${client.user.username} `, client.user.avatarURL)
    .setTitle("Kızılay Beta V12 MODERASYON")
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/838192890898677763/838248695908663316/kzlay_kullanc_menu.png"
    )
    .setDescription(
      `


╔═════════════════════════════════════╗
║   MODERASYON KOMUTLARI**
║ <afiber:_tikk:736610402376613959>  k.ban   Sunucudan bir üyeyi yasaklar.
║ <a:fiber_hype:817841600256278538>  k.unban İstediğiniz kişinin banını kaldırır.
║ <a:fiber_hype:817841600256278538>  k.kick  Sunucudan bir üye kickler.
║ <a:fiber_hype:817841600256278538>  k.jail  Kişiyi jaile yollar.
║══════════════════════════════════════
║ <a:fiber_hype:817841600256278538>   SOHBET KOMUTLARI
║ <a:fiber_hype:817841600256278538>   k.afk            AFK kalırsınız etiketlendiğinizde sebebi yazar.
║ <a:fiber_hype:817841600256278538>   k.sil            Belirli bir kanaldaki mesajları siler.
║ <a:fiber_hype:817841600256278538>  *k.sohbet-kapat** Sohbeti Kapatır ve yazı yazılamaz.
║ <a:fiber_hype:817841600256278538>  *k.sohbet-aç**    Sohbeti Açar ve yazı yazılabilir.
║ <a:fiber_hype:817841600256278538>  *k.nuke**         Kanalı kapatır,mesajları siler ve tekrardan açar.
║ <a:fiber_hype:817841600256278538>  *k.mute**         Kişiye chat/voice mute atılır.
║══════════════════════════════════════
║:white_check_mark:           SESLİ KOMUTLARI
║ :loud_sound: k.git          Kişi onay verirse odasına gidersiniz.
║ :loud_sound: k.çek          Kişi onay verirse odanıza gelir.
║:loud_sound:  k.mute         Kişiye chat/voice mute atılır.
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
