const items = []; // Array para simular um banco de dados

const listItems = (req, res) => {
    res.json(items);
};

const createItem = (req, res) => {
    const newItem = req.body; // Recebe os dados do novo item
    items.push(newItem);
    res.status(201).json(newItem);
};

const updateItem = (req, res) => {
    const { id } = req.params;
    const updatedItem = req.body; // Recebe os dados atualizados
    items[id] = updatedItem; // Atualiza o item no array
    res.json(updatedItem);
};

const deleteItem = (req, res) => {
    const { id } = req.params;
    items.splice(id, 1); // Remove o item do array
    res.status(204).send(); // Envia resposta sem conteúdo
};

module.exports = { listItems, createItem, updateItem, deleteItem };
