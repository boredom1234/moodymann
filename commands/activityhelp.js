const { MessageEmbed } = require("discord.js");
require("moment-duration-format");

module.exports = {
  name: "help",
  description: "Get information about the bot activities",
  usage: "",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["gamehelp", "gh"],
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
      embed.setTitle('Commands for Moodymann Bot (Activities) 🎯');
      //embed.setAuthor({"name": 'Moodymann', "iconURL": 'https://pbs.twimg.com/media/EpSQcwIXUAYB329.jpg'});
      embed.setDescription('You need to be in a voice channel to use this bot \ncommands.\n**By- ELEVEN #4439** ');
      embed.setThumbnail('https://i.ytimg.com/vi/SN5n1KA9n3Y/maxresdefault.jpg')
      embed.addFields(
        {
          "name": "Prefix ->  `;`",
                "value": "`youtube` -> Youtube Together Session\n`fishington` -> Fishington.io\n`sketcheads` -> Sketch Heads\n`wordsnacks` -> Word Snacks\n`betrayal` -> Betrayal.io\n`pokernight` -> Poker Night\n`chess` -> Chess in Park\n`checkers` -> Checkers in Park\n`ocho` -> Ocho\n`letterleague` -> Letter League\n`spellcast` -> Spell Cast",
                "inline": true,
        }
      );

      embed.setImage('https://www.rcrwireless.com/wp-content/uploads/2020/09/114992844_l-scaled-1.jpg');
      embed.setTimestamp()
      //embed.setFooter({ "text": 'ELEVEN#4439', "iconURL": 'https://cdn.discordapp.com/avatars/485028232047886358/cccc25c97ea51044463ea68e8ff620be.png?size=256' });

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
     run: async (client, message) => {
        const { version } = require("discord.js");
        
          const embed = new MessageEmbed();
          embed.setColor(client.botconfig.EmbedColor);
          embed.setTitle('Commands for Moodymann Bot (Activities) 🎯');
          //embed.setAuthor({"name": 'Moodymann', "iconURL": 'https://pbs.twimg.com/media/EpSQcwIXUAYB329.jpg'});
          embed.setDescription('You need to be in a voice channel to use this bot \ncommands.\n**By- ELEVEN #4439** ');
          embed.setThumbnail('https://i.ytimg.com/vi/SN5n1KA9n3Y/maxresdefault.jpg')
          embed.addFields(
            {
              "name": "Prefix ->  `;`",
                    "value": "`fish` -> Fishington.io\n`sketcheads` -> Sketch Heads\n`wordsnacks` -> Word Snacks\n`betrayal` -> Betrayal.io\n`pokernight` -> Poker Night\n`chess` -> Chess in Park\n`checkers` -> Checkers in Park\n`ocho` -> Ocho\n`letterleague` -> Letter League\n`spellcast` -> Spell Cast",
                    "inline": true,
            }
          );
    
          embed.setImage('https://www.rcrwireless.com/wp-content/uploads/2020/09/114992844_l-scaled-1.jpg');
          embed.setTimestamp()
          //embed.setFooter({ "text": 'ELEVEN#4439', "iconURL": 'https://cdn.discordapp.com/avatars/485028232047886358/cccc25c97ea51044463ea68e8ff620be.png?size=256' });
    
          return message.channel.send(embed);
        },
  },
};
