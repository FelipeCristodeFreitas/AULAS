const express = require('express');
const port = 3000;
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());


app.get('/', function (req, res) {
    res.send('Hello World2')
  });

  app.listen(port, () => {
    console.log(`Servidor Rodando em http://localhost:${port}`);
  });
  
