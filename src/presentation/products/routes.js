import { Router } from "express";
import { ProductsService } from "../services/mongo/product.service.js";
import { ProductController } from "./controller.js";



export class ProductRoutes{

    static get routes() {
        const router = Router()
        const productService = new ProductsService()
        const productController = new ProductController(productService)

        router.get('/', productController.getProducts)
        router.get('/:id', productController.getProductsById)
        router.post('/', productController.addProducts)
        router.put('/:id', productController.updateProduct)
        router.delete('/:id', productController.deleteProduct)


        return router
    }
}