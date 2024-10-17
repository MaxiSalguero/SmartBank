import { Request, Response, NextFunction } from 'express';

export const validateAppointment = async (req: Request, res: Response, next: NextFunction) => {
    const { date, time, userId } = req.body

    if([ date, time, userId ].every(Boolean)) {
        next()
    } else {
        res.status(400).json({ error: "Faltan datos por completar" });
    }
}