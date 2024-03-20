import orderItemsService from "../../services/OrderItems/order-items-service"
import { Request, Response } from 'express'

class OrderItemsController {
    async getOrderItems(req: Request, res: Response) {
        try {
            const orderItems = await orderItemsService.getOrderItems()

            res.status(200).send(orderItems)
        } catch (error) {
            res.status(500).send({
                info: 'Internal error',
                error: error,
            })
        }
    }

    async getOrderItemsById(req: Request, res: Response) {
        try {
            const id = req.params.id
            const orderItems = await orderItemsService.getOrderItemsById(id)

            res.status(200).send(orderItems)
        } catch (error) {
            res.status(500).send({
                info: 'Internal error',
                error: error,
            })
        }
    }

    async createOrderItems(req: Request, res: Response) {
        try {
            const { order_id, product_id, quantity, unitary_price } = req.body
            const orderItems = await orderItemsService.createOrderItems(order_id, product_id, quantity, unitary_price)

            res.status(201).send(orderItems)
        }   catch (error) {
            res.status(500).send({
                info: 'Internal error',
                error: error,
            })
        }
    }

    async updateOrderItems(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id)
            const { order_id, product_id, quantity, unitary_price } = req.body
            const orderItems = await orderItemsService.updateOrderItems(id, order_id, product_id, quantity, unitary_price)

            res.status(200).send(orderItems)
        }   catch (error) {
            res.status(500).send({
                info: 'Internal error',
                error: error,
            })
        }
    }

    async deleteOrderItems(req: Request, res: Response) {
        try {
            const id = req.params.id
            const orderItems = await orderItemsService.deleteOrderItems(id)

            res.status(200).send(orderItems)
        } catch (error) {
            res.status(500).send({
                info: 'Internal error',
                error: error,
            })
        }
    }

    async getOrderItemsByOrderId(req: Request, res: Response) {
        try {
            const order_id = parseInt(req.params.order_id)
            const orderItems = await orderItemsService.getOrderItemsByOrderId(order_id)

            res.status(200).send(orderItems)
        } catch (error) {
            res.status(500).send({
                info: 'Internal error',
                error: error,
            })
        }
    }
}

export default new OrderItemsController()