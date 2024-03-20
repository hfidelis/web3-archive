import productService from "../../services/Product/product-service"
import { Request, Response } from 'express'

class ProductController {
    async getProducts(req: Request, res: Response) {
        try {
            const products = await productService.getProducts()

            res.status(200).send(products)
        } catch (error) {
            res.status(500).send({
                info: 'Internal error',
                error: error,
            })
        }
    }

    async getProductById(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id)
            const product = await productService.getProductById(id)

            res.status(200).send(product)
        } catch (error) {
            res.status(500).send({
                info: 'Internal error',
                error: error,
            })
        }
    }

    async createProduct(req: Request, res: Response) {
        try {
            const { name, description, price, category_id, avaliable } = req.body
            const product = await productService.createProduct(name, description, price, category_id, avaliable)

            res.status(201).send(product)
        }   catch (error) {
            res.status(500).send({
                info: 'Internal error',
                error: error,
            })
        }
    }

    async updateProduct(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id)
            const { name, description, price, category_id, avaliable } = req.body
            const product = await productService.updateProduct(id, name, description, price, category_id, avaliable)

            res.status(200).send(product)
        }   catch (error) {
            res.status(500).send({
                info: 'Internal error',
                error: error,
            })
        }
    }

    async getProductsByCategory(req: Request, res: Response) {
        try {
            const category_id = parseInt(req.params.category_id)
            const products = await productService.getProductsByCategory(category_id)

            res.status(200).send(products)
        } catch (error) {
            res.status(500).send({
                info: 'Internal error',
                error: error,
            })
        }
    }

    async deleteProduct(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id)
            await productService.deleteProduct(id)

            res.status(200).send()
        } catch (error) {
            res.status(500).send({
                info: 'Internal error',
                error: error,
            })
        }
    }

    async getProductsByAvaliable(req: Request, res: Response) {
        try {
            const avaliable = req.params.avaliable.toLowerCase() === 'true'
            const products = await productService.getProductsByAvaliable(avaliable)

            res.status(200).send(products)
        } catch (error) {
            res.status(500).send({
                info: 'Internal error',
                error: error,
            })
        }
    }
}

export default new ProductController()