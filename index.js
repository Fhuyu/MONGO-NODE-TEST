const mongoose = require('mongoose')
const Character = require('./models/Character')
const url = 'mongodb://127.0.0.1:27017/mydb'

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection
db.once('open', _ => {
  console.log('Database connected:', url)
})

db.on('error', err => {
  console.error('connection error:', err)
})

const ryu = new Character ({
    name: 'Ryu',
    ultimate: 'Shinku Hadoken'
  })
  ryu.save(function (error, document) {
    if (error) console.error(error)
    console.log(document)
  })