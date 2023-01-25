import express from 'express'
import {getProducts} from '../controllers/client.controller.js'

const clientRouter = express.Router()

clientRouter.get(`/products`, getProducts)


export default clientRouter