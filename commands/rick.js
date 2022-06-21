const { MessageEmbed } = require("discord.js");
const prettyMilliseconds = require("pretty-ms");

module.exports = {
  name: "rickroll",
  description: "Rick Rolls you",
  usage: "",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["rick", "roll","rickroll"],
  /**
   *
   * @param {import("../structures/DiscordMusicBot")} client
   * @param {import("discord.js").Message} message
   * @param {string[]} args
   * @param {*} param3
   */
  run: async (client, message, args, { GuildDB }) => {
    let player = await client.Manager.get(message.guild.id);
    if (!message.member.voice.channel)
      return client.sendTime(
        message.channel,
        "❌ | **Join a Voice Channel**"
      );
    if (
      message.guild.me.voice.channel &&
      message.member.voice.channel.id !== message.guild.me.voice.channel.id
    )
      return client.sendTime(
        message.channel,
        ":x: | **Be in Same Voice Channel**"
      );
    message.author.send(
        new MessageEmbed()
          .setAuthor(
            `**Yeltsa Kcir**`,
            client.user.displayAvatarURL({
              dynamic: true,
            })
          )
          .setThumbnail(
            `https://c.tenor.com/_4YgA77ExHEAAAAC/rick-roll.gif`
          )
          .setColor(client.botconfig.EmbedColor)
          .setTitle(`Never gonna give you up\nNever gonna let you down\nNever gonna run around and desert you\nNever gonna make you cry\nNever gonna say goodbye\nNever gonna tell a lie and hurt you`)
          .addField(
            `https://youtu.be/dQw4w9WgXcQ`
          )
          .setFooter(
            `Requested by: ${player.queue.current.requester.tag}`,
            player.queue.current.requester.displayAvatarURL({
              dynamic: true,
            })
          )
      )
      .catch((e) => {
        return message.channel.send("Allow me (DMs Disabled)");
      });

    client.sendTime(message.channel, "📥 | **Check your DMs!**");
  },
  SlashCommand: {
    /**
     *
     * @param {import("../structures/DiscordMusicBot")} client
     * @param {import("discord.js").Message} message
     * @param {string[]} args
     * @param {*} param3
     */
    run: async (client, interaction, args, { GuildDB }) => {
      const guild = client.guilds.cache.get(interaction.guild_id);
      const user = client.users.cache.get(interaction.member.user.id);
      const member = guild.members.cache.get(interaction.member.user.id);
      let player = await client.Manager.get(interaction.guild_id);
      if (!message.member.voice.channel)
      return client.sendTime(
        message.channel,
        "❌ | **Join a Voice Channel**"
      );
    if (
      message.guild.me.voice.channel &&
      message.member.voice.channel.id !== message.guild.me.voice.channel.id
    )
      return client.sendTime(
        message.channel,
        ":x: | **Be in Same Voice Channel**"
      );
    message.author
      .send(
        new MessageEmbed()
          .setAuthor(
            `**Yeltsa Kcir**`,
            client.user.displayAvatarURL({
              dynamic: true,
            })
          )
          .setThumbnail(
            `https://c.tenor.com/_4YgA77ExHEAAAAC/rick-roll.gif`
          )
          .setColor(client.botconfig.EmbedColor)
          .setTitle(`Never gonna give you up\nNever gonna let you down\nNever gonna run around and desert you\nNever gonna make you cry\nNever gonna say goodbye\nNever gonna tell a lie and hurt you`)
          .addField(
            `https://youtu.be/dQw4w9WgXcQ`
          )
          .setFooter(
            `Requested by: ${player.queue.current.requester.tag}`,
            player.queue.current.requester.displayAvatarURL({
              dynamic: true,
            })
          )
      )
      .catch((e) => {
        return message.channel.send("Allow me (DMs Disabled)");
      });

    client.sendTime(message.channel, "📥 | **Check your DMs!**");
    },
  },
};
