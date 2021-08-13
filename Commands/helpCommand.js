const { Command } = require("discord-akairo");
const { MessageEmbed } = require("discord.js");

class helpCommand extends Command {
  constructor() {
    super("help", {
      aliases: ["help", "noob"],
    });
  }

  async exec(message) {
    const Embed = new MessageEmbed()
      .setTitle("Vistora Commands")
      .setColor("GREEN")
      .setDescription("Afterburner commands.")
      .addField(
        "vis!status",
        `Returns the status of the Vistora website.`,
        true
      )
      .addField(
        "vis!statusImp",
        `Returns the status of the Implorium website.`,
        true
      )
      .addField(
        "vis!user <username>",
        `Returns the information of the user specified.`,
        true
      );

    return message.channel.send({ embeds: [Embed] });
  }
}

module.exports = helpCommand;
