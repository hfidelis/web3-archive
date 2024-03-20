import orderService from '../../services/Order/order-service'
import { Request, Response } from 'express'

class OrderController {
    async getOrders(req: Request, res: Response) {
        try {
            const orders = await orderService.getOrders()

            res.status(200).send(orders)
        } catch (error) {
            res.status(500).send({
                info: 'Internal error',
                error: error,
            })
        }
    }

    async getOrderById(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id)
            const order = await orderService.getOrderById(id)

            res.status(200).send(order)
        } catch (error) {
            res.status(500).send({
                info: 'Internal error',
                error: error,
            })
        }
    }

    async createOrder(req: Request, res: Response) {
        try {
            const { client_id, order_date, status } = req.body
            const order = await orderService.createOrder(client_id, order_date, status)

            res.status(201).send(order)
        }   catch (error) {
            res.status(500).send({
                info: 'Internal error',
                error: error,
            })
        }
    }

    async updateOrder(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id)
            const { client_id, order_date, status } = req.body
            const order = await orderService.updateOrder(id, client_id, order_date, status)

            res.status(200).send(order)
        }   catch (error) {
            res.status(500).send({
                info: 'Internal error',
                error: error,
            })
        }
    }

    async getOrderFromDateRange(req: Request, res: Response) {
        try {
            const start_date = new Date(req.params.start_date)
            const end_date = new Date(req.params.end_date)
            const orders = await orderService.getOrderFromDateRange(start_date, end_date)

            res.status(200).send(orders)
        } catch (error) {
            res.status(500).send({
                info: 'Internal error',
                error: error,
            })
        }
    }

    async getOrderFromClient(req: Request, res: Response) {
        try {
            const client_id = parseInt(req.params.client_id)
            const orders = await orderService.getOrderFromClient(client_id)

            res.status(200).send(orders)
        } catch (error) {
            res.status(500).send({
                info: 'Internal error',
                error: error,
            })
        }
    }

    async deleteOrder(req: Request, res: Response) {
        try {
            const id = req.params.id
            const order = await orderService.deleteOrder(id)

            res.status(200).send(order)
        } catch (error) {
            res.status(500).send({
                info: 'Internal error',
                error: error,
            })
        }
    }
}

export default new OrderController()