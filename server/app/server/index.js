import express from 'express'
import cors from 'cors'
import boom from 'boom'
import path from 'path'
import twig from 'twig'
import routes from '../router/routes'
import { wrapError, errorLog } from '../middleware/errorHandler'

const app = express()

// Middelwares
app.use(cors())
app.use(express.json())

// SET VIEW ENGINE and VIEWS
app.set('view engine', 'html')
app.engine('html', twig.__express)
app.set('views', path.resolve(__dirname, 'views'))

// settin up app
app.set('port', 8080)

// Routes
app.use('/', routes)

app.use((_req, res) => {
  const {
    output: { statusCode, payload }
  } = boom.notFound()
  return res.status(statusCode).json(payload)
})

// Errors handlers
app.use(errorLog)
app.use(wrapError)

export default app
