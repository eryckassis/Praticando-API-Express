const {
  getTodosLivros,
  getLivroPorId,
  insereLivro,
  modificaLivro,
  deletarLivroPorId,
} = require("../services/livro");

function getLivros(req, res) {
  try {
    const livros = getTodosLivros;
    res.send(livros);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}
function getLivro(req, res) {
  try {
    const id = req.params.id;

    if (id && Number(id)) {
      const livro = getLivroPorId(id);
      res.send(livro);
    } else {
      res.status(422);
      res.send("ID inválido");
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function postLivro(req, res) {
  try {
    const livroNovo = req.body;
    insereLivro(livroNovo);
    res.status(201);
    res.send("Livro foi inserido");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function patchLivro(req, res) {
  try {
    const id = req.params.id;
    if (id && Number(id)) {
      modificaLivro(body, id);
      res.send("Livro atualizado com sucesso");
    } else {
      res.status(422);
      res.send("ID Inválido");
    }
    const body = req.body;
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function deleteLivro(req, res) {
  try {
    const id = req.params.id;
    deletarLivroPorId(id);
    res.send("livro deletado");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

module.exports = {
  getLivros,
  getLivro,
  postLivro,
  patchLivro,
  deleteLivro,
};
