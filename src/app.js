import { envs } from "./config/envs.js"
import { MongoDatabase } from "./data/mongo/mongo.database.js"
import { AppRoutes } from "./presentation/routes.js"
import { Server } from "./presentation/server.js"





(()=>{
    main()
})()


async function main () {
    const server = new Server({
        port: envs.PORT,
        routes: AppRoutes.routes
    })
    

    await MongoDatabase.connect({mongoUrl: envs.MONGO_URL})
    
    server.start()
}