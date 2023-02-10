const express = require('express')
const morgan=  require('morgan')
const mongoose= require('mongoose')
const users = require('./routes/users')
const auth = require('./routes/auth')
const cors = require('cors')

const app = express();
mongoose.set('strictQuery', true)

mongoose.connect('mongodb://127.0.0.1:27017/finalProject')
  .then( () => console.log('Connected to MongoDB'))
  .catch( err => console.log('coudnt connect to MongoDB') )

app.use(cors())
app.use(express.json()); // conver json to javascript and javascript to json
app.use(express.static('public'))

if (app.get('env') === 'development')
  app.use(morgan('tiny'))
  
app.use('/api/users',users)
app.use('/api/auth',auth)

const port = process.env.PORT || 4000; 

app.listen(port, () => console.log(`active on ${port}`))