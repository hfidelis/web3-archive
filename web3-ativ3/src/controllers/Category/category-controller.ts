import categoryService from '../../services/Category/category-service'
import { Request, Response } from 'express'

class CategoryController {
    async getCategories(req: Request, res: Response) {
        try {
            const categories = await categoryService.getCategories()

            res.status(200).send(categories)
        } catch (error) {
            res.status(500).send({
                info: 'Internal error',
                error: error,
            })
        }
    }

    async getCategoryById(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id)
            const category = await categoryService.getCategoryById(id)

            res.status(200).send(category)
        } catch (error) {
            res.status(500).send({
                info: 'Internal error',
                error: error,
            })
        }
    }

    async createCategory(req: Request, res: Response) {
        try {
            const { name, description } = req.body
            const category = await categoryService.createCategory(name, description)

            res.status(201).send(category)
        }   catch (error) {
            res.status(500).send({
                info: 'Internal error',
                error: error,
            })
        }
    }

    async updateCategory(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id)
            const { name, description } = req.body
            const category = await categoryService.updateCategory(id, name, description)

            res.status(200).send(category)
        }   catch (error) {
            res.status(500).send({
                info: 'Internal error',
                error: error,
            })
        }
    }

    async deleteCategory(req: Request, res: Response) {
        try {
            const id = req.params.id
            const category = await categoryService.deleteCategory(id)

            res.status(200).send(category)
        } catch (error) {
            res.status(500).send({
                info: 'Internal error',
                error: error,
            })
        }
    }
}

export default new CategoryController()