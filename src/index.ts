import express from 'express'

const app = express()

const PORT = 3000

app.get('/', (req, res) => {
    res.json({
        "message" : "hello Man"
    })
})

app.listen(process.env.PORT || PORT, () => {
    console.log("Server is running on port ", PORT)
})