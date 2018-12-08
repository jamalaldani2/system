const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "W";

 client.on('message', async message => {
  if(message.content.startsWith(prefix + "طلب")) {
    await message.channel.send("**ماذا تريد:small_orange_diamond:**").then(e => {
    let filter = m => m.author.id === message.author.id
    let lan = '';
    let md = '';
    let br = '';
    let chaLan = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
    .then(collected => {
      lan = collected.first().content
      collected.first().delete()
e.delete();
     message.channel.send('**كم تدفع :small_blue_diamond:**').then(m => {
let chaMd = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
.then(co => {
  md = co.first().content
        co.first().delete()
        m.delete();
message.channel.send('**من الذي تشتري منه:shopping_cart:**').then(ms => {
let br = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
.then(col => {
  br = col.first().content
        col.first().delete()
 
ms.delete()
 
 message.channel.send('** انتظر..**').then(b => {
        setTimeout(() => {
  b.edit(`**تم التقديم وسيتم الرد فـ اقرب وقت:white_check_mark:**`)
        },2000);
var gg = message.guild.channels.find('name','طلب')
if(!gg) return;
if(gg) {
gg.send({embed : new Discord.RichEmbed()
.setDescription(`**ماذا تريد:scroll: » \n ${lan}\nكم تدفع :moneybag: » \n ${md} \n من الذي تشتري منه :round_pushpin: » \n ${br}  \n تم التقديم بوسطة :top: » <@${message.author.id}> **`)  
          .setFooter(`Rqmi,System Team♥`)
.setTimestamp()
});
}        
})
})
})
})
})
})
})
 }
})






client.login(process.env.BOT_TOKEN);
