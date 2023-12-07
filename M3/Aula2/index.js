const express = require('express');
const port = 3000;
const app = express();
const cors = require('cors');
const paletaRoutes = require('./src/routes/paletas.route');

app.use(express.json());
app.use(cors());

app.use('/paletas' , paletaRoutes);

  app.listen(port, () => {
    console.log(`Servidor Rodando em http://localhost:${port}`);
  });
  
