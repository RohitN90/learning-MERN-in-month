import express from 'express'
import UserData from './Model/users'
import UserRouter from './controllers/student'

const app = express()

const PORT = 3000

app.use('/student', UserRouter)


app.get('/', (req, res) => {
    res.json({
        "message" : "hello Man"
    })
})


app.get('/about', (req, res) => {
    res.json({
        "content" : "This is the ABout Page"
    })
})


app.listen(process.env.PORT || PORT, () => {
    console.log("Server is running on port ", PORT)
})