"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const discord_js_1 = require("discord.js");
const client = new discord_js_1.Client({ intents: [discord_js_1.Intents.FLAGS.GUILDS, discord_js_1.Intents.FLAGS.GUILD_MESSAGES] });
client.on('ready', () => __awaiter(void 0, void 0, void 0, function* () {
    const channel = client.channels.cache.find((channel) => channel.id === process.env.CHANNEL_ID);
    const msg_in_chat = yield (channel === null || channel === void 0 ? void 0 : channel.send('Bora pra daily, @here!'));
    yield msg_in_chat.react('✅');
    yield msg_in_chat.react('❌');
    client.destroy();
}));
client.login(process.env.TOKEN);
