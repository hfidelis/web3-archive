import { dbConnection } from "../../db"

class OrderService {
    async getOrders() {
        try {
            const [ results, fields ] = await dbConnection.promise().query('SELECT * FROM Pedidos')

            return results
        } catch (error) {
            throw error
        }
    }

    async getOrderById(id: number) {
        try {
            const [ results, fields ] = await dbConnection.promise().query('SELECT * FROM Pedidos WHERE id = ?', [id])

            return results
        } catch (error) {
            throw error
        }
    }

    async createOrder(
        client_id: number,
        order_date: Date,
        status: string
    ) {
        try {
            const sqlQuery = 
                'INSERT INTO Pedidos (client_id, order_date, status) VALUES (?, ?, ?)'
            const [ results, fields ] = await dbConnection.promise()
                                                            .query(
                                                                sqlQuery,
                                                                [client_id, order_date, status]
                                                            )

            return results
        }   catch (error) {
            throw error
        }
    }

    async updateOrder(
        id: number,
        client_id: number,
        order_date: Date,
        status: string
    ) {
        try {
            const sqlQuery = 
                'UPDATE Pedidos SET client_id = ?, order_date = ?, status = ? WHERE id = ?'
            const [ results, fields ] = await dbConnection.promise()
                                                            .query(
                                                                sqlQuery,
                                                                [client_id, order_date, status, id]
                                                            )

            return results
        }   catch (error) {
            throw error
        }
    }

    async deleteOrder(id: string) {
        try {
            const sqlQuery = 'DELETE FROM Pedidos WHERE id = ?'
            const [ results, fields ] = await dbConnection.promise().query(sqlQuery, [id])

            return results
        } catch (error) {
            throw error
        }
    }

    async getOrderFromDateRange(
        startDate: Date,
        endDate: Date
    ) {
        try {
            const [ results, fields ] = await dbConnection.promise().query('SELECT * FROM Pedidos WHERE order_date BETWEEN ? AND ?', [startDate, endDate])

            return results
        } catch (error) {
            throw error
        }
    }

    async getOrderFromClient(id: number) {
        try {
            const [ results, fields ] = await dbConnection.promise().query('SELECT * FROM Pedidos WHERE client_id = ?', [id])

            return results
        } catch (error) {
            throw error
        }
    }
}

export default new OrderService()