import { UserModel } from "../config/data-source";
import CredentialDto from "../dtos/Credential.Dto";
import UserDto from "../dtos/User.Dto";
import { User } from "../entities/User";
import { createCredentialService, getCredentialById, validateCredentialService } from "./credentialService";


export const createUserService = async (userData: UserDto): Promise<User> => {
	const newUser = await UserModel.create(userData)

    const id: number = await createCredentialService(userData)
    
    const newCredential = await getCredentialById(id)
    newUser.credential = newCredential;
    await UserModel.save(newUser)

    return newUser
}

export const getAllUsersService = async(): Promise<User[]> => {
	const users = await UserModel.find({  
        relations:{ 
            credential:true, 
            appointments:true
        }})
    if (users.length > 0){
        return users
    } else {
        throw Error("No se encontraron turnos")
    }
}

export const getUserService = async(userId : number): Promise<User> => {
    const user = await UserModel.findOne({
        where: { id: userId },
        relations: ["appointments"]
    });
    if(user) return user
    else throw Error("Non-existent user")
}

export const loginUserService = async(loginData:CredentialDto) => {
    try {
        const userLogin = await validateCredentialService(loginData);
        return userLogin
    } catch (error) {
        throw Error("Usuario inexistente o contraseña incorrecta")
    }

}