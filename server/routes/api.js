import express from 'express'
import clientRouter from './client.routes.js'
import generalRouter from './general.routes.js'
import managementRouter from './management.routes.js'
import salesRouter from './sales.routes.js'

const api = express.Router()

api.use('/client', clientRouter)
api.use('/general', generalRouter)
api.use('/management', managementRouter)
api.use('/sales', salesRouter)

export default api