const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "letterleague",
  description: "Starts a Letter League session",
  usage: "",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["letterleague"],
  /**
   *
   * @param {import("../structures/DiscordMusicBot")} client
   * @param {require("discord.js").Message} message
   * @param {string[]} args
   * @param {*} param3
   */
  run: async (client, message, args, { GuildDB }) => {
    if (!message.member.voice.channel)
      return client.sendTime(
        message.channel,
        "❌ | **Join a Voice Channel**"
      );
    if (
      !message.member.voice.channel
        .permissionsFor(message.guild.me)
        .has("CREATE_INSTANT_INVITE")
    )
      return client.sendTime(
        message.channel,
        "❌ | **Please give permission to invite**"
      );

    let Invite = await message.member.voice.channel.activityInvite(
      "879863686565621790"
    ); //Made using discordjs-activity package
    let embed = new MessageEmbed()
      .setAuthor(
        "Letter League",
        "https://support.discord.com/hc/article_attachments/4419631744535/LL_Lobby.png"
      )
      .setColor("#4fef1e").setDescription(`
Using **Letter League** you can play with your friends in a Voice Channel. Click *JOIN* to join in!

__**[Join Letter League](https://discord.com/invite/${Invite.code})**__

⚠ **Note:** This only works in Desktop version of the Discord App
`);
    message.channel.send(embed);
  },
  SlashCommand: {
    options: [],
    /**
     *
     * @param {import("../structures/DiscordMusicBot")} client
     * @param {import("discord.js").Message} message
     * @param {string[]} args
     * @param {*} param3
     */
     run: async (client, message, args, { GuildDB }) => {
        if (!message.member.voice.channel)
          return client.sendTime(
            message.channel,
            "❌ | **Join a Voice Channel**"
          );
        if (
          !message.member.voice.channel
            .permissionsFor(message.guild.me)
            .has("CREATE_INSTANT_INVITE")
        )
          return client.sendTime(
            message.channel,
            "❌ | **Please give permission to invite**"
          );
    
        let Invite = await message.member.voice.channel.activityInvite(
          "879863686565621790"
        ); //Made using discordjs-activity package
        let embed = new MessageEmbed()
          .setAuthor(
            "Letter League",
            "https://support.discord.com/hc/article_attachments/4419631744535/LL_Lobby.png"
          )
          .setColor("#4fef1e").setDescription(`
    Using **Letter League** you can play with your friends in a Voice Channel. Click *JOIN* to join in!
    
    __**[Join Letter League](https://discord.com/invite/${Invite.code})**__
    
    ⚠ **Note:** This only works in Desktop version of the Discord App
    `);
      interaction.send(embed.toJSON());
    },
  },
};
