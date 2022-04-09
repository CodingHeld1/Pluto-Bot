const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { token } = require('./config.json');
const fs = require('fs');
let prefix = 'p!';
const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const config = require('./config.json')
const clientId = config.clientId;
const guildId = config.guildId;
const rest = new REST({ version: '9' }).setToken(token);


for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	commands.push(command.data.toJSON());
}

(async () => {
	try {
		console.log('Started refreshing application (/) commands.');

		await rest.put(
			Routes.applicationGuildCommands(clientId, guildId),
			{ body: commands },
		);

		console.log('Successfully reloaded application (/) commands.');
	} catch (error) {
		console.error(error);
	}
})();


client.once('ready', () => {
	console.log(`\nPrefix:${prefix} \nName: ${client.user.tag}\n `);
});

const activities = [
    "/phelp",
    "mit dem LOLIPOP.DE Devs",
    "mit dem Mars",
    "Community Bot!"
];
  
  client.once("ready", () => {
    setInterval(() => {
      const randomIndex = Math.floor(Math.random() * (activities.length - 1) + 1);
      const newActivity = activities[randomIndex];
      client.user.setPresence({
        status: 'dnd',
        activity: {
            name: newActivity,
           type: 'WATCHING',
    }})
    }, 10000);
  });

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;
	const  commandName  = interaction.commandName;
    if (commandName === 'test') {
	await interaction.reply('Bot läuft')
	}
});
client.login(token);