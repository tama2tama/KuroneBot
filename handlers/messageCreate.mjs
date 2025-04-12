import { ndnDice } from "../commands/utils/dice.mjs"

export default async(message) => {
  if (message.content.match(/ぽてと|ポテト|じゃがいも|ジャガイモ|🥔|🍟/)) {
    await message.react("🥔");
  }
  
  //if (message.content.match(/help/)) {
  //  await message.reply("コマンド一覧です。\n　コマンド1：　\n 　コマンド2：");
  //}
  
  if (message.content.match(/にゃん|にゃーん|にゃ～ん/)) {
    await message.reply("にゃ～ん");
  }
  
  if (message.content.match(/^\d+d\d+$/)) {
    await message.reply(ndnDice(message.content));
  }
};
