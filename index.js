const Discord = require("discord.js")
const config = require("./config.json")


//defining variables
const prefix = "$"


// declaring function
const checkMessage = (message) => {
    if (message.author.bot) return true
    if (!message.content.startsWith(prefix)) return true
}

const getUser = (message) => message.mentions.users.last().username

const punch = (message) => message.reply(`You scored ${roolDice()} on the dice.You punched ${getUser(message)}`)

const roolDice = () => Math.floor(Math.random() * 6 + 1)

const botActions = (message) => {
    if(checkMessage(message)) return

    const commandBody = message.content.slice(prefix.length)
    const arguments = commandBody.split(" ")
    const command = arguments.shift().toLowerCase()

    if (command === "punch") punch(message)
}


// Bot config
const client = new Discord.Client()

client.on("message", botActions)

client.login(config.BOT_TOKEN)
console.log("Online...")
