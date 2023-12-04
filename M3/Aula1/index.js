const express = require('express');
const port = 3000;
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const paletas = [
  {
    id: 1,
    sabor: 'Açaí com Leite Condensado',
    descricao:
      'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
    foto: 'assets/images/acai-com-leite-condensado.png',
    preco: 10.0,
  },
  {
    id: 2,
    sabor: 'Banana com Nutella',
    descricao:
      'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
    foto: 'assets/images/banana-com-nutella.png',
    preco: 10.0,
  },
  {
    id: 3,
    sabor: 'Chocolate Belga',
    descricao:
      'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
    foto: 'assets/images/chocolate-belga.png',
    preco: 7.0,
  },
];

app.get('/', function (req, res) {
  res.send('Hello World')
});

app.get('/paletas/todas-paletas', (req, res) => {
    res.send(paletas)
});

app.get('/paletas/paleta/:id', (req, res) => {
    const idPaleta = req.params.id;
    const paletaEscolhida = paletas.find((paleta) => paleta.id == idPaleta);
    res.send(paletaEscolhida);
});

app.listen(port, () => {
  console.log(`Servidor Rodando em http://localhost:${port}`);
});
