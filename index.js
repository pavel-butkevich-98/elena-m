const express = require('express')
const path = require('path');
require('dotenv').config()

const app = express()
const port = 3000
app.use(express.static(path.join(__dirname, 'public')))
app.get('/', async (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
})

const server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

process.on('SIGINT', () => {
  server.close(() => {
    console.log('Process terminated')
  })
})