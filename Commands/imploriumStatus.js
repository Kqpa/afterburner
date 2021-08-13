const { Command } = require("discord-akairo");
const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch"); // Used to get data

class statusImp extends Command {
  constructor() {
    super("statusImp", {
      aliases: ["statusImp"],
    });
  }

  async exec(message) {
    let options = message.cleanContent.split(" ");
    options.shift();
    console.log(options);
    let now = Date.now();
    fetch("https://implorium.com")
      .then((response) => {
        let Ping = Date.now() - now;

        const Embed = new MessageEmbed()
          .setTitle("Implorium Status")
          .setColor("GREEN")
          .setDescription("Implorium is online!")
          .addField("Website Latency", `${Ping}ms`, true);
        return message.channel.send({ embeds: [Embed] });
      })
      .catch((err) => {
        const Embed = new MessageEmbed()
          .setTitle("Implorium Status")
          .setColor("RED")
          .setDescription("Implorium is Offline!");

        return message.channel.send({ embeds: [Embed] });
      });
  }
}

module.exports = statusImp;
