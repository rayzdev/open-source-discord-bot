const axios = require('axios')
const Discord = require('discord.js')

module.exports = {
    name: "djs",
    description: "searches the discord.js docs",
    aliases: ["docs"],
    timeout: 1,
    category: "info",
    usage: "[ command | query ]",
    run: async(client, message, args) => {
        const query = args.join(" ")
        if(!query) return message.channel.send(new Discord.MessageEmbed()
        .setTitle("Invalid Usage")
        .setDescription(`You need to specify what you want to search.`)
        .setColor("RED")
        .setTimestamp()
        .setFooter("developed by rayz#4986", "https://imgur.com/UnVOl7V.png"))

        const url = `https://djsdocs.sorta.moe/v2/embed?src=stable&q=${encodeURIComponent(query)}`;

        axios.get(url).then(({ data }) => {
            if(data) {
                message.channel.send({ embed: data })
            }
        })
    }
}