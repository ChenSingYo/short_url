const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const PORT = process.env.PORT || 3000

require('./config/mongoose')

app.engine('hbs', exphbs({ defaultLaybout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use('/', require('./routes'))

app.listen(PORT, () => {
  console.log(`ready to serve: http://localhost:${PORT}`)
})
