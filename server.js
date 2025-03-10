<<<<<<< HEAD
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
=======
const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const { swaggerUi, specs } = require("./swagger");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(routes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
    console.log(`📄 Documentação disponível em http://localhost:${PORT}/api-docs`);
});
>>>>>>> ebeedc8 (Atividades avaliativa parte 1 e 2)
