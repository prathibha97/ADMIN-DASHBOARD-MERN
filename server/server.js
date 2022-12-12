import http from 'http'
import app from './app.js'
import connectDB from './services/mongo.js'

const server = http.createServer(app)
const port =  process.env.PORT | 5000

server.listen(port, ()=>{
  console.log(`Server listening on port ${port}`)
  connectDB()
})