const Discord = require('discord.js');
const bot = new Discord.Client();



bot.on('ready', () =>{
    console.log(`
    
    - This Bot is Online.
    - Logged in ${bot.user.tag}.
    - All Codes Working
    
    `)
});


bot.on('message', message => {
    if (message.author.bot) return;
    if (message.content.startsWith(".s")) {
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('You dont have ADMINISTRATOR permission');
    var args = message.content.trim().split(/ +/g).slice(1);
    let cname = args[0];
    let chan = message.guild.channels.find(element => element.name === cname);
    if (chan) {
    let text = args.slice(1).join(" ");
    message.delete();
    chan.send(text);
    } else {
    let text = args.join(" ");
    message.delete();
    message.channel.send(text);
    }
    }
    });




bot.login(process.env.TOKEN)