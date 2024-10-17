import { Request, Response, NextFunction } from 'express';

export const validateCredential = async (req: Request, res: Response, next: NextFunction) => {
    const { username, password } = req.body

    console.log(`Estos datos recibo del body: user: ${username}, password: ${password}`);
    
    if([ username, password ].every(Boolean)) {
        next()
    } else {
        res.status(400).json({ error: "Faltan datos por completar" });
    }
}