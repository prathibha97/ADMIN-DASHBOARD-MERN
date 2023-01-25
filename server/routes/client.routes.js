import express from 'express'
import {getProducts, getCustomers} from '../controllers/client.controller.js'

const clientRouter = express.Router()

clientRouter.get(`/products`, getProducts)
clientRouter.get(`/customers`, getCustomers)


export default clientRouter