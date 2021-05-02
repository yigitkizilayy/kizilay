const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Kızılay v12 sürümüyle sizlerle")
.setTitle(" ➤Kızılay Eğlence komutları" )
 .setTimestamp()
.setDescription(" **k.tersyazı** = Bir Yazıyı Bot Ters Yazar. < \n  **k.mcskin** = Yazdığınız ismin minecraft görünüşünü atar.  \n  **k.fbi** = Bot FBi Gif Atar. \n **k.token** = Tokenimi Öğrenmek İstemezmisin?  \n  **k.düello** = Düello Atarsın.  \n  **k.wasted** = Polis tarafından yakalanırsın.  \n  **k.atatürk** = Dene ve gör... (1881-1938) \n **k.ara155** = Polisi Arar \n **k.zar-at** = zar atar \n **k.yazı-tura** = yazı yada tura atar hangisi tutarsan kazanırsın \n **k.1v1** = Arkadaşınla 1v1 at\ n **k.mcskin** = ismini yazdığınız skini gösterir")
.setImage("https://cdn.discordapp.com/attachments/838192890898677763/838248701788160020/kzlay_eglencemenu.png")
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'eğlence',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!eğlence'
}