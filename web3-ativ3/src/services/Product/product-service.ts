import { dbConnection } from "../../db"

class ProductService {
    async getProducts() {
        try {
            const [ results, fields ] = await dbConnection.promise().query('SELECT * FROM Produtos')

            return results
        } catch (error) {
            throw error
        }
    }

    async getProductById(id: number) {
        try {
            const [ results, fields ] = await dbConnection.promise().query('SELECT * FROM Produtos WHERE id = ?', [id])

            return results
        } catch (error) {
            throw error
        }
    }

    async createProduct(
        name: string,
        description: string,
        price: number,
        category_id: number,
        avaliable: boolean
    ) {
        try {
            const sqlQuery = 
                'INSERT INTO Produtos (name, description, price, category_id, avaliable) VALUES (?, ?, ?, ?, ?)'
            const [ results, fields ] = await dbConnection.promise()
                                                            .query(
                                                                sqlQuery,
                                                                [name, description, price, category_id, avaliable]
                                                            )

            return results
        }   catch (error) {
            throw error
        }
    }

    async updateProduct(
        id: number,
        name: string,
        description: string,
        price: number,
        category_id: number,
        avaliable: boolean
    ) {
        try {
            const sqlQuery = 
                'UPDATE Produtos SET name = ?, description = ?, price = ?, category_id = ?, avaliable = ? WHERE id = ?'
            const [ results, fields ] = await dbConnection.promise()
                                                            .query(
                                                                sqlQuery,
                                                                [name, description, price, category_id, avaliable, id]
                                                            )

            return results
        }   catch (error) {
            throw error
        }
    }

    async deleteProduct(id: number) {
        try {
            const sqlQuery = 'DELETE FROM Produtos WHERE id = ?'
            const [ results, fields ] = await dbConnection.promise().query(sqlQuery, [id])

            return results
        } catch (error) {
            throw error
        }
    }

    async getProductsByCategory(category_id: number) {
        try {
            const sqlQuery = 'SELECT * FROM Produtos WHERE category_id = ?'
            const [ results, fields ] = await dbConnection.promise().query(sqlQuery, [category_id])

            return results
        } catch (error) {
            throw error
        }
    }

    async getProductsByAvaliable(avaliable: boolean) {
        try {
            const sqlQuery = 'SELECT * FROM Produtos WHERE avaliable = ?'
            const [ results, fields ] = await dbConnection.promise().query(sqlQuery, [avaliable])

            return results
        } catch (error) {
            throw error
        }
    }
}

export default new ProductService()