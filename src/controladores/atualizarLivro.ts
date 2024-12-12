import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

export const updateLivro = async (req: Request, res: Response) => {
    const  id  = req.query.id;
    const { titulo, autor, anoPublicacao, genero } = req.body;
  
    try {
      const livroAtualizado = await prisma.livro.update({
        where: { id: Number(id) },
        data: { titulo, autor, anoPublicacao, genero },
      });
      res.json(livroAtualizado);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar o livro.' });
    }
  };
  