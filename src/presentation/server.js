import cookieParser from 'cookie-parser';
import express from 'express'


export class Server {
    #app = express()
    #port;
    #routes;

    constructor(options){
        const {port, routes} = options
        this.#port = port
        this.#routes= routes
    }

    start(){

        this.#app.use(express.json())
        this.#app.use(express.urlencoded({ extended: true }))

        this.#app.use(cookieParser())
        this.#app.use(this.#routes)


        this.#app.listen(this.#port, () =>{
            console.log(`listen port ${this.#port}` )
        })
    }

}