import { getCustomRepository } from "typeorm"

import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"

import { UsersRepositories } from "../repositories/UsersRepositories"



interface IAuthenticateRequest {
    email:string;
    password: string;
}

class AuthenticateUserService {

    async execute({email, password}: IAuthenticateRequest) {
        const usersRepositories = getCustomRepository(UsersRepositories);
        
        //Verificar se email existe;
        const user = await usersRepositories.findOne({
            email
        });

        if(!user){
            throw new Error("Email/Password incorrect")
        }

        // Verificar se a senha está correta;
        const passwordMatch = await compare(password, user.password)

        if(!passwordMatch){
            throw new Error("Email/Password incorrect")
        }

        // Gerar token;
        const token = sign(
            {
                email: user.email
            }, 
                "e1ca2dd3e4dd8fd1d358f2d7934a0458", 
            {
                subject: user.id,
                expiresIn: "1d"
            }
        );

        return token;

    }

}

export {AuthenticateUserService}