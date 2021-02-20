const Discord = require('discord.js')
const fetch = require('node-fetch')

module.exports = {
    name: "wiki",
    description: "searches something on wikipedia",
    aliases: ["wikipedia", "wikisearch"],
    timeout: 1,
    category: "info",
    usage: "[ command | query ]",
    run: async(client, message, args) => {
        const wiki = args.slice().join(" ")
        if(!wiki) return message.channel.send(new Discord.MessageEmbed()
        .setTitle("Invalid Usage")
        .setDescription(`You need to specify what you want to search.`)
        .setColor("RED")
        .setTimestamp()
        .setFooter("developed by rayz#4986", "https://imgur.com/UnVOl7V.png"))
        
        const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(wiki)}`

        let response
        try {
            response = await fetch(url).then(res => res.json())
        }
        catch (e) {
            return message.channel.send(new Discord.MessageEmbed()
            .setTitle("Error!")
            .setDescription(`Something went wrong, please try again.`)
            .setColor("RED")
            .setTimestamp()
            .setFooter("developed by rayz#4986", "https://imgur.com/UnVOl7V.png"))
        }

        try {
            if(response.type === 'disambiguation') {
                message.channel.send(new Discord.MessageEmbed()
                .setTitle(response.title)
                .setURL(response.content_urls.desktop.page)
                .setDescription([`
                ${response.extract}
                Links for Topic you searched [LINK](${response.content_urls.desktop.page}).`])
                .setColor("BLACK"))
            }
            else {
                message.channel.send(new Discord.MessageEmbed()
                .setTitle(response.title)
                .setThumbnail(response.thumbnail.source)
                .setURL(response.content_urls.desktop.page)
                .setDescription(response.extract)
                .setColor("BLACK"))
            }
        }
        catch {
            return message.channel.send(new Discord.MessageEmbed()
            .setTitle("Error!")
            .setDescription(`Provide a valid query to search.`)
            .setColor("RED")
            .setTimestamp()
            .setFooter("developed by rayz#4986", "https://imgur.com/UnVOl7V.png"))
        }
    }
}
