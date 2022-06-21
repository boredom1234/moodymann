const { MessageEmbed } = require("discord.js");
require("moment-duration-format");

module.exports = {
  name: "help",
  description: "Get information about the bot",
  usage: "",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["help", "h"],
  /**
   *
   * @param {import("../structures/DiscordMusicBot")} client
   * @param {import("discord.js").Message} message
   * @param {string[]} args
   * @param {*} param3
   */
  run: async (client, message) => {
    const { version } = require("discord.js");
    
      const embed = new MessageEmbed();
      embed.setColor(client.botconfig.EmbedColor);
      embed.setTitle('Commands for Moodymann Bot 🎶');
      embed.setAuthor({"name": 'Moodymann', "iconURL": 'https://pbs.twimg.com/media/EpSQcwIXUAYB329.jpg'});
      embed.setDescription('You need to be in a voice channel to use this bot \ncommands.\n**By- ELEVEN #4439** ');
      embed.setThumbnail('https://i.ytimg.com/vi/SN5n1KA9n3Y/maxresdefault.jpg')
      embed.addFields(
        {
          "name": "Prefix ->  `;`",
                "value": "`p <song name or link>` -> Play a Song\n`ps` -> search a song and play\n`skip` -> Skips the current Song\n`pause` -> Pauses the Song\n`resume` -> Resumes the song\n`loop` -> Loops the current song or playlist\n`loopq` -> loops the queue\n`lyrics<song name>` -> Gets lyrics of the song\n`q` -> Shows queue\n`skipto<ID>` -> Skips to the selected song in a queue\n`fkoff` -> Disconnects the bot",
                "inline": true,
        }
      );

      embed.setImage('https://trxprds3.s3.amazonaws.com/uploads/2020/12/gta-online-12-5-2020-the-music-locker-moodymann.jpg');
      embed.setTimestamp()
      embed.setFooter({ "text": 'ELEVEN#4439', "iconURL": 'https://cdn.discordapp.com/avatars/485028232047886358/cccc25c97ea51044463ea68e8ff620be.png?size=256' });

      return message.channel.send(embed);
    },
  

  SlashCommand: {
    /**
     *
     * @param {import("../structures/DiscordMusicBot")} client
     * @param {import("discord.js").Message} message
     * @param {string[]} args
     * @param {*} param3
     */
    run: async (client, interaction) => {
      const embed = new MessageEmbed();
      embed.setColor(client.botconfig.EmbedColor);
      embed.setTitle('Commands for Moodymann Bot 🎶');
      embed.setAuthor({"name": 'Moodymann', "iconURL": 'https://pbs.twimg.com/media/EpSQcwIXUAYB329.jpg'});
      embed.setDescription('You need to be in a voice channel to use this bot \ncommands.\n**By- ELEVEN #4439** ');
      embed.setThumbnail('https://i.ytimg.com/vi/SN5n1KA9n3Y/maxresdefault.jpg')
      embed.addFields(
        {
          "name": "Prefix ->  `;`",
                "value": "`p <song name or link>` -> Play a Song\n`ps` -> search a song and play\n`skip` -> Skips the current Song\n`pause` -> Pauses the Song\n`resume` -> Resumes the song\n`loop` -> Loops the current song or playlist\n`loopq` -> loops the queue\n`lyrics<song name>` -> Gets lyrics of the song\n`q` -> Shows queue\n`skipto<ID>` -> Skips to the selected song in a queue\n`dc` -> Disconnects the bot",
                "inline": true,
        }
      );

      embed.setImage('https://trxprds3.s3.amazonaws.com/uploads/2020/12/gta-online-12-5-2020-the-music-locker-moodymann.jpg');
      embed.setTimestamp()
      embed.setFooter({ "text": 'ELEVEN#4439', "iconURL": 'https://cdn.discordapp.com/avatars/485028232047886358/cccc25c97ea51044463ea68e8ff620be.png?size=256' });

      return message.channel.send(embed);
    },
  },
};
