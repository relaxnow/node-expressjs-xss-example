const express = require('express')
const { exec } = require("child_process");
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send(`{"username": "${req.query.username}"}`)
})

app.get('/fixed', (req, res) => {
  res.header("Content-Type", "application/json");
  res.send(`{"username": "${req.query.username}"}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  exec('open http://localhost:3000/?username=World%3Cscript%3Ealert%28%27xss%27%29%3B%3C%2Fscript%3E')
})
