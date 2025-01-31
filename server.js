const express = require('express');
const app = express()
const port = 3000

app.use(express.static('public'));
app.use('/jquery/', express.static('node_modules/jquery/dist/'));
app.use('/bootstrap/', express.static('node_modules/bootstrap/dist/'));


app.get('/hello', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
