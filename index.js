const { Client, Collection } = require('discord.js');
const { token, prefix } = require('./config.json');
const ms = require('ms')
const client = new Client({disableEveryone: true}, { partials: ["MESSAGE", "CHANNEL", "REACTION" ]});
const fs = require('fs');
const { blueBright } = require('chalk');

// COLLECTIONS
const Timeout = new Collection();
client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./commands/");
["command"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});

// READY EVENT
client.on('ready', () => {
  client.user.setActivity("some conversations", { type: "LISTENING"})
  console.log("===========================================")
  console.log(blueBright(`[CLIENT] Connected to ${client.user.tag}`))
 
});

// MESSAGE EVENT
client.on('message', async message => {
    if(message.author.bot) return;

    if(!message.content.startsWith(prefix)) return;
    if(!message.guild) return;
    if(!message.member) message.member = await message.guild.fetchMember(message);

    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    let cmd = args.shift().toLowerCase();
    if(cmd.length == 0 ) return;
    if(cmd.aliases == 0 ) return;
    let command = client.commands.get(cmd);
    if(!command) return;
    if(command) {
      if(command.timeout) {
          if(Timeout.has(`${command.name}${message.author.id}`)) return message.channel.send(`:x: You are on a \`${ms(Timeout.get(`${command.name}${message.author.id}`) - Date.now(), {long : true})}\` cooldown.`)
          command.run(client, message, args)
          Timeout.set(`${command.name}${message.author.id}`, Date.now() + command.timeout)
          setTimeout(() => {
              Timeout.delete(`${command.name}${message.author.id}`)
          }, command.timeout)
      }
  }

  })

// CLIENT LOGIN
client.login(token);