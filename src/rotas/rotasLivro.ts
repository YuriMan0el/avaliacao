import express from 'express';
import { createLivro } from "../controladores/criarLivro";
import { deleteLivro } from "../controladores/deleteLivro";
import { listLivros } from "../controladores/listarLivro";
import { updateLivro } from "../controladores/atualizarLivro";

const router = express.Router();

router.post('/livros/criar', createLivro);
router.put('/livros/atualizar', updateLivro);
router.delete('/livros/delete', deleteLivro);
router.get('/livros/obter', listLivros);

export default router;