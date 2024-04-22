


export class ProductController {
    constructor(productService) {
        this.productService = productService
    }

    getProducts = ( async (req, res) => {
        try {
            const objeto = {
                sort: req.query.sort,
                filter: req.query.filter,
                page: (req.query.page) ? +req.query.page : 1,
                limit: (req.query.limit) ? +req.query.limit : 10
            }
            const productos = await this.productService.getProducts(objeto)
            res.send({ message: 'Listado de productos', payload: productos })
        } catch (error) {
            res.status(400).send(error)
        }
    })

    getProductsById = ( async (req, res) => {
        try {
            const id = req.params.id
            const product = await this.productService.getProductsById(id)
            res.send({ message: `producto con id ${id}`, payload: product })
        } catch (error) {
            res.status(404).json({ message: error.message })
        }
    })

    addProducts = ( async (req, res) => {
        try {
            const producto = req.body;
            await this.productService.addProducts(producto);
            res.send({ message: 'Producto agregado exitosamente', payload: producto });
        } catch (error) {
            res.status(400).json({ message: error });
        }
    });

    updateProduct = ( async (req, res) => {
        try {
            const id = req.params.id
            const producto = req.body
            const productoActualizado = await this.productService.updateProduct(id, producto)
            res.send({ message: 'Producto actualizado exitosamente', payload: productoActualizado });
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    })

    deleteProduct = ( async (req, res) => {
        const id = req.params.id
        try {
            const productoBorrado = await this.productService.deleteProduct(id)
            res.send({ message: 'Producto eliminado exitosamente', payload: productoBorrado });
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    })
}