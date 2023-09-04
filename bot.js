const { Telegraf } = require('telegraf')


const bot = new Telegraf('secrets.BOT_TOKEN')
bot.start((ctx) => ctx.reply(`Привет ${ctx.message.from.first_name}!`))
bot.help((ctx) => ctx.reply('Отправь стикер!!'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('привет', (ctx) => ctx.reply('Да,да внимательно'))
bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
