import { SlashCommandBuilder } from "discord.js";

// コマンドの一覧を定義
const commands = {
  '/gacha': 'ガチャを引くよ～',
  '/janken': 'じゃんけんで対決！',
  '/nyan': 'BOTの応答速度をチェックします。',
  '/uranai': 'BOTの応答速度をチェックします。',
};

export const data = new SlashCommandBuilder()
  .setName("help")
  .setDescription("コマンド一覧を表示");

export async function execute(interaction) {
  const arr = ["SSR 金のじゃがいも", "SR 銀のじゃがいも", "R 銅のじゃがいも", "N ただのじゃがいも"];
  const weight = [2, 4, 8, 16];
  let result = "";

  let totalWeight = 0;
  for (let i = 0; i < weight.length; i++) {
    totalWeight += weight[i];
  }
  let random = Math.floor(Math.random() * totalWeight);
  
  for (let i = 0; i < weight.length; i++) {
    if (random < weight[i]) {
      result = arr[i];
      break;
    } else {
      random -= weight[i];
    }
  }

  await interaction.reply(`${result} が当選しました！`);
}
