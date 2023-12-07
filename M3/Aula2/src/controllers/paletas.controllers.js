const paletasService = require('../service/paletas.services');

function initialController(req, res) {
    console.log(req.header);
  res.send(service.initialService());
}

module.exports = { 
    initialController,
};
 