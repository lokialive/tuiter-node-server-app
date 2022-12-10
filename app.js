import express from 'express'
import cors from 'cors'
import HelloController from './controllers/hello-controller.js'
import UserController from './controllers/users/user-controller.js'
import TuitsController from './controllers/tuits/tuits-controller.js'
import mongoose from 'mongoose'

const app = express()
app.use(cors())
app.use(express.json())

mongoose
  .connect(
    // 'mongodb+srv://webhw:webhw111111@cluster0.khhdtkt.mongodb.net/?retryWrites=true&w=majority',
    'mongodb+srv://kunal:fse123456@cluster0.wuwbxi4.mongodb.net/tuiter-web?retryWrites=true&w=majority',
  )
  .then(() => {
    console.log('Connected to MongoDB!')
  })

TuitsController(app)
HelloController(app)
UserController(app)
app.listen(process.env.PORT || 4000)
