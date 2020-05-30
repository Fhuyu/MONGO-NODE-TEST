const mongoose = require('mongoose')
const Character = require('./models/Character')
const url = 'mongodb://127.0.0.1:27017/mydb'

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }) // useFind... is to make findOneAndUpdate work without warning

const db = mongoose.connection
db.once('open', _ => {
  console.log('Database connected:', url)
})

db.on('error', err => {
  console.error('connection error:', err)
})

// const ryu = new Character ({
//     name: 'Ryu',
//     ultimate: 'Shinku Hadoken'
//   })
//   ryu.save(function (error, document) {
//     if (error) console.error(error)
//     console.log(document)
//   })

async function runCode() {
await Character.deleteMany({}) // Delete all content in collection

  const ryu = new Character({
    BattleID: 12,
    name: 'Ryu',
    ultimate: 'Shinku Hadoken'
  })
  const ken = new Character({
    BattleID: 13,
    name: 'Ken',
    ultimate: 'Guren Enjinkyaku'
  })

  await ken.save()
  await ryu.save()

  const chars = await Character.find()
  console.log(chars)
  // VERSION 1 - FIND ITEM BEFORE CHANGING VALUE, THEN SAVE - to use
  const ryu2 = await Character.findOne({ name: 'Ryu' })
  ryu2.specials = [
    'Hadoken',
    'Shoryuken',
    'Tatsumaki Senpukyaku'
  ]
  console.log(ryu2)
  await ryu2.save()
  // VERSION 2 - await findOneAndUpdate(filter, update)
  await Character.findOneAndUpdate(
    { name: 'Ken' },
    {
      specials: [
        'Ken1',
        'Shoryuken',
        'Tatsumaki Senpukyaku'
      ]
    }).then(doc => console.log(doc)) // working but not showing in console log
    
}

runCode()
  .catch(error => { console.error(error) })
