const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "Kx";
client.on('message', message => {
var prefix = "Kx"
        if(message.content.startsWith(prefix + 'hypixel')) {
            let args = message.content.split(' ').slice(1).join(' ');
            if (!args) return message.channel.send("**رجأء ضع اسمك في ماين كرافت. ?**");
            var link = (`https://hypixel.net/player/${args}`);
            message.channel.send(link);
        }
    });








client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
