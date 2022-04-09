const { SlashCommandBuilder } = require('@discordjs/builders');
let client = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('avatar')
		.setDescription('Zeigt dir den Avatar von einem User!'),
	async execute(interaction) {
        const user = interaction.options.getUser('username');
		if (user) return interaction.reply(`${user.username}'s avatar: ${user.displayAvatarURL({ dynamic: true })}`);
     await interaction.reply(` ${interaction.user.displayAvatarURL({ format: 'png'  , dynamic: true ,  size: 4096})}`) 
	},
};