const Discord = require('discord.js')
const fetch = require('node-fetch')

module.exports = {
    name: "github",
    description: "shows information about searched github user",
    aliases: ["github-search"],
    timeout: 1,
    category: "info",
    usage: "[ command | github-user]",
    run: async(client, message, args) => {
        const name = args.join(" ")
        if(!name) return message.channel.send(new Discord.MessageEmbed()
        .setTitle("Invalid Usage")
        .setDescription(`Provide a (valid) user to search.`)
        .setColor("RED")
        .setTimestamp()
        .setFooter("developed by rayz#4986", "https://imgur.com/UnVOl7V.png"))

        const url = `https://api.github.com/users/${name}`

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

        message.channel.send(new Discord.MessageEmbed()
        .setTitle(response.login ? response.login : "This user does not exist")
        .setURL(response.html_url)
        .addField("Public Repositories:", response.public_repos ? response.public_repos : "No Public Repositories")
        .addField("Followers:", response.followers ? response.followers : "0")
        .addField("Following:", response.following ? response.following : "0")
        .addField("Email:", response.email ? response.email : "No Email")
        .addField("Company:", response.company ? response.company : "No Company")
        .addField("Location:", response.location ? response.location : "No Location")
        .addField("Avatar:", `https://github.com/${name}.png`)
        .setColor("BLACK"))
    }
}