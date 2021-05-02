const Discord = require ("discord.js");

exports.run = (client, message) => {
const lembed = new Discord.MessageEmbed()

.then;   
const mhelp = new Discord.MessageEmbed()
.setColor("BLACK")
.setAuthor(`${client.user.username} `, client.user.avatarURL)  
.setTitle("<a:online:838451914412392548> Kızılay V12 MODERASYON")
.setThumbnail("https://cdn.discordapp.com/attachments/838192890898677763/838461528109613096/kzlay..png")
    .setDescription(`
╔═════════════════════════════
║   <a:dorulama:838451913988112394>     ** MODERASYON KOMUTLARI **
║   <a:hypeshiny:838451913724264500>  k.ban    Sunucudan bir üyeyi yasaklar.
║   <a:hypeshiny:838451913724264500>  k.unban  İstediğiniz kişinin banını kaldırır.
║   <a:hypeshiny:838451913724264500>  k.kick   Sunucudan bir üye kickler.
║   <a:hypeshiny:838451913724264500>  k.jail   Kişiyi jaile yollar.
║   <a:hypeshiny:838451913724264500>  k.yetkilerim  Yetkilerini gösterir.
║═════════════════════════════
║  <a:dorulama:838451913988112394>       ** SOHBET KOMUTLARI **
║  <a:hypeshiny:838451913724264500> k.afk            AFK kalırsınız 
║  <a:hypeshiny:838451913724264500> k.sil            Belirli bir kanaldaki mesajları siler.
║  <a:hypeshiny:838451913724264500> k.sohbet-kapat   Sohbeti Kapatır
║  <a:hypeshiny:838451913724264500> k.sohbet-aç      Sohbeti Açar ve yazı yazılabilir.
║  <a:hypeshiny:838451913724264500> k.nuke           Kanalı kapatır,mesajları siler.
║  <a:hypeshiny:838451913724264500> k.mute           Kişiye chat/voice mute atılır.
║═════════════════════════════
║   <a:dorulama:838451913988112394>       ** SESLİ KOMUTLARI **
║   <a:hypeshiny:838451913724264500> k.git          Kişi onay verirse odasına gidersiniz.
║   <a:hypeshiny:838451913724264500> k.çek          Kişi onay verirse odanıza gelir.
║   <a:hypeshiny:838451913724264500> k.mute         Kişiye chat/voice mute atılır.
╚═════════════════════════════
`) 
       .addField(`» Kızılay Her gün Gellişiyor.`, `**[Destek Sunucusu](https://discord.gg/EkjJJes5)**`)
.setImage("https://cdn.discordapp.com/attachments/838192890898677763/838471697559453807/350kb_1.gif")
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.avatarURL)
message.channel.send(mhelp)
.then; const sembed = new Discord.MessageEmbed()

}; 
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: ["yardım"], 
    permLevel: 0 
  };
 
  exports.help = {
    name: 'yardım', 
    description: '',
    usage: ''
  };