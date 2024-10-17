import { Request, Response, NextFunction } from 'express';

export const validateUserId = async (req: Request, res: Response, next: NextFunction) => {
    const userId = req.params.id;

    if (!isNaN(Number(userId))) {
        next();
    } else {
        res.status(400).json({ error: 'El ID de usuario no es válido' });
    }
};