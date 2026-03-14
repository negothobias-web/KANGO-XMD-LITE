require('./settings')
const express = require('express')

const app = express()
const port = process.env.PORT || 3000
const botname = global.botname || 'Bot'

app.get('/', (req, res) => {
  res.send(`✅ ${botname} is running.`)
})

app.listen(port, () => {
  console.log(`${botname} started on http://localhost:${port}`)
  console.log('Run with FORGET_BRANDING=true to disable default branding values.')
})
