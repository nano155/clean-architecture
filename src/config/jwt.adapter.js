import jwt from "jsonwebtoken";
import { envs } from "./envs.js";





export class JwtAdapter {


    static async generateToken(payload, duration = '4h') {
        return new Promise((resolve) => {
            jwt.sign(

                payload
                , envs.PRIVATE_KEY,
                {
                    expiresIn: duration
                },
                (err, token) => {
                    if (err) return resolve(err);
                    resolve(token)
                })
        })
    }

    static async verifyToken(token) {
        return new Promise(resolve =>{
            jwt.verify(token, envs.PRIVATE_KEY, (err, decoded) =>{
                if(err) return resolve(null)

                resolve(decoded)
            })
        })
    } 
}