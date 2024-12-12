import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

export const deleteLivro = async (req: Request, res: Response) => {
    const  id  = req.query.id;
  
    try {
      await prisma.livro.delete({ where: { id: Number(id) } });
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'Erro ao excluir o livro.' });
    }
  };
  