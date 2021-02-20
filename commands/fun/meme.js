const Discord = require('discord.js')
const fetch = require('node-fetch')

module.exports = {
    name: "meme",
    description: "shows a random meme",
    aliases: [" "],
    timeout: 1,
    category: "fun",
    usage: "[ command ]",
    run: async(client, message, args) => {
        fetch('https://meme-api.herokuapp.com/gimme')
            .then(res => res.json())
            .then(async json => {
                message.channel.send(new Discord.MessageEmbed()
                .setTitle(json.title)
                .setImage(json.url)
                .setFooter(`Link: ${json.postLink} | Subreddit: r/${json.subreddit}`))
            })
    }
}