import { Router } from "express";
import { CartsService } from "../services/mongo/cart.service.js";
import { CartController } from "./controllers.js";


export class CartRoutes{

    static get routes() {
        const router = Router()
        const cartService = new CartsService()
        const cartController = new CartController(cartService)

        router.get('/:id', cartController.getCartById)
        router.post('/', cartController.createCart)
        router.post('/:cid/products/:pid', cartController.addProductsToCart)
        router.delete('/:cid/products/:pid', cartController.deleteProductToCart)
        router.delete('/:cid', cartController.deleteAllProduct)
        router.put('/:cid', cartController.updateCart)
        router.put('/:cid/products/:pid', cartController.updateProductQuantity)

        return router
    }
}