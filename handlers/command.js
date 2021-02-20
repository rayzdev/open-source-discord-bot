const { greenBright, green } = require("chalk");
const { readdirSync } = require("fs");
module.exports = (client) => {
    readdirSync("./commands/").map(dir => {
       const commands = readdirSync(`./commands/${dir}/`).map(cmd=>{
           let pull = require(`../commands/${dir}/${cmd}`)
           console.log(greenBright(`[COMMAND] Loaded ${pull.name}.js`))
           client.commands.set(pull.name,pull)
           if (pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => client.commands.set(alias, pull));
       })
    })
}