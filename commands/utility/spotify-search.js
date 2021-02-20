const Discord = require('discord.js');

module.exports = {
    name: "spotify-search",
    description: "searchs a song on spotify",
    aliases: ["spotifysearch"],
    timeout: 1,
    category: "utility",
    usage: "[ command | name of the song you want to search ]",
    run: async(client, message, args) => {
        let msglink = args.join('%20')

        if(!args[0]) return message.channel.send(new Discord.MessageEmbed()
        .setTitle("Invalid Usage")
        .setDescription(`Please provide a song name that you want to search.`)
        .setColor("RED")
        .setTimestamp()
        .setFooter("developed by rayz#4986", "https://imgur.com/UnVOl7V.png"))

        message.channel.send(new Discord.MessageEmbed()
        .setColor("GREEN")
        .setDescription(`[Link to your Search](https://open.spotify.com/search/${msglink})`)
        .setTimestamp()
        .setFooter("developed by rayz#4986", "https://imgur.com/UnVOl7V.png"))
    }
}