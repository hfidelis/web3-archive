import { dbConnection } from "../../db"

class ClientService {
    async getClients() {
        try {
            const [ results, fields ] = await dbConnection.promise().query('SELECT * FROM Clientes')

            return results
        } catch (error) {
            throw error
        }
    }

    async getClientById(id: number) {
        try {
            const [ results, fields ] = await dbConnection.promise().query('SELECT * FROM Clientes WHERE id = ?', [id])

            return results
        } catch (error) {
            throw error
        }
    }

    async createClient(
        name: string,
        email: string,
        phone: string,
        address: string
    ) {
        try {
            const sqlQuery = 
                'INSERT INTO Clientes (name, email, phone, address) VALUES (?, ?, ?, ?)'
            const [ results, fields ] = await dbConnection.promise()
                                                            .query(
                                                                sqlQuery,
                                                                [name, email, phone, address]
                                                            )

            return results
        }   catch (error) {
            throw error
        }
    }

    async updateClient(
        id: number,
        name: string,
        email: string,
        phone: string,
        address: string
    ) {
        try {
            const sqlQuery = 
                'UPDATE Clientes SET name = ?, email = ?, phone = ?, address = ? WHERE id = ?'
            const [ results, fields ] = await dbConnection.promise()
                                                            .query(
                                                                sqlQuery,
                                                                [name, email, phone, address, id]
                                                            )

            return results
        }   catch (error) {
            throw error
        }
    }

    async deleteClient(id: number) {
        try {
            const sqlQuery = 'DELETE FROM Clientes WHERE id = ?'
            const [ results, fields ] = await dbConnection.promise().query(sqlQuery, [id])

            return results
        } catch (error) {
            throw error
        }
    }
}

export default new ClientService()