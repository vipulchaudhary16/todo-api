const express  = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()

const app = express()
const PORT = 8080 || process.env.PORT

//request body will contains json data
app.use(express.json())
//for cross orgin request
app.use(cors())

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})