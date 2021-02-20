const { Random } = require('something-random-on-discord')
const random = new Random();

module.exports = {
    name: "advice",
    description: "tells you a random advice",
    aliases: [" "],
    timeout: 1,
    category: "fun",
    usage: "[ command ]",
    run: async(client, message, args) => {
        let data = await random.getAdvice()

        message.channel.send(data)
    }
}