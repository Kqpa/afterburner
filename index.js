const { AkairoClient, CommandHandler } = require("discord-akairo");
const path = require("path");
const { Intents } = require("discord.js");
const IntentsFlags = [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES];

class Afterburner extends AkairoClient {
  constructor() {
    super({
      owners: [],
      intents: IntentsFlags,
    });

    const commandHandler = new CommandHandler(this, {
        directory: "./Commands/",
        prefix: "vis!"
    });

    commandHandler.loadAll();
  }

  
}

const client = new Afterburner();

client.on('ready', () => {
    console.log('Bot has been loaded.')
})

client.login("ODc0MTY1NDAxMDQ1NTgxODg0.YRC_-A.Rd6OtJfGV85ym2CV6qU48-nOa-0");
