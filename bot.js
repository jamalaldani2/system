const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "W";


client.on ("guildMemberAdd", member => {
  
   var role = member.guild.roles.find ("name", "Member's |√ ");
   member.addRole (role);
  
})

client.on ("guildMemberRemove", member => {
   
})



client.login(process.env.BOT_TOKEN);
