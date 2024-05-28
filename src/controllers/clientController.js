const clientes = [
  {
    id: 1,
    nome: "Léo",
  },
  {
    id: 2,
    nome: "Pedro",
  },
  {
    id: 3,
    nome: "Maria",
  },
  {
    id: 4,
    nome: "Ana",
  },
];

function getClients(req, res) {
  res.send(clientes);
};

function getOneClient(req, res) {
  let id = req.params.id;
  const cliente = clientes.find((item) => item.id === Number(id));
  if (cliente) {
    res.status(200).send(cliente);
  } else {
    res.status(404).send("TA ERRADO ISSO");
  }
};

createClient = (req, res) => {
  const newClient = req.body;
  if (Object.keys(newClient).length > 0) {
    clientes.push(newClient);
    res.status(201).send("Cliente Criado");
  } else {
    res.status(406).send("nao adicionou");
  }
};

function updateCliente(req, res) {
  const id = req.params.id;
  let indice = findClienteIndex(id);
  clientes[indice] = req.body;
  res.status(200).send("Cliente atualizado com sucesso");
};

function findClienteIndex(id) {
  const index = clientes.findIndex((item) => item.id === Number(id));
  return index;
};

removeClient = (req, res) => {
  const id = req.params.id;
  let indice = findClienteIndex(id);
  clientes.splice(indice,1)
  res.status(200).send(`o Cliente do id ${id} foi removido!`)
};

module.exports = {
  getClients,
  updateCliente,
  getOneClient,
  createClient,
  removeClient,
};
