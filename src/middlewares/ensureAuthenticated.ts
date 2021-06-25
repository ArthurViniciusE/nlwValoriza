import { Request, Response, NextFunction} from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}


export function ensureAuthenticated(request: Request, response: Response, next:NextFunction){

    // Receber o token;
    const authToken = request.headers.authorization
    
    // Validar se o token está preenchido;
    if(!authToken){
        return response.status(401).end();
    }

    const [,token] = authToken.split(" ");

    // Validar se o token é válido;
   try {
     const { sub } =  verify(token, "e1ca2dd3e4dd8fd1d358f2d7934a0458") as IPayload;
     
     // Recuperar informaçãoes do usuário;
     request.user_id = sub;

     return next();
   } catch (err) {
     return response.status(401).end();
   }


    
    


    

}
