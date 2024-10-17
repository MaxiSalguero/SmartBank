import { CredentialModel } from "../config/data-source";
import CredentialDto from "../dtos/Credential.Dto";
import { Credential } from "../entities/Credential";

export const createCredentialService = async (credentialData: CredentialDto): Promise<number> => {
    const newCredential:Credential = await CredentialModel.create(credentialData)
    await CredentialModel.save(newCredential)

    return newCredential.id
}

export const validateCredentialService = async (credentialData: CredentialDto): Promise<number | undefined> => {
    const { username, password } = credentialData
    
    const credentials = await CredentialModel.find()
    const hasUserName = credentials.some(credential => credential.hasOwnProperty('username') && credential.username === username); 

    if(hasUserName){
        const credentialToUpdate = credentials.find(credential => credential.hasOwnProperty('username') && credential.username === username);
        if(credentialToUpdate?.password === password) {
            return credentialToUpdate.id
        }
        else{
            throw Error("Email o password incorrectos")
        }
    }
    else{
        throw Error("Email o password incorrectos")
    }
}

export const getCredentialById = async(credentialId : number):Promise<Credential> => {
    const credential = await CredentialModel.findOneBy({
        id:credentialId
    })
    if(credential) {
        return credential
    } else {
        throw Error("Id de credencial inexistente")
    } 

}
