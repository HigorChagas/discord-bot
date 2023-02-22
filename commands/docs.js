const { SlashCommandBuilder, ActionRowBuilder, EmbedBuilder, Events, StringSelectMenuBuilder  } = require('discord.js');

const row = new ActionRowBuilder()
	.addComponents(
		new StringSelectMenuBuilder()
			.setCustomId('select')
			.setPlaceholder('Nenhuma linguagem selecionada')
			.addOptions({
				label: 'javascript',
				description: 'Veja a documentação de JavaScript',
				value: 'javascript'
			},
			{
				label: 'reactjs',
				description: 'Veja a documentação de ReactJS',
				value: 'reactjs'
			},
			{
				label: 'nodejs',
				description: 'Veja a documentação de NodeJS',
				value: 'nodejs'
			},
			)
	) 
		

module.exports = {
    data: new SlashCommandBuilder()
        .setName('docs')
        .setDescription('Acesse a documentação da tecnologia que quiser'),

    async execute(interaction) {
        await interaction.reply({ content: 'Selecione uma das techs abaixo:', components: [row] });
    }
}