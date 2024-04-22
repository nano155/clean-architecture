


export class CartController{
    constructor(cartService){
        this.cartService = cartService
    }

    getCartById = (async (req, res) => {
        try {
            const id = req.params.id
            const getCarts = await this.cartService.getCartById(id)
            res.send(getCarts)
        } catch (error) {
            res.status(404).json({ message: error.message })
        }
    })
    
    createCart = ( async (req, res) => {
        try {
            const cart = await this.cartService.createCart()
            res.send({ message: 'cart creado exitosamente!!', payload: cart })
        } catch (error) {
            res.json({ message: error.message })
        }
    })
    
    addProductsToCart = ( async (req, res) => {
        try {
            const cid = req.params.cid
            const pid = req.params.pid
            const productoAgregado = await this.cartService.addProductsToCart(cid, pid)
            res.send(productoAgregado)
        } catch (error) {
            res.status(500).json({message : error.message})
        }
    
    })
    
    deleteProductToCart = ( async (req, res)=>{
        try {
            const cid = req.params.cid
            const pid = req.params.pid
            const productoBorrado = await this.cartService.deleteProduct(cid, pid)
            res.send(productoBorrado)  
        } catch (error) {
            res.status(500).json({message : error.message})
        }
    })
    deleteAllProduct = ( async (req, res)=>{
        try {
            const cid = req.params.cid
            const productosBorrado = await this.cartService.deleteAllProduct(cid)
            res.send(productosBorrado)  
        } catch (error) {
            res.status(500).json({message : error.message})
        }
    })
    updateCart = ( async (req, res)=>{
        try {
            const cid = req.params.cid
            const products = req.body
            const cartUpdate = await this.cartService.updateCart(cid, products)
            res.send(cartUpdate)
        } catch (error) {
            res.status(500).json({message : error.message})
        }
    })
    updateProductQuantity = ( async (req, res)=>{
        try {
            const cid = req.params.cid
            const pid = req.params.pid
            const {quantity} = req.body
            const productoActualizado = await this.cartService.updateProductQuantity(cid, pid, quantity)
            res.send(productoActualizado)  
        } catch (error) {
            res.status(500).json({message : error.message})
        }
    
    })
}