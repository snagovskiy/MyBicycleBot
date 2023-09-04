const { Telegraf } = require('telegraf')


const bot = new Telegraf('5455584060:AAGFr2OL0SA-4Z4kkOZvfgKt2s12OlhUuOU')
bot.start((ctx) => ctx.reply(`Привет ${ctx.message.from.first_name}!`))
bot.help((ctx) => ctx.reply('Отправь стикер!!'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('привет', (ctx) => ctx.reply('Да,да внимательно'))
bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
