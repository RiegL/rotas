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
    id:4,
    nome: "Ana",
  },
];

getClients = (req, res) => {
  res.send(clientes);
};

getOneClient = (req, res) => {
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
    res.sendStatus(201);
  } else {
    res.status(406).send("nao adicionou");
  }
};

function updateCliente(req, res) {
  const id = req.params.id;
  let indice = findClienteIndex(id);
  clientes[indice] = req.body;
  console.log("REQ ->",req.params)
  console.log("REQ body ->",req.body)
  res.status(200).send({ numero: indice, mensagem: "Cliente atualizado com sucesso" });
}


function findClienteIndex(id) {
  const index = clientes.findIndex(item => item.id === Number(id));
  return index;
}

module.exports = { getClients, getOneClient, createClient,updateCliente };
