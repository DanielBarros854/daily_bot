import 'dotenv/config'
import { Client, Intents, TextChannel } from 'discord.js'

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('ready', async () => {
  const channel = client.channels.cache.find((channel) => channel.id === process.env.CHANNEL_ID);
  const msg_in_chat = await (channel as TextChannel)?.send('Bora pra daily, @here!');
  await msg_in_chat.react('✅');
  await msg_in_chat.react('❌');
  
  client.destroy();
})

client.login(process.env.TOKEN)
