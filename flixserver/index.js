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

app.use(express.json());
app.use(cors());


app.use(bodyParser.urlencoded({ extended: true }))
app.get('/api/get',(req,res) => {
    
  const sqlSelect = 'SELECT * FROM flixers'

  db.query(sqlSelect, (err,result) => {
    res.send(result)
  })
})

app.post('/api/insert', (req,res) => {
  const Username = req.body.Username
  const Email = req.body.Email
  const Password = req.body.Password

  const sqlInsert = "INSERT INTO flixers (Username, Email, Password) VALUES (?,?,?)"
  db.query(sqlInsert, [Username, Email, Password], (err,result) => {
    console.log(result)
  }
  )
})


app.listen(3000, () => {
  console.log('running on port 3000')
})
