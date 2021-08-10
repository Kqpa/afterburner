const { Command } = require('discord-akairo');
const fetch = require('node-fetch'); // Used to get data

class tradeInfo extends Command {
    constructor(){
        super('tradeInfo', {
            aliases: ['tradeInfo']
        })
    }

    async exec(message){
        let options = message.cleanContent.split(' ');
        options.shift();
        console.log(options)
        return message.reply(`Hello ${message.author.username}`)  // TODO: handle the API (embed the trade) 
        // quick test of discordjs api dw
    }
}

module.exports = tradeInfo;