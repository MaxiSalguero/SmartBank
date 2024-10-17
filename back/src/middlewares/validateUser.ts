import { Request, Response, NextFunction } from 'express';

export const validateUser = async (req: Request, res: Response, next: NextFunction) => {
    const { name, email, birthdate, dni, username, password } = req.body

    console.log("Received data:", { name, email, birthdate, dni, username, password });

    if([ name, email, birthdate, dni, username, password ].every(Boolean)) {
        next()
    } else {
        res.status(400).json({ error: "Faltan datos por completar" });
    }
}