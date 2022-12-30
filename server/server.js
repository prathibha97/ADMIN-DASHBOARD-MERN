import http from 'http'
import app from './app.js'
import { User } from './models/User.js'
import connectDB from './services/mongo.js'
import {dataUser} from './data/index.js'

const server = http.createServer(app)
const port =  process.env.PORT | 5000

server.listen(port, ()=>{
  console.log(`Server listening on port ${port}`)
  connectDB()
  // User.insertMany(dataUser)
})
