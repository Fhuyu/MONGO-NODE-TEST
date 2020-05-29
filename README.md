# MONGO-NODE-TEST

npm init
npm install mongodb --save

check connexion : 
``` const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://127.0.0.1:27017'

const dbName = 'mydb'
let db

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
    if (err) return console.log(err)
  
    // Storing a reference to the database so you can use it later
    db = client.db(dbName)
    console.log(`Connected MongoDB: ${url}`)
    console.log(`Database: ${dbName}`)
  })
  ```
