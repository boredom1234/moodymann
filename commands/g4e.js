const { MessageEmbed } = require("discord.js");
const prettyMilliseconds = require("pretty-ms");

module.exports = {
  name: "noob",
  description: "Sends sechs to u",
  usage: "",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["sechs", "noob", "g4e"],
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
    message.author
      .send(
        new MessageEmbed()
          .setAuthor(
            `Wassup Madahfakah!!!`,
            client.user.displayAvatarURL({
              dynamic: true,
            })
          )
          .setThumbnail(
            `https://external-preview.redd.it/yg51DZQR7QxbaX616RuGaNEO0gf85r0pDUGeN3rSjPw.png?width=640&crop=smart&format=pjpg&auto=webp&s=f475de1540b5d4fca16083127caaa668a4a27547`
          )
          .setColor(client.botconfig.EmbedColor)
          .setTitle(`**Some predictions**`)
          .addField(
            `You are G4E\nYou is grape\n`
          )
          .addField(
            `Do AGAIN:`,
            `\`;g4e\``
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
            `Wassup Madahfakah!!!`,
            client.user.displayAvatarURL({
              dynamic: true,
            })
          )
          .setThumbnail(
            `https://external-preview.redd.it/yg51DZQR7QxbaX616RuGaNEO0gf85r0pDUGeN3rSjPw.png?width=640&crop=smart&format=pjpg&auto=webp&s=f475de1540b5d4fca16083127caaa668a4a27547`
          )
          .setColor(client.botconfig.EmbedColor)
          .setTitle(`**Some predictions**`)
          .addField(
            `You are G4E\n You is grape\n`
          )
          .addField(
            `Do AGAIN:`,
            `\`;g4e\``
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
