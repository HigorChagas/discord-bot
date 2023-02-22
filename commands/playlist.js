const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('playlist')
        .setDescription('Ouça a melhor playlist de estudos'),

    async execute(interaction) {
        await interaction.reply('https://open.spotify.com/album/0ZfJEIY1iOasgnt67JleR7?si=fPf-yA5lQHST0vJhVehdcg');
    }
}