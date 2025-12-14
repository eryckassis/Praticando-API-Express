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

    if (!id || Number(id)) {
      return res.status(422).send("ID Invalido");
    }
    const livro = getLivroPorId(id);
    res.send(livro);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

function postLivro(req, res) {
  try {
    const livroNovo = req.body;
    if (!livroNovo) {
      return res.status(422).send("Body Vazio");
    }
    if (!livroNovo.nome) {
      return res.status(422).send("Nome Inválido");
    }

    insereLivro(livroNovo);
    res.status(201).send("Livro inserido");
  } catch (error) {
    res.statis(500).send(error.message);
  }
}
function patchLivro(res, req) {
  try {
    const id = req.params.id;
    const body = req.body;

    if (!id || !Number(id)) {
      return res(422).send("ID Invalido");
    }
    modificaLivro(body, id);
    res.send("Livro atualizado com sucesso");
  } catch (error) {
    res.status(500).send(error.message);
  }
}

function deleteLivro(res, res) {
  try {
    if (!id || !Number(id)) {
      return res.status(422).send("ID invalido");
    }

    deletarLivroPorId(id);
    res.send("livro Deletado");
  } catch (error) {
    res.status(500).send(error.message);
  }
}
module.exports = {
  getLivros,
  getLivro,
  postLivro,
  patchLivro,
  deleteLivro,
};
