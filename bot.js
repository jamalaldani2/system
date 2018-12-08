const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "W";

client.on('message', async message => {
 
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;
 
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
  if (command == "warn") {
 
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
 
  if (message.mentions.users.size < 1) return message.reply("**???? ???**");
  if(!reason) return message.reply ("**???? ??? ?????**");
 
 
  if(!warns[user.id]) warns[user.id] = {
    warns: 0
  };
 
  warns[user.id].warns++;
 
  fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
    if (err) console.log(err)
  });
 
 
  const banembed = new Discord.RichEmbed()
  .setAuthor(`WARNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
   client.channels.find('name', 'log').send({
    embed : banembed
  })
 
    if(warns[user.id].warns == 2){
    let muterole = message.guild.roles.find(`name`, "Muted");
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "Muted",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
client.login(process.env.BOT_TOKEN);
