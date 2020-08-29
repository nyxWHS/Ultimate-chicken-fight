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
        message.reply(`Você tirou ${dice} no dado. Você atacou ${getUser(message)}`)
    else
        message.reply(`Você tirou ${dice} no dado. Você errou o ataque`)
}

const defend = (message) => {
    const dice = roolDice()

    if(dice >= 5)
        message.reply(`Você tirou ${dice} no dado. Você defendeu o ataque de ${getUser(message)}`) 
    else
        message.reply(`Você tirou ${dice} no dado. Sua defesa é um desastre. ${getUser(message)} atacou você`)
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
