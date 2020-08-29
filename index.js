const Discord = require("discord.js")
const config = require("./config.json")


//defining variables
const prefix = "$"


// declaring function
const getUser = (message) => message.mentions.users.last().username
const roolDice = () => Math.floor(Math.random() * 6 + 1)

const checkMessage = (message) => {
    if (message.author.bot) return true
    if (!message.content.startsWith(prefix)) return true
}

const punch = (message) => {
    const dice = roolDice()
    if(dice >= 3)
        message.reply(`You scored ${dice} on the dice.You punched ${getUser(message)}`)
    else
        message.reply(`You scored ${dice} on the dice. FAIL`)
}

const defend = (message) => {
    const dice = roolDice()

    if(dice >= 5)
        message.reply(`You scored ${dice} on the dice. You defend ${getUser(message)} atack`) 
    else
        message.reply(`You scored ${dice} on the dice. ${getUser(message)} punched you.`)
}

const botActions = (message) => {
    if(checkMessage(message)) return

    const commandBody = message.content.slice(prefix.length)
    const arguments = commandBody.split(" ")
    const command = arguments.shift().toLowerCase()

    if (command === "bater" || command === "punch") punch(message)
    if (command === "defender" || command === "defend") defend(message)
}


// Bot config
const client = new Discord.Client()

client.on("message", botActions)

client.login(config.BOT_TOKEN)
console.log("Online...")
