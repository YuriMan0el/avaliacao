import express from 'express';
import rotasLivros from './rotas/rotasLivro'

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api', rotasLivros);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});