const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "fishington",
  description: "Starts a Fishington.io session",
  usage: "",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["fishington"],
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
      "814288819477020702"
    ); //Made using discordjs-activity package
    let embed = new MessageEmbed()
      .setAuthor(
        "Fishington",
        "https://images.crazygames.com/games/fishington-io/cover-1615371400662.png?auto=format,compress&q=75&cs=strip&ch=DPR&w=1200&h=630&fit=crop"
      )
      .setColor("#2990FF").setDescription(`
Using **Fishington.io** you can play with your friends in a Voice Channel. Click *JOIN* to join in!

__**[Join Fishington.io](https://discord.com/invite/${Invite.code})**__

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
          "814288819477020702"
        ); //Made using discordjs-activity package
        let embed = new MessageEmbed()
          .setAuthor(
            "Fishington",
            "https://images.crazygames.com/games/fishington-io/cover-1615371400662.png?auto=format,compress&q=75&cs=strip&ch=DPR&w=1200&h=630&fit=crop"
          )
          .setColor("#2990FF").setDescription(`
    Using **Fishington.io** you can play with your friends in a Voice Channel. Click *JOIN* to join in!
    
    __**[Join YouTube Together](https://discord.com/invite/${Invite.code})**__
    
    ⚠ **Note:** This only works in Desktop version of the Discord App
    `);
      interaction.send(embed.toJSON());
    },
  },
};
