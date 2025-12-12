const rotaDeLivros = require("./routes/routes.js");
const express = require("express");

const app = express();
app.use(express.json());

const port = 8000;

app.use("/");

app.listen(port, () => {
  console.log(`Porta:${port} funcionando corretamente`);
});
