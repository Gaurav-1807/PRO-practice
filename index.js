const express = require('express')
const router = require('./routes/user.routes')
const cookie = require('cookie-parser')
const connect = require('./config/db')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended : true }))
app.set("view engine","ejs")
app.set("/views",__dirname + '/views')
app.use(cookie())
app.use(router)

app.listen(8090,()=>{
    connect()
    console.log("server listening on port 8080")
})