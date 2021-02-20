const Discord = require('discord.js')
const { version, lastupdate } = require('../../config.json')

module.exports = {
    name: "clientinfo",
    description: "shows information about this bot",
    aliases: ["botinfo"],
    timeout: 1,
    category: "info",
    usage: "[ command ]",
    run: async(client, message, args) => {
        let days = Math.floor(client.uptime / 86400000);
        let hours = Math.floor(client.uptime / 3600000) % 24;
        let minutes = Math.floor(client.uptime / 60000) % 60;
        let seconds = Math.floor(client.uptime / 1000) % 60;

        message.channel.send(new Discord.MessageEmbed()
        .setAuthor(`Information about ${client.user.username}`, client.user.displayAvatarURL())
        .addFields({
            name: "Bot tag:",
            value: client.user.tag,
        }, {
            name: "Version:",
            value: version,
        }, {
            name: "Last Update:",
            value: lastupdate,
        }, {
            name: "Uptime:",
            value: `${days}d ${hours}h ${minutes}m ${seconds}s`
        },
        {
            name: "Server count:",
            value: client.guilds.cache.size,
        },
        {
            name: "Member count:",
            value: `${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`
        })
        .setColor("BLACK")
        .setTimestamp()
        .setFooter("developed by rayz#4986", "https://imgur.com/UnVOl7V.png"))
    }
}