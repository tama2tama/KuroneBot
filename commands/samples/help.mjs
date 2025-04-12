import { SlashCommandBuilder } from "discord.js";

// コマンドの一覧を定義
const commands = {
  '/gacha': 'ガチャを引くよ～',
  '/janken': 'じゃんけんで対決！',
  '/nyan': 'Botが返事してくれるよ',
  '/uranai': 'ラッキーカラーを占うよ～',
};

export const data = new SlashCommandBuilder()
  .setName("help")
  .setDescription("コマンド一覧を表示");

export async function execute(interaction){
	 let reply = '以下はこのBOTが利用可能なコマンド一覧です:\n';
    for (const [command, description] of Object.entries(commands)) {
      reply += `${command} - ${description}\n`;
    }
    //interaction.channel.send(reply); // チャットに返信
  await interaction.reply(reply);
}
