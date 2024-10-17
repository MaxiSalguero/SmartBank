import { Request, Response } from "express";
import { createUserService, getAllUsersService, getUserService, loginUserService } from "../services/usersService";
import { User } from "../entities/User";
import { UserModel } from "../config/data-source";

export const getAllUsers = async (req:Request, res:Response) => {
    try {
        const users = await getAllUsersService();
        res.status(200).json(users)
    } catch (error) {
        res.status(404).json({error: "No existen usuarios aun"})
    }
}

export const getUser = async (req:Request, res:Response) => {
    const userId = req.params.id;
    try {
        const user = await getUserService( Number(userId) );
        res.status(200).json(user);      
    } catch (error) {
        res.status(404).json({ error: 'User not found' })
    }
}

export const createUser = async (req:Request, res:Response) => {
    const {name, email, birthdate, dni, username, password} = req.body;
    const newUser:User = await createUserService({name, email, birthdate, dni, username, password})
    res.status(201).json(newUser)
}

export const loginUser = async (req:Request, res:Response) => {
    const { username, password } = req.body;
    try {
        const loginUser = await loginUserService({username, password})

        const userlogged = await UserModel.findOne({ 
            where: { id: loginUser},
            relations: { appointments:true }
        })
        
        res.status(200).json({
            loggin: true,
            user: userlogged
        })
    } catch (error) {
        res.status(400).json({ error: "Error de autenticación. Has ingresado usuario y/o contraseña incorrectos"})
    }
}