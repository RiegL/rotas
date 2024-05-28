const express = require("express");
const router = express.Router();
const {
  getClients,
  getOneClient,
  updateCliente,
  createClient,
  removeClient,
} = require("../controllers/clientController.js");

router.post("/newclient", createClient);
router.get("/clients", getClients);
router.get("/:id", getOneClient);
router.put("/client/:id", updateCliente);
router.delete("/delete/:id",removeClient);

module.exports = router;
