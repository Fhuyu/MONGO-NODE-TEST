const mongoose = require('mongoose')
const Schema = mongoose.Schema

const characterSchema = new Schema({
  BattleID: { type: Number, unique: true },
  name: String,
  specials: Array,
  ultimate: String
})

module.exports = mongoose.model('Character', characterSchema)

/* String
Number
Boolean
Array
Date
ObjectId */