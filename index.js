const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 8080

app.use(bodyParser.urlencoded())
app.use("/static", express.static('./static/'))

app.get('/', (req, res) => {
    res.render('game.ejs')
})

app.listen(port, () => {
    console.log(`listen port:${port}`)
})