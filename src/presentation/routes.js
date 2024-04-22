import { Router } from "express";
import { CartRoutes } from "./carts/routes.js";
import { ProductRoutes } from "./products/routes.js";
import { UserRoutes } from "./users/routes.js";



export class AppRoutes {

    static get routes(){
        const router = Router()
    

        router.use('/api/carts', CartRoutes.routes)
        router.use('/api/products', ProductRoutes.routes)
        router.use('/api/sessions', UserRoutes.routes)



        return router
    }
}