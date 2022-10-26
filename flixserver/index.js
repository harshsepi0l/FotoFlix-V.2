const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const mysql = require('mysql2')

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'flixers',
  password: 'Hxrsh295'
})
app.get('/api/get',(req,res) => {
  const sqlSelect = 'SELECT * FROM flixers'

  db.query(sqlSelect, (err,result) => {
    res.send(result)
  })
})

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.post('/api/insert', (req,res) => {
  const username = req.body.username
  const email = req.body.email
  const password = req.body.password

  const sqlInsert = "INSERT INTO flixers (username, email, password) VALUES (?,?,?)"
  db.query(sqlInsert, [username, email, password], (err,result) => {
    console.log(result)
  })
})


app.listen(3000, () => {
  console.log('running on port 3000')
})
