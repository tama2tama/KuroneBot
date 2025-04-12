import { SlashCommandBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('dog')
  .setDescription('犬コマンド');

export async function execute(interaction){
	const sleep = (time) => new Promise((resolve) => setTimeout(resolve,time));
  
  await interaction.reply('グルルル...');
  await sleep(2000);
  await interaction.followUp('ワン！');
}
