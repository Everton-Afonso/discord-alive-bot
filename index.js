require('dotenv').config()

const { Client, GatewayIntentBits } = require('discord.js')
const cron = require('node-cron')

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages
  ]
})

const START_DATE = new Date('2026-07-21T00:00:00')

function getDay() {
  const today = new Date()

  today.setHours(0, 0, 0, 0)

  const diff = Math.floor(
    (today - START_DATE) / (1000 * 60 * 60 * 24)
  )

  return diff + 1
}

client.once('clientReady', () => {
  cron.schedule(
    '0 7 * * *',
    async () => {
      try {
        const channel = await client.channels.fetch(process.env.CHANNEL_ID)

        if (!channel) {
          console.log('Canal não encontrado.')
          return
        }

        const day = getDay()

        await channel.send(
          `Dia ${day} tentando fazer o <@572199307197939742> e <@686698602667573362> sinalizar que estão vivos 🫡`
        )

        console.log(`Mensagem do dia ${day} enviada.`)
      } catch (error) {
        console.error('Erro ao enviar mensagem:', error)
      }
    },
    {
      timezone: 'America/Sao_Paulo'
    }
  )
})

client.login(process.env.DISCORD_TOKEN)