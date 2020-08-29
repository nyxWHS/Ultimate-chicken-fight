const Discord = require("discord.js")
const config = require("./config.json")


//defining variables
const prefix = "$"


// declaring function
const getUser = (array) => array[0]

const ping = (message) => {
    const timeTaken = Date.now() - message.createdTimestamp
    message.reply(`Pong! This message had a latency of ${timeTaken}ms.`)
}

const punch = (message, arguments) => message.reply(`you punch ${getUser(arguments)}`)

const botActions = (message) => {
    if (message.author.bot) return
    if (!message.content.startsWith(prefix)) return

    const commandBody = message.content.slice(prefix.length)
    const arguments = commandBody.split(" ")
    const command = arguments.shift().toLowerCase()

    if (command === "ping") ping(message)
    if (command === "punch") punch(message, arguments)
}


// Bot config
const client = new Discord.Client()

client.on("message", botActions)

client.login(config.BOT_TOKEN)
console.log("Online...")