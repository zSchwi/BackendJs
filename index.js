const express = require('express')
const app = express()
const port = 3000
/**-----Chamadas------- */
app.get('/', function (req, res) { // / pega (get) tudo que está nessa rota, no caso, app.send(hello world)
    res.send("Hello world")
})

app.get('/users', function (req, res){
    res.send("Data of Users")
})


app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})
