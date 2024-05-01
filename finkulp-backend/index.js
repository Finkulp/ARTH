const connect= require('./db');
const express = require('express')
const cors=require('cors');
connect();
const app = express()
const port = 5000
app.use(express.json());
app.use(cors());
app.use('/notes',require('./routes/notes'));
 app.use('/auth',require('./routes/auth'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})