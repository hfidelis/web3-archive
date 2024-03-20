import { dbConnection } from "../../db"

class CategoryService {
    async getCategories() {
        try {
            const [ results, fields ] = await dbConnection.promise().query('SELECT * FROM Categorias')

            return results
        } catch (error) {
            throw error
        }
    }

    async getCategoryById(id: number) {
        try {
            const [ results, fields ] = await dbConnection.promise().query('SELECT * FROM Categorias WHERE id = ?', [id])

            return results
        } catch (error) {
            throw error
        }
    }

    async createCategory(name: string, description: string) {
        try {
            const sqlQuery = 
                'INSERT INTO Categorias (name, description) VALUES (?, ?)'
            const [ results, fields ] = await dbConnection.promise()
                                                            .query(
                                                                sqlQuery,
                                                                [name, description]
                                                            )

            return results
        }   catch (error) {
            throw error
        }
    }

    async updateCategory(
        id: number,
        name: string,
        description: string
    ) {
        try {
            const sqlQuery = 'UPDATE Categorias SET name = ?, description = ? WHERE id = ?'
            const [ results, fields ] = await dbConnection.promise().query(sqlQuery, [name, description, id])

            return results
        }   catch (error) {
            throw error
        }
    }

    async deleteCategory(id: string) {
        try {
            const sqlQuery = 'DELETE FROM Categorias WHERE id = ?'
            const [ results, fields ] = await dbConnection.promise().query(sqlQuery, [id])

            return results
        } catch (error) {
            throw error
        }
    }
}

export default new CategoryService()