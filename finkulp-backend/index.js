const connect= require('./db');
const express = require('express')
const cors=require('cors');
connect();
const app = express()
app.use(express.json());
const port = 5000
app.use(cors());
app.use('/notes',require('./routes/notes'));
 app.use('/auth',require('./routes/auth'));
 app.use('/Strategies',require('./routes/Strategies'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})