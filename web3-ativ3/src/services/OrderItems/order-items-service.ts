import { dbConnection } from "../../db"

class OrderItemsService {
    async getOrderItems() {
        try {
            const [ results, fields ] = await dbConnection.promise().query('SELECT * FROM ItensPedido')

            return results
        } catch (error) {
            throw error
        }
    }

    async getOrderItemsById(id: string) {
        try {
            const [ results, fields ] = await dbConnection.promise().query('SELECT * FROM ItensPedido WHERE id = ?', [id])

            return results
        } catch (error) {
            throw error
        }
    }

    async createOrderItems(
        order_id: number,
        product_id: number,
        quantity: number,
        unitary_price: number,
    ) {
        try {
            const sqlQuery = 
                'INSERT INTO ItensPedido (order_id, product_id, quantity, unitary_price) VALUES (?, ?, ?, ?)'
            const [ results, fields ] = await dbConnection.promise()
                                                            .query(
                                                                sqlQuery,
                                                                [order_id, product_id, quantity, unitary_price]
                                                            )

            return results
        }   catch (error) {
            throw error
        }
    }

    async updateOrderItems(
        id: number,
        order_id: number,
        product_id: number,
        quantity: number,
        unitary_price: number,
    ) {
        try {
            const sqlQuery = 
                'UPDATE ItensPedido SET order_id = ?, product_id = ?, quantity = ?, unitary_price = ? WHERE id = ?'
            const [ results, fields ] = await dbConnection.promise()
                                                            .query(
                                                                sqlQuery,
                                                                [order_id, product_id, quantity, unitary_price, id]
                                                            )

            return results
        }   catch (error) {
            throw error
        }
    }

    async deleteOrderItems(id: string) {
        try {
            const sqlQuery = 'DELETE FROM ItensPedido WHERE id = ?'
            const [ results, fields ] = await dbConnection.promise().query(sqlQuery, [id])

            return results
        } catch (error) {
            throw error
        }
    }

    async getOrderItemsByOrderId(order_id: number) {
        try {
            const [ results, fields ] = await dbConnection.promise().query('SELECT * FROM ItensPedido WHERE order_id = ?', [order_id])

            return results
        } catch (error) {
            throw error
        }
    }
}

export default new OrderItemsService()