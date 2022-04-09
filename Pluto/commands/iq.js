const { SlashCommandBuilder } = require('@discordjs/builders');
module.exports = {
    data: new SlashCommandBuilder()
    .setName('iqtest')
    .setDescription('Der Bot testet deinen IQ!'),
    async execute (interaction) {
        let iq = Math.floor(Math.random() * 100)
        return interaction.reply('Dein IQ beträgt ' + iq)
    }
}