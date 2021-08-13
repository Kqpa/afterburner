const { Command } = require("discord-akairo");
const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch"); // Used to get data

class statusVis extends Command {
  constructor() {
    super("status", {
      aliases: ["status"],
    });
  }

  async exec(message) {
    let options = message.cleanContent.split(" ");
    options.shift();
    console.log(options);
    let now = Date.now();
    fetch("https://vistora.xyz")
      .then((response) => {
        let Ping = Date.now() - now;

        const Embed = new MessageEmbed()
          .setTitle("Vistora Status")
          .setColor("GREEN")
          .setDescription("Vistora is online!")
          .addField("Website Latency", `${Ping}ms`, true);
        return message.channel.send({ embeds: [Embed] });
      })
      .catch((err) => {
        const Embed = new MessageEmbed()
          .setTitle("Vistora Status")
          .setColor("RED")
          .setDescription("Vistora is offline!");
        return message.channel.send({ embeds: [Embed] });
      });
  }
}

module.exports = statusVis;
