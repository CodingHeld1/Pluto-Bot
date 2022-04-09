const { SlashCommandBuilder } = require('@discordjs/builders');
let client = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Pingt den Bot!'),
	async execute(interaction) {
		return interaction.reply('Mein Ping beträgt momentan:', client , '!');
	},
};