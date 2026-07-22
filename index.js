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
  console.log(`Bot conectado como ${client.user.tag}`)

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

// cron.schedule(
//   '0 */3 * * *',
//   async () => {
//     try {
//       const channel = await client.channels.fetch(process.env.CHANNEL_ID)

//       if (!channel) {
//         console.log('Canal não encontrado.')
//         return
//       }

//       await channel.send(
//         '⏰ <@540325220943134731> <@1186315237029322834> <@1186316495484104704> <@490720166947192853>, passando para lembrar que você existe 😎'
//       )

//       console.log('Lembrete de 3 em 3 horas enviado.')
//     } catch (error) {
//       console.error('Erro ao enviar lembrete:', error)
//     }
//   },
//   {
//     timezone: 'America/Sao_Paulo'
//   }
// )

client.login(process.env.DISCORD_TOKEN)
