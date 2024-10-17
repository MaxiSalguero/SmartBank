import { Request, Response, NextFunction } from 'express';

export const validateAppointId = async (req: Request, res: Response, next: NextFunction) => {
    const appointId = req.params.id;

    if (!isNaN(Number(appointId))) {
        next();
    } else {
        res.status(400).json({ error: 'El ID del turno no es válido' });
    }
};