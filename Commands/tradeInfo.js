const { Command } = require('discord-akairo');


class tradeInfo extends Command {
    constructor(){
        super('tradeInfo', {
            aliases: ['tradeInfo']
        })
    }

    async exec(message){
        return message.reply('Noob')
    }
} 

module.exports = tradeInfo;