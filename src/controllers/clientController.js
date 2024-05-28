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

//lista os clientes
function getClients(req, res) {
  res.send(clientes);
};

//lista somente o cliente cujo o id foi procurado
function getOneClient(req, res) {
  let id = req.params.id;
  const cliente = clientes.find((item) => item.id === Number(id));
  if (cliente) {
    res.status(200).send(cliente);
  } else {
    res.status(404).send("TA ERRADO ISSO");
  }
};

//cria um cliente novo
createClient = (req, res) => {
  const newClient = req.body;
  if (Object.keys(newClient).length > 0) {
   
    res.status(201).send("Cliente Criado");
  } else {
    res.status(406).send("nao adicionou");
  }
};

//atualiza o cliente pelo id
function updateCliente(req, res) {
  const id = req.params.id;
  let indice = findClienteIndex(id)
  clientes[indice] = req.body;
  res.status(200).send("Cliente atualizado com sucesso");
};

//função que procura o index do id
function findClienteIndex(id) {
  const index = clientes.findIndex((item) => item.id === Number(id));
  return index;
};

//remove o cliente pelo id selecninado
removeClient = (req, res) => {
   const id = req.params.id;
   let indice = findClienteIndex(id);
   clientes.splice(indice,1)
   res.status(200).send(`O cliente do id ${id} foi excluido!!`)
};

module.exports = {
  getClients,
  updateCliente,
  getOneClient,
  createClient,
  removeClient,
};
