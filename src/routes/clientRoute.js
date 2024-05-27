const express = require('express');
const router = express.Router();
const clientController = require('./../controllers/clientController')

router.get('/', clientController.getClients); 
router.get('/:id', clientController.getOneClient)
router.post('/', clientController.createClient)
router.get('/client/:id', clientController.updateCliente);
// router.delete('/delete/:id', clientController.deleteClient)

  module.exports = router;